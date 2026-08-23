const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const webDir = root;
const assetDir = path.join(webDir, "assets");

const IMAGE_REFERENCE = /(?:\.\/)?assets\/([A-Za-z0-9._/-]+\.(?:avif|gif|jpe?g|png|svg|webp))/gi;

const MIME_TYPES = Object.freeze({
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
});

function readWebFile(relativePath) {
  return fs.readFileSync(path.join(webDir, relativePath), "utf8");
}

function collectImageReferences(...sources) {
  const references = new Set();
  for (const source of sources) {
    IMAGE_REFERENCE.lastIndex = 0;
    for (const match of source.matchAll(IMAGE_REFERENCE)) references.add(match[1]);
  }
  return [...references].sort();
}

function assetDataUrl(filename) {
  const extension = path.extname(filename).toLowerCase();
  const mime = MIME_TYPES[extension];
  if (!mime) throw new Error(`Unsupported image type for ${filename}`);

  const resolved = path.resolve(assetDir, filename);
  const relative = path.relative(assetDir, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Asset reference escapes web/assets: ${filename}`);
  }
  if (!fs.existsSync(resolved)) throw new Error(`Referenced asset does not exist: assets/${filename}`);

  return `data:${mime};base64,${fs.readFileSync(resolved).toString("base64")}`;
}

function inlineImageReferences(source, references) {
  let output = source;
  for (const filename of references) {
    const dataUrl = assetDataUrl(filename);
    output = output.replaceAll(`./assets/${filename}`, dataUrl);
    output = output.replaceAll(`assets/${filename}`, dataUrl);
  }
  return output;
}

function replaceRequired(source, pattern, replacement, label) {
  if (!pattern.test(source)) throw new Error(`Could not locate ${label} in web/index.html`);
  pattern.lastIndex = 0;
  return source.replace(pattern, () => replacement);
}

function assertNonEmptyFile(filename, minimumBytes, label = filename) {
  if (!fs.existsSync(filename)) throw new Error(`${label} does not exist: ${filename}`);
  const size = fs.statSync(filename).size;
  if (size < minimumBytes) throw new Error(`${label} is unexpectedly small (${size} bytes; expected at least ${minimumBytes})`);
  return size;
}

function writeFileAtomic(filename, contents) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  const temporary = `${filename}.tmp-${process.pid}`;
  fs.writeFileSync(temporary, contents);
  fs.renameSync(temporary, filename);
}

function stripInlineBlocks(html) {
  return html
    .replace(/<script\b(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/gi, "<script></script>")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "<style></style>");
}

function readArgument(name, defaultValue) {
  const index = process.argv.indexOf(name);
  if (index === -1) return defaultValue;
  const value = process.argv[index + 1];
  if (!value || value.startsWith("--")) throw new Error(`${name} requires a value`);
  return path.resolve(process.cwd(), value);
}

module.exports = {
  assertNonEmptyFile,
  collectImageReferences,
  inlineImageReferences,
  readArgument,
  readWebFile,
  replaceRequired,
  root,
  stripInlineBlocks,
  webDir,
  writeFileAtomic,
};
