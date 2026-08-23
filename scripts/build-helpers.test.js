const assert = require("node:assert/strict");
const test = require("node:test");
const {
  collectImageReferences,
  inlineImageReferences,
  replaceRequired,
  stripInlineBlocks,
} = require("./build-helpers");

test("collects unique image references from bundled and styled sources", () => {
  assert.deepEqual(
    collectImageReferences(
      'const hero = "./assets/hero-monkey-chase-v2-chroma.png";',
      'background-image: url("assets/skyline-level-1.jpg")',
      'const duplicate = "./assets/hero-monkey-chase-v2-chroma.png";',
    ),
    ["hero-monkey-chase-v2-chroma.png", "skyline-level-1.jpg"],
  );
});

test("inlines every discovered image reference", () => {
  const source = [
    'const hero = "./assets/hero-monkey-chase-v2-chroma.png";',
    'const skyline = "./assets/skyline-level-1.jpg";',
  ].join("\n");
  const output = inlineImageReferences(source, collectImageReferences(source));

  assert.match(output, /data:image\/png;base64,/);
  assert.match(output, /data:image\/jpeg;base64,/);
  assert.doesNotMatch(output, /assets\//);
});

test("required replacements preserve minified dollar tokens literally", () => {
  const source = '<script src="./game.js?v=14"></script>';
  const replacement = "<script>const shader=$&!!material.iridescenceMap;</script>";

  assert.equal(
    replaceRequired(source, /<script src="\.\/game\.js(?:\?[^\"]+)?"><\/script>/, replacement, "game script"),
    replacement,
  );
});

test("strips inline blocks while retaining external dependency tags", () => {
  const html = [
    '<script>const fake = \'<script src="./fake.js"></script>\';</script>',
    '<script src="./real.js"></script>',
    '<style>.example { background: url("./assets/fake.png"); }</style>',
  ].join("\n");
  const shell = stripInlineBlocks(html);

  assert.doesNotMatch(shell, /fake\.js|fake\.png/);
  assert.match(shell, /src="\.\/real\.js"/);
});
