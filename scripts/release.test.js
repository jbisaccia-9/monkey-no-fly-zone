const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

test("release uses the MIT license", () => {
  const license = fs.readFileSync(path.join(root, "LICENSE"), "utf8");
  const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  assert.match(license, /^MIT License/);
  assert.match(license, /Copyright \(c\) 2026 Joseph Bisaccia/);
  assert.equal(packageJson.license, "MIT");
});

test("3D source integrates every gameplay module", () => {
  const source = fs.readFileSync(path.join(root, "game-3d.source.js"), "utf8");
  for (const moduleName of ["player-visual", "city-stream", "combat-director", "cinematic-director", "victory-director", "vfx"]) {
    assert.match(source, new RegExp(`\\./game/${moduleName}\\.js`));
  }
  assert.match(source, /event\.code === "Enter"[^\n]+fire\(\)/, "Enter should fire the player weapon");
  assert.match(source, /CatmullRomCurve3/, "player projectiles should use a curved banana body");
  assert.match(source, /isBananaProjectile = true/, "player projectiles should be identifiable as bananas");
  assert.match(source, /function spawnPickup\(/, "collectible pickups should spawn during play");
  assert.match(source, /function activateRage\(/, "Go Bananas rage should be implemented");
  assert.doesNotMatch(source, /fury >= FURY_THRESHOLD\) activateRage\(\)/, "Go Bananas should wait for player activation");
  assert.match(source, /event\.code === "KeyG"[^\n]+activateRage\(\)/, "G should activate a charged Go Bananas ability");
  assert.match(source, /event\.code === "KeyR"[^\n]+activateRage\(\)/, "R should activate a charged Go Bananas ability");
  assert.match(source, /rageActionButton\?\.addEventListener\("click", activateRage\)/, "a dedicated action button should activate Go Bananas");
  assert.match(source, /fire\(true\)/, "rage should automatically fire heavy banana rockets");
  assert.match(source, /projectileCount = rageShot \? 1/, "rage should use a mobile-safe projectile budget");
  assert.match(source, /\{ time: 32, name: "INTERCEPT"/, "the first level should allow a longer opening patrol");
  assert.match(source, /\{ time: 422, name: "LAST STAND"/, "the campaign should reach an eighth final theater");
  assert.match(source, /crosswind: 3\.35/, "late levels should add meaningful crosswind pressure");
  assert.match(source, /function startRelayObjective\(/, "the final level should deploy command relays");
  assert.match(source, /function winGame\(/, "destroying the relays should produce a victory state");
});

test("late campaign escalates into the Skyshield command-core finale", () => {
  const city = fs.readFileSync(path.join(root, "game", "city-stream.js"), "utf8");
  const combat = fs.readFileSync(path.join(root, "game", "combat-director.js"), "utf8");
  const victory = fs.readFileSync(path.join(root, "game", "victory-director.js"), "utf8");
  for (const theme of ["frozen-transit-grid", "neon-arcology", "desert-fortress", "skyshield-command-core"]) {
    assert.match(city, new RegExp(theme), `${theme} should have an authored city identity`);
  }
  assert.match(city, /const MAX_LEVEL = 7/);
  assert.match(combat, /id: "last-stand"/);
  assert.match(combat, /maxMissiles: 7/);
  assert.match(combat, /missileSalvo: 3/);
  assert.equal((victory.match(/\.\/assets\/voices\//g) || []).length, 3);
  assert.match(victory, /Operation Banana Sky is complete/);
  assert.match(victory, /const DURATION = 19\.7/, "the ending should preserve every recorded performance");
});

test("opening briefing establishes the mission", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const cinematic = fs.readFileSync(path.join(root, "game", "cinematic-director.js"), "utf8");
  assert.match(html, /<title>Monkey See, Monkey Pew<\/title>/);
  assert.match(html, /Commander Vesper/);
  assert.match(html, /only one who can save this planet/i);
  assert.match(html, /assets\/commander-vesper-v1\.png/);
  assert.match(html, /Start Transmission/);
  assert.match(html, /Real-time 3D emergency transmission/);
  assert.match(html, /Open the armory\./);
  assert.match(html, /Why bananas\?/);
  assert.match(cinematic, /Black Flag uploaded a command virus/i);
  assert.match(cinematic, /Project Canopy's analog rescue ace/i);
  assert.match(cinematic, /brought forty-seven people home/i);
  assert.match(cinematic, /To Skyshield, you do not exist/i);
  assert.match(cinematic, /Nobody has ever hacked potassium/i);
  assert.equal((cinematic.match(/\.\/assets\/voices\//g) || []).length, 14);
  assert.match(cinematic, /const DURATION = 56/, "the cinematic should leave room for complete performances");
  assert.match(cinematic, /time >= nextBoundary && isVoicePlaying\(\)/, "the cinematic clock should wait for each voice performance");
});

test("hangar economy purchases and equips persistent loadouts", async () => {
  const source = fs.readFileSync(path.join(root, "game", "loadout.js"), "utf8");
  const moduleUrl = "data:text/javascript;base64," + Buffer.from(source).toString("base64");
  const loadout = await import(moduleUrl);
  const memory = new Map();
  const storage = {
    getItem: (key) => memory.get(key) || null,
    setItem: (key, value) => memory.set(key, value),
  };
  const profile = loadout.loadProfile(storage);
  for (const item of Object.values(loadout.CATALOG).flat()) {
    assert.ok(item.previewAsset, item.name + " should provide an authored hangar preview");
    assert.ok(fs.existsSync(path.join(root, item.previewAsset)), item.name + " preview asset should exist");
  }
  assert.equal(profile.coconuts, 120);
  const result = loadout.purchaseOrEquip(profile, "weapon", "plantain-piercer", storage);
  assert.equal(result.ok, true);
  assert.equal(profile.coconuts, 75);
  assert.equal(profile.equipped.weapon, "plantain-piercer");
  assert.equal(loadout.loadProfile(storage).equipped.weapon, "plantain-piercer");
  assert.equal(loadout.ensureLaunchBudget(profile, 120, storage), 45);
  assert.equal(profile.coconuts, 120);
  assert.equal(loadout.ensureLaunchBudget(profile, 120, storage), 0);
  profile.coconuts = 267;
  assert.equal(loadout.resetLaunchBudget(profile, 120, storage), 120);
  assert.equal(profile.coconuts, 120);
  assert.equal(loadout.loadProfile(storage).coconuts, 120);
  assert.ok(loadout.resolveRunStats(profile, { flight: 1, arsenal: 1, armor: 1 }).maxShields >= 1);
});

test("standalone release is self-contained", () => {
  const standalone = fs.readFileSync(path.join(root, "monkey-no-fly-zone-standalone.html"), "utf8");
  assert.match(standalone, /Self-contained build generated by scripts\/build-standalone\.js/);
  assert.match(standalone, /Embedded assets:/);
  assert.match(standalone, /data:image\/(?:jpeg|png);base64,/);
  assert.match(standalone, /data:audio\/mpeg;base64,/);
  assert.doesNotMatch(standalone, /(?:\.\/)?assets\/[A-Za-z0-9._/-]+\.(?:jpe?g|mp3|png)/i);
});
