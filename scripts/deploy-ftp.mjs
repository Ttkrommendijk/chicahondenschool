import path from "node:path";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import process from "node:process";
import dotenv from "dotenv";
import { Client } from "basic-ftp";

dotenv.config({ path: ".env", quiet: true });

const requiredEnv = [
  "FTP_HOST",
  "FTP_PORT",
  "FTP_USERNAME",
  "FTP_PASSWORD",
  "FTP_REMOTE_ROOT",
];

const missing = requiredEnv.filter((key) => {
  const value = process.env[key];
  return !value || !value.trim();
});

if (missing.length > 0) {
  console.error(
    `Missing required environment variable(s): ${missing.join(", ")}. ` +
      "Please update your local .env file.",
  );
  process.exit(1);
}

const runBuild = () =>
  new Promise((resolve, reject) => {
    const command =
      process.platform === "win32" ? "npm run build" : "npm run build";
    const child = spawn(command, [], { stdio: "inherit", shell: true });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Build failed with exit code ${code}`));
    });
  });

const deploy = async () => {
  console.log("Building...");
  await runBuild();

  const distPath = path.resolve(process.cwd(), "dist");
  if (!existsSync(distPath)) {
    throw new Error("Build output folder not found: dist/");
  }

  const host = process.env.FTP_HOST;
  const port = Number.parseInt(process.env.FTP_PORT, 10);
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;
  const remoteRoot = process.env.FTP_REMOTE_ROOT;
  const secure = process.env.FTP_PROTOCOL?.toLowerCase() === "ftps";

  if (Number.isNaN(port) || port <= 0) {
    throw new Error("Invalid FTP_PORT. Please set a valid numeric FTP port.");
  }

  const client = new Client();
  client.ftp.verbose = false;

  try {
    console.log("Connecting to FTP...");
    await client.access({
      host,
      port,
      user,
      password,
      secure,
    });

    console.log("Uploading dist contents...");
    await client.ensureDir(remoteRoot);
    await client.clearWorkingDir();
    await client.uploadFromDir(distPath);
    console.log("Deployment complete.");
  } finally {
    client.close();
  }
};

deploy().catch((error) => {
  console.error(`Deploy failed: ${error.message}`);
  process.exit(1);
});
