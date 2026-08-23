const { assertNonEmptyFile, readArgument, root } = require("./build-helpers");
const path = require("node:path");
const esbuild = require("esbuild");

const outputPath = readArgument("--output", path.join(root, "game.js"));
const result = esbuild.buildSync({
  entryPoints: [path.join(root, "game-3d.source.js")],
  bundle: true,
  format: "iife",
  platform: "browser",
  target: "es2020",
  minify: true,
  metafile: true,
  outfile: outputPath,
});

const size = assertNonEmptyFile(outputPath, 32 * 1024, "Browser game bundle");
const inputCount = Object.keys(result.metafile.inputs).length;
const externalImports = Object.values(result.metafile.outputs)
  .flatMap((output) => output.imports || [])
  .filter((entry) => entry.external);

if (externalImports.length) {
  throw new Error(`Browser bundle still has external imports: ${externalImports.map((entry) => entry.path).join(", ")}`);
}

console.log(`Built ${path.relative(root, outputPath) || outputPath} (${(size / 1024).toFixed(1)} KB) from ${inputCount} modules with no external imports.`);
