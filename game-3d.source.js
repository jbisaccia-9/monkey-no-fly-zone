import * as THREE from "./vendor/three.module.min.js";
import * as PlayerVisual from "./game/player-visual.js";
import { createCityStream } from "./game/city-stream.js";
import { createCombatDirector } from "./game/combat-director.js";
import { createCinematicDirector } from "./game/cinematic-director.js";
import {
  CATALOG,
  FIELD_UPGRADES,
  awardCoconuts,
  createRunUpgrades,
  displayStats,
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
  const statNodes = {
    lift: document.getElementById("statLift"),
    handling: document.getElementById("statHandling"),
    firepower: document.getElementById("statFirepower"),
    survival: document.getElementById("statSurvival"),
  };
  const upgradeOverlay = document.getElementById("upgradeOverlay");
  const upgradeTitle = document.getElementById("upgradeTitle");
  const upgradeGrid = document.getElementById("upgradeGrid");
  const upgradeWallet = document.getElementById("upgradeWallet");
  const audio = window.GameAudio || {};

  const FIXED_STEP = 1 / 60;
  const LANES = [-6.2, 0, 6.2];
  const ALTITUDE_MIN = -3.2;
  const ALTITUDE_MAX = 5.8;
  const PLAYER_Z = 1.4;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const LEVELS = [
    { time: 0, name: "PATROL", threat: 20, spawn: 2.15, maxJets: 3, missileChance: 0.2, missileCap: 1, speed: 16, sky: 0x162c39, fog: 0x25424d, city: 0x263b43, lights: 0x58dfc1 },
    { time: 22, name: "INTERCEPT", threat: 46, spawn: 1.82, maxJets: 4, missileChance: 0.38, missileCap: 1, speed: 18.5, sky: 0x392c33, fog: 0x62464a, city: 0x332f38, lights: 0xe8c454 },
    { time: 52, name: "MISSILE LOCK", threat: 74, spawn: 1.55, maxJets: 5, missileChance: 0.56, missileCap: 2, speed: 21, sky: 0x17202c, fog: 0x353b4b, city: 0x202936, lights: 0xff704f },
    { time: 92, name: "OVERDRIVE", threat: 100, spawn: 1.28, maxJets: 6, missileChance: 0.72, missileCap: 3, speed: 24, sky: 0x220f17, fog: 0x4a2227, city: 0x251a21, lights: 0xff4f38 },
  ];

  const AIRCRAFT = {
    f16: { name: "F-16", color: 0x8f9ba0, accent: 0x415760, hp: 2, speed: 1.06, agility: 1.05, score: 500, scale: 0.92 },
    fa18: { name: "F/A-18", color: 0x7e898d, accent: 0x37484f, hp: 3, speed: 0.96, agility: 0.92, score: 600, scale: 1.02 },
    f22: { name: "F-22", color: 0x67747b, accent: 0x26363c, hp: 2, speed: 1.2, agility: 1.28, score: 760, scale: 1.04 },
    a10: { name: "A-10", color: 0x65705f, accent: 0x323b30, hp: 5, speed: 0.72, agility: 0.62, score: 980, scale: 1.18 },
  };

  let renderer;
  let cinematic;
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
  let profile = loadProfile();
  let previewSelection = { ...profile.equipped };
  let runUpgrades = createRunUpgrades();
  let runStats = resolveRunStats(profile, runUpgrades);
  let shields = runStats.maxShields;
  let runCoconuts = 0;
  let best = Number(localStorage.getItem("monkeyNoFlyBest3D") || localStorage.getItem("monkeyNoFlyBest") || 0);

  const monkey = { x: 0, y: 0.7, z: PLAYER_Z, vy: 0, vx: 0, lane: 1, bank: 0, pitch: 0, radius: PlayerVisual.PLAYER_COLLISION_RADIUS };
  const jets = [];
  const missiles = [];
  const shots = [];
  const keys = new Set();
  const clockColor = new THREE.Color();
  const tempV = new THREE.Vector3();
  const tempV2 = new THREE.Vector3();

  bestNode.textContent = String(Math.floor(best));
  if (coconutCount) coconutCount.textContent = String(profile.coconuts);
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

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
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
    if (upgradeWallet) upgradeWallet.textContent = String(profile.coconuts);
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
      deployButton.textContent = "Deploy Current Build";
      deployButton.setAttribute("aria-label", "Deploy current build: " + rig + " and " + weapon);
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
  }

  function showHangar() {
    if (state === "loading" || state === "unsupported") return;
    state = "hangar";
    setOverlayVisible(false);
    setDialogVisible(upgradeOverlay, false);
    setDialogVisible(hangarOverlay, true);
    previewSelection = { ...profile.equipped };
    shootButton.disabled = true;
    pauseButton.disabled = true;
    hangarStatus.textContent = "Select gear to compare it with your current build.";
    renderHangarCategory(hangarCategory);
    loadoutTabs?.querySelector('[aria-selected="true"]')?.focus({ preventScroll: true });
    announce("Wingtail loadout hangar opened.");
  }

  function renderUpgradeChoices() {
    if (!upgradeGrid) return;
    upgradeGrid.replaceChildren(...FIELD_UPGRADES.map((upgrade) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "upgrade-choice";
      const tag = document.createElement("small");
      tag.textContent = upgrade.tag + " · Tier " + (runUpgrades[upgrade.id] + 1);
      const name = document.createElement("strong");
      name.textContent = upgrade.name;
      const description = document.createElement("span");
      description.textContent = upgrade.description;
      const effect = document.createElement("b");
      effect.textContent = upgrade.effect;
      button.append(tag, name, description, effect);
      button.addEventListener("click", () => chooseFieldUpgrade(upgrade));
      return button;
    }));
  }

  function showFieldUpgrade(levelIndex) {
    state = "upgrading";
    shootButton.disabled = true;
    if (liftButton) liftButton.disabled = true;
    keys.delete("TouchLift");
    upgradeTitle.textContent = "Level " + (levelIndex + 1) + " field upgrade";
    renderUpgradeChoices();
    updateProgressDisplays();
    setDialogVisible(upgradeOverlay, true);
    audio.setPaused?.(true);
    upgradeGrid?.querySelector("button")?.focus();
  }

  function chooseFieldUpgrade(upgrade) {
    runUpgrades[upgrade.id] += 1;
    runStats = resolveRunStats(profile, runUpgrades);
    if (upgrade.id === "armor") shields += 1;
    setDialogVisible(upgradeOverlay, false);
    state = "playing";
    shootButton.disabled = false;
    if (liftButton) liftButton.disabled = false;
    audio.setPaused?.(false);
    lastTime = performance.now();
    updateProgressDisplays();
    canvas.focus({ preventScroll: true });
    announce(upgrade.name + " installed.");
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

  function createShotView(weaponId = "ripe-repeater") {
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
    group.scale.setScalar(weaponId === "cluster-bunch" ? 0.86 : plantain ? 1.3 : 1.18);
    group.userData.isBananaProjectile = true;
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
        });
      } catch (cinematicError) {
        console.warn("Cinematic renderer unavailable; using direct briefing.", cinematicError);
        cinematic = null;
      }

      resize();
      state = "ready";
      startButton.disabled = false;
      startButton.textContent = "Start Transmission";
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
    if (cue.speaker && cue.text) speakCinematicLine(cue.speaker, cue.text);
    if (cue.speaker === "Global Defense Network") audio.playMissileLaunch?.();
    else if (cue.speaker === "Evacuation channel") audio.playImpact?.(true);
    else if (cue.speaker === "Commander Vesper") audio.playLevel?.();
  }

  function speakCinematicLine(speaker, text) {
    if (audio.isMuted?.() || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
    const line = new SpeechSynthesisUtterance(text);
    line.volume = 0.78;
    if (speaker === "Commander Vesper") {
      line.pitch = 0.68;
      line.rate = 0.9;
    } else if (speaker === "Wingtail") {
      line.pitch = 1.12;
      line.rate = 1.02;
    } else {
      line.pitch = 0.84;
      line.rate = 0.96;
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(line);
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
    window.speechSynthesis?.cancel();
    overlay.dataset.mode = "cinematic";
    overlayTitle.hidden = true;
    overlayText.hidden = true;
    briefingOrder.hidden = true;
    briefingFallback.hidden = true;
    cinematicSlate.hidden = false;
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
    window.speechSynthesis?.cancel();
    cinematic?.dispose();
    cinematic = null;
    cinematicSlate.hidden = true;
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
    elapsed = 0;
    distance = 0;
    points = 0;
    chain = 1;
    chainTimer = 0;
    shotCooldown = 0;
    runUpgrades = createRunUpgrades();
    runStats = resolveRunStats(profile, runUpgrades);
    shields = runStats.maxShields;
    runCoconuts = 0;
    currentLevel = 0;
    seed = (Date.now() ^ 0x74ac31) >>> 0;
    cityStream?.setSeed(seed, { regenerate: true });
    cityStream?.setLevel(0, { immediate: true });
    combatDirector?.stop({ clearSchedule: true });
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
    setLevel(0, false);
  }

  function startGame() {
    if (state === "loading" || state === "unsupported") return;
    reset();
    setDialogVisible(hangarOverlay, false);
    setDialogVisible(upgradeOverlay, false);
    state = "playing";
    overlay.dataset.mode = "flight";
    setOverlayVisible(false);
    shootButton.disabled = false;
    pauseButton.disabled = false;
    if (liftButton) liftButton.disabled = false;
    combatDirector?.start({ levelIndex: 0, delay: 0.85 });
    audio.startRun?.(0);
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
    const charge = Math.round(clamp(1 - shotCooldown / runStats.cooldown, 0, 1) * 100);
    weaponCooldown?.style.setProperty("--weapon-charge", String(charge));
    weaponCooldown?.setAttribute("aria-valuenow", String(charge));
  }

  function fire() {
    if (state !== "playing" || shotCooldown > 0) return;
    shotCooldown = runStats.cooldown;
    const target = findAimTarget();
    const direction = new THREE.Vector3(0, 0, -1);
    if (target) {
      tempV.set(target.x - monkey.x, target.y - monkey.y, target.z - monkey.z).normalize();
      direction.lerp(tempV, innerWidth <= 700 ? 0.82 : 0.68).normalize();
    }
    const weaponId = profile.equipped.weapon;
    for (let index = 0; index < runStats.projectiles; index += 1) {
      const offset = index - (runStats.projectiles - 1) / 2;
      const shotDirection = direction.clone();
      shotDirection.x += offset * runStats.spread;
      shotDirection.y += Math.abs(offset) * runStats.spread * 0.16;
      shotDirection.normalize();
      const view = createShotView(weaponId);
      view.position.set(monkey.x + offset * 0.16, monkey.y, monkey.z - 0.9);
      scene.add(view);
      const shot = {
        x: view.position.x,
        y: view.position.y,
        z: view.position.z,
        previous: view.position.clone(),
        velocity: shotDirection.multiplyScalar(runStats.projectileVelocity),
        damage: runStats.damage,
        life: 1.9,
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
        width: weaponId === "cluster-bunch" ? 0.05 : 0.075,
        length: 1.2,
        color: weaponId === "plantain-piercer" ? 0xa8ec58 : 0xffed68,
      });
    }
    updateWeaponCooldown();
    audio.playShot?.();
  }

  function setLevel(index, shouldAnnounce = true) {
    if (index === currentLevel && elapsed > 0) return;
    currentLevel = index;
    const level = LEVELS[index];
    levelNode.textContent = `LEVEL ${index + 1} · ${level.name}`;
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
    if (shouldAnnounce && index > 0) {
      earnCoconuts(12 + index * 4);
      showFieldUpgrade(index);
    }
    if (shouldAnnounce) announce(`Level ${index + 1}: ${level.name}. City sector changed.`);
  }

  function updateLevel() {
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
    const jet = {
      entityId: options.entityId || `legacy-${seed}-${jets.length}`,
      encounterId: options.encounterId || null,
      role: options.role || "interceptor",
      typeId, spec, view, hp: spec.hp, lane,
      x: LANES[lane] + randomRange(-0.8, 0.8),
      y: Number.isFinite(options.altitude) ? options.altitude : randomRange(-1.6, 5.2),
      z: Number.isFinite(options.spawnZ) ? options.spawnZ : -82,
      speed: LEVELS[currentLevel].speed * spec.speed * clamp(options.speedScale || 1, 0.78, 1.42),
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
    if (!jet || missiles.length >= level.missileCap) return false;
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
    return true;
  }

  function launchMissile(missile, launch = {}) {
    missile.state = "active";
    missile.view.visible = true;
    missile.source = null;
    missile.speed = 19 * clamp(launch.speedScale || 1, 0.9, 1.35);
    missile.guidanceScale = clamp(launch.guidanceScale || 1, 0.88, 1.25);
    missile.life = clamp(launch.lifetime || 5.5, 3.5, 7);
    missile.direction.set(monkey.x - missile.x, monkey.y - missile.y, monkey.z - missile.z).normalize();
    GameVFX.spawn(vfxManager, "explosion", { position: missile, count: 7, scale: 0.32, speed: 3.8, color: 0xff8a35, impulse: 0.08 });
    audio.playMissileLaunch?.(missile);
  }

  function updateMonkey(dt) {
    const held = keys.has("Space") || keys.has("KeyW") || keys.has("ArrowUp") || keys.has("TouchLift");
    if (held) monkey.vy += 5.8 * runStats.lift * dt;
    monkey.vy = clamp(monkey.vy - 3.1 * dt, -3.6, 6.4 * runStats.lift);
    monkey.y += monkey.vy * dt;
    if (monkey.y < ALTITUDE_MIN || monkey.y > ALTITUDE_MAX) {
      monkey.y = clamp(monkey.y, ALTITUDE_MIN, ALTITUDE_MAX);
      monkey.vy *= -0.15;
      cameraShake = Math.max(cameraShake, 0.08);
    }
    const laneTarget = LANES[monkey.lane];
    monkey.vx += (laneTarget - monkey.x) * 34 * runStats.handling * dt;
    monkey.vx *= Math.exp(-9 * Math.sqrt(runStats.handling) * dt);
    monkey.x += monkey.vx * dt;
    monkey.bank += (clamp(-monkey.vx * 0.08, -0.48, 0.48) - monkey.bank) * dt * 8;
    monkey.pitch += (clamp(-monkey.vy * 0.045, -0.34, 0.34) - monkey.pitch) * dt * 7;

    PlayerVisual.update(playerController, dt, monkey, {
      active: state === "playing",
      speed: LEVELS[currentLevel].speed,
      thrust: 0.52 + clamp(Math.abs(monkey.vy) / 6.4, 0, 1) * 0.42,
    });
  }

  function absorbHit(reason, position) {
    if (shields <= 0) return false;
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
        if (!missile.source || !jets.includes(missile.source)) {
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
      shot.trailTimer -= dt;
      if (shot.trailTimer <= 0) {
        shot.trailTimer = mobileMode ? 0.06 : 0.035;
        GameVFX.spawn(vfxManager, "projectileTrail", {
          start: shot.previous,
          end: shot.view.position,
          life: 0.16,
          width: 0.055,
          color: 0xffe58b,
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
          consumed = true;
          break;
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
    if (targetStatus) targetStatus.textContent = `${target.spec.name} locked`;
    if (targetRange) {
      targetRange.hidden = false;
      targetRange.textContent = `${Math.max(1, Math.round((monkey.z - target.z) * 12))} m`;
    }
  }

  function updateScenery(dt) {
    const speed = LEVELS[currentLevel].speed * 0.5 * runStats.speed;
    applyCityEnvironment(cityStream?.update(dt, { speed }));
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
        PlayerVisual.update(playerController, dt, monkey, { active: false, speed: LEVELS[currentLevel].speed });
        updateScenery(dt * 0.45);
        updateCamera(dt);
      } else {
        GameVFX.update(vfxManager, dt, { camera, playerPosition: monkey, cameraPosition: camera?.position });
      }
      updateTargetingHud();
      return;
    }
    elapsed += dt;
    distance += dt * (1.5 + currentLevel * 0.18) * runStats.speed;
    shotCooldown = Math.max(0, shotCooldown - dt);
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
      maxAircraft: LEVELS[currentLevel].maxJets,
      maxMissiles: LEVELS[currentLevel].missileCap,
      difficulty: currentLevel * 0.03,
    });
    updateMonkey(dt);
    updateJets(dt);
    if (state !== "playing") return;
    updateMissiles(dt);
    if (state !== "playing") return;
    updateShots(dt);
    updateScenery(dt);
    updateCamera(dt);
    updateTargetingHud();
    scoreNode.textContent = String(Math.floor(distance));
    audio.update?.(dt, { state, level: currentLevel, monkey, jets, missiles });
  }

  function gameOver(reason) {
    if (state !== "playing") return;
    state = "crashing";
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
    if (overlay.dataset.mode === "result" || briefingPhase === "complete") showHangar();
    else startCinematic();
  });
  skipIntroButton?.addEventListener("click", skipCinematicSequence);
  dialogueChoices?.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-response]");
    if (choice) answerCinematic(choice.dataset.response);
  });
  deployButton?.addEventListener("click", startGame);
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
  pauseButton.addEventListener("click", pauseGame);
  resumeButton.addEventListener("click", resumeGame);
  restartButton.addEventListener("click", () => { resumeGame(); startGame(); });
  muteButton.addEventListener("click", () => {
    audio.setMuted?.(!(audio.isMuted?.() || false));
    if (audio.isMuted?.()) window.speechSynthesis?.cancel();
    updateMuteControl();
  });
  shootButton.addEventListener("pointerdown", (event) => { event.preventDefault(); event.stopPropagation(); fire(); });
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
  });
  window.addEventListener("focus", () => cinematic?.setPaused(false));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && state === "playing") pauseGame();
    cinematic?.setPaused(document.hidden);
  });
  window.addEventListener("keydown", (event) => {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code) || (state === "playing" && event.code === "Enter")) event.preventDefault();
    if (event.repeat && ["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].includes(event.code)) return;
    keys.add(event.code);
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
    if (renderer && scene && camera && state !== "paused" && !document.hidden) renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }

  canvas.tabIndex = 0;
  startButton.disabled = true;
  startButton.textContent = "Loading 3D Flight";
  updateMuteControl();
  init3D();
  requestAnimationFrame(loop);
})();
