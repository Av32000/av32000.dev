import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = resolve(projectRoot, "dist");
const filesToCopy = [
  "index.html",
  "contact.html",
  "projects.html",
  "assets",
  "css",
  "data",
  "js",
  "projects",
];

await rm(distDirectory, { recursive: true, force: true });
await mkdir(distDirectory, { recursive: true });

await Promise.all(
  filesToCopy.map((entry) =>
    cp(resolve(projectRoot, entry), resolve(distDirectory, entry), {
      recursive: true,
    }),
  ),
);

console.log(`Built static site in ${distDirectory}`);