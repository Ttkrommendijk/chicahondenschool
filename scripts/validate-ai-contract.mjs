import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, "src", "pages");
const COMPONENTS_DIR = path.join(ROOT, "src", "components");

const canonicalPages = [
  "src/pages/index.astro",
  "src/pages/diensten/hondenschool/index.astro",
  "src/pages/diensten/oppas-uitlaatservice/index.astro",
  "src/pages/reviews/index.astro",
  "src/pages/over/index.astro",
  "src/pages/contact/index.astro",
  "src/pages/algemene-voorwaarden/index.astro",
  "src/pages/privacy/index.astro",
];

const pageToDataMap = {
  "src/pages/index.astro": "src/data/home.ts",
  "src/pages/diensten/hondenschool/index.astro":
    "src/data/diensten/hondenschool.ts",
  "src/pages/diensten/oppas-uitlaatservice/index.astro":
    "src/data/diensten/oppas-uitlaatservice.ts",
  "src/pages/reviews/index.astro": "src/data/reviews.ts",
  "src/pages/over/index.astro": "src/data/over.ts",
  "src/pages/contact/index.astro": "src/data/contact.ts",
  "src/pages/algemene-voorwaarden/index.astro":
    "src/data/algemene-voorwaarden.ts",
  "src/pages/privacy/index.astro": "src/data/privacy.ts",
};

const translationRequiredDataFiles = [
  "src/data/home.ts",
  "src/data/contact.ts",
  "src/data/over.ts",
  "src/data/reviews.ts",
  "src/data/diensten/hondenschool.ts",
  "src/data/diensten/oppas-uitlaatservice.ts",
  "src/data/privacy.ts",
  "src/data/algemene-voorwaarden.ts",
  "src/data/ui.ts",
  "src/data/navigation.ts",
];

const mojibakePatternsUtf8View = [
  "\u00e2\u20ac\u201c", // â€“
  "\u00e2\u20ac\u2122", // â€™
  "\u00c3\u00a9", // Ã©
  "\u00c3\u00a4", // Ã¤
];

const mojibakePatternsLatin1View = [
  "\u00e2\u0080\u0093", // â&#128;&#147;
  "\u00e2\u0080\u0099", // â&#128;&#153;
  "\u00c3\u00a9", // Ã©
  "\u00c3\u00a4", // Ã¤
];

const findings = [];

function addFinding(level, ruleId, filePath, message) {
  findings.push({ level, ruleId, filePath, message });
}

async function exists(filePath) {
  try {
    await fs.access(path.join(ROOT, filePath));
    return true;
  } catch {
    return false;
  }
}

async function read(filePath) {
  return fs.readFile(path.join(ROOT, filePath), "utf8");
}

async function walk(dir, predicate = () => true) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full, predicate)));
      continue;
    }
    if (entry.isFile() && predicate(full)) out.push(full);
  }
  return out;
}

function rel(fullPath) {
  return path.relative(ROOT, fullPath).replace(/\\/g, "/");
}

function stripFrontmatter(content) {
  if (!content.startsWith("---")) return content;
  const end = content.indexOf("\n---", 3);
  if (end === -1) return content;
  return content.slice(end + 4);
}

function importRegexForData(dataPath) {
  const suffix = dataPath.replace(/^src\//, "");
  const escaped = suffix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const noExt = escaped.replace(/\\\.ts$/, "");
  return new RegExp(`from\\s+["'][^"']*${noExt}(?:\\.ts)?["']`, "i");
}

function detectSpacingSystems(content) {
  const systems = [];
  if (/<Section\b[^>]*variant\s*=/.test(content))
    systems.push("section-component");
  if (/<section\b[^>]*class\s*=\s*["'][^"']*\bsection\b/.test(content))
    systems.push("global-section-class");
  if (/<section\b[^>]*class\s*=\s*["'][^"']*\bpy-\d+/.test(content))
    systems.push("inline-py-classes");
  return systems;
}

function detectHardcodedCopySignals(content) {
  const cleaned = content
    .replace(/---[\s\S]*?---/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const textNodes = [...cleaned.matchAll(/>([^<{][^<]{20,})</g)]
    .map((m) => m[1].trim())
    .filter((text) => /[A-Za-z]/.test(text));

  return textNodes.length;
}

function isLikelySystemString(key, value) {
  const infraKeys = new Set([
    "href",
    "src",
    "image",
    "imageSrc",
    "phoneHref",
    "emailHref",
    "bookingUrl",
    "kennismakingUrl",
    "slug",
    "id",
    "icon",
    "kvk",
    "phone",
    "email",
    "author",
    "contextTag",
    "sourceUrl",
  ]);

  if (infraKeys.has(key)) return true;
  if (/^(\/|https?:\/\/|mailto:|tel:)/i.test(value)) return true;
  if (/^\d+([.,]\d+)?$/.test(value)) return true;
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return true;
  return false;
}

async function checkCanonicalRoutes() {
  const astroFiles = await walk(PAGES_DIR, (p) => p.endsWith(".astro"));
  const relAstro = astroFiles.map(rel);
  const allowed = new Set(canonicalPages);

  for (const file of relAstro) {
    if (file.startsWith("src/pages/api/")) continue;
    if (!allowed.has(file)) {
      addFinding(
        "FAIL",
        "route-canonical-only",
        file,
        "Non-canonical page entrypoint gevonden. Verwijder of verplaats naar canonieke route-map.",
      );
    }
  }

  for (const file of canonicalPages) {
    if (!(await exists(file))) {
      addFinding(
        "FAIL",
        "route-canonical-missing",
        file,
        "Canonieke route ontbreekt. Voeg het entrypoint terug toe.",
      );
    }
  }

  const rootAstro = relAstro.filter(
    (f) =>
      /^src\/pages\/[^/]+\.astro$/.test(f) && f !== "src/pages/index.astro",
  );
  for (const file of rootAstro) {
    addFinding(
      "FAIL",
      "route-legacy-root",
      file,
      "Legacy root route gevonden. Alleen src/pages/index.astro is toegestaan op rootniveau.",
    );
  }
}

async function checkHeadings() {
  for (const pagePath of canonicalPages) {
    if (!(await exists(pagePath))) continue;
    const content = stripFrontmatter(await read(pagePath));

    const explicitH1 = (content.match(/<h1\b/gi) || []).length;
    const hasHeroProvider = /<Hero\b/.test(content);
    const hasContentPageLayoutProvider = /<ContentPageLayout\b/.test(content);
    const providerCount =
      (hasHeroProvider ? 1 : 0) + (hasContentPageLayoutProvider ? 1 : 0);
    const h1Count = explicitH1 + providerCount;

    if (h1Count === 0 || h1Count > 1) {
      addFinding(
        "FAIL",
        "heading-h1-count",
        pagePath,
        `Onjuiste H1-heurstiek: ${h1Count} gevonden (expliciet: ${explicitH1}, providers: ${providerCount}). Zorg voor exact 1 H1.`,
      );
    }

    const firstH2 = content.search(/<h2\b/i);
    const firstH3 = content.search(/<h3\b/i);
    if (firstH3 !== -1 && (firstH2 === -1 || firstH3 < firstH2)) {
      addFinding(
        "FAIL",
        "heading-h3-before-h2",
        pagePath,
        "<h3> verschijnt voor de eerste <h2>. Start hierarchie met H2.",
      );
    }
  }
}

async function checkCTAConsistency() {
  const ctaSectionPath = "src/components/CTASection.astro";
  if (!(await exists(ctaSectionPath))) {
    addFinding(
      "FAIL",
      "cta-component-missing",
      ctaSectionPath,
      "CTASection component ontbreekt.",
    );
    return;
  }

  const ctaSection = await read(ctaSectionPath);
  if (!/cta-band-dark/.test(ctaSection)) {
    addFinding(
      "FAIL",
      "cta-dark-enforced",
      ctaSectionPath,
      "CTASection gebruikt geen donkere CTA-band als basis.",
    );
  }

  if (/variant\??\s*:\s*["'][^"']*light|light\s*\|/.test(ctaSection)) {
    addFinding(
      "FAIL",
      "cta-light-variant-exposed",
      ctaSectionPath,
      "Lichte CTA-variant nog exposed in CTASection.",
    );
  }

  const filesToScan = [...canonicalPages, "src/styles/global.css"];
  for (const file of filesToScan) {
    if (!(await exists(file))) continue;
    const content = await read(file);
    const hasLegacyClass =
      /\bcta-band\b(?!-dark)/.test(content) || /cta-band-light/.test(content);
    if (hasLegacyClass) {
      addFinding(
        "FAIL",
        "cta-light-class-usage",
        file,
        "Legacy/light CTA-band class gevonden (cta-band of cta-band-light).",
      );
    }
  }

  for (const pagePath of canonicalPages) {
    if (!(await exists(pagePath))) continue;
    const content = stripFrontmatter(await read(pagePath));
    const hasCTASection = /<CTASection\b/.test(content);
    const likelyBandMarkup =
      /cta-band|cta-band-dark|btn-cta-primary-dark|btn-cta-secondary-dark/.test(
        content,
      );

    if (likelyBandMarkup && !hasCTASection) {
      addFinding(
        "FAIL",
        "cta-hardcoded-band",
        pagePath,
        "CTA band-achtige markup gevonden zonder CTASection. Hergebruik CTASection.",
      );
    }

    if (/<CTASection\b[^>]*variant\s*=\s*["']light["']/.test(content)) {
      addFinding(
        "FAIL",
        "cta-light-variant-used",
        pagePath,
        "CTASection light-variant gebruik gevonden; dark is de standaard.",
      );
    }
  }
}

async function checkComponentReuse() {
  for (const pagePath of canonicalPages) {
    if (!(await exists(pagePath))) continue;
    const content = stripFrontmatter(await read(pagePath));

    const hasFaqComponent = /<FaqAccordion\b/.test(content);
    const accordionLike =
      /aria-expanded/.test(content) &&
      /aria-controls/.test(content) &&
      /<button\b/.test(content);
    if (accordionLike && !hasFaqComponent) {
      addFinding(
        "FAIL",
        "reuse-faq",
        pagePath,
        "Accordion-markup gedetecteerd zonder FaqAccordion component.",
      );
    }

    const hasProcessComponent = /<ProcessStrip\b/.test(content);
    const processLike =
      /1\.\s*Kennismaking/i.test(content) &&
      /2\./.test(content) &&
      /3\./.test(content);
    if (processLike && !hasProcessComponent) {
      addFinding(
        "FAIL",
        "reuse-process",
        pagePath,
        "Process-step markup gedetecteerd zonder ProcessStrip component.",
      );
    }
  }
}

async function checkDataArchitecture() {
  for (const [pagePath, dataPath] of Object.entries(pageToDataMap)) {
    if (!(await exists(dataPath))) {
      addFinding(
        "FAIL",
        "data-file-missing",
        dataPath,
        `Verwachte route-datafile ontbreekt voor ${pagePath}.`,
      );
      continue;
    }

    if (!(await exists(pagePath))) continue;
    const content = await read(pagePath);
    if (!importRegexForData(dataPath).test(content)) {
      addFinding(
        "FAIL",
        "data-import-missing",
        pagePath,
        `Pagina importeert niet de verwachte route-datafile (${dataPath}).`,
      );
    }
  }

  const componentFiles = await walk(COMPONENTS_DIR, (p) =>
    p.endsWith(".astro"),
  );
  const offenders = [];
  for (const file of componentFiles) {
    const score = detectHardcodedCopySignals(await read(rel(file)));
    if (score > 0) offenders.push({ file: rel(file), score });
  }

  offenders.sort((a, b) => b.score - a.score);
  for (const offender of offenders.slice(0, 5)) {
    addFinding(
      "WARN",
      "data-hardcoded-copy-signal",
      offender.file,
      `Component bevat mogelijk hardcoded user-facing copy (${offender.score} signalen).`,
    );
  }
}

async function checkSectionRhythmMix() {
  for (const pagePath of canonicalPages) {
    if (!(await exists(pagePath))) continue;
    const systems = detectSpacingSystems(
      stripFrontmatter(await read(pagePath)),
    );
    if (systems.length > 1) {
      addFinding(
        "WARN",
        "section-rhythm-mixed",
        pagePath,
        `Meerdere spacing-systemen gemengd: ${systems.join(", ")}.`,
      );
    }
  }
}

async function checkEncodingIntegrity() {
  const rootEntries = await fs.readdir(ROOT, { withFileTypes: true });
  const mdFiles = rootEntries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".md"))
    .map((e) => e.name);

  for (const md of mdFiles) {
    const buffer = await fs.readFile(path.join(ROOT, md));
    const utf8Content = buffer.toString("utf8");
    const latin1Content = buffer.toString("latin1");

    const checks = [
      {
        view: "utf8",
        content: utf8Content,
        patterns: mojibakePatternsUtf8View,
      },
      {
        view: "latin1",
        content: latin1Content,
        patterns: mojibakePatternsLatin1View,
      },
    ];

    let found = false;
    for (const check of checks) {
      for (const pattern of check.patterns) {
        const idx = check.content.indexOf(pattern);
        if (idx === -1) continue;
        const start = Math.max(0, idx - 20);
        const end = Math.min(check.content.length, idx + 40);
        const snippet = check.content
          .slice(start, end)
          .replace(/\s+/g, " ")
          .trim();
        addFinding(
          "FAIL",
          "encoding-mojibake",
          md,
          `Mojibake-sequentie gevonden in ${check.view}-view (${JSON.stringify(pattern)}). Snippet: "${snippet}"`,
        );
        found = true;
        break;
      }
      if (found) break;
    }
  }
}

async function checkTranslationCompleteness() {
  const l10nSingleArgRegex = /l10n\(\s*(["'`])(?:\\.|(?!\1)[\s\S])*\1\s*\)/g;

  for (const file of translationRequiredDataFiles) {
    if (!(await exists(file))) continue;
    const content = await read(file);

    const singleArgMatches = [...content.matchAll(l10nSingleArgRegex)];
    for (const match of singleArgMatches) {
      addFinding(
        "FAIL",
        "translation-missing-en",
        file,
        `l10n zonder Engelse vertaling gevonden: ${match[0]}. Voeg een en-waarde toe.`,
      );
    }

    const lines = content.split("\n");
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("//")) return;
      if (trimmed.includes("l10n(")) return;

      const rawPropMatch = trimmed.match(
        /^([A-Za-z0-9_]+)\s*:\s*(["'])(.*)\2,?$/,
      );
      if (!rawPropMatch) return;

      const key = rawPropMatch[1];
      const value = rawPropMatch[3];
      if (!/[A-Za-zÀ-ÿ]/.test(value)) return;
      if (isLikelySystemString(key, value)) return;

      addFinding(
        "FAIL",
        "translation-raw-literal",
        file,
        `Raw string zonder l10n op regel ${index + 1} (${key}). Gebruik l10n("nl","en").`,
      );
    });
  }
}

function printReport() {
  const byRule = new Map();
  for (const finding of findings) {
    if (!byRule.has(finding.ruleId)) byRule.set(finding.ruleId, []);
    byRule.get(finding.ruleId).push(finding);
  }

  console.log("AI Contract Consistency Report\n");
  for (const ruleId of [...byRule.keys()].sort()) {
    console.log(`[${ruleId}]`);
    for (const f of byRule.get(ruleId)) {
      console.log(`${f.level} ${f.ruleId} ${f.filePath}: ${f.message}`);
    }
    console.log("");
  }

  const failCount = findings.filter((f) => f.level === "FAIL").length;
  const warnCount = findings.filter((f) => f.level === "WARN").length;
  console.log(`Summary: ${failCount} FAIL, ${warnCount} WARN`);

  if (failCount > 0) process.exitCode = 1;
}

async function main() {
  await checkCanonicalRoutes();
  await checkHeadings();
  await checkCTAConsistency();
  await checkComponentReuse();
  await checkDataArchitecture();
  await checkSectionRhythmMix();
  await checkEncodingIntegrity();
  await checkTranslationCompleteness();
  printReport();
}

main().catch((error) => {
  console.error(
    "FAIL validator runtime-error scripts/validate-ai-contract.mjs:",
    error instanceof Error ? error.message : String(error),
  );
  process.exit(1);
});
