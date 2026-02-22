import { mkdir, access, writeFile } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";

const SOURCE_URL = "https://www.chicahondenschool.nl/foto-s-en-recensies";
const OUTPUT_DIR = path.join(process.cwd(), "public", "images", "reviews");
const GENERATED_DATA_PATH = path.join(process.cwd(), "src", "data", "reviewImages.generated.ts");

const decodeHtml = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(Number.parseInt(hex, 16)));

const sanitizeAlt = (value) => {
  const decoded = decodeHtml(value).trim();
  if (!decoded) {
    return "Review foto";
  }
  return decoded.replace(/\s+/g, " ");
};

const ensureDir = async (dirPath) => {
  await mkdir(dirPath, { recursive: true });
};

const exists = async (filePath) => {
  try {
    await access(filePath, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const extractAlbumImages = (html) => {
  const pattern =
    /id="jw-album-image-[^"]+"[\s\S]{0,800}?href="([^"]+)"[\s\S]{0,500}?data-caption="([^"]*)"/g;
  const results = [];
  const seen = new Set();
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const rawUrl = decodeHtml(match[1]);
    const normalizedUrl = rawUrl.split("?")[0];
    if (!normalizedUrl || seen.has(normalizedUrl)) {
      continue;
    }
    seen.add(normalizedUrl);
    results.push({
      sourceUrl: normalizedUrl,
      alt: sanitizeAlt(match[2]),
    });
  }

  return results;
};

const fileExtensionFor = (url) => {
  const ext = path.extname(new URL(url).pathname).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".webp") {
    return ext === ".jpeg" ? ".jpg" : ext;
  }
  return ".jpg";
};

const generateDataFile = (items) => {
  const lines = [
    "export interface GeneratedReviewImage {",
    "  src: string;",
    "  alt: string;",
    "}",
    "",
    "export const generatedReviewImages: GeneratedReviewImage[] = [",
  ];

  for (const item of items) {
    lines.push(`  { src: "${item.localPath}", alt: "${item.alt.replace(/"/g, '\\"')}" },`);
  }

  lines.push("];", "");
  return lines.join("\n");
};

const run = async () => {
  await ensureDir(OUTPUT_DIR);

  const response = await fetch(SOURCE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch source page: ${response.status} ${response.statusText}`);
  }
  const html = await response.text();
  const images = extractAlbumImages(html);

  if (images.length === 0) {
    throw new Error("No album images found on source page.");
  }

  const downloaded = [];

  for (const [index, item] of images.entries()) {
    const ext = fileExtensionFor(item.sourceUrl);
    const filename = `reviews-${String(index + 1).padStart(3, "0")}${ext}`;
    const outputPath = path.join(OUTPUT_DIR, filename);
    const localPath = `/images/reviews/${filename}`;

    if (!(await exists(outputPath))) {
      const imageResponse = await fetch(item.sourceUrl);
      if (!imageResponse.ok) {
        throw new Error(`Failed downloading ${item.sourceUrl}: ${imageResponse.status}`);
      }
      const arrayBuffer = await imageResponse.arrayBuffer();
      await writeFile(outputPath, Buffer.from(arrayBuffer));
    }

    downloaded.push({ localPath, alt: item.alt });
  }

  const generated = generateDataFile(downloaded);
  await writeFile(GENERATED_DATA_PATH, generated, "utf8");

  console.log(
    `Synced ${downloaded.length} review images to ${OUTPUT_DIR} and wrote ${GENERATED_DATA_PATH}`,
  );
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
