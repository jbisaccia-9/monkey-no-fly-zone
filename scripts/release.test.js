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
  assert.match(source, /projectileCount = rpgShot \|\| rageShot \? 1/, "heavy weapons should use a mobile-safe projectile budget");
  assert.match(source, /\{ time: 32, name: "INTERCEPT"/, "the first level should allow a longer opening patrol");
  assert.match(source, /\{ time: 422, name: "LAST STAND"/, "the campaign should reach an eighth final theater");
  assert.match(source, /crosswind: 3\.35/, "late levels should add meaningful crosswind pressure");
  assert.match(source, /function startRelayObjective\(/, "the final level should deploy command relays");
  assert.match(source, /function startBossBattle\(/, "destroying the relays should summon the final boss");
  assert.match(source, /function destroyCommandCarrier\(/, "destroying the Titan should produce a victory state");
  assert.match(source, /bossHp: 900/, "Banana Insanity should field the strongest Titan");
  assert.match(source, /name: "LAST STAND"[^\n]+speed: 44/, "the final city sector should be substantially faster");
  assert.match(source, /f16: \{[^\n]+hp: 3/, "F-16s should survive multiple standard banana hits");
  assert.match(source, /spec\.hp \* \(1 \+ currentLevel \* 0\.12\) \* difficulty\.enemyHealth/, "aircraft armor should scale by level and mode");
  assert.match(source, /label: "Supply Sweep"/, "the campaign should include a collection assignment");
  assert.match(source, /label: "Air Superiority"[^\n]+target: 4/, "the campaign should include a bounded fighter takedown assignment");
  assert.match(source, /label: "Missile Screen"/, "the campaign should include an interception assignment");
  assert.match(source, /!missionObjective\.complete && elapsed >= nextLevel\.time/, "required assignments should gate sector progression");
  assert.match(source, /objectiveOvertime < 6/, "an incomplete objective should not create an indefinite gap between levels");
  assert.match(source, /strategicTarget \? 0\.96/, "command relays and the Titan should receive strong aim correction");
  assert.match(source, /role: "ceiling-hunter"/, "ceiling camping should summon altitude hunters");
  assert.match(source, /relay-preview/, "localhost QA should expose the relay directive without replaying the full campaign");
  assert.match(source, /finale-preview/, "the published game should expose an opt-in finale test flight");
  assert.match(source, /function installFieldUpgrade\(/, "level upgrades should install without interrupting flight");
  assert.doesNotMatch(source, /state = "upgrading"/, "level changes should never pause for an upgrade prompt");
  assert.doesNotMatch(source, /hp: finalePreview \?/, "the finale route should not nerf strategic targets");
  assert.match(source, /shieldHp = Math\.ceil\(\(14 \+ index \* 7\)/, "command relays should have a separate shield layer");
  assert.match(source, /commandRelays\.includes\(missile\.source\)/, "command relays should launch valid missile counterfire");
  assert.match(source, /function startPortalSequence\(/, "the relay collapse should open a dedicated survival portal");
  assert.match(source, /function createRpgShotView\(/, "the Titan battle should arm Wingtail with a unique RPG");
  assert.match(source, /WINGTAIL_MAX_HEALTH = 100/, "Wingtail should receive a dedicated boss-battle health pool");
  assert.match(source, /phaseIndex/, "the Titan should escalate through multiple combat phases");
  assert.match(source, /armorMultiplier = \[0\.82, 0\.68, 0\.54\]/, "each Titan phase should resist RPG damage");
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

test("hangar exposes three distinct gameplay difficulty modes", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const source = fs.readFileSync(path.join(root, "game-3d.source.js"), "utf8");
  for (const mode of ["easy", "hard", "insanity"]) assert.match(html, new RegExp(`data-difficulty="${mode}"`));
  assert.match(html, /Banana Insanity/);
  assert.match(source, /speed: 0\.88/);
  assert.match(source, /speed: 1\.08/);
  assert.match(source, /speed: 1\.42/);
  assert.match(source, /missileBonus: 5/);
  assert.match(source, /ceilingDelay: 1\.35/);
  assert.match(source, /startingShields: 2/);
  assert.match(source, /if \(relaysDestroyed >= 3\) startPortalSequence\(\)/);
  assert.match(source, /SKYSHIELD TITAN DESTROYED/);
});

test("opening briefing establishes the mission", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  const source = fs.readFileSync(path.join(root, "game-3d.source.js"), "utf8");
  const cinematic = fs.readFileSync(path.join(root, "game", "cinematic-director.js"), "utf8");
  assert.match(html, /<title>Monkey See, Monkey Pew<\/title>/);
  assert.match(html, /Commander Vesper/);
  assert.match(html, /only one who can save this planet/i);
  assert.match(html, /assets\/commander-vesper-v1\.png/);
  assert.match(html, /Start Transmission/);
  assert.match(html, /Real-time 3D emergency transmission/);
  assert.match(html, /Open the armory\./);
  assert.match(html, /Why bananas\?/);
  assert.match(html, /id="vesperComms"/, "Vesper should have an in-flight command channel");
  assert.match(source, /state = "crashing";\s+missionVoice\.pause\(\);\s+hideVesperComms\(\)/, "the relay transmission should close before the crash result");
  assert.match(html, /18-relay-directive\.mp3|game\.js\?v=29/);
  assert.match(cinematic, /Black Flag uploaded a command virus/i);
  assert.match(cinematic, /Project Canopy's analog rescue ace/i);
  assert.match(cinematic, /brought forty-seven people home/i);
  assert.match(cinematic, /To Skyshield, you do not exist/i);
  assert.match(cinematic, /Nobody has ever hacked potassium/i);
  assert.equal((cinematic.match(/\.\/assets\/voices\//g) || []).length, 14);
  assert.match(cinematic, /const DURATION = 56/, "the cinematic should leave room for complete performances");
  assert.match(cinematic, /time >= nextBoundary && isVoicePlaying\(\)/, "the cinematic clock should wait for each voice performance");
});

test("hangar economy purchases gear and resets each sortie to the starter loadout", async () => {
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
  loadout.purchaseOrEquip(profile, "airframe", "howler-rocket-rig", storage);
  loadout.purchaseOrEquip(profile, "outfit", "ace-jacket", storage);
  profile.bestScore = 4200;
  profile.profileId = "wingtail-01";
  const profileIdentity = profile;
  const resetProfile = loadout.resetSortieProfile(profile, storage);
  assert.equal(resetProfile, profileIdentity, "reset should preserve the profile object identity");
  assert.equal(profile.coconuts, 120);
  assert.deepEqual(profile.owned, {
    airframe: ["clockwork-pinions"],
    weapon: ["ripe-repeater"],
    outfit: ["rescue-scarf"],
  });
  assert.deepEqual(profile.equipped, {
    airframe: "clockwork-pinions",
    weapon: "ripe-repeater",
    outfit: "rescue-scarf",
  });
  assert.equal(profile.bestScore, 4200);
  assert.equal(profile.profileId, "wingtail-01");
  const persistedReset = JSON.parse(memory.get(loadout.STORAGE_KEY));
  assert.deepEqual(persistedReset, profile);
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
