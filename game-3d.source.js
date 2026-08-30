import * as THREE from "./vendor/three.module.min.js";
import * as PlayerVisual from "./game/player-visual.js";
import { createCityStream } from "./game/city-stream.js";
import { createCombatDirector } from "./game/combat-director.js";
import { CINEMATIC_VOICE_ASSETS, createCinematicDirector } from "./game/cinematic-director.js";
import { VICTORY_VOICE_ASSETS, createVictoryDirector } from "./game/victory-director.js";
import {
  CATALOG,
  FIELD_UPGRADES,
  awardCoconuts,
  createRunUpgrades,
  displayStats,
  resetSortieProfile,
  getItem,
  loadProfile,
  purchaseOrEquip,
  resolveRunStats,
} from "./game/loadout.js";
import * as GameVFX from "./game/vfx.js";

(() => {
  "use strict";

  const canvas = document.getElementById("game");
  const overlay = document.getElementById("overlay");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlayText = document.getElementById("overlayText");
  const briefingOrder = document.getElementById("briefingOrder");
  const startButton = document.getElementById("startButton");
  const skipIntroButton = document.getElementById("skipIntroButton");
  const briefingFallback = document.getElementById("briefingFallback");
  const briefingCanvas = document.getElementById("briefingCanvas");
  const cinematicSlate = document.getElementById("cinematicSlate");
  const cinematicSpeaker = document.getElementById("cinematicSpeaker");
  const cinematicSubtitle = document.getElementById("cinematicSubtitle");
  const cinematicProgress = document.getElementById("cinematicProgress");
  const cinematicTelemetry = document.getElementById("cinematicTelemetry");
  const cinematicDialogue = document.getElementById("cinematicDialogue");
  const dialogueSpeaker = document.getElementById("dialogueSpeaker");
  const dialogueSubtitle = document.getElementById("dialogueSubtitle");
  const dialogueChoices = document.getElementById("dialogueChoices");
  const briefingIdentity = document.getElementById("briefingIdentity");
  const briefingChannel = document.getElementById("briefingChannel");
  const pauseOverlay = document.getElementById("pauseOverlay");
  const resumeButton = document.getElementById("resumeButton");
  const restartButton = document.getElementById("restartButton");
  const pauseButton = document.getElementById("pauseButton");
  const muteButton = document.getElementById("muteButton");
  const shootButton = document.getElementById("shootButton");
  const scoreNode = document.getElementById("score");
  const bestNode = document.getElementById("best");
  const pointsNode = document.getElementById("points");
  const multiplierNode = document.getElementById("multiplier");
  const coconutCount = document.getElementById("coconutCount");
  const shieldCount = document.getElementById("shieldCount");
  const rageHud = document.getElementById("rageHud");
  const rageActionButton = document.getElementById("rageActionButton");
  const rageLabel = document.getElementById("rageLabel");
  const rageCount = document.getElementById("rageCount");
  const rageMeter = document.getElementById("rageMeter");
  const objectiveHud = document.getElementById("objectiveHud");
  const objectiveLabel = document.getElementById("objectiveLabel");
  const objectiveMeter = document.getElementById("objectiveMeter");
  const objectiveCount = document.getElementById("objectiveCount");
  const objectiveStatus = document.getElementById("objectiveStatus");
  const objectiveUnit = document.getElementById("objectiveUnit");
  const bossBattleHud = document.getElementById("bossBattleHud");
  const wingtailHealthMeter = document.getElementById("wingtailHealthMeter");
  const wingtailHealthText = document.getElementById("wingtailHealthText");
  const rpgStatus = document.getElementById("rpgStatus");
  const titanPhase = document.getElementById("titanPhase");
  const titanHealthMeter = document.getElementById("titanHealthMeter");
  const titanHealthText = document.getElementById("titanHealthText");
  const vesperComms = document.getElementById("vesperComms");
  const vesperCommsTitle = document.getElementById("vesperCommsTitle");
  const vesperCommsText = document.getElementById("vesperCommsText");
  const levelNode = document.getElementById("level");
  const threatBar = document.getElementById("threatBar");
  const missileWarning = document.getElementById("missileWarning");
  const lockMeter = document.getElementById("lockMeter");
  const missileBearing = document.getElementById("missileBearing");
  const missileDirection = document.getElementById("missileDirection");
  const targetingHud = document.getElementById("targetingHud");
  const targetStatus = document.getElementById("targetStatus");
  const targetRange = document.getElementById("targetRange");
  const weaponCooldown = document.getElementById("weaponCooldown");
  const touchControls = document.getElementById("touchControls");
  const steerZone = document.getElementById("steerZone");
  const liftButton = document.getElementById("liftButton");
  const statusRegion = document.getElementById("statusRegion");
  const hangarOverlay = document.getElementById("hangarOverlay");
  const hangarWallet = document.getElementById("hangarWallet");
  const hangarPreview = document.getElementById("hangarPreview");
  const hangarPortrait = document.getElementById("hangarPortrait");
  const previewState = document.getElementById("previewState");
  const previewRig = document.getElementById("previewRig");
  const previewWeapon = document.getElementById("previewWeapon");
  const previewOutfit = document.getElementById("previewOutfit");
  const loadoutTabs = document.getElementById("loadoutTabs");
  const loadoutItems = document.getElementById("loadoutItems");
  const hangarStatus = document.getElementById("hangarStatus");
  const selectionName = document.getElementById("selectionName");
  const selectionBenefit = document.getElementById("selectionBenefit");
  const selectionDeltas = document.getElementById("selectionDeltas");
  const selectionPrice = document.getElementById("selectionPrice");
  const selectionBalance = document.getElementById("selectionBalance");
  const loadoutAction = document.getElementById("loadoutAction");
  const deployButton = document.getElementById("deployButton");
  const difficultyOptions = document.getElementById("difficultyOptions");
  const difficultyDescription = document.getElementById("difficultyDescription");
  const statNodes = {
    lift: document.getElementById("statLift"),
    handling: document.getElementById("statHandling"),
    firepower: document.getElementById("statFirepower"),
    survival: document.getElementById("statSurvival"),
  };
  const victoryOverlay = document.getElementById("victoryOverlay");
  const victoryCanvas = document.getElementById("victoryCanvas");
  const victorySpeaker = document.getElementById("victorySpeaker");
  const victoryTitle = document.getElementById("victoryTitle");
  const victorySubtitle = document.getElementById("victorySubtitle");
  const victoryProgress = document.getElementById("victoryProgress");
  const victorySkipButton = document.getElementById("victorySkipButton");
  const victoryContinueButton = document.getElementById("victoryContinueButton");
  const audio = window.GameAudio || {};

  const FIXED_STEP = 1 / 60;
  const LANES = [-6.2, 0, 6.2];
  const ALTITUDE_MIN = -3.2;
  const ALTITUDE_MAX = 5.8;
  const PLAYER_Z = 1.4;
  const FURY_THRESHOLD = 10;
  const RAGE_DURATION = 8;
  const RAGE_FIRE_INTERVAL = 0.34;
  const MAX_ACTIVE_SHOTS = 36;
  const WINGTAIL_MAX_HEALTH = 100;
  const RPG_COOLDOWN = 1.12;
  const RPG_DAMAGE = 8;
  const PORTAL_DURATION = 4.8;
  const LAUNCH_BUDGET = 120;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const RELAY_DIRECTIVE_VOICE = "./assets/voices/18-relay-directive.mp3";
  const query = new URLSearchParams(location.search);
  const finalePreview = query.has("finale-preview");
  const bossPreview = ["localhost", "127.0.0.1"].includes(location.hostname)
    && query.has("boss-preview");
  const relayPreview = ["localhost", "127.0.0.1"].includes(location.hostname)
    && query.has("relay-preview");

  const DIFFICULTIES = Object.freeze({
    easy: {
      name: "Easy",
      speed: 0.88,
      enemyHealth: 0.82,
      encounter: -0.16,
      jetBonus: -1,
      missileBonus: 0,
      missileSpeed: 0.92,
      crosswind: 0.68,
      startingShields: 2,
      bossHp: 320,
      bossFireInterval: 3.8,
      altitudeTracking: 0.22,
      ceilingDelay: 6.5,
      ceilingHunters: 1,
      description: "Slower pursuit, lighter armor, two emergency shields, fewer fighters, and a 320-hit-point armored Titan.",
    },
    hard: {
      name: "Hard",
      speed: 1.08,
      enemyHealth: 1.18,
      encounter: 0.12,
      jetBonus: 0,
      missileBonus: 1,
      missileSpeed: 1.08,
      crosswind: 1,
      startingShields: 1,
      bossHp: 520,
      bossFireInterval: 2.8,
      altitudeTracking: 0.58,
      ceilingDelay: 3.2,
      ceilingHunters: 1,
      description: "Faster airspace, armored fighters, one emergency shield, aggressive missile formations, and a 520-hit-point armored Titan.",
    },
    insanity: {
      name: "Banana Insanity",
      speed: 1.42,
      enemyHealth: 1.8,
      encounter: 0.72,
      jetBonus: 3,
      missileBonus: 5,
      missileSpeed: 1.38,
      crosswind: 1.7,
      startingShields: 0,
      bossHp: 900,
      bossFireInterval: 1.7,
      altitudeTracking: 0.9,
      ceilingDelay: 1.35,
      ceilingHunters: 2,
      description: "Extreme velocity, hunter squadrons, five extra missiles, violent crosswinds, no starting shields, and a 900-hit-point armored Titan.",
    },
  });

  const LEVELS = [
    { time: 0, name: "PATROL", threat: 20, maxJets: 3, missileCap: 1, speed: 16, hazard: "Clear airspace" },
    { time: 32, name: "INTERCEPT", threat: 46, maxJets: 4, missileCap: 1, speed: 20, hazard: "Industrial turbulence" },
    { time: 72, name: "MISSILE LOCK", threat: 74, maxJets: 5, missileCap: 2, speed: 24, crosswind: 0.7, hazard: "Storm crosswinds" },
    { time: 122, name: "OVERDRIVE", threat: 100, maxJets: 6, missileCap: 3, speed: 28.5, crosswind: 1.15, hazard: "Ash and blackout conditions" },
    { time: 182, name: "CROSSFIRE", threat: 100, maxJets: 7, missileCap: 4, speed: 32, crosswind: 1.65, altitudeMin: -3, altitudeMax: 5.55, hazard: "Freezing tower wake" },
    { time: 252, name: "TEMPEST", threat: 100, maxJets: 7, missileCap: 5, speed: 35.5, crosswind: 2.15, altitudeMin: -2.85, altitudeMax: 5.35, hazard: "Electrical shear" },
    { time: 332, name: "KILLBOX", threat: 100, maxJets: 8, missileCap: 6, speed: 39.5, crosswind: 2.75, altitudeMin: -2.65, altitudeMax: 5.1, hazard: "Fortress crossfire" },
    { time: 422, name: "LAST STAND", threat: 100, maxJets: 8, missileCap: 7, speed: 44, crosswind: 3.35, altitudeMin: -2.45, altitudeMax: 4.85, hazard: "Command-core kill corridor" },
  ];

  const MISSION_OBJECTIVES = Object.freeze({
    1: { type: "pickup", label: "Supply Sweep", unit: "caches", target: 3, briefing: "Recover three airborne supply caches before leaving the industrial sector." },
    3: { type: "jet", label: "Air Superiority", unit: "fighters", target: 4, briefing: "Break the strike formation. Destroy four hostile aircraft to open the next corridor." },
    5: { type: "missile", label: "Missile Screen", unit: "missiles", target: 4, briefing: "Shoot down four incoming missiles before the fortress approach." },
  });

  const AIRCRAFT = {
    f16: { name: "F-16", color: 0x8f9ba0, accent: 0x415760, hp: 3, speed: 1.06, agility: 1.05, score: 500, scale: 0.92 },
    fa18: { name: "F/A-18", color: 0x7e898d, accent: 0x37484f, hp: 5, speed: 0.96, agility: 0.92, score: 600, scale: 1.02 },
    f22: { name: "F-22", color: 0x67747b, accent: 0x26363c, hp: 4, speed: 1.2, agility: 1.28, score: 760, scale: 1.04 },
    a10: { name: "A-10", color: 0x65705f, accent: 0x323b30, hp: 8, speed: 0.72, agility: 0.62, score: 980, scale: 1.18 },
  };

  let renderer;
  let cinematic;
  let victory;
  const cinematicVoice = new Audio();
  cinematicVoice.preload = "auto";
  let cinematicVoiceActive = false;
  cinematicVoice.addEventListener("ended", () => { cinematicVoiceActive = false; });
  cinematicVoice.addEventListener("error", () => { cinematicVoiceActive = false; });
  const missionVoice = new Audio(RELAY_DIRECTIVE_VOICE);
  missionVoice.preload = "auto";
  let vesperCommsTimer = 0;
  missionVoice.addEventListener("ended", () => {
    clearTimeout(vesperCommsTimer);
    vesperCommsTimer = window.setTimeout(() => hideVesperComms(), 1200);
  });
  const cinematicVoicePreloads = [...CINEMATIC_VOICE_ASSETS, ...VICTORY_VOICE_ASSETS].map((source) => {
    const voice = new Audio();
    voice.preload = "auto";
    voice.src = source;
    voice.load();
    return voice;
  });
  let scene;
  let camera;
  let cityStream;
  let cloudGroup;
  let starField;
  let playerController;
  let combatDirector;
  let vfxManager;
  let hemisphereLight;
  let keyLight;
  let playerLight;
  let state = "loading";
  let briefingPhase = "ready";
  let pausedFrom = "playing";
  let currentLevel = 0;
  let elapsed = 0;
  let distance = 0;
  let points = 0;
  let chain = 1;
  let chainTimer = 0;
  let shotCooldown = 0;
  let lastTime = performance.now();
  let accumulator = 0;
  let cameraShake = 0;
  let qualityScale = 1;
  let slowFrames = 0;
  let seed = 0x74ac31;
  let pointerStart = null;
  let steerPointerId = null;
  let mobileMode = false;
  let hangarCategory = "airframe";
  let difficultyId = "hard";
  let difficulty = DIFFICULTIES[difficultyId];
  let profile = loadProfile();
  resetSortieProfile(profile);
  let previewSelection = { ...profile.equipped };
  let runUpgrades = createRunUpgrades();
  let runStats = resolveRunStats(profile, runUpgrades);
  let shields = runStats.maxShields;
  let runCoconuts = 0;
  let fury = 0;
  let rageTimer = 0;
  let rageAutoFire = 0;
  let rageReadyAnnounced = false;
  let pickupTimer = 2.4;
  let takedowns = 0;
  let relayObjectiveStarted = false;
  let relaysDestroyed = 0;
  let bossBattleStarted = false;
  let commandCarrier = null;
  let portalSequenceActive = false;
  let survivalPortal = null;
  let portalTimer = 0;
  let wingtailHealth = WINGTAIL_MAX_HEALTH;
  let missionObjective = null;
  let objectiveOvertime = 0;
  let ceilingExposure = 0;
  let best = Number(localStorage.getItem("monkeyNoFlyBest3D") || localStorage.getItem("monkeyNoFlyBest") || 0);

  const monkey = { x: 0, y: 0.7, z: PLAYER_Z, vy: 0, vx: 0, lane: 1, bank: 0, pitch: 0, radius: PlayerVisual.PLAYER_COLLISION_RADIUS };
  const jets = [];
  const missiles = [];
  const shots = [];
  const pickups = [];
  const commandRelays = [];
  const keys = new Set();
  const clockColor = new THREE.Color();
  const tempV = new THREE.Vector3();
  const tempV2 = new THREE.Vector3();

  bestNode.textContent = String(Math.floor(best));
  if (coconutCount) coconutCount.textContent = String(profile.coconuts);
  if (finalePreview) {
    startButton.textContent = "Open Finale Loadout";
    overlayTitle.textContent = "Finale test flight ready.";
    overlayText.textContent = "Configure Wingtail, then deploy directly into the command-relay assault.";
    briefingOrder.textContent = "Destroy all three relays, defeat the Skyshield Titan, and the closing transmission will play automatically.";
  }
  for (const item of Object.values(CATALOG).flat()) {
    if (item.previewAsset) {
      const image = new Image();
      image.src = item.previewAsset;
    }
  }

  function announce(message) {
    statusRegion.textContent = "";
    requestAnimationFrame(() => { statusRegion.textContent = message; });
  }

  function hideVesperComms() {
    clearTimeout(vesperCommsTimer);
    vesperCommsTimer = 0;
    if (vesperComms) vesperComms.hidden = true;
  }

  function showVesperComms() {
    if (!vesperComms) return;
    clearTimeout(vesperCommsTimer);
    if (vesperCommsTitle) vesperCommsTitle.textContent = "Final directive";
    if (vesperCommsText) vesperCommsText.textContent = "The command relays are exposed. Take them down now. Every city below is counting on you.";
    vesperComms.hidden = false;
    missionVoice.pause();
    missionVoice.currentTime = 0;
    missionVoice.muted = Boolean(audio.isMuted?.());
    missionVoice.play().catch(() => {
      vesperCommsTimer = window.setTimeout(() => hideVesperComms(), 9000);
    });
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function flightSpeed(levelIndex = currentLevel) {
    return LEVELS[levelIndex].speed * difficulty.speed;
  }

  function aircraftLimit() {
    return Math.max(2, LEVELS[currentLevel].maxJets + difficulty.jetBonus);
  }

  function missileLimit() {
    return Math.max(1, LEVELS[currentLevel].missileCap + difficulty.missileBonus);
  }

  function renderDifficulty() {
    difficulty = DIFFICULTIES[difficultyId] || DIFFICULTIES.hard;
    difficultyOptions?.querySelectorAll("[data-difficulty]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.difficulty === difficultyId));
    });
    if (difficultyDescription) difficultyDescription.textContent = difficulty.description;
    if (deployButton) {
      const rig = getItem("airframe", profile.equipped.airframe).name;
      const weapon = getItem("weapon", profile.equipped.weapon).name;
      deployButton.textContent = `Deploy · ${difficulty.name}`;
      deployButton.setAttribute("aria-label", `Deploy ${difficulty.name} mission with ${rig} and ${weapon}`);
    }
  }

  function setDialogVisible(dialog, visible) {
    if (!dialog) return;
    dialog.hidden = !visible;
    dialog.inert = !visible;
    dialog.setAttribute("aria-hidden", String(!visible));
    dialog.classList.toggle("is-visible", visible);
  }

  function updateProgressDisplays() {
    if (coconutCount) coconutCount.textContent = String(profile.coconuts);
    if (hangarWallet) hangarWallet.textContent = String(profile.coconuts);
    if (shieldCount) shieldCount.textContent = String(shields);
  }

  function updateHangarPreview() {
    const previewProfile = {
      ...profile,
      equipped: { ...profile.equipped, ...previewSelection },
    };
    const airframe = getItem("airframe", previewProfile.equipped.airframe);
    const weapon = getItem("weapon", previewProfile.equipped.weapon);
    const outfit = getItem("outfit", previewProfile.equipped.outfit);
    const focusedItem = getItem(hangarCategory, previewSelection[hangarCategory]);
    const focusedIsEquipped = profile.equipped[hangarCategory] === focusedItem.id;
    if (hangarPreview) {
      hangarPreview.dataset.airframe = airframe.id;
      hangarPreview.dataset.weapon = weapon.id;
      hangarPreview.dataset.outfit = outfit.id;
      hangarPreview.classList.remove("is-swapping");
      void hangarPreview.offsetWidth;
      hangarPreview.classList.add("is-swapping");
    }
    if (hangarPortrait && hangarPortrait.getAttribute("src") !== focusedItem.previewAsset) {
      hangarPortrait.src = focusedItem.previewAsset;
    }
    if (hangarPortrait) hangarPortrait.alt = "Wingtail previewing " + focusedItem.name + " in the equipment hangar";
    if (previewState) {
      previewState.textContent = focusedIsEquipped ? "Current loadout" : "Preview only";
      previewState.dataset.current = String(focusedIsEquipped);
    }
    const categoryLabel = { airframe: "Flight rig", weapon: "Banana system", outfit: "Flight clothing" }[hangarCategory];
    if (previewRig) previewRig.textContent = focusedItem.name;
    if (previewWeapon) previewWeapon.textContent = categoryLabel + " preview";
    if (previewOutfit) previewOutfit.textContent = focusedIsEquipped ? "Equipped item" : "Store preview";
    const stats = displayStats(previewProfile);
    for (const [key, node] of Object.entries(statNodes)) {
      if (node) node.style.width = stats[key] + "%";
    }
    updateProgressDisplays();
  }

  function formatDelta(value, suffix = "") {
    if (Math.abs(value) < 0.005) return "No change";
    const rounded = Number.isInteger(value) ? value : Math.round(value * 10) / 10;
    return (rounded > 0 ? "+" : "") + rounded + suffix;
  }

  function getComparisonRows(category, currentItem, previewItem) {
    const current = currentItem.modifiers;
    const preview = previewItem.modifiers;
    if (category === "airframe") {
      return [
        ["Lift", Math.round(current.lift * 100), Math.round(preview.lift * 100), "%"],
        ["Agility", Math.round(current.handling * 100), Math.round(preview.handling * 100), "%"],
        ["Speed", Math.round(current.speed * 100), Math.round(preview.speed * 100), "%"],
      ];
    }
    if (category === "weapon") {
      return [
        ["Damage", current.damage, preview.damage, ""],
        ["Fire rate", Math.round(10 / current.cooldown) / 10, Math.round(10 / preview.cooldown) / 10, "/sec"],
        ["Payload", current.projectiles, preview.projectiles, "x"],
      ];
    }
    return [
      ["Coconut yield", Math.round(current.income * 100), Math.round(preview.income * 100), "%"],
      ["Impact shields", current.shield, preview.shield, ""],
      ["Lock resistance", Math.round(current.lockResistance * 100), Math.round(preview.lockResistance * 100), "%"],
    ];
  }

  function renderSelectionDeltas(item) {
    if (!selectionDeltas) return;
    const currentItem = getItem(hangarCategory, profile.equipped[hangarCategory]);
    const rows = getComparisonRows(hangarCategory, currentItem, item);
    const nodes = rows.map(([label, current, preview, suffix]) => {
      const row = document.createElement("span");
      const name = document.createElement("b");
      const values = document.createElement("i");
      const delta = document.createElement("em");
      const difference = preview - current;
      name.textContent = label;
      values.textContent = current + suffix + " → " + preview + suffix;
      delta.textContent = formatDelta(difference, suffix);
      delta.dataset.direction = difference > 0 ? "up" : difference < 0 ? "down" : "same";
      row.append(name, values, delta);
      return row;
    });
    selectionDeltas.replaceChildren(...nodes);
  }

  function updateSelectionInspector() {
    const item = getItem(hangarCategory, previewSelection[hangarCategory]);
    if (!item) return;
    const owned = profile.owned[hangarCategory].includes(item.id);
    const equipped = profile.equipped[hangarCategory] === item.id;
    const affordable = profile.coconuts >= item.cost;
    if (selectionName) selectionName.textContent = item.name;
    if (selectionBenefit) selectionBenefit.textContent = item.benefit;
    renderSelectionDeltas(item);
    if (selectionPrice) {
      selectionPrice.textContent = owned ? "Owned" : item.cost + " coconuts";
      selectionPrice.dataset.affordable = String(affordable || owned);
    }
    if (selectionBalance) selectionBalance.textContent = String(profile.coconuts);
    if (loadoutAction) {
      loadoutAction.disabled = equipped || (!owned && !affordable);
      loadoutAction.textContent = equipped
        ? "Equipped"
        : owned
          ? "Equip " + item.name
          : affordable
            ? "Buy & Equip · " + item.cost
            : "Need " + (item.cost - profile.coconuts) + " more";
    }
    if (deployButton) {
      const rig = getItem("airframe", profile.equipped.airframe).name;
      const weapon = getItem("weapon", profile.equipped.weapon).name;
      deployButton.textContent = `Deploy · ${difficulty.name}`;
      deployButton.setAttribute("aria-label", `Deploy ${difficulty.name} mission with ${rig} and ${weapon}`);
    }
  }

  function makeLoadoutItem(item, category) {
    const owned = profile.owned[category].includes(item.id);
    const equipped = profile.equipped[category] === item.id;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "loadout-item";
    button.dataset.itemId = item.id;
    button.dataset.owned = String(owned);
    const selected = previewSelection[category] === item.id;
    button.setAttribute("aria-pressed", String(selected));
    button.dataset.equipped = String(equipped);

    const title = document.createElement("span");
    title.className = "loadout-item__title";
    title.textContent = item.name;
    const tag = document.createElement("span");
    tag.className = "loadout-item__tag";
    tag.textContent = item.tag;
    const description = document.createElement("span");
    description.className = "loadout-item__description";
    description.textContent = item.description;
    const footer = document.createElement("span");
    footer.className = "loadout-item__footer";
    const specs = document.createElement("span");
    specs.className = "loadout-item__specs";
    specs.textContent = item.specs.join(" · ");
    const price = document.createElement("span");
    price.className = "loadout-item__price";
    price.textContent = equipped ? "Equipped" : owned ? "Owned" : item.cost + " coconuts";
    footer.append(specs, price);
    button.append(title, tag, description, footer);

    button.addEventListener("click", () => {
      previewSelection[category] = item.id;
      hangarStatus.textContent = item.name + " is a preview only. Deploy uses equipped gear until you buy or equip it.";
      renderHangarCategory(category);
    });
    return button;
  }

  function renderHangarCategory(category = hangarCategory) {
    if (!CATALOG[category] || !loadoutItems) return;
    hangarCategory = category;
    for (const tab of loadoutTabs?.querySelectorAll("[data-category]") || []) {
      tab.setAttribute("aria-selected", String(tab.dataset.category === category));
    }
    loadoutItems.replaceChildren(...CATALOG[category].map((item) => makeLoadoutItem(item, category)));
    updateSelectionInspector();
    updateHangarPreview();
    if (matchMedia("(max-width: 700px) and (min-height: 501px)").matches) {
      requestAnimationFrame(() => {
        const selected = loadoutItems.querySelector('[aria-pressed="true"]');
        if (selected) loadoutItems.scrollTo({ left: selected.offsetLeft - (loadoutItems.clientWidth - selected.offsetWidth) / 2, behavior: "auto" });
      });
    }
  }

  function showHangar() {
    if (state === "loading" || state === "unsupported") return;
    state = "hangar";
    setOverlayVisible(false);
    setDialogVisible(hangarOverlay, true);
    resetSortieProfile(profile);
    previewSelection = { ...profile.equipped };
    shootButton.disabled = true;
    pauseButton.disabled = true;
    hangarStatus.textContent = `New sortie budget: ${LAUNCH_BUDGET} coconuts. Select gear for this run.`;
    renderDifficulty();
    renderHangarCategory(hangarCategory);
    loadoutTabs?.querySelector('[aria-selected="true"]')?.focus({ preventScroll: true });
    announce("Wingtail loadout hangar opened.");
  }

  function installFieldUpgrade(levelIndex) {
    const upgrade = FIELD_UPGRADES[(levelIndex - 1) % FIELD_UPGRADES.length];
    runUpgrades[upgrade.id] += 1;
    runStats = resolveRunStats(profile, runUpgrades);
    if (upgrade.id === "armor") shields += 1;
    updateProgressDisplays();
    return upgrade;
  }

  function earnCoconuts(baseAmount, label) {
    const earned = awardCoconuts(profile, Math.max(1, Math.round(baseAmount * runStats.income)));
    runCoconuts += earned;
    updateProgressDisplays();
    if (label) announce(label + ". " + earned + " coconuts recovered.");
    return earned;
  }

  function simRandom() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  }

  function randomRange(min, max) {
    return min + (max - min) * simRandom();
  }

  function makeMaterial(color, options = {}) {
    return new THREE.MeshStandardMaterial({ color, roughness: options.roughness ?? 0.58, metalness: options.metalness ?? 0.45, emissive: options.emissive || 0x000000, emissiveIntensity: options.emissiveIntensity || 0 });
  }

  function removeView(view) {
    if (!view) return;
    scene.remove(view);
    view.traverse?.((child) => {
      child.geometry?.dispose?.();
      if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose?.());
      else child.material?.dispose?.();
    });
  }

  function createJetView(typeId) {
    const spec = AIRCRAFT[typeId];
    const group = new THREE.Group();
    const bodyMat = makeMaterial(spec.color, { metalness: 0.72, roughness: 0.34 });
    const darkMat = makeMaterial(spec.accent, { metalness: 0.62, roughness: 0.42 });
    const glassMat = makeMaterial(0x18272d, { metalness: 0.75, roughness: 0.16 });
    const engineMat = makeMaterial(0xff7b2f, { emissive: 0xff4a12, emissiveIntensity: 4, roughness: 0.3 });

    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.5, 4.2, 10), bodyMat);
    fuselage.rotation.x = Math.PI / 2;
    group.add(fuselage);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.34, 1.35, 10), bodyMat);
    nose.rotation.x = Math.PI / 2;
    nose.position.z = 2.72;
    group.add(nose);
    const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.38, 10, 6), glassMat);
    cockpit.scale.set(0.75, 0.55, 1.35);
    cockpit.position.set(0, 0.32, 0.8);
    group.add(cockpit);

    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 1.2);
    wingShape.lineTo(2.7, -1.2);
    wingShape.lineTo(0.45, -0.65);
    wingShape.lineTo(0, -1.1);
    const wing = new THREE.Mesh(new THREE.ExtrudeGeometry(wingShape, { depth: 0.1, bevelEnabled: false }), bodyMat);
    wing.rotation.x = -Math.PI / 2;
    wing.rotation.z = Math.PI / 2;
    wing.position.set(-0.05, -0.03, 0.3);
    wing.geometry.center();
    group.add(wing);

    const tailWing = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.08, 0.65), darkMat);
    tailWing.position.z = -1.55;
    group.add(tailWing);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.85, 0.9), darkMat);
    tail.position.set(0, 0.46, -1.55);
    group.add(tail);

    const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.28, 0.72, 8), engineMat);
    engine.rotation.x = Math.PI / 2;
    engine.position.z = -2.38;
    group.add(engine);
    if (typeId === "fa18" || typeId === "f22") {
      const second = engine.clone();
      engine.position.x = -0.24;
      second.position.x = 0.24;
      group.add(second);
    }
    if (typeId === "a10") {
      const nacelleGeo = new THREE.CylinderGeometry(0.28, 0.34, 1.45, 9);
      [-0.82, 0.82].forEach((x) => {
        const nacelle = new THREE.Mesh(nacelleGeo, darkMat);
        nacelle.rotation.x = Math.PI / 2;
        nacelle.position.set(x, 0.35, -0.75);
        group.add(nacelle);
      });
      wing.scale.x = 1.15;
    }
    if (typeId === "f22") wing.scale.z = 1.25;
    group.scale.setScalar(spec.scale);
    group.userData.engine = engine;
    return group;
  }

  function createMissileView() {
    const group = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 1.15, 8), makeMaterial(0xc7d0d1, { metalness: 0.75, roughness: 0.3 }));
    body.rotation.x = Math.PI / 2;
    group.add(body);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.34, 8), makeMaterial(0xe0e6e4));
    nose.rotation.x = -Math.PI / 2;
    nose.position.z = -0.74;
    group.add(nose);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.55, 8), new THREE.MeshBasicMaterial({ color: 0xffb13b, transparent: true, opacity: 0.9 }));
    flame.rotation.x = Math.PI / 2;
    flame.position.z = 0.83;
    group.add(flame);
    group.userData.flame = flame;
    return group;
  }

  function createCommandRelayView() {
    const group = new THREE.Group();
    const metal = makeMaterial(0x3b474d, { metalness: 0.82, roughness: 0.28 });
    const armor = makeMaterial(0x69777c, { metalness: 0.72, roughness: 0.34 });
    const signal = new THREE.MeshBasicMaterial({ color: 0xff3f35, transparent: true, opacity: 0.96 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 1.05, 4.3, 10), metal);
    group.add(body);
    for (const y of [-1.25, 1.25]) {
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(1.08, 1.08, 0.3, 10), armor);
      collar.position.y = y;
      group.add(collar);
    }
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.58, 14, 10), signal);
    group.add(core);
    const rings = [];
    for (let index = 0; index < 3; index += 1) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2 + index * 0.34, 0.065, 7, 42), signal);
      ring.rotation.set(Math.PI / 2 + index * 0.32, index * 0.52, 0);
      group.add(ring);
      rings.push(ring);
    }
    const beacon = new THREE.PointLight(0xff3f35, 4.8, 12, 2);
    group.add(beacon);
    const shieldMaterial = new THREE.MeshBasicMaterial({
      color: 0x62ead0,
      transparent: true,
      opacity: 0.24,
      wireframe: true,
      depthWrite: false,
      toneMapped: false,
    });
    const shield = new THREE.Mesh(new THREE.SphereGeometry(1.82, 18, 12), shieldMaterial);
    shield.scale.y = 1.35;
    group.add(shield);
    const shieldLight = new THREE.PointLight(0x62ead0, 3.2, 8, 2);
    group.add(shieldLight);
    group.userData = { core, rings, beacon, shield, shieldMaterial, shieldLight };
    return group;
  }

  function createCommandCarrierView() {
    const group = new THREE.Group();
    const hull = makeMaterial(0x34434a, { metalness: 0.88, roughness: 0.24, emissive: 0x0a2028, emissiveIntensity: 0.48 });
    const armor = makeMaterial(0x71838a, { metalness: 0.8, roughness: 0.3, emissive: 0x102a32, emissiveIntensity: 0.34 });
    const dark = makeMaterial(0x10181d, { metalness: 0.72, roughness: 0.38 });
    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xff3b2f, transparent: true, opacity: 1, toneMapped: false });

    const body = new THREE.Mesh(new THREE.BoxGeometry(5.8, 1.35, 8.8), hull);
    body.position.z = 0.4;
    group.add(body);
    const prow = new THREE.Mesh(new THREE.ConeGeometry(2.9, 5.2, 4), armor);
    prow.rotation.x = -Math.PI / 2;
    prow.rotation.z = Math.PI / 4;
    prow.position.z = -6.2;
    group.add(prow);
    const wing = new THREE.Mesh(new THREE.BoxGeometry(14.5, 0.35, 4.8), armor);
    wing.position.z = 0.6;
    group.add(wing);
    const tower = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.5, 2.8), dark);
    tower.position.set(0, 1.75, 1.2);
    group.add(tower);

    const engines = [];
    for (const x of [-4.4, -1.65, 1.65, 4.4]) {
      const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.7, 2.4, 10), dark);
      engine.rotation.x = Math.PI / 2;
      engine.position.set(x, -0.25, 4.15);
      group.add(engine);
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.5, 2.3, 10), new THREE.MeshBasicMaterial({ color: 0xff7438, transparent: true, opacity: 0.9 }));
      flame.rotation.x = Math.PI / 2;
      flame.position.set(x, -0.25, 6.25);
      group.add(flame);
      engines.push(flame);
    }

    const coreHousing = new THREE.Mesh(new THREE.BoxGeometry(3.8, 1.8, 0.34), coreMaterial);
    coreHousing.position.set(0, 0.35, 4.82);
    group.add(coreHousing);
    const core = new THREE.Mesh(new THREE.SphereGeometry(1.32, 20, 14), coreMaterial);
    core.position.set(0, 0.35, 5.08);
    group.add(core);
    const rings = [];
    for (let index = 0; index < 2; index += 1) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.5 + index * 0.42, 0.09, 8, 48), coreMaterial);
      ring.position.copy(core.position);
      ring.rotation.set(Math.PI / 2 + index * 0.55, index * 0.7, 0);
      group.add(ring);
      rings.push(ring);
    }
    const beacon = new THREE.PointLight(0xff3b2f, 8, 24, 2);
    beacon.position.copy(core.position);
    group.add(beacon);
    for (const x of [-6.5, 6.5]) {
      const navigation = new THREE.PointLight(x < 0 ? 0x55dfff : 0xff594c, 5, 15, 2);
      navigation.position.set(x, 0.45, 1.5);
      group.add(navigation);
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 8, 6),
        new THREE.MeshBasicMaterial({ color: x < 0 ? 0x55dfff : 0xff594c, toneMapped: false }),
      );
      marker.position.copy(navigation.position);
      group.add(marker);
    }
    group.userData = { core, coreMaterial, rings, engines, beacon };
    return group;
  }

  function createSurvivalPortalView() {
    const group = new THREE.Group();
    const rings = [];
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x5ff4db, transparent: true, opacity: 0.5, depthWrite: false, toneMapped: false });
    const warningMaterial = new THREE.MeshBasicMaterial({ color: 0xff6548, transparent: true, opacity: 0.42, depthWrite: false, toneMapped: false });
    for (let index = 0; index < 15; index += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(10.5 + Math.sin(index * 1.7) * 0.8, 0.12 + (index % 3) * 0.035, 8, 64),
        index % 4 === 3 ? warningMaterial : ringMaterial,
      );
      ring.position.z = -18 - index * 11;
      ring.rotation.z = index * 0.47;
      group.add(ring);
      rings.push(ring);
    }
    const gate = new THREE.Mesh(
      new THREE.TorusGeometry(11.6, 0.48, 12, 72),
      new THREE.MeshBasicMaterial({ color: 0xffcf55, transparent: true, opacity: 0.86, toneMapped: false }),
    );
    gate.position.z = -52;
    group.add(gate);
    const portalLight = new THREE.PointLight(0x61f1dd, 18, 80, 1.7);
    portalLight.position.set(0, 2, -42);
    group.add(portalLight);
    const particlePositions = new Float32Array(520 * 3);
    for (let index = 0; index < 520; index += 1) {
      const radius = randomRange(3.8, 10.2);
      const angle = randomRange(0, Math.PI * 2);
      particlePositions[index * 3] = Math.cos(angle) * radius;
      particlePositions[index * 3 + 1] = 1.5 + Math.sin(angle) * radius;
      particlePositions[index * 3 + 2] = randomRange(-170, 8);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0x8bfff0, size: 0.12, transparent: true, opacity: 0.72, depthWrite: false, toneMapped: false }),
    );
    group.add(particles);
    group.userData = { rings, gate, portalLight, particles };
    return group;
  }

  function createRpgShotView() {
    const group = new THREE.Group();
    const shell = new THREE.Mesh(
      new THREE.CylinderGeometry(0.17, 0.23, 1.45, 10),
      makeMaterial(0x425447, { metalness: 0.7, roughness: 0.3, emissive: 0x152313, emissiveIntensity: 0.35 }),
    );
    shell.rotation.x = Math.PI / 2;
    group.add(shell);
    const warhead = new THREE.Mesh(
      new THREE.ConeGeometry(0.24, 0.62, 10),
      makeMaterial(0xffcf3b, { metalness: 0.32, roughness: 0.36, emissive: 0x9a3c00, emissiveIntensity: 0.8 }),
    );
    warhead.rotation.x = -Math.PI / 2;
    warhead.position.z = -1.02;
    group.add(warhead);
    for (let index = 0; index < 4; index += 1) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.36, 0.45), makeMaterial(0x27343a, { metalness: 0.76, roughness: 0.28 }));
      fin.position.z = 0.67;
      fin.rotation.z = index * Math.PI / 2;
      group.add(fin);
    }
    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 1.1, 10),
      new THREE.MeshBasicMaterial({ color: 0xff5b28, transparent: true, opacity: 0.94, toneMapped: false }),
    );
    flame.rotation.x = Math.PI / 2;
    flame.position.z = 1.26;
    group.add(flame);
    const light = new THREE.PointLight(0xff9a36, 4.5, 9, 2);
    light.position.z = 0.7;
    group.add(light);
    group.userData = { flame, isPotassiumRpg: true };
    return group;
  }

  function createShotView(weaponId = "ripe-repeater", rage = false) {
    const group = new THREE.Group();
    const plantain = weaponId === "plantain-piercer";
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.44, 0.16, 0),
      new THREE.Vector3(-0.24, -0.03, 0),
      new THREE.Vector3(0, -0.11, 0),
      new THREE.Vector3(0.24, -0.03, 0),
      new THREE.Vector3(0.44, 0.16, 0),
    ]);
    const peel = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 12, 0.095, 7, false),
      makeMaterial(plantain ? 0x8fcf32 : 0xffd92f, {
        metalness: 0.05,
        roughness: 0.48,
        emissive: plantain ? 0x284b08 : 0x9b5f00,
        emissiveIntensity: 0.72,
      }),
    );
    group.add(peel);

    const tipGeometry = new THREE.SphereGeometry(0.082, 7, 5);
    const tipMaterial = makeMaterial(0x5b3515, { metalness: 0.02, roughness: 0.86 });
    const leftTip = new THREE.Mesh(tipGeometry, tipMaterial);
    leftTip.position.set(-0.46, 0.18, 0);
    leftTip.scale.set(0.72, 1.35, 0.72);
    leftTip.rotation.z = -0.62;
    group.add(leftTip);
    const rightTip = leftTip.clone();
    rightTip.position.x = 0.46;
    rightTip.rotation.z = 0.62;
    group.add(rightTip);

    const glow = new THREE.PointLight(plantain ? 0x9fe64d : 0xffc73d, 1.5, 4);
    group.add(glow);
    if (rage) {
      const rocketBody = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.16, 0.75, 8),
        makeMaterial(0x38464b, { metalness: 0.72, roughness: 0.3 }),
      );
      rocketBody.rotation.z = Math.PI / 2;
      rocketBody.position.x = 0.72;
      group.add(rocketBody);
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.14, 0.6, 8),
        new THREE.MeshBasicMaterial({ color: 0xff6a2d, transparent: true, opacity: 0.92 }),
      );
      flame.rotation.z = -Math.PI / 2;
      flame.position.x = 1.28;
      group.add(flame);
      group.userData.flame = flame;
    }
    group.scale.setScalar(weaponId === "cluster-bunch" ? 0.86 : plantain ? 1.3 : 1.18);
    if (rage) group.scale.multiplyScalar(1.18);
    group.userData.isBananaProjectile = true;
    group.userData.isRageRocket = rage;
    return group;
  }

  function createPickupView(type) {
    const group = new THREE.Group();
    if (type === "banana") {
      const banana = createShotView("ripe-repeater");
      banana.scale.multiplyScalar(1.28);
      group.add(banana);
    } else {
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(0.48, 14, 10),
        makeMaterial(0x8c5128, { metalness: 0.05, roughness: 0.88, emissive: 0x2c1207, emissiveIntensity: 0.45 }),
      );
      shell.scale.y = 0.9;
      group.add(shell);
      const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x24110b });
      [[-0.13, 0.14], [0.13, 0.14], [0, -0.08]].forEach(([x, y]) => {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 7, 5), eyeMaterial);
        eye.position.set(x, y, 0.44);
        group.add(eye);
      });
    }
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.035, 7, 32),
      new THREE.MeshBasicMaterial({ color: type === "banana" ? 0xffdf55 : 0x62ead0, transparent: true, opacity: 0.78 }),
    );
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    const light = new THREE.PointLight(type === "banana" ? 0xffd94f : 0x62ead0, 2.2, 6);
    group.add(light);
    group.userData.ring = ring;
    return group;
  }

  function buildAtmosphere() {
    const positions = new Float32Array(360 * 3);
    for (let i = 0; i < 360; i += 1) {
      positions[i * 3] = randomRange(-60, 60);
      positions[i * 3 + 1] = randomRange(-1, 28);
      positions[i * 3 + 2] = randomRange(-150, -12);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starField = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xc6eeea, size: 0.12, transparent: true, opacity: 0.5, depthWrite: false }));
    scene.add(starField);

    cloudGroup = new THREE.Group();
    const cloudMat = new THREE.MeshBasicMaterial({ color: 0x9aa9aa, transparent: true, opacity: 0.08, depthWrite: false });
    for (let i = 0; i < 24; i += 1) {
      const cloud = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 5), cloudMat);
      cloud.scale.set(randomRange(4, 9), randomRange(0.7, 1.6), randomRange(2, 5));
      cloud.position.set(randomRange(-28, 28), randomRange(4, 15), randomRange(-130, -12));
      cloudGroup.add(cloud);
    }
    scene.add(cloudGroup);
  }

  function applyCityEnvironment(environment) {
    if (!environment || !scene) return;
    scene.background.setHex(environment.sky);
    scene.fog.color.setHex(environment.fog);
    hemisphereLight?.color.setHex(environment.light);
    playerLight?.color.setHex(environment.light);
  }

  function findJetByEntityId(entityId) {
    return jets.find((jet) => jet.entityId === entityId) || null;
  }

  function createDirector() {
    return createCombatDirector({
      seed,
      callbacks: {
        onAircraftSpawn(event) {
          if (state !== "playing") return false;
          spawnJet(event);
          return true;
        },
        onMissileWarning(event) {
          if (state !== "playing") return false;
          const source = findJetByEntityId(event.sourceEntityId);
          return source ? beginMissileLock(source, event) : false;
        },
        onMissileLaunch(event) {
          const missile = missiles.find((item) => item.directorId === event.missileId && item.state === "locking");
          if (!missile) return false;
          missile.pendingLaunch = event;
          if (missile.timer <= 0) launchMissile(missile, event);
          return true;
        },
      },
    });
  }

  async function init3D() {
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: "high-performance" });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.12;
      scene = new THREE.Scene();
      scene.background = new THREE.Color(LEVELS[0].sky);
      scene.fog = new THREE.FogExp2(LEVELS[0].fog, 0.018);
      camera = new THREE.PerspectiveCamera(56, 1, 0.1, 220);
      camera.position.set(0, 3.1, 13.5);
      camera.lookAt(0, 1, -26);

      hemisphereLight = new THREE.HemisphereLight(0xbde9e2, 0x0a1118, 2.25);
      scene.add(hemisphereLight);
      keyLight = new THREE.DirectionalLight(0xffe0a3, 3.1);
      keyLight.position.set(-8, 13, 8);
      scene.add(keyLight);
      playerLight = new THREE.PointLight(0xffc74b, 4.2, 14);
      playerLight.position.set(0, 3, 5);
      scene.add(playerLight);

      buildAtmosphere();
      cityStream = createCityStream({ scene, level: 0, seed, speed: LEVELS[0].speed * 0.5 });
      applyCityEnvironment(cityStream.getEnvironment());
      vfxManager = GameVFX.create({ scene, camera, mobile: innerWidth <= 700, reducedMotion, quality: "auto", seed });
      playerController = await PlayerVisual.create({
        scene,
        camera,
        renderer,
        assetUrl: "./assets/hero-monkey-chase-v2.png",
        mobile: innerWidth <= 700,
        reducedMotion,
      });
      PlayerVisual.applyLoadout(playerController, profile.equipped);
      PlayerVisual.update(playerController, 0, monkey, { active: false, speed: LEVELS[0].speed });
      PlayerVisual.updateCamera(playerController, FIXED_STEP, monkey);
      combatDirector = createDirector();
      try {
        cinematic = createCinematicDirector({
          canvas: briefingCanvas,
          vesperAsset: briefingFallback.currentSrc || briefingFallback.src,
          wingtailAsset: hangarPortrait.currentSrc || hangarPortrait.src,
          reducedMotion,
          onCue: handleCinematicCue,
          onChoice: showCinematicChoices,
          onComplete: completeCinematic,
          isVoicePlaying: () => cinematicVoiceActive,
        });
      } catch (cinematicError) {
        console.warn("Cinematic renderer unavailable; using direct briefing.", cinematicError);
        cinematic = null;
      }

      resize();
      state = "ready";
      startButton.disabled = false;
      startButton.textContent = finalePreview ? "Open Finale Loadout" : "Start Transmission";
      announce("3D flight systems ready.");
    } catch (error) {
      console.error(error);
      state = "unsupported";
      overlayTitle.textContent = "3D flight unavailable";
      overlayText.textContent = "This browser could not start the WebGL renderer. Try a current version of Safari, Chrome, or Edge.";
      startButton.hidden = true;
    }
  }

  function resize() {
    if (!renderer || !camera) return;
    const width = canvas.clientWidth || innerWidth;
    const height = canvas.clientHeight || innerHeight;
    const mobile = width <= 700;
    mobileMode = mobile;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.5 : 2) * qualityScale);
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(1, height);
    camera.fov = mobile && height > width ? 65 : 55;
    camera.updateProjectionMatrix();
    PlayerVisual.setMobile(playerController, mobile);
    cinematic?.resize();
    victory?.resize();
    document.body.classList.toggle("touch-controls-ready", mobile && matchMedia("(pointer: coarse)").matches);
    touchControls?.setAttribute("aria-hidden", String(!(mobile && matchMedia("(pointer: coarse)").matches)));
  }

  function setOverlayVisible(visible) {
    overlay.classList.toggle("is-visible", visible);
    overlay.setAttribute("aria-hidden", String(!visible));
    canvas.inert = visible;
  }

  function handleCinematicCue(cue = {}) {
    if (Number.isFinite(cue.progress) && cinematicProgress) {
      cinematicProgress.style.width = Math.round(cue.progress * 100) + "%";
    }
    if (!cue.speaker && !cue.text) return;
    if (cue.speaker) {
      cinematicSpeaker.textContent = cue.speaker;
      dialogueSpeaker.textContent = cue.speaker;
    }
    if (cue.text) {
      cinematicSubtitle.textContent = cue.text;
      dialogueSubtitle.textContent = cue.text;
    }
    if (Array.isArray(cue.telemetry) && cinematicTelemetry) {
      cinematicTelemetry.replaceChildren(...cue.telemetry.map((entry) => {
        const row = document.createElement("span");
        const [label, status = ""] = entry.split(" // ");
        row.append(document.createTextNode(label));
        const value = document.createElement("strong");
        value.textContent = status;
        row.append(value);
        return row;
      }));
      cinematicTelemetry.hidden = false;
      cinematicTelemetry.setAttribute("aria-hidden", "false");
    }
    if (cue.voice) playCinematicVoice(cue.voice);
    if (cue.speaker === "Skyshield command") audio.playMissileLaunch?.();
    else if (cue.speaker === "Evacuation channel") audio.playImpact?.(true);
    else if (cue.speaker === "Commander Vesper") audio.playLevel?.();
  }

  function playCinematicVoice(source) {
    cinematicVoice.pause();
    cinematicVoice.currentTime = 0;
    cinematicVoiceActive = true;
    cinematicVoice.src = source;
    cinematicVoice.muted = Boolean(audio.isMuted?.());
    cinematicVoice.volume = 0.92;
    cinematicVoice.play().catch(() => { cinematicVoiceActive = false; });
  }

  function stopCinematicVoice() {
    cinematicVoiceActive = false;
    cinematicVoice.pause();
    cinematicVoice.currentTime = 0;
    cinematicVoice.removeAttribute("src");
    cinematicVoice.load();
  }

  function startCinematic() {
    if (briefingPhase !== "ready") return;
    if (!cinematic) {
      briefingPhase = "complete";
      showHangar();
      return;
    }
    briefingPhase = "playing";
    state = "cinematic";
    audio.init?.();
    audio.setPaused?.(false);
    stopCinematicVoice();
    overlay.dataset.mode = "cinematic";
    overlayTitle.hidden = true;
    overlayText.hidden = true;
    briefingOrder.hidden = true;
    briefingFallback.hidden = true;
    cinematicSlate.hidden = false;
    cinematicTelemetry.hidden = false;
    cinematicDialogue.hidden = false;
    dialogueChoices.hidden = true;
    startButton.hidden = true;
    skipIntroButton.hidden = false;
    briefingIdentity.textContent = "Field Transmission";
    briefingChannel.textContent = "Archive 72H // Live reconstruction";
    cinematic.start();
    announce("Emergency transmission started. Skip Intro is available.");
  }

  function showCinematicChoices() {
    briefingPhase = "choice";
    state = "dialogue";
    skipIntroButton.hidden = true;
    dialogueSpeaker.textContent = "Wingtail";
    dialogueSubtitle.textContent = "Vesper is waiting for your answer.";
    cinematicSpeaker.textContent = "Wingtail";
    cinematicSubtitle.textContent = "YOUR RESPONSE REQUIRED";
    dialogueChoices.hidden = false;
    dialogueChoices.querySelector("button")?.focus({ preventScroll: true });
    announce("Choose Wingtail's response.");
  }

  function answerCinematic(response) {
    if (briefingPhase !== "choice") return;
    briefingPhase = "resolving";
    state = "cinematic";
    dialogueChoices.hidden = true;
    cinematic.choose(response);
  }

  function completeCinematic() {
    if (briefingPhase === "complete") return;
    briefingPhase = "complete";
    localStorage.setItem("monkeySeeMonkeyPewIntroSeen", "1");
    audio.setPaused?.(true);
    stopCinematicVoice();
    cinematic?.dispose();
    cinematic = null;
    cinematicVoicePreloads.splice(0);
    cinematicSlate.hidden = true;
    cinematicTelemetry.hidden = true;
    cinematicDialogue.hidden = true;
    skipIntroButton.hidden = true;
    showHangar();
  }

  function skipCinematicSequence() {
    if (!["playing", "choice", "resolving"].includes(briefingPhase)) return;
    cinematic?.skip();
  }

  function reset() {
    jets.splice(0).forEach((item) => removeView(item.view));
    missiles.splice(0).forEach((item) => removeView(item.view));
    shots.splice(0).forEach((item) => removeView(item.view));
    pickups.splice(0).forEach((item) => removeView(item.view));
    commandRelays.splice(0).forEach((item) => removeView(item.view));
    if (commandCarrier) removeView(commandCarrier.view);
    if (survivalPortal) removeView(survivalPortal);
    commandCarrier = null;
    survivalPortal = null;
    elapsed = 0;
    distance = 0;
    points = 0;
    chain = 1;
    chainTimer = 0;
    shotCooldown = 0;
    runUpgrades = createRunUpgrades();
    runStats = resolveRunStats(profile, runUpgrades);
    shields = runStats.maxShields + difficulty.startingShields;
    runCoconuts = 0;
    fury = 0;
    rageTimer = 0;
    rageAutoFire = 0;
    rageReadyAnnounced = false;
    pickupTimer = 2.4;
    takedowns = 0;
    relayObjectiveStarted = false;
    relaysDestroyed = 0;
    bossBattleStarted = false;
    portalSequenceActive = false;
    portalTimer = 0;
    wingtailHealth = WINGTAIL_MAX_HEALTH;
    missionObjective = null;
    objectiveOvertime = 0;
    ceilingExposure = 0;
    missionVoice.pause();
    missionVoice.currentTime = 0;
    hideVesperComms();
    currentLevel = 0;
    seed = (Date.now() ^ 0x74ac31) >>> 0;
    cityStream?.setSeed(seed, { regenerate: true });
    cityStream?.setLevel(0, { immediate: true });
    if (cityStream?.root) cityStream.root.visible = true;
    combatDirector?.stop({ clearSchedule: true });
    if (cityStream?.root) cityStream.root.visible = false;
    combatDirector = createDirector();
    combatDirector.reset({ levelIndex: 0, delay: 0.85 });
    Object.assign(monkey, { x: 0, y: 0.7, z: PLAYER_Z, vy: 0, vx: 0, lane: 1, bank: 0, pitch: 0 });
    scoreNode.textContent = "0";
    pointsNode.textContent = "0";
    multiplierNode.textContent = "1.00×";
    PlayerVisual.applyLoadout(playerController, profile.equipped);
    updateProgressDisplays();
    missileWarning.hidden = true;
    lockMeter.style.width = "0%";
    targetingHud?.classList.remove("is-locked");
    if (targetStatus) targetStatus.textContent = "Scanning";
    if (targetRange) targetRange.hidden = true;
    updateWeaponCooldown();
    updateRageHud();
    updateObjectiveHud();
    updateBossHud();
    setLevel(0, false);
  }

  function startGame() {
    if (state === "loading" || state === "unsupported") return;
    reset();
    setDialogVisible(hangarOverlay, false);
    state = "playing";
    overlay.dataset.mode = "flight";
    setOverlayVisible(false);
    shootButton.disabled = false;
    pauseButton.disabled = false;
    if (liftButton) liftButton.disabled = false;
    combatDirector?.start({ levelIndex: 0, delay: 0.85 });
    if (bossPreview || relayPreview || finalePreview) {
      elapsed = LEVELS.at(-1).time;
      setLevel(LEVELS.length - 1, false);
      if (finalePreview) {
        shields = Math.max(shields, 5);
        updateProgressDisplays();
      }
      if (bossPreview) startBossBattle();
      else startRelayObjective();
    }
    audio.init?.();
    audio.setPaused?.(false);
    audio.startRun?.(0);
    updateRageHud();
    canvas.focus({ preventScroll: true });
    announce("3D flight started.");
  }

  function flap() {
    if (state !== "playing") return;
    monkey.vy = Math.min(monkey.vy + 3.5 * Math.sqrt(runStats.lift), 6.4 * runStats.lift);
    monkey.pitch = 0.34;
    GameVFX.spawn(vfxManager, "jetExhaust", {
      position: { x: monkey.x, y: monkey.y - 0.1, z: monkey.z + 0.35 },
      velocity: { x: 0, y: -0.2, z: 3.8 },
      life: 0.22,
      width: 0.11,
      length: 0.9,
      color: 0xe8c454,
    });
    audio.playFlap?.(clamp(monkey.vy / 6, 0.45, 1));
  }

  function changeLane(direction) {
    if (state !== "playing") return;
    monkey.lane = clamp(monkey.lane + direction, 0, LANES.length - 1);
  }

  function findAimTarget() {
    let target = null;
    let bestScore = Infinity;
    if (commandCarrier && commandCarrier.z <= PLAYER_Z && commandCarrier.z >= -120) {
      const bossScore = Math.hypot(commandCarrier.x - monkey.x, commandCarrier.y - monkey.y) * 0.45 + Math.abs(commandCarrier.z) * 0.008;
      if (bossScore < 9.8) return commandCarrier;
    }
    for (const relay of commandRelays) {
      if (relay.z > PLAYER_Z || relay.z < -115) continue;
      const score = Math.hypot(relay.x - monkey.x, relay.y - monkey.y) * 0.72 + Math.abs(relay.z) * 0.012;
      if (score < 9.8 && score < bestScore) {
        target = relay;
        bestScore = score;
      }
    }
    if (target) return target;
    for (const jet of jets) {
      if (jet.z > PLAYER_Z || jet.z < -82) continue;
      const dx = jet.x - monkey.x;
      const dy = jet.y - monkey.y;
      const score = Math.hypot(dx, dy) + Math.abs(jet.z) * 0.018;
      if (score < 7.4 && score < bestScore) {
        target = jet;
        bestScore = score;
      }
    }
    return target;
  }

  function updateWeaponCooldown() {
    const cooldown = bossBattleStarted ? RPG_COOLDOWN : rageTimer > 0 ? RAGE_FIRE_INTERVAL : runStats.cooldown;
    const charge = Math.round(clamp(1 - shotCooldown / cooldown, 0, 1) * 100);
    weaponCooldown?.style.setProperty("--weapon-charge", String(charge));
    weaponCooldown?.setAttribute("aria-valuenow", String(charge));
  }

  function updateRageHud() {
    const active = rageTimer > 0;
    const ready = !active && fury >= FURY_THRESHOLD;
    const charge = active ? clamp(rageTimer / RAGE_DURATION, 0, 1) : clamp(fury / FURY_THRESHOLD, 0, 1);
    rageHud?.classList.toggle("is-active", active);
    rageHud?.classList.toggle("is-ready", ready);
    if (rageHud) {
      rageHud.disabled = !ready || state !== "playing";
      rageHud.setAttribute("aria-label", active ? "Go Bananas active" : ready ? "Activate Go Bananas" : "Go Bananas charge");
    }
    if (rageActionButton) {
      rageActionButton.hidden = !ready;
      rageActionButton.disabled = !ready || state !== "playing";
    }
    if (rageLabel) rageLabel.textContent = active ? "Banana Rage" : ready ? "Go Bananas Ready" : "Go Bananas";
    if (rageCount) rageCount.textContent = active ? `${rageTimer.toFixed(1)}s` : ready ? "READY" : `${Math.floor(fury)} / ${FURY_THRESHOLD}`;
    rageMeter?.style.setProperty("width", `${Math.round(charge * 100)}%`);
    rageMeter?.parentElement?.setAttribute("aria-valuenow", String(active ? Math.ceil(rageTimer) : Math.floor(fury)));
    rageMeter?.parentElement?.setAttribute("aria-valuemax", String(active ? RAGE_DURATION : FURY_THRESHOLD));
  }

  function activateRage() {
    if (state !== "playing" || rageTimer > 0 || fury < FURY_THRESHOLD) return false;
    fury = 0;
    rageTimer = RAGE_DURATION;
    rageAutoFire = 0;
    rageReadyAnnounced = false;
    awardSkill("GO BANANAS", 750);
    GameVFX.spawn(vfxManager, "hitFlash", { color: 0xffb52e, intensity: 0.7, impulse: 0.32 });
    audio.playLevel?.(3);
    updateRageHud();
    announce("Go Bananas activated. Heavy banana rockets online for eight seconds.");
    return true;
  }

  function addFury(amount) {
    if (rageTimer > 0) {
      rageTimer = Math.min(RAGE_DURATION + 2, rageTimer + Number(amount || 0) * 0.18);
    } else {
      const wasReady = fury >= FURY_THRESHOLD;
      fury = Math.min(FURY_THRESHOLD, fury + Math.max(0, Number(amount) || 0));
      if (!wasReady && fury >= FURY_THRESHOLD && !rageReadyAnnounced) {
        rageReadyAnnounced = true;
        announce("Go Bananas is ready.");
      }
    }
    updateRageHud();
  }

  function updateRage(dt) {
    if (rageTimer <= 0) return;
    rageTimer = Math.max(0, rageTimer - dt);
    rageAutoFire -= dt;
    if (rageAutoFire <= 0) {
      shotCooldown = 0;
      fire(true);
      rageAutoFire = RAGE_FIRE_INTERVAL;
    }
    if (rageTimer <= 0) {
      rageHud?.classList.remove("is-active");
      announce("Banana rage depleted.");
    }
    updateRageHud();
  }

  function fire(rageShot = rageTimer > 0) {
    if (state !== "playing" || shotCooldown > 0) return;
    const rpgShot = bossBattleStarted && Boolean(commandCarrier);
    shotCooldown = rpgShot ? RPG_COOLDOWN : rageShot ? RAGE_FIRE_INTERVAL : runStats.cooldown;
    const target = findAimTarget();
    const direction = new THREE.Vector3(0, 0, -1);
    if (target) {
      tempV.set(target.x - monkey.x, target.y - monkey.y, target.z - monkey.z).normalize();
      const strategicTarget = target === commandCarrier || commandRelays.includes(target);
      direction.lerp(tempV, strategicTarget ? 0.96 : innerWidth <= 700 ? 0.82 : 0.68).normalize();
    }
    const weaponId = profile.equipped.weapon;
    const projectileCount = rpgShot || rageShot ? 1 : runStats.projectiles;
    const spread = rpgShot || rageShot ? 0 : runStats.spread;
    for (let index = 0; index < projectileCount; index += 1) {
      const offset = index - (projectileCount - 1) / 2;
      const shotDirection = direction.clone();
      shotDirection.x += offset * spread;
      shotDirection.y += Math.abs(offset) * spread * 0.16;
      shotDirection.normalize();
      const view = rpgShot ? createRpgShotView() : createShotView(weaponId, rageShot);
      if (shots.length >= MAX_ACTIVE_SHOTS) {
        const oldest = shots.shift();
        removeView(oldest?.view);
      }
      view.position.set(monkey.x + offset * 0.16, monkey.y, monkey.z - 0.9);
      scene.add(view);
      const shot = {
        x: view.position.x,
        y: view.position.y,
        z: view.position.z,
        previous: view.position.clone(),
        velocity: shotDirection.multiplyScalar(rpgShot ? 68 : rageShot ? Math.max(72, runStats.projectileVelocity * 1.25) : runStats.projectileVelocity),
        damage: rpgShot ? RPG_DAMAGE : rageShot ? Math.max(4, runStats.damage * 2) : runStats.damage,
        life: rpgShot ? 2.8 : rageShot ? 2.5 : 1.9,
        rage: rageShot,
        rpg: rpgShot,
        trailTimer: 0,
        spin: randomRange(11, 16) * (simRandom() > 0.5 ? 1 : -1),
        tumble: randomRange(7, 11),
        view,
      };
      shots.push(shot);
      GameVFX.spawn(vfxManager, "projectileTrail", {
        position: view.position,
        velocity: shot.velocity,
        life: 0.14,
        width: rpgShot ? 0.18 : rageShot ? 0.11 : weaponId === "cluster-bunch" ? 0.05 : 0.075,
        length: rpgShot ? 2.5 : rageShot ? 1.8 : 1.2,
        color: rpgShot ? 0xffb13b : rageShot ? 0xff6a32 : weaponId === "plantain-piercer" ? 0xa8ec58 : 0xffed68,
      });
    }
    updateBossHud();
    updateWeaponCooldown();
    audio.playShot?.();
  }

  function updateObjectiveHud() {
    const remaining = Math.max(0, 3 - relaysDestroyed);
    const active = Boolean(missionObjective) || relayObjectiveStarted || portalSequenceActive;
    if (objectiveHud) objectiveHud.hidden = !active || state === "victory" || state === "victory-result";
    if (portalSequenceActive) {
      const progress = Math.round(clamp(portalTimer / PORTAL_DURATION, 0, 1) * 100);
      if (objectiveLabel) objectiveLabel.textContent = "Survival Portal";
      if (objectiveCount) objectiveCount.textContent = String(progress);
      if (objectiveUnit) objectiveUnit.textContent = "% breach";
      objectiveMeter?.style.setProperty("width", `${progress}%`);
      objectiveMeter?.parentElement?.setAttribute("aria-label", "Survival portal breach");
      objectiveMeter?.parentElement?.setAttribute("aria-valuemax", "100");
      objectiveMeter?.parentElement?.setAttribute("aria-valuenow", String(progress));
    } else if (relayObjectiveStarted) {
      if (objectiveLabel) objectiveLabel.textContent = "Relay Hunt";
      if (objectiveCount) objectiveCount.textContent = String(remaining);
      if (objectiveUnit) objectiveUnit.textContent = "remaining";
      objectiveMeter?.style.setProperty("width", `${Math.round((relaysDestroyed / 3) * 100)}%`);
      objectiveMeter?.parentElement?.setAttribute("aria-label", "Command relays destroyed");
      objectiveMeter?.parentElement?.setAttribute("aria-valuemax", "3");
      objectiveMeter?.parentElement?.setAttribute("aria-valuenow", String(relaysDestroyed));
    } else if (missionObjective) {
      const progress = Math.min(missionObjective.target, missionObjective.progress);
      if (objectiveLabel) objectiveLabel.textContent = missionObjective.label;
      if (objectiveCount) objectiveCount.textContent = `${progress} / ${missionObjective.target}`;
      if (objectiveUnit) objectiveUnit.textContent = missionObjective.unit;
      objectiveMeter?.style.setProperty("width", `${Math.round((progress / missionObjective.target) * 100)}%`);
      objectiveMeter?.parentElement?.setAttribute("aria-label", missionObjective.label + " progress");
      objectiveMeter?.parentElement?.setAttribute("aria-valuemax", String(missionObjective.target));
      objectiveMeter?.parentElement?.setAttribute("aria-valuenow", String(progress));
    }
  }

  function updateBossHud() {
    const active = bossBattleStarted && Boolean(commandCarrier) && state === "playing";
    if (bossBattleHud) bossBattleHud.hidden = !active;
    document.body.classList.toggle("boss-battle-active", active);
    if (!active) return;
    const pilotPercent = Math.round(clamp(wingtailHealth / WINGTAIL_MAX_HEALTH, 0, 1) * 100);
    const titanPercent = Math.round(clamp(commandCarrier.hp / commandCarrier.maxHp, 0, 1) * 100);
    wingtailHealthMeter?.style.setProperty("width", `${pilotPercent}%`);
    wingtailHealthMeter?.parentElement?.setAttribute("aria-valuenow", String(pilotPercent));
    if (wingtailHealthText) wingtailHealthText.textContent = String(Math.ceil(wingtailHealth));
    titanHealthMeter?.style.setProperty("width", `${titanPercent}%`);
    titanHealthMeter?.parentElement?.setAttribute("aria-valuenow", String(titanPercent));
    if (titanHealthText) titanHealthText.textContent = `${titanPercent}%`;
    if (titanPhase) {
      const armor = Math.round(([0.82, 0.68, 0.54][commandCarrier.phaseIndex - 1] || 0.82) * 100);
      titanPhase.textContent = `Titan · P${commandCarrier.phaseIndex} · ${armor}% armor`;
    }
    if (rpgStatus) rpgStatus.textContent = shotCooldown <= 0 ? "Armed" : "Reloading";
  }

  function beginMissionObjective(levelIndex) {
    const spec = MISSION_OBJECTIVES[levelIndex];
    missionObjective = spec ? { ...spec, progress: 0, complete: false, levelIndex } : null;
    objectiveOvertime = 0;
    if (missionObjective?.type === "pickup") pickupTimer = Math.min(pickupTimer, 1.2);
    updateObjectiveHud();
  }

  function advanceMissionObjective(type) {
    if (!missionObjective || missionObjective.complete || missionObjective.type !== type) return;
    missionObjective.progress = Math.min(missionObjective.target, missionObjective.progress + 1);
    if (missionObjective.progress >= missionObjective.target) {
      missionObjective.complete = true;
      earnCoconuts(15);
      awardSkill(`${missionObjective.label.toUpperCase()} COMPLETE`, 1200);
      announce(`${missionObjective.label} complete. The next city sector is open.`);
    }
    updateObjectiveHud();
  }

  function startRelayObjective() {
    if (relayObjectiveStarted || !scene) return;
    relayObjectiveStarted = true;
    relaysDestroyed = 0;
    const lanes = [0, 2, 1];
    const altitudes = [0.1, 2.15, -0.65];
    for (let index = 0; index < 3; index += 1) {
      const view = createCommandRelayView();
      const coreHp = Math.ceil((20 + index * 8) * difficulty.enemyHealth);
      const shieldHp = Math.ceil((14 + index * 7) * difficulty.enemyHealth);
      const relay = {
        spec: { name: `COMMAND RELAY ${index + 1}` },
        view,
        hp: coreHp,
        maxHp: coreHp,
        shieldHp,
        maxShieldHp: shieldHp,
        lane: lanes[index],
        x: LANES[lanes[index]],
        y: altitudes[index],
        z: -72 - index * 48,
        phase: index * 2.1,
        fireTimer: 2.6 + index * 0.9,
        radius: 1.82,
      };
      view.position.set(relay.x, relay.y, relay.z);
      scene.add(view);
      commandRelays.push(relay);
    }
    updateObjectiveHud();
    showVesperComms();
    announce("Relay Hunt active. Break each cyan defense shield, destroy the red core, and evade relay counterfire.");
  }

  function destroyCommandRelay(index) {
    const relay = commandRelays[index];
    if (!relay) return;
    GameVFX.spawn(vfxManager, "explosion", { position: relay, count: 38, scale: 1.9, speed: 9, color: 0xff563d, impulse: 1.05 });
    GameVFX.spawn(vfxManager, "hitFlash", { color: 0xffb13b, intensity: 0.78, impulse: 0.45 });
    removeView(relay.view);
    commandRelays.splice(index, 1);
    relaysDestroyed += 1;
    earnCoconuts(20);
    addFury(3);
    awardSkill("COMMAND RELAY DESTROYED", 2400);
    audio.playJetDestroyed?.(clamp(relay.x / 8, -1, 1));
    updateObjectiveHud();
    if (relaysDestroyed >= 3) startPortalSequence();
  }

  function startPortalSequence() {
    if (portalSequenceActive || bossBattleStarted || !scene) return;
    relayObjectiveStarted = false;
    portalSequenceActive = true;
    portalTimer = 0;
    wingtailHealth = WINGTAIL_MAX_HEALTH;
    jets.splice(0).forEach((jet) => removeView(jet.view));
    missiles.splice(0).forEach((missile) => removeView(missile.view));
    missileWarning.hidden = true;
    lockMeter.style.width = "0%";
    combatDirector?.stop({ clearSchedule: true });
    survivalPortal = createSurvivalPortalView();
    scene.add(survivalPortal);
    updateObjectiveHud();
    GameVFX.spawn(vfxManager, "hitFlash", { color: 0x61ead5, intensity: 0.9, impulse: 0.6 });
    announce("Vesper: Relay lattice collapsing. Enter the survival portal. I am arming Wingtail with the Potassium RPG.");
  }

  function updateSurvivalPortal(dt) {
    if (!survivalPortal) return;
    portalTimer += portalSequenceActive ? dt : 0;
    const speed = portalSequenceActive ? 34 : 22 + (commandCarrier?.phaseIndex || 1) * 5;
    survivalPortal.userData.rings.forEach((ring, index) => {
      ring.position.z += speed * dt;
      if (ring.position.z > 10) ring.position.z -= 165;
      ring.rotation.z += dt * (0.36 + index * 0.025) * (index % 2 ? -1 : 1);
      ring.material.opacity = 0.34 + Math.sin(elapsed * 2.8 + index) * 0.16;
    });
    survivalPortal.userData.gate.rotation.z -= dt * 0.7;
    survivalPortal.userData.gate.scale.setScalar(1 + Math.sin(elapsed * 3.8) * 0.035);
    survivalPortal.userData.portalLight.intensity = 14 + Math.sin(elapsed * 4.5) * 4;
    const positions = survivalPortal.userData.particles.geometry.attributes.position;
    for (let index = 2; index < positions.array.length; index += 3) {
      positions.array[index] += speed * dt * 1.35;
      if (positions.array[index] > 12) positions.array[index] -= 180;
    }
    positions.needsUpdate = true;
    survivalPortal.userData.particles.rotation.z += dt * 0.035;
    if (portalSequenceActive) {
      updateObjectiveHud();
      if (portalTimer >= PORTAL_DURATION) startBossBattle();
    }
  }

  function startBossBattle() {
    if (bossBattleStarted || !scene) return;
    bossBattleStarted = true;
    portalSequenceActive = false;
    relayObjectiveStarted = false;
    if (!survivalPortal) {
      survivalPortal = createSurvivalPortalView();
      scene.add(survivalPortal);
    }
    if (cityStream?.root) cityStream.root.visible = false;
    const view = createCommandCarrierView();
    commandCarrier = {
      spec: { name: "SKYSHIELD TITAN" },
      view,
      hp: difficulty.bossHp,
      maxHp: difficulty.bossHp,
      x: 0,
      y: 2.1,
      z: -108,
      phase: 0,
      phaseIndex: 1,
      radius: 3.45,
      fireTimer: 2.4,
    };
    view.position.set(commandCarrier.x, commandCarrier.y, commandCarrier.z);
    scene.add(view);
    updateObjectiveHud();
    updateBossHud();
    GameVFX.spawn(vfxManager, "hitFlash", { color: 0xff382f, intensity: 0.72, impulse: 0.5 });
    audio.playLevel?.(7);
    announce("Portal breach complete. Potassium RPG armed. Break the Titan across all three combat phases.");
  }

  function updateCommandCarrier(dt) {
    if (!commandCarrier) return;
    const boss = commandCarrier;
    boss.phase += dt;
    const healthRatio = clamp(boss.hp / boss.maxHp, 0, 1);
    const nextPhase = healthRatio > 0.66 ? 1 : healthRatio > 0.33 ? 2 : 3;
    if (nextPhase !== boss.phaseIndex) {
      boss.phaseIndex = nextPhase;
      boss.fireTimer = Math.min(boss.fireTimer, 0.75);
      wingtailHealth = Math.min(WINGTAIL_MAX_HEALTH, wingtailHealth + 18);
      updateBossHud();
      GameVFX.spawn(vfxManager, "hitFlash", { color: nextPhase === 3 ? 0xff3e2f : 0xffb13b, intensity: 0.84, impulse: 0.55 });
      announce(nextPhase === 2 ? "Titan armor breached. Vesper patched 18 health. Phase two: missile lattice deployed." : "Titan core exposed. Emergency repair complete. Final phase: survive the saturation barrage.");
    }
    if (boss.z < -55) boss.z = Math.min(-55, boss.z + flightSpeed() * 0.2 * dt);
    boss.x = Math.sin(boss.phase * (0.42 + boss.phaseIndex * 0.11)) * (4.2 + boss.phaseIndex * 1.25);
    boss.y = 1.75 + Math.sin(boss.phase * (0.68 + boss.phaseIndex * 0.08)) * (0.9 + boss.phaseIndex * 0.42);
    boss.view.position.set(boss.x, boss.y, boss.z);
    boss.view.rotation.z = Math.sin(boss.phase * 0.46) * -0.08;
    boss.view.userData.rings.forEach((ring, index) => { ring.rotation.z += dt * (0.8 + index * 0.35); });
    boss.view.userData.engines.forEach((flame, index) => { flame.scale.y = 0.82 + Math.sin(elapsed * 22 + index) * 0.18; });
    boss.view.userData.core.scale.setScalar(0.9 + Math.sin(elapsed * 5.5) * 0.12);
    boss.view.userData.beacon.intensity = 7 + Math.sin(elapsed * 6) * 2;

    boss.fireTimer -= dt;
    if (boss.z >= -72 && boss.fireTimer <= 0 && missiles.length < missileLimit() + 2) {
      for (let salvo = 0; salvo < boss.phaseIndex; salvo += 1) {
        if (missiles.length >= missileLimit() + 2) break;
        const missile = beginMissileLock(boss, {
          missileId: `titan-${seed}-${Math.floor(elapsed * 1000)}-${salvo}`,
          leadTime: clamp((1.35 - salvo * 0.12) / difficulty.missileSpeed, 0.62, 1.45),
          bearingHint: salvo % 2 ? "left" : boss.x > 1 ? "right" : "ahead",
        });
        if (missile) {
          missile.pendingLaunch = {
            speedScale: difficulty.missileSpeed * (1 + boss.phaseIndex * 0.05),
            guidanceScale: clamp(difficulty.missileSpeed + boss.phaseIndex * 0.05, 0.95, 1.4),
            lifetime: difficultyId === "insanity" ? 7.2 : 6.2,
          };
        }
      }
      boss.fireTimer = difficulty.bossFireInterval * [1, 0.78, 0.58][boss.phaseIndex - 1] * randomRange(0.86, 1.12);
    }
    updateBossHud();
  }

  function destroyCommandCarrier() {
    if (!commandCarrier) return;
    const boss = commandCarrier;
    for (let burst = 0; burst < 4; burst += 1) {
      GameVFX.spawn(vfxManager, "explosion", {
        position: { x: boss.x + randomRange(-3.5, 3.5), y: boss.y + randomRange(-1.2, 1.2), z: boss.z + randomRange(-3.5, 3.5) },
        count: 34,
        scale: 2.2,
        speed: 10,
        color: burst % 2 ? 0xffc04d : 0xff4935,
        impulse: 1.1,
      });
    }
    removeView(boss.view);
    commandCarrier = null;
    updateBossHud();
    awardSkill("SKYSHIELD TITAN DESTROYED", 12000);
    earnCoconuts(100);
    audio.playJetDestroyed?.(0);
    winGame();
  }

  function updateCommandRelays(dt) {
    if (!relayObjectiveStarted) return;
    const speed = flightSpeed() * 0.43;
    for (let index = commandRelays.length - 1; index >= 0; index -= 1) {
      const relay = commandRelays[index];
      relay.z += speed * dt;
      relay.phase += dt;
      relay.x = LANES[relay.lane] + Math.sin(relay.phase * 0.82) * 0.55;
      relay.y += Math.sin(relay.phase * 1.13) * dt * 0.12;
      relay.view.position.set(relay.x, relay.y, relay.z);
      relay.view.rotation.y += dt * 0.34;
      relay.view.userData.rings.forEach((ring, ringIndex) => { ring.rotation.z += dt * (0.9 + ringIndex * 0.25); });
      relay.view.userData.core.scale.setScalar(0.9 + Math.sin(elapsed * 6 + relay.phase) * 0.12);
      relay.view.userData.beacon.intensity = 3.8 + Math.sin(elapsed * 7 + relay.phase) * 1.2;
      if (relay.shieldHp > 0) {
        relay.view.userData.shield.rotation.y += dt * 0.62;
        relay.view.userData.shield.rotation.z -= dt * 0.38;
        relay.view.userData.shieldMaterial.opacity = 0.18 + Math.sin(elapsed * 5.2 + relay.phase) * 0.08;
        relay.view.userData.shieldLight.intensity = 2.6 + Math.sin(elapsed * 6.4 + relay.phase) * 1.1;
      }
      relay.fireTimer -= dt;
      if (relay.z >= -96 && relay.z <= -24 && relay.fireTimer <= 0 && missiles.length < missileLimit()) {
        const missile = beginMissileLock(relay, {
          missileId: `relay-${index}-${seed}-${Math.floor(elapsed * 1000)}`,
          leadTime: difficultyId === "insanity" ? 0.82 : difficultyId === "hard" ? 1.08 : 1.4,
          bearingHint: relay.x < -1 ? "left" : relay.x > 1 ? "right" : "ahead",
        });
        if (missile) {
          missile.pendingLaunch = {
            speedScale: difficulty.missileSpeed * 1.06,
            guidanceScale: clamp(difficulty.missileSpeed, 0.94, 1.3),
            lifetime: difficultyId === "insanity" ? 6.8 : 5.9,
          };
        }
        relay.fireTimer = randomRange(3.4, 5.2) / clamp(difficulty.missileSpeed, 0.8, 1.45);
      }
      if (Math.abs(relay.z - monkey.z) < 1.6 && Math.hypot(relay.x - monkey.x, relay.y - monkey.y) < relay.radius + monkey.radius) {
        if (!absorbHit("command relay collision", relay)) {
          gameOver("command relay collision");
          return;
        }
        relay.z = -112;
      } else if (relay.z > 14) {
        relay.z = -112 - index * 18;
        relay.lane = (relay.lane + 1) % LANES.length;
        announce(`${relay.spec.name} escaped the firing lane and is cycling back.`);
      }
    }
  }

  function handleVictoryCue(cue = {}) {
    if (Number.isFinite(cue.progress)) victoryProgress?.style.setProperty("width", `${Math.round(cue.progress * 100)}%`);
    if (cue.speaker) victorySpeaker.textContent = cue.speaker;
    if (cue.text) victorySubtitle.textContent = cue.text;
    if (cue.voice) playCinematicVoice(cue.voice);
  }

  function finishVictoryMontage() {
    state = "victory-result";
    stopCinematicVoice();
    victoryTitle.textContent = "Humanity has its sky back.";
    victorySubtitle.textContent = `All three relays and the Skyshield Titan destroyed. ${Math.floor(distance)} km survived, ${points.toLocaleString()} points scored, and ${runCoconuts} coconuts recovered.`;
    victorySpeaker.textContent = "Mission accomplished";
    victoryProgress?.style.setProperty("width", "100%");
    victorySkipButton.hidden = true;
    victoryContinueButton.hidden = false;
    victoryContinueButton.focus({ preventScroll: true });
    announce("Operation Banana Sky complete. Humanity is safe.");
  }

  function winGame() {
    if (["victory", "victory-result"].includes(state)) return;
    state = "victory";
    commandRelays.splice(0).forEach((relay) => removeView(relay.view));
    if (commandCarrier) removeView(commandCarrier.view);
    commandCarrier = null;
    if (survivalPortal) removeView(survivalPortal);
    survivalPortal = null;
    portalSequenceActive = false;
    bossBattleStarted = false;
    jets.splice(0).forEach((jet) => removeView(jet.view));
    missiles.splice(0).forEach((missile) => removeView(missile.view));
    combatDirector?.stop({ clearSchedule: true });
    shootButton.disabled = true;
    pauseButton.disabled = true;
    if (liftButton) liftButton.disabled = true;
    keys.clear();
    updateObjectiveHud();
    updateBossHud();
    updateRageHud();
    earnCoconuts(75);
    audio.stopRun?.();
    audio.setPaused?.(false);
    victoryTitle.textContent = "The Titan is down.";
    victorySubtitle.textContent = "Its relays are rubble. Skyshield has lost the stolen fleet.";
    victorySpeaker.textContent = "Commander Vesper";
    victoryProgress?.style.setProperty("width", "0%");
    victorySkipButton.hidden = false;
    victoryContinueButton.hidden = true;
    setDialogVisible(victoryOverlay, true);
    canvas.inert = true;
    victory = createVictoryDirector({
      canvas: victoryCanvas,
      vesperAsset: "./assets/commander-vesper-v1.png",
      wingtailAsset: "./assets/wingtail-hangar-front-v1.png",
      reducedMotion,
      onCue: handleVictoryCue,
      onComplete: finishVictoryMontage,
    });
    victory?.start();
  }

  function closeVictory() {
    stopCinematicVoice();
    victory?.dispose();
    victory = null;
    setDialogVisible(victoryOverlay, false);
    canvas.inert = false;
    showHangar();
  }

  function spawnPickup() {
    if (pickups.length >= 5) return;
    const type = simRandom() < 0.68 ? "coconut" : "banana";
    const lane = Math.floor(simRandom() * LANES.length);
    const view = createPickupView(type);
    const pickup = {
      type,
      x: LANES[lane] + randomRange(-0.45, 0.45),
      y: randomRange(-1.1, 4.8),
      z: randomRange(-88, -72),
      phase: randomRange(0, Math.PI * 2),
      view,
    };
    view.position.set(pickup.x, pickup.y, pickup.z);
    scene.add(view);
    pickups.push(pickup);
  }

  function collectPickup(index) {
    const pickup = pickups[index];
    if (!pickup) return;
    GameVFX.spawn(vfxManager, "explosion", {
      position: pickup,
      count: 10,
      scale: 0.42,
      speed: 3.8,
      color: pickup.type === "banana" ? 0xffdf55 : 0x62ead0,
      impulse: 0.08,
    });
    if (pickup.type === "banana") {
      const shieldCap = Math.max(2, runStats.maxShields + 1);
      shields = Math.min(shieldCap, shields + 1);
      awardSkill("RESCUE BANANA", 250);
      addFury(2);
      announce("Rescue banana collected. Coconut armor restored.");
    } else {
      earnCoconuts(5);
      awardSkill("COCONUT CACHE", 125);
      addFury(1);
      announce("Coconut collected. Five coconuts secured.");
    }
    updateProgressDisplays();
    advanceMissionObjective("pickup");
    audio.playFlap?.(1.35);
    removeView(pickup.view);
    pickups.splice(index, 1);
  }

  function updatePickups(dt) {
    pickupTimer -= dt;
    if (pickupTimer <= 0) {
      spawnPickup();
      pickupTimer = Math.max(3.2, 5.2 - currentLevel * 0.45) + randomRange(0, 1.2);
    }
    const speed = flightSpeed() * 1.08;
    for (let index = pickups.length - 1; index >= 0; index -= 1) {
      const pickup = pickups[index];
      pickup.z += speed * dt;
      pickup.phase += dt * 2.4;
      pickup.view.position.set(pickup.x, pickup.y + Math.sin(pickup.phase) * 0.16, pickup.z);
      pickup.view.rotation.y += dt * 1.9;
      pickup.view.rotation.z = Math.sin(pickup.phase * 0.7) * 0.18;
      if (pickup.view.userData.ring) pickup.view.userData.ring.rotation.z += dt * 1.6;
      const close = Math.abs(pickup.z - monkey.z) < 1.25
        && Math.hypot(pickup.x - monkey.x, pickup.y - monkey.y) < 1.35;
      if (close) collectPickup(index);
      else if (pickup.z > 14) {
        removeView(pickup.view);
        pickups.splice(index, 1);
      }
    }
  }

  function setLevel(index, shouldAnnounce = true) {
    if (index === currentLevel && elapsed > 0) return;
    currentLevel = index;
    const level = LEVELS[index];
    levelNode.textContent = `LEVEL ${index + 1} / ${LEVELS.length} · ${level.name}`;
    threatBar.style.width = `${level.threat}%`;
    threatBar.style.background = index >= 2 ? "var(--danger)" : index === 1 ? "var(--accent)" : "var(--signal)";
    threatBar.parentElement.setAttribute("aria-valuenow", String(level.threat));
    if (scene) {
      cityStream?.setLevel(index, { duration: shouldAnnounce ? 3.1 : 0.4, immediate: !shouldAnnounce });
      if (!shouldAnnounce) applyCityEnvironment(cityStream?.getEnvironment());
      GameVFX.setLevel(vfxManager, index);
    }
    combatDirector?.setLevel(index, { clearSchedule: shouldAnnounce });
    audio.playLevel?.(index);
    beginMissionObjective(index);
    let installedUpgrade = null;
    if (shouldAnnounce && index > 0) {
      earnCoconuts(12 + index * 4);
      installedUpgrade = installFieldUpgrade(index);
    }
    if (shouldAnnounce && index === LEVELS.length - 1) startRelayObjective();
    if (shouldAnnounce) {
      const objectiveCallout = missionObjective ? ` Mission: ${missionObjective.briefing}` : "";
      const upgradeCallout = installedUpgrade ? ` Auto-installed: ${installedUpgrade.name}.` : "";
      announce(`Level ${index + 1}: ${level.name}. ${level.hazard}. City sector changed.${upgradeCallout}${objectiveCallout}`);
    }
  }

  function updateLevel() {
    const nextLevel = LEVELS[currentLevel + 1];
    if (nextLevel && missionObjective && !missionObjective.complete && elapsed >= nextLevel.time) {
      objectiveOvertime += FIXED_STEP;
      elapsed = nextLevel.time - 0.01;
      if (!missionObjective.overtimeAnnounced) {
        missionObjective.overtimeAnnounced = true;
        announce(`${missionObjective.label} overtime. Finish the objective or hold the corridor for six seconds.`);
      }
      if (objectiveOvertime < 6) return;
      missionObjective.complete = true;
      announce(`${missionObjective.label} window closed. Vesper opened the next corridor.`);
    }
    let index = 0;
    for (let i = LEVELS.length - 1; i >= 0; i -= 1) {
      if (elapsed >= LEVELS[i].time) { index = i; break; }
    }
    if (index !== currentLevel) setLevel(index);
  }

  function chooseAircraft() {
    const roster = currentLevel === 0 ? ["f16", "fa18"] : currentLevel === 1 ? ["f16", "fa18", "a10"] : ["f16", "fa18", "f22", "a10"];
    return roster[Math.floor(simRandom() * roster.length)];
  }

  function spawnJet(options = {}) {
    const typeId = AIRCRAFT[options.typeHint] ? options.typeHint : chooseAircraft();
    const spec = AIRCRAFT[typeId];
    const lane = clamp(Number.isInteger(options.lane) ? options.lane : Math.floor(simRandom() * LANES.length), 0, LANES.length - 1);
    const view = createJetView(typeId);
    const behavior = options.behavior || ["intercept", "sweep", "dive"][Math.floor(simRandom() * 3)];
    const level = LEVELS[currentLevel];
    const altitudeMin = level.altitudeMin ?? ALTITUDE_MIN;
    const altitudeMax = level.altitudeMax ?? ALTITUDE_MAX;
    const baseAltitude = Number.isFinite(options.altitude) ? options.altitude : randomRange(-1.6, 5.2);
    const tracking = options.trackPlayer === false ? 0 : difficulty.altitudeTracking;
    const spawnAltitude = clamp(baseAltitude + (monkey.y - baseAltitude) * tracking + randomRange(-0.3, 0.3) * tracking, altitudeMin + 0.25, altitudeMax - 0.2);
    const jet = {
      entityId: options.entityId || `legacy-${seed}-${jets.length}`,
      encounterId: options.encounterId || null,
      role: options.role || "interceptor",
      typeId, spec, view,
      hp: Math.ceil(spec.hp * (1 + currentLevel * 0.12) * difficulty.enemyHealth),
      maxHp: Math.ceil(spec.hp * (1 + currentLevel * 0.12) * difficulty.enemyHealth),
      lane,
      x: LANES[lane] + randomRange(-0.8, 0.8),
      y: spawnAltitude,
      z: Number.isFinite(options.spawnZ) ? options.spawnZ : -82,
      speed: flightSpeed() * spec.speed * clamp(options.speedScale || 1, 0.78, 1.42),
      phase: Number.isFinite(options.phase) ? options.phase : randomRange(0, Math.PI * 2),
      amplitude: (Number.isFinite(options.amplitude) ? options.amplitude : randomRange(0.7, 2.1)) * spec.agility,
      behavior,
      passed: false,
      exhaustTimer: randomRange(0, 0.08),
    };
    view.position.set(jet.x, jet.y, jet.z);
    scene.add(view);
    jets.push(jet);
    return jet;
  }

  function beginMissileLock(jet, warning = {}) {
    const level = LEVELS[currentLevel];
    if (!jet || missiles.length >= missileLimit()) return false;
    const view = createMissileView();
    view.visible = false;
    scene.add(view);
    const lockDuration = clamp(warning.leadTime || [1.45, 1.22, 1.02, 0.84][currentLevel], 0.8, 3);
    const missile = {
      directorId: warning.missileId || `missile-${seed}-${missiles.length}`,
      bearingHint: warning.bearingHint || "ahead",
      state: "locking",
      source: jet,
      view,
      x: jet.x,
      y: jet.y,
      z: jet.z,
      timer: lockDuration,
      lockDuration,
      speed: 19,
      direction: new THREE.Vector3(0, 0, 1),
      life: 5.5,
      smokeTimer: 0,
      closestDistance: Infinity,
      lastDistance: Infinity,
      nearMissShown: false,
    };
    missiles.push(missile);
    missileWarning.hidden = false;
    audio.playMissileLock?.(missile);
    return missile;
  }

  function launchMissile(missile, launch = {}) {
    missile.state = "active";
    missile.view.visible = true;
    missile.source = null;
    missile.speed = 19 * clamp((launch.speedScale || 1) * difficulty.missileSpeed, 0.9, 1.55);
    missile.guidanceScale = clamp(launch.guidanceScale || 1, 0.88, 1.25);
    missile.life = clamp(launch.lifetime || 5.5, 3.5, 7);
    missile.direction.set(monkey.x - missile.x, monkey.y - missile.y, monkey.z - missile.z).normalize();
    GameVFX.spawn(vfxManager, "explosion", { position: missile, count: 7, scale: 0.32, speed: 3.8, color: 0xff8a35, impulse: 0.08 });
    audio.playMissileLaunch?.(missile);
  }

  function updateMonkey(dt) {
    const level = LEVELS[currentLevel];
    const held = keys.has("Space") || keys.has("KeyW") || keys.has("ArrowUp") || keys.has("TouchLift");
    if (held) monkey.vy += 5.8 * runStats.lift * dt;
    monkey.vy = clamp(monkey.vy - 3.1 * dt, -3.6, 6.4 * runStats.lift);
    if (level.crosswind) {
      const gust = Math.sin(elapsed * 0.83 + currentLevel * 1.7) + Math.sin(elapsed * 2.17) * 0.42;
      monkey.vx += gust * level.crosswind * difficulty.crosswind * dt;
      monkey.vy += Math.cos(elapsed * 1.31 + currentLevel) * level.crosswind * difficulty.crosswind * 0.12 * dt;
    }
    monkey.y += monkey.vy * dt;
    const altitudeMin = level.altitudeMin ?? ALTITUDE_MIN;
    const altitudeMax = level.altitudeMax ?? ALTITUDE_MAX;
    if (monkey.y < altitudeMin || monkey.y > altitudeMax) {
      monkey.y = clamp(monkey.y, altitudeMin, altitudeMax);
      monkey.vy *= -0.15;
      cameraShake = Math.max(cameraShake, 0.08);
    }
    if (monkey.y > altitudeMax - 0.55) ceilingExposure += dt;
    else ceilingExposure = Math.max(0, ceilingExposure - dt * 1.8);
    if (ceilingExposure >= difficulty.ceilingDelay && jets.length < aircraftLimit() + difficulty.ceilingHunters) {
      ceilingExposure = 0;
      let firstHunter = null;
      for (let index = 0; index < difficulty.ceilingHunters; index += 1) {
        const hunter = spawnJet({
          typeHint: currentLevel >= 2 ? "f22" : "f16",
          lane: clamp(monkey.lane + (index % 2 ? -1 : 1), 0, LANES.length - 1),
          altitude: monkey.y + randomRange(-0.22, 0.18),
          spawnZ: -54 - index * 8,
          speedScale: difficultyId === "insanity" ? 1.38 : 1.2,
          behavior: "dive",
          role: "ceiling-hunter",
        });
        firstHunter ||= hunter;
      }
      if (firstHunter) beginMissileLock(firstHunter, { leadTime: difficultyId === "insanity" ? 0.82 : 1.12 });
      announce("Altitude hunter squadron inbound. Break away from the ceiling.");
    }
    const laneTarget = LANES[monkey.lane];
    monkey.vx += (laneTarget - monkey.x) * 34 * runStats.handling * dt;
    monkey.vx *= Math.exp(-9 * Math.sqrt(runStats.handling) * dt);
    monkey.x += monkey.vx * dt;
    monkey.bank += (clamp(-monkey.vx * 0.08, -0.48, 0.48) - monkey.bank) * dt * 8;
    monkey.pitch += (clamp(-monkey.vy * 0.045, -0.34, 0.34) - monkey.pitch) * dt * 7;

    PlayerVisual.update(playerController, dt, monkey, {
      active: state === "playing",
      speed: flightSpeed(),
      thrust: 0.52 + clamp(Math.abs(monkey.vy) / 6.4, 0, 1) * 0.42,
    });
  }

  function absorbHit(reason, position) {
    if (shields > 0) {
      shields -= 1;
      updateProgressDisplays();
      cameraShake = reducedMotion ? 0.05 : 0.2;
      GameVFX.spawn(vfxManager, "explosion", {
        position,
        count: 16,
        scale: 0.82,
        speed: 5.5,
        color: 0x62ead0,
        impulse: 0.32,
      });
      GameVFX.spawn(vfxManager, "hitFlash", { color: 0x62ead0, intensity: 0.62, impulse: 0.32 });
      announce("Coconut shield absorbed " + reason + ". " + shields + " remaining.");
      return true;
    }
    if (!bossBattleStarted) return false;
    const damage = reason.includes("collision") ? 28 : difficultyId === "insanity" ? 18 : difficultyId === "hard" ? 14 : 10;
    wingtailHealth = Math.max(0, wingtailHealth - damage);
    updateBossHud();
    cameraShake = reducedMotion ? 0.05 : 0.2;
    GameVFX.spawn(vfxManager, "explosion", {
      position,
      count: 22,
      scale: 1.05,
      speed: 6.8,
      color: 0xff6846,
      impulse: 0.52,
    });
    GameVFX.spawn(vfxManager, "hitFlash", { color: 0xff4935, intensity: 0.82, impulse: 0.5 });
    if (wingtailHealth > 0) announce(`Wingtail hit by ${reason}. ${Math.ceil(wingtailHealth)} health remaining.`);
    return wingtailHealth > 0;
  }

  function updateJets(dt) {
    for (let i = jets.length - 1; i >= 0; i -= 1) {
      const jet = jets[i];
      jet.z += jet.speed * dt;
      jet.phase += dt * (1.25 + jet.spec.agility * 0.55);
      const baseX = LANES[jet.lane];
      if (jet.behavior === "sweep") jet.x = baseX + Math.sin(jet.phase) * jet.amplitude * 1.8;
      else if (jet.behavior === "flank") jet.x = baseX + Math.sin(jet.phase * 0.82) * jet.amplitude * 2.35;
      else jet.x += (baseX + Math.sin(jet.phase) * jet.amplitude - jet.x) * dt * 1.8;
      if (jet.behavior === "dive") jet.y += Math.sin(jet.phase * 0.68) * dt * 2.4;
      else jet.y += Math.cos(jet.phase) * dt * jet.amplitude * (jet.behavior === "missile-sortie" ? 0.2 : 0.42);

      jet.view.position.set(jet.x, jet.y, jet.z);
      jet.view.rotation.z = Math.sin(jet.phase) * 0.28 * jet.spec.agility;
      jet.view.rotation.x = Math.cos(jet.phase * 0.7) * 0.06;
      jet.view.userData.engine.scale.setScalar(0.8 + Math.sin(elapsed * 26 + jet.phase) * 0.18);
      jet.exhaustTimer -= dt;
      if (jet.exhaustTimer <= 0) {
        jet.exhaustTimer = mobileMode ? 0.09 : 0.055;
        GameVFX.spawn(vfxManager, "jetExhaust", {
          position: { x: jet.x, y: jet.y, z: jet.z - 2.35 * jet.spec.scale },
          velocity: { x: 0, y: 0, z: -jet.speed * 0.16 },
          color: jet.typeId === "a10" ? 0xffa34f : 0x65d9ff,
        });
      }

      const dz = jet.z - monkey.z;
      if (Math.abs(dz) < 1.2 && Math.hypot(jet.x - monkey.x, jet.y - monkey.y) < monkey.radius + 0.7 * jet.spec.scale) {
        if (absorbHit(jet.spec.name + " collision", jet)) {
          destroyJet(i);
          continue;
        }
        gameOver(`${jet.spec.name} collision`);
        return;
      }
      if (jet.z > 10) {
        const passDistance = Math.hypot(jet.x - monkey.x, jet.y - monkey.y);
        if (passDistance < 3.3) {
          awardSkill("CLOSE PASS", 120);
          GameVFX.spawn(vfxManager, "nearMiss", {
            position: jet,
            velocity: { x: 0, y: 0, z: jet.speed },
            impulse: 0.14,
            roll: clamp((jet.x - monkey.x) / 8, -1, 1) * 0.008,
          });
        }
        removeView(jet.view);
        jets.splice(i, 1);
      }
    }
  }

  function updateMissileBearing(missile, active) {
    if (!missile || !missileBearing || !missileDirection) return;
    const dx = missile.x - monkey.x;
    const dz = missile.z - monkey.z;
    const degrees = Math.atan2(dx, -dz) * 180 / Math.PI;
    missileBearing.style.setProperty("--missile-bearing", `${degrees.toFixed(1)}deg`);
    let direction = "Ahead";
    if (Math.abs(degrees) > 135) direction = "Behind";
    else if (degrees < -35) direction = "Left";
    else if (degrees > 35) direction = "Right";
    missileDirection.textContent = active ? `${direction} · inbound` : `${direction} · locking`;
  }

  function updateMissiles(dt) {
    let lockProgress = 0;
    let warningMissile = null;
    let activeWarning = null;
    for (let i = missiles.length - 1; i >= 0; i -= 1) {
      const missile = missiles[i];
      if (missile.state === "locking") {
        if (!missile.source || (!jets.includes(missile.source) && !commandRelays.includes(missile.source) && missile.source !== commandCarrier)) {
          removeView(missile.view);
          missiles.splice(i, 1);
          continue;
        }
        missile.x = missile.source.x;
        missile.y = missile.source.y - 0.4;
        missile.z = missile.source.z + 0.4;
        missile.timer = Math.max(0, missile.timer - dt * (1 - runStats.lockResistance));
        const evade = Math.abs(monkey.vx) > 2.2 || Math.abs(monkey.vy) > 6.2;
        if (evade) missile.timer = Math.min(missile.lockDuration, missile.timer + dt * 0.22);
        const progress = 1 - missile.timer / missile.lockDuration;
        if (progress >= lockProgress) {
          lockProgress = progress;
          warningMissile = missile;
        }
        if (missile.timer <= 0 && missile.pendingLaunch) launchMissile(missile, missile.pendingLaunch);
        continue;
      }

      missile.life -= dt;
      tempV.set(monkey.x - missile.x, monkey.y - missile.y, monkey.z - missile.z).normalize();
      const guidance = (missile.life > 3 ? 2.8 : 1.2) * (missile.guidanceScale || 1);
      missile.direction.lerp(tempV, 1 - Math.exp(-guidance * dt)).normalize();
      missile.speed = Math.min(31, missile.speed + 7 * dt);
      missile.x += missile.direction.x * missile.speed * dt;
      missile.y += missile.direction.y * missile.speed * dt;
      missile.z += missile.direction.z * missile.speed * dt;
      missile.view.position.set(missile.x, missile.y, missile.z);
      missile.view.lookAt(missile.x - missile.direction.x, missile.y - missile.direction.y, missile.z - missile.direction.z);
      missile.view.userData.flame.scale.y = 0.8 + Math.sin(elapsed * 32) * 0.2;
      missile.smokeTimer -= dt;
      if (missile.smokeTimer <= 0) {
        missile.smokeTimer = mobileMode ? 0.075 : 0.045;
        GameVFX.spawn(vfxManager, "missileSmoke", {
          position: missile,
          velocity: { x: -missile.direction.x * 1.8, y: -missile.direction.y * 1.8, z: -missile.direction.z * 1.8 },
        });
      }

      const playerDistance = Math.hypot(missile.x - monkey.x, missile.y - monkey.y, missile.z - monkey.z);
      missile.closestDistance = Math.min(missile.closestDistance, playerDistance);
      if (!missile.nearMissShown && missile.closestDistance < 3.1 && missile.closestDistance > monkey.radius + 0.35 && playerDistance > missile.lastDistance + 0.16) {
        missile.nearMissShown = true;
        GameVFX.spawn(vfxManager, "nearMiss", {
          position: missile,
          velocity: missile.direction,
          impulse: 0.26,
          roll: clamp((missile.x - monkey.x) / 8, -1, 1) * 0.014,
        });
      }
      missile.lastDistance = playerDistance;
      if (!activeWarning || playerDistance < activeWarning.distance) activeWarning = { missile, distance: playerDistance };

      if (playerDistance < monkey.radius + 0.4) {
        GameVFX.spawn(vfxManager, "explosion", { position: missile, count: 22, scale: 1.25, speed: 7, color: 0xff663d, impulse: 0.85 });
        if (absorbHit("missile strike", missile)) {
          removeView(missile.view);
          missiles.splice(i, 1);
          continue;
        }
        GameVFX.spawn(vfxManager, "hitFlash", { color: 0xff4b36, intensity: 1.15, impulse: 0.8 });
        gameOver("missile strike");
        return;
      }
      if (missile.life <= 0 || missile.z > 18 || Math.abs(missile.x) > 22 || Math.abs(missile.y) > 16) {
        removeView(missile.view);
        missiles.splice(i, 1);
      }
    }
    const hasActive = Boolean(activeWarning);
    if (activeWarning) warningMissile = activeWarning.missile;
    const warningValue = hasActive ? 100 : Math.round(lockProgress * 100);
    missileWarning.hidden = !warningMissile;
    lockMeter.style.width = `${warningValue}%`;
    lockMeter.setAttribute("aria-valuenow", String(warningValue));
    updateMissileBearing(warningMissile, hasActive);
  }

  function segmentDistance(point, a, b) {
    tempV.copy(b).sub(a);
    const lengthSq = tempV.lengthSq();
    if (!lengthSq) return point.distanceTo(a);
    const t = clamp(tempV2.copy(point).sub(a).dot(tempV) / lengthSq, 0, 1);
    return tempV2.copy(a).addScaledVector(tempV, t).distanceTo(point);
  }

  function updateShots(dt) {
    for (let i = shots.length - 1; i >= 0; i -= 1) {
      const shot = shots[i];
      shot.previous.set(shot.x, shot.y, shot.z);
      shot.x += shot.velocity.x * dt;
      shot.y += shot.velocity.y * dt;
      shot.z += shot.velocity.z * dt;
      shot.life -= dt;
      shot.view.position.set(shot.x, shot.y, shot.z);
      shot.view.rotation.z += shot.spin * dt;
      shot.view.rotation.x = Math.sin((1.9 - shot.life) * shot.tumble) * 0.32;
      shot.view.rotation.y = Math.cos((1.9 - shot.life) * shot.tumble * 0.74) * 0.24;
      if ((shot.rage || shot.rpg) && shot.view.userData.flame) {
        shot.view.userData.flame.scale.y = 0.82 + Math.sin(performance.now() * 0.03) * 0.18;
      }
      shot.trailTimer -= dt;
      if (shot.trailTimer <= 0) {
        shot.trailTimer = shot.rpg ? 0.055 : shot.rage ? 0.09 : mobileMode ? 0.06 : 0.035;
        GameVFX.spawn(vfxManager, "projectileTrail", {
          start: shot.previous,
          end: shot.view.position,
          life: 0.16,
          width: shot.rpg ? 0.16 : shot.rage ? 0.105 : 0.055,
          color: shot.rpg ? 0xffb13b : shot.rage ? 0xff6935 : 0xffe58b,
        });
      }
      let consumed = false;
      for (let m = missiles.length - 1; m >= 0; m -= 1) {
        const missile = missiles[m];
        if (missile.state !== "active") continue;
        if (segmentDistance(new THREE.Vector3(missile.x, missile.y, missile.z), shot.previous, shot.view.position) < 0.62) {
          GameVFX.spawn(vfxManager, "explosion", { position: missile, count: 12, scale: 0.7, speed: 6, color: 0xffd14d, impulse: 0.24 });
          removeView(missile.view);
          missiles.splice(m, 1);
          awardSkill("MISSILE DOWN", 300);
          advanceMissionObjective("missile");
          consumed = !shot.rpg;
          if (consumed) break;
        }
      }
      if (!consumed) {
        if (commandCarrier && segmentDistance(new THREE.Vector3(commandCarrier.x, commandCarrier.y, commandCarrier.z), shot.previous, shot.view.position) < commandCarrier.radius) {
          const armorMultiplier = [0.82, 0.68, 0.54][commandCarrier.phaseIndex - 1] || 0.82;
          const titanDamage = shot.rpg ? shot.damage * armorMultiplier : shot.damage * 0.35;
          commandCarrier.hp -= titanDamage;
          const defeated = commandCarrier.hp <= 0;
          GameVFX.spawn(vfxManager, "explosion", {
            position: {
              x: commandCarrier.x + randomRange(-2.4, 2.4),
              y: commandCarrier.y + randomRange(-0.8, 0.8),
              z: commandCarrier.z + randomRange(-2.8, 2.8),
            },
            count: defeated ? 42 : shot.rpg ? 18 : 9,
            scale: defeated ? 2.3 : shot.rpg ? 1.05 : 0.52,
            speed: defeated ? 10 : 5,
            color: defeated ? 0xff4935 : 0xffb344,
            impulse: defeated ? 1.1 : 0.14,
          });
          if (!defeated) {
            commandCarrier.view.userData.coreMaterial.opacity = clamp(commandCarrier.hp / commandCarrier.maxHp, 0.3, 1);
            updateBossHud();
          } else destroyCommandCarrier();
          consumed = true;
        }
      }
      if (!consumed) {
        for (let relayIndex = commandRelays.length - 1; relayIndex >= 0; relayIndex -= 1) {
          const relay = commandRelays[relayIndex];
          if (segmentDistance(new THREE.Vector3(relay.x, relay.y, relay.z), shot.previous, shot.view.position) < relay.radius) {
            const shielded = relay.shieldHp > 0;
            if (shielded) relay.shieldHp = Math.max(0, relay.shieldHp - shot.damage);
            else relay.hp -= shot.damage;
            const shieldBroken = shielded && relay.shieldHp <= 0;
            if (shieldBroken) {
              relay.view.userData.shield.visible = false;
              relay.view.userData.shieldLight.intensity = 0;
              GameVFX.spawn(vfxManager, "hitFlash", { color: 0x62ead0, intensity: 0.68, impulse: 0.36 });
              awardSkill(`${relay.spec.name} SHIELD BROKEN`, 600);
            }
            GameVFX.spawn(vfxManager, "explosion", {
              position: relay,
              count: relay.hp <= 0 && !shielded ? 30 : shieldBroken ? 18 : 8,
              scale: relay.hp <= 0 && !shielded ? 1.6 : shieldBroken ? 0.9 : 0.42,
              speed: relay.hp <= 0 && !shielded ? 8 : shieldBroken ? 6.5 : 4.5,
              color: shielded ? 0x62ead0 : relay.hp <= 0 ? 0xff563d : 0xffc35a,
              impulse: relay.hp <= 0 && !shielded ? 0.8 : shieldBroken ? 0.42 : 0.12,
            });
            if (!shielded) relay.view.userData.core.material.opacity = clamp(relay.hp / relay.maxHp, 0.28, 1);
            if (!shielded && relay.hp <= 0) destroyCommandRelay(relayIndex);
            else if (!shieldBroken) {
              const layerHp = shielded ? relay.shieldHp : relay.hp;
              const layerMax = shielded ? relay.maxShieldHp : relay.maxHp;
              announce(`${relay.spec.name} ${shielded ? "shield" : "core"} integrity ${Math.max(0, Math.ceil((layerHp / layerMax) * 100))} percent.`);
            }
            consumed = true;
            break;
          }
        }
      }
      if (!consumed) {
        for (let j = jets.length - 1; j >= 0; j -= 1) {
          const jet = jets[j];
          if (segmentDistance(new THREE.Vector3(jet.x, jet.y, jet.z), shot.previous, shot.view.position) < 1.05 * jet.spec.scale) {
            jet.hp -= shot.damage;
            GameVFX.spawn(vfxManager, "explosion", {
              position: jet,
              count: jet.hp <= 0 ? 20 : 6,
              scale: jet.hp <= 0 ? 1.05 : 0.32,
              speed: jet.hp <= 0 ? 7 : 4,
              color: jet.hp <= 0 ? 0xff6a32 : 0xffe06a,
              impulse: jet.hp <= 0 ? 0.55 : 0.08,
            });
            if (jet.hp <= 0) destroyJet(j);
            else announce(`${jet.spec.name} armor ${Math.ceil(jet.hp)} of ${jet.maxHp}.`);
            consumed = true;
            break;
          }
        }
      }
      if (consumed || shot.life <= 0 || shot.z < -110) {
        removeView(shot.view);
        shots.splice(i, 1);
      }
    }
  }

  function destroyJet(index) {
    const jet = jets[index];
    removeView(jet.view);
    jets.splice(index, 1);
    for (let i = missiles.length - 1; i >= 0; i -= 1) {
      if (missiles[i].source === jet) {
        removeView(missiles[i].view);
        missiles.splice(i, 1);
      }
    }
    earnCoconuts(Math.max(2, Math.round(jet.spec.score / 190)));
    takedowns += 1;
    advanceMissionObjective("jet");
    addFury(2.5);
    awardSkill(`${jet.spec.name} DOWN`, jet.spec.score);
    audio.playJetDestroyed?.(clamp(jet.x / 8, -1, 1));
    cameraShake = reducedMotion ? 0.04 : 0.15;
  }

  function awardSkill(label, base) {
    points += Math.round(base * chain);
    chain = clamp(chain + 0.25, 1, 5);
    chainTimer = 3.4;
    pointsNode.textContent = String(points);
    multiplierNode.textContent = `${chain.toFixed(2)}×`;
    announce(`${label}. ${Math.round(base * chain)} points.`);
  }

  function updateTargetingHud() {
    const target = findAimTarget();
    if (!target || state !== "playing") {
      targetingHud?.classList.remove("is-locked");
      if (targetStatus) targetStatus.textContent = "Scanning";
      if (targetRange) targetRange.hidden = true;
      if (targetingHud) {
        targetingHud.style.left = "50%";
        targetingHud.style.top = "50%";
      }
      return;
    }
    tempV.set(target.x, target.y, target.z).project(camera);
    const left = clamp((tempV.x * 0.5 + 0.5) * 100, 10, 90);
    const top = clamp((-tempV.y * 0.5 + 0.5) * 100, 16, 84);
    targetingHud?.classList.add("is-locked");
    if (targetingHud) {
      targetingHud.style.left = `${left}%`;
      targetingHud.style.top = `${top}%`;
    }
    if (targetStatus) {
      const targetName = target === commandCarrier ? "TITAN" : target.spec.name;
      const targetLayer = target !== commandCarrier && target.shieldHp > 0 ? `SHIELD ${Math.ceil(target.shieldHp)}` : `CORE ${Math.max(0, Math.ceil(target.hp || 0))}`;
      targetStatus.textContent = `${targetName} · ${target === commandCarrier ? `${Math.max(0, Math.ceil(target.hp || 0))} HP` : targetLayer}`;
    }
    if (targetRange) {
      targetRange.hidden = false;
      targetRange.textContent = `${Math.max(1, Math.round((monkey.z - target.z) * 12))} m`;
    }
  }

  function updateScenery(dt) {
    const speed = flightSpeed() * 0.5 * runStats.speed;
    const environment = cityStream?.update(dt, { speed });
    if (portalSequenceActive || bossBattleStarted) {
      scene.background.setHex(bossBattleStarted ? 0x05070d : 0x07161b);
      scene.fog.color.setHex(bossBattleStarted ? 0x11101b : 0x08252a);
      hemisphereLight?.color.setHex(0x75d8d0);
      playerLight?.color.setHex(0xffd56b);
    } else applyCityEnvironment(environment);
    for (const cloud of cloudGroup.children) {
      cloud.position.z += speed * dt * 0.34;
      if (cloud.position.z > 18) cloud.position.z -= 148;
    }
    const positions = starField.geometry.attributes.position;
    for (let i = 2; i < positions.array.length; i += 3) {
      positions.array[i] += speed * dt * 0.55;
      if (positions.array[i] > 6) positions.array[i] -= 150;
    }
    positions.needsUpdate = true;
  }

  function updateCamera(dt) {
    const shake = cameraShake;
    cameraShake = Math.max(0, cameraShake - dt);
    const impulse = GameVFX.update(vfxManager, dt, { camera, playerPosition: monkey, cameraPosition: camera.position });
    PlayerVisual.updateCamera(playerController, dt, monkey, { camera, shake, lookAhead: mobileMode ? 29 : 32 });
    if (impulse) {
      camera.position.x += impulse.x;
      camera.position.y += impulse.y;
      camera.position.z += impulse.z;
      camera.rotateZ(impulse.roll);
    }
  }

  function update(dt) {
    if (state !== "playing") {
      if (state === "ready") {
        monkey.y = 0.65 + Math.sin(performance.now() / 700) * 0.18;
        PlayerVisual.update(playerController, dt, monkey, { active: false, speed: LEVELS[0].speed });
        updateScenery(dt * 0.35);
        updateCamera(dt);
      } else if (state === "crashing") {
        PlayerVisual.update(playerController, dt, monkey, { active: false, speed: flightSpeed() });
        updateScenery(dt * 0.45);
        updateCamera(dt);
      } else {
        GameVFX.update(vfxManager, dt, { camera, playerPosition: monkey, cameraPosition: camera?.position });
      }
      updateTargetingHud();
      return;
    }
    elapsed += dt;
    distance += dt * (1.25 + flightSpeed() * 0.032) * runStats.speed;
    shotCooldown = Math.max(0, shotCooldown - dt);
    updateRage(dt);
    updateWeaponCooldown();
    chainTimer -= dt;
    if (chainTimer <= 0 && chain > 1) {
      chain = Math.max(1, chain - dt * 0.75);
      multiplierNode.textContent = `${chain.toFixed(2)}×`;
    }
    updateLevel();
    if (state !== "playing") return;
    combatDirector?.update(dt, {
      activeAircraft: jets.length,
      activeMissiles: missiles.length,
      maxAircraft: aircraftLimit(),
      maxMissiles: missileLimit(),
      difficulty: currentLevel * 0.03 + difficulty.encounter,
    });
    updateMonkey(dt);
    updateJets(dt);
    if (state !== "playing") return;
    updateMissiles(dt);
    if (state !== "playing") return;
    updateCommandRelays(dt);
    if (state !== "playing") return;
    updateSurvivalPortal(dt);
    if (state !== "playing") return;
    updateCommandCarrier(dt);
    if (state !== "playing") return;
    updatePickups(dt);
    updateShots(dt);
    if (state !== "playing") return;
    updateScenery(dt);
    updateCamera(dt);
    updateTargetingHud();
    scoreNode.textContent = String(Math.floor(distance));
    audio.update?.(dt, { state, level: currentLevel, monkey, jets, missiles });
  }

  function gameOver(reason) {
    if (state !== "playing") return;
    state = "crashing";
    missionVoice.pause();
    hideVesperComms();
    if (bossBattleHud) bossBattleHud.hidden = true;
    document.body.classList.remove("boss-battle-active");
    updateRageHud();
    shootButton.disabled = true;
    if (liftButton) liftButton.disabled = true;
    keys.delete("TouchLift");
    combatDirector?.stop({ clearSchedule: true });
    missileWarning.hidden = true;
    cameraShake = reducedMotion ? 0.08 : 0.28;
    GameVFX.spawn(vfxManager, "explosion", { position: monkey, count: 26, scale: 1.35, speed: 8, color: 0xff573d, impulse: 1 });
    GameVFX.spawn(vfxManager, "hitFlash", { color: 0xff402f, intensity: 1.25, impulse: 0.9 });
    audio.playImpact?.(reason);
    audio.stopRun?.(reason);
    const finalDistance = Math.floor(distance);
    if (finalDistance >= 8) earnCoconuts(Math.max(1, Math.floor(finalDistance / 12)));
    if (finalDistance > best) {
      best = finalDistance;
      bestNode.textContent = String(best);
      localStorage.setItem("monkeyNoFlyBest3D", String(best));
    }
    window.setTimeout(() => {
      state = "gameover";
      overlay.dataset.mode = "result";
      overlayTitle.hidden = false;
      overlayText.hidden = false;
      overlayTitle.textContent = "Flight terminated.";
      overlayText.textContent = `${reason}. You survived ${finalDistance} km, scored ${points.toLocaleString()} points, and recovered ${runCoconuts} coconuts.`;
      if (briefingOrder) briefingOrder.hidden = true;
      startButton.textContent = "Return to Hangar";
      startButton.hidden = false;
      setOverlayVisible(true);
      announce(`Flight terminated by ${reason}.`);
    }, reducedMotion ? 120 : 650);
  }

  function pauseGame() {
    if (state !== "playing") return;
    pausedFrom = state;
    state = "paused";
    updateRageHud();
    pauseOverlay.hidden = false;
    pauseOverlay.inert = false;
    pauseOverlay.setAttribute("aria-hidden", "false");
    shootButton.disabled = true;
    if (liftButton) liftButton.disabled = true;
    keys.delete("TouchLift");
    audio.setPaused?.(true);
    resumeButton.focus();
  }

  function resumeGame() {
    if (state !== "paused") return;
    state = pausedFrom;
    updateRageHud();
    pauseOverlay.setAttribute("aria-hidden", "true");
    pauseOverlay.hidden = true;
    pauseOverlay.inert = true;
    shootButton.disabled = false;
    if (liftButton) liftButton.disabled = false;
    audio.setPaused?.(false);
    lastTime = performance.now();
    canvas.focus({ preventScroll: true });
  }

  function updateMuteControl() {
    const muted = audio.isMuted?.() || false;
    muteButton.setAttribute("aria-pressed", String(muted));
    muteButton.setAttribute("aria-label", muted ? "Unmute sound" : "Mute sound");
    muteButton.title = muted ? "Unmute sound" : "Mute sound";
    muteButton.querySelector("span").textContent = muted ? "🔇" : "🔊";
  }

  function handlePointerDown(event) {
    if (event.target.closest("button")) return;
    if (event.pointerType === "touch") return;
    pointerStart = { x: event.clientX, y: event.clientY, time: performance.now() };
    if (state === "playing") flap();
  }

  function handlePointerUp(event) {
    if (!pointerStart || state !== "playing") { pointerStart = null; return; }
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.2) changeLane(dx > 0 ? 1 : -1);
    pointerStart = null;
  }

  function updateSteeringFromPointer(event) {
    if (state !== "playing" || event.pointerId !== steerPointerId) return;
    const rect = steerZone.getBoundingClientRect();
    const normalized = clamp((event.clientX - rect.left) / Math.max(1, rect.width), 0, 1);
    monkey.lane = clamp(Math.round(normalized * (LANES.length - 1)), 0, LANES.length - 1);
  }

  function beginSteering(event) {
    if (state !== "playing") return;
    event.preventDefault();
    steerPointerId = event.pointerId;
    steerZone.setPointerCapture?.(event.pointerId);
    updateSteeringFromPointer(event);
  }

  function endSteering(event) {
    if (event.pointerId !== steerPointerId) return;
    steerPointerId = null;
  }

  function beginTouchLift(event) {
    if (state !== "playing") return;
    event.preventDefault();
    liftButton.setPointerCapture?.(event.pointerId);
    keys.add("TouchLift");
    flap();
  }

  function endTouchLift(event) {
    event.preventDefault();
    keys.delete("TouchLift");
  }

  startButton.addEventListener("click", () => {
    if (finalePreview && briefingPhase === "ready") {
      briefingPhase = "complete";
      showHangar();
    } else if (overlay.dataset.mode === "result" || briefingPhase === "complete") showHangar();
    else startCinematic();
  });
  skipIntroButton?.addEventListener("click", skipCinematicSequence);
  dialogueChoices?.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-response]");
    if (choice) answerCinematic(choice.dataset.response);
  });
  deployButton?.addEventListener("click", startGame);
  victorySkipButton?.addEventListener("click", () => victory?.skip());
  victoryContinueButton?.addEventListener("click", closeVictory);
  loadoutAction?.addEventListener("click", () => {
    const item = getItem(hangarCategory, previewSelection[hangarCategory]);
    if (!item) return;
    const result = purchaseOrEquip(profile, hangarCategory, item.id);
    hangarStatus.textContent = result.ok
      ? result.item.name + (result.action === "purchased" ? " purchased and equipped." : " equipped.")
      : result.reason;
    PlayerVisual.applyLoadout?.(playerController, profile.equipped);
    renderHangarCategory(hangarCategory);
    updateHangarPreview();
  });
  loadoutTabs?.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-category]");
    if (tab) renderHangarCategory(tab.dataset.category);
  });
  difficultyOptions?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-difficulty]");
    if (!option || !DIFFICULTIES[option.dataset.difficulty]) return;
    difficultyId = option.dataset.difficulty;
    renderDifficulty();
    updateHangarPreview();
    announce(`${difficulty.name} difficulty selected.`);
  });
  pauseButton.addEventListener("click", pauseGame);
  resumeButton.addEventListener("click", resumeGame);
  restartButton.addEventListener("click", () => { resumeGame(); showHangar(); });
  muteButton.addEventListener("click", () => {
    audio.setMuted?.(!(audio.isMuted?.() || false));
    cinematicVoice.muted = Boolean(audio.isMuted?.());
    missionVoice.muted = Boolean(audio.isMuted?.());
    updateMuteControl();
  });
  shootButton.addEventListener("pointerdown", (event) => { event.preventDefault(); event.stopPropagation(); fire(); });
  rageHud?.addEventListener("click", activateRage);
  rageActionButton?.addEventListener("click", activateRage);
  steerZone?.addEventListener("pointerdown", beginSteering);
  steerZone?.addEventListener("pointermove", updateSteeringFromPointer);
  steerZone?.addEventListener("pointerup", endSteering);
  steerZone?.addEventListener("pointercancel", endSteering);
  liftButton?.addEventListener("pointerdown", beginTouchLift);
  liftButton?.addEventListener("pointerup", endTouchLift);
  liftButton?.addEventListener("pointercancel", endTouchLift);
  canvas.addEventListener("pointerdown", handlePointerDown);
  canvas.addEventListener("pointerup", handlePointerUp);
  canvas.addEventListener("pointercancel", () => { pointerStart = null; });
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    if (state === "playing") pauseGame();
    announce("Graphics context paused. Waiting for recovery.");
  });
  canvas.addEventListener("webglcontextrestored", () => location.reload());
  window.addEventListener("resize", resize);
  window.addEventListener("blur", () => {
    if (state === "playing") pauseGame();
    cinematic?.setPaused(true);
    victory?.setPaused(true);
    cinematicVoice.pause();
  });
  window.addEventListener("focus", () => {
    cinematic?.setPaused(false);
    victory?.setPaused(false);
    if (["cinematic", "dialogue", "victory"].includes(state) && cinematicVoice.src && !cinematicVoice.ended) cinematicVoice.play().catch(() => {});
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && state === "playing") pauseGame();
    cinematic?.setPaused(document.hidden);
    victory?.setPaused(document.hidden);
    if (document.hidden) cinematicVoice.pause();
    else if (["cinematic", "dialogue", "victory"].includes(state) && cinematicVoice.src && !cinematicVoice.ended) cinematicVoice.play().catch(() => {});
  });
  window.addEventListener("keydown", (event) => {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code) || (state === "playing" && event.code === "Enter")) event.preventDefault();
    if (event.repeat && ["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].includes(event.code)) return;
    keys.add(event.code);
    if (state === "victory" && event.code === "Escape") {
      event.preventDefault();
      victory?.skip();
      return;
    }
    if (["cinematic", "dialogue"].includes(state) && event.code === "Escape") {
      event.preventDefault();
      skipCinematicSequence();
      return;
    }
    if (state === "dialogue" && ["ArrowLeft", "ArrowRight", "KeyA", "KeyD"].includes(event.code)) {
      event.preventDefault();
      const choices = [...dialogueChoices.querySelectorAll("button")];
      const current = Math.max(0, choices.indexOf(document.activeElement));
      choices[event.code === "ArrowLeft" || event.code === "KeyA" ? Math.max(0, current - 1) : Math.min(choices.length - 1, current + 1)]?.focus();
      return;
    }
    if (state === "playing") {
      if (event.code === "Space" || event.code === "KeyW" || event.code === "ArrowUp") flap();
      if (event.code === "KeyA" || event.code === "ArrowLeft") changeLane(-1);
      if (event.code === "KeyD" || event.code === "ArrowRight") changeLane(1);
      if (event.code === "Enter" || event.code === "KeyX" || event.code === "KeyF" || event.code === "ShiftLeft") fire();
      if (event.code === "KeyR" || event.code === "KeyG" || event.code === "KeyB") activateRage();
      if (event.code === "Escape" || event.code === "KeyP") pauseGame();
    } else if (state === "paused" && (event.code === "Escape" || event.code === "KeyP")) resumeGame();
  });
  window.addEventListener("keyup", (event) => keys.delete(event.code));

  function loop(now) {
    const frameTime = Math.min(0.1, (now - lastTime) / 1000);
    lastTime = now;
    slowFrames = frameTime > 0.026 ? slowFrames + 1 : Math.max(0, slowFrames - 2);
    if (slowFrames > 90 && qualityScale > 0.72) {
      qualityScale = Math.max(0.72, qualityScale - 0.12);
      slowFrames = 0;
      GameVFX.setQuality(vfxManager, qualityScale < 0.84 ? "low" : "medium", { reducedMotion });
      resize();
    }
    accumulator += frameTime;
    while (accumulator >= FIXED_STEP) {
      update(FIXED_STEP);
      accumulator -= FIXED_STEP;
    }
    if (renderer && scene && camera && !["paused", "victory", "victory-result"].includes(state) && !document.hidden) renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }

  canvas.tabIndex = 0;
  startButton.disabled = true;
  startButton.textContent = "Loading 3D Flight";
  updateMuteControl();
  init3D();
  requestAnimationFrame(loop);
})();
