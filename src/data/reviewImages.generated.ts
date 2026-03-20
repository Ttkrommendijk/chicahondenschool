import { readdirSync } from "node:fs";
import { extname } from "node:path";
import { deepBilingual } from "./l10n";

export interface GeneratedReviewImage {
  src: string;
  alt: string;
}

const reviewImagesDirectory = new URL(
  "../../public/images/reviews/",
  import.meta.url,
);
const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);

const reviewImageFiles = readdirSync(reviewImagesDirectory, {
  withFileTypes: true,
})
  .filter(
    (entry) =>
      entry.isFile() &&
      supportedExtensions.has(extname(entry.name).toLowerCase()),
  )
  .map((entry) => entry.name)
  .sort((left, right) =>
    left.localeCompare(right, undefined, { numeric: true }),
  );

const buildAlt = (filename: string): string => {
  const baseName = filename.replace(/\.[^.]+$/, "");
  const imageId = baseName.replace(/^reviews-/, "");
  return `Reviewfoto ${imageId} van ChiCa Hondenschool`;
};

export const generatedReviewImages: GeneratedReviewImage[] =
  reviewImageFiles.map((filename) => ({
    src: `/images/reviews/${filename}`,
    alt: buildAlt(filename),
  }));

export const generatedReviewImagesI18n = deepBilingual(generatedReviewImages);
