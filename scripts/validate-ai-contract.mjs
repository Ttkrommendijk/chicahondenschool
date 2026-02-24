import { promises as fs } from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();

const violations = [];

const CURRENT_SERVICES = [
  "diensten/hondenschool/5-privelessen-op-maat",
  "diensten/hondenschool/priveles-aan-huis",
  "diensten/hondenschool/priveles-op-locatie",
  "diensten/hondenschool/fun-speuren-neuswerk",
  "diensten/hondenschool/detectie",
  "diensten/hondenschool/sport-en-spel",
  "diensten/oppas-uitlaatservice/kennismaking",
  "diensten/oppas-uitlaatservice/strippenkaart",
];

function fail(message) {
  violations.push(message);
}

async function pathStat(relativePath) {
  try {
    return await fs.stat(path.join(ROOT, relativePath));
  } catch {
    return null;
  }
}

async function assertExists(relativePath, expected = "any") {
  const stat = await pathStat(relativePath);
  if (!stat) {
    fail(`Missing required path: ${relativePath}`);
    return;
  }

  if (expected === "dir" && !stat.isDirectory()) {
    fail(`Expected directory but found something else: ${relativePath}`);
  }

  if (expected === "file" && !stat.isFile()) {
    fail(`Expected file but found something else: ${relativePath}`);
  }
}

async function assertNotExists(relativePath) {
  const stat = await pathStat(relativePath);
  if (stat) {
    fail(`Forbidden path exists: ${relativePath}`);
  }
}

async function walkDirectories(startDir) {
  const out = [];
  const stack = [startDir];

  while (stack.length) {
    const current = stack.pop();
    const entries = await fs.readdir(current, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const full = path.join(current, entry.name);
      out.push(full);

      if (entry.name === "node_modules" || entry.name === "dist") continue;
      stack.push(full);
    }
  }

  return out;
}

async function walkFiles(startDir, predicate = () => true) {
  const out = [];
  const stack = [startDir];

  while (stack.length) {
    const current = stack.pop();
    const entries = await fs.readdir(current, { withFileTypes: true });

    for (const entry of entries) {
      const full = path.join(current, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === "dist") continue;
        stack.push(full);
        continue;
      }

      if (entry.isFile() && predicate(full)) out.push(full);
    }
  }

  return out;
}

function rel(fullPath) {
  return path.relative(ROOT, fullPath).replace(/\\/g, "/");
}

async function validateRootStructure() {
  const requiredRootDirs = ["public", "src", "scripts"];
  const requiredRootFiles = ["package.json", "astro.config.mjs"];

  for (const dir of requiredRootDirs) {
    await assertExists(dir, "dir");
  }

  for (const file of requiredRootFiles) {
    await assertExists(file, "file");
  }

  const entries = await fs.readdir(ROOT, { withFileTypes: true });
  const allowedRootDirs = new Set([
    "public",
    "src",
    "scripts",
    "node_modules",
    "dist",
  ]);

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith(".")) continue;
    if (!allowedRootDirs.has(entry.name)) {
      fail(`Unexpected top-level directory: ${entry.name}`);
    }
  }
}

async function validateSrcStructure() {
  const requiredSrcDirs = [
    "src/assets",
    "src/components",
    "src/layouts",
    "src/pages",
    "src/data",
  ];

  for (const dir of requiredSrcDirs) {
    await assertExists(dir, "dir");
  }
}

async function validatePagesStructure() {
  await assertExists("src/pages/index.astro", "file");
  await assertExists("src/pages/diensten", "dir");
  await assertExists("src/pages/diensten/oppas-uitlaatservice", "dir");
  await assertExists(
    "src/pages/diensten/oppas-uitlaatservice/index.astro",
    "file",
  );
  await assertExists("src/pages/diensten/hondenschool", "dir");
  await assertExists("src/pages/diensten/hondenschool/index.astro", "file");

  const astroFiles = await walkFiles(ROOT, (full) => full.endsWith(".astro"));
  for (const file of astroFiles) {
    const relative = rel(file);
    if (!relative.startsWith("src/")) {
      fail(`Astro file outside src/: ${relative}`);
      continue;
    }

    if (
      !relative.startsWith("src/pages/") &&
      !relative.startsWith("src/components/") &&
      !relative.startsWith("src/layouts/")
    ) {
      fail(`Astro file in invalid src location: ${relative}`);
    }
  }

  const pageFilesOutsidePages = astroFiles
    .map(rel)
    .filter(
      (file) =>
        file.startsWith("src/") &&
        !file.startsWith("src/pages/") &&
        !file.startsWith("src/components/") &&
        !file.startsWith("src/layouts/"),
    );

  for (const file of pageFilesOutsidePages) {
    fail(`Potential misplaced page file outside src/pages: ${file}`);
  }
}

async function validateCurrentServices() {
  for (const serviceRoute of CURRENT_SERVICES) {
    await assertExists(`src/pages/${serviceRoute}/index.astro`, "file");

    const parts = serviceRoute.split("/");
    const category = parts[1];
    const slug = parts[2];
    await assertExists(`src/data/diensten/${category}/${slug}.ts`, "file");
  }
}

async function validateDataPlacement() {
  // No top-level data/content directories outside src/data.
  await assertNotExists("data");
  await assertNotExists("content");

  // Content-like files should not live in src/pages (except .astro routes).
  const pagesFiles = await walkFiles(path.join(ROOT, "src", "pages"));
  const disallowedInPages = pagesFiles
    .map(rel)
    .filter(
      (file) =>
        !file.endsWith(".astro") &&
        !file.endsWith(".ts") &&
        !file.endsWith(".js"),
    );

  for (const file of disallowedInPages) {
    fail(`Unexpected content file in src/pages: ${file}`);
  }
}

async function validateNoNestedPublicHtml() {
  const dirs = await walkDirectories(ROOT);
  for (const dir of dirs) {
    const normalized = rel(dir);
    if (normalized.includes("public_html/public_html")) {
      fail(`Forbidden nested public_html directory: ${normalized}`);
    }
  }
}

async function validateDistNotCommitted() {
  try {
    const tracked = execFileSync("git", ["ls-files", "dist"], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    })
      .split(/\r?\n/)
      .filter(Boolean);

    if (tracked.length > 0) {
      fail(
        `dist/ appears to be committed (${tracked.length} tracked file(s)).`,
      );
    }
  } catch {
    // If git is unavailable, skip this check without failing.
  }
}

async function validateScriptsFolder() {
  await assertExists("scripts", "dir");

  const scriptFiles = await walkFiles(path.join(ROOT, "scripts"));
  const allowedExtensions = new Set([
    ".js",
    ".mjs",
    ".cjs",
    ".ts",
    ".sh",
    ".ps1",
    ".md",
    ".json",
  ]);

  for (const file of scriptFiles) {
    const ext = path.extname(file).toLowerCase();
    if (!allowedExtensions.has(ext)) {
      fail(`Unexpected file type in scripts/: ${rel(file)}`);
    }
  }
}

async function main() {
  await validateRootStructure();
  await validateSrcStructure();
  await validatePagesStructure();
  await validateDataPlacement();
  await validateCurrentServices();
  await validateNoNestedPublicHtml();
  await validateDistNotCommitted();
  await validateScriptsFolder();

  if (violations.length > 0) {
    console.error("AI CONTRACT VALIDATION FAILED");
    for (const message of violations) {
      console.error(`- ${message}`);
    }
    console.error("- Current services (expected):");
    for (const service of CURRENT_SERVICES) {
      console.error(`  - /${service}/`);
    }
    process.exit(1);
  }

  console.log("AI CONTRACT VALIDATION PASSED");
  console.log("Current services:");
  for (const service of CURRENT_SERVICES) {
    console.log(`- /${service}/`);
  }
}

main().catch((error) => {
  console.error("AI CONTRACT VALIDATION FAILED");
  console.error(
    `- Validator runtime error: ${error instanceof Error ? error.message : String(error)}`,
  );
  process.exit(1);
});
