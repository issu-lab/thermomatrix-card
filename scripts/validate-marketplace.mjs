import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const [manifestText, packageText, readme, source, bundle, bundleStats] =
  await Promise.all([
    readFile("hacs.json", "utf8"),
    readFile("package.json", "utf8"),
    readFile("README.md", "utf8"),
    readFile("src/thermomatrix-card.ts", "utf8"),
    readFile("dist/thermomatrix-card.js", "utf8"),
    stat("dist/thermomatrix-card.js"),
  ]);

const manifest = JSON.parse(manifestText);
const packageJson = JSON.parse(packageText);
const version = packageJson.version;

assert.equal(manifest.name, "ThermoMatrix Card");
assert.equal(manifest.filename, "thermomatrix-card.js");
assert.equal(manifest.content_in_root, undefined);
assert.ok(bundleStats.size < 100 * 1024 * 1024, "bundle exceeds 100 MiB");
assert.match(source, new RegExp(`const VERSION = ["']${version}["']`));
assert.ok(
  readme.includes(`**Current version** | \`${version}\``),
  "README version does not match package.json",
);
assert.ok(bundle.includes("THERMOMATRIX-CARD"), "bundle signature is missing");
assert.ok(bundle.includes(version), "bundle version does not match package.json");
assert.match(readme, /redirect\/marketplace_repository\/\?owner=issu-lab/);
assert.match(readme, /badges\/marketplace_repository\.svg/);

console.log(`Marketplace package validation passed for v${version}.`);
