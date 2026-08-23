import * as THREE from "./vendor/three.module.min.js";
import * as PlayerVisual from "./game/player-visual.js";
import { createCityStream } from "./game/city-stream.js";
import { createCombatDirector } from "./game/combat-director.js";
import * as GameVFX from "./game/vfx.js";

(() => {
  "use strict";

  const canvas = document.getElementById("game");
  const overlay = document.getElementById("overlay");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlayText = document.getElementById("overlayText");
  const startButton = document.getElementById("startButton");
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

  function announce(message) {
    statusRegion.textContent = "";
    requestAnimationFrame(() => { statusRegion.textContent = message; });
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
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

  function createShotView() {
    const group = new THREE.Group();
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffef77 }));
    core.scale.z = 4.2;
    group.add(core);
    const glow = new THREE.PointLight(0xffc73d, 2.2, 5);
    group.add(glow);
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
      PlayerVisual.update(playerController, 0, monkey, { active: false, speed: LEVELS[0].speed });
      PlayerVisual.updateCamera(playerController, FIXED_STEP, monkey);
      combatDirector = createDirector();

      resize();
      state = "ready";
      overlayText.textContent = "Thread the city canyon, break missile locks, and clear the hostile formation.";
      startButton.disabled = false;
      startButton.textContent = "Begin 3D Flight";
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
    document.body.classList.toggle("touch-controls-ready", mobile && matchMedia("(pointer: coarse)").matches);
    touchControls?.setAttribute("aria-hidden", String(!(mobile && matchMedia("(pointer: coarse)").matches)));
  }

  function setOverlayVisible(visible) {
    overlay.classList.toggle("is-visible", visible);
    overlay.setAttribute("aria-hidden", String(!visible));
    canvas.inert = visible;
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
    state = "playing";
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
    monkey.vy = Math.min(monkey.vy + 3.5, 6.4);
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
    const charge = Math.round(clamp(1 - shotCooldown / 0.2, 0, 1) * 100);
    weaponCooldown?.style.setProperty("--weapon-charge", String(charge));
    weaponCooldown?.setAttribute("aria-valuenow", String(charge));
  }

  function fire() {
    if (state !== "playing" || shotCooldown > 0) return;
    shotCooldown = 0.2;
    const target = findAimTarget();
    const direction = new THREE.Vector3(0, 0, -1);
    if (target) {
      tempV.set(target.x - monkey.x, target.y - monkey.y, target.z - monkey.z).normalize();
      direction.lerp(tempV, innerWidth <= 700 ? 0.82 : 0.68).normalize();
    }
    const view = createShotView();
    view.position.set(monkey.x, monkey.y, monkey.z - 0.9);
    scene.add(view);
    shots.push({ x: monkey.x, y: monkey.y, z: monkey.z - 0.9, previous: new THREE.Vector3(monkey.x, monkey.y, monkey.z - 0.9), velocity: direction.multiplyScalar(54), life: 1.9, trailTimer: 0, view });
    GameVFX.spawn(vfxManager, "projectileTrail", {
      position: view.position,
      velocity: shots[shots.length - 1].velocity,
      life: 0.14,
      width: 0.075,
      length: 1.2,
      color: 0xffed68,
    });
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
    if (held) monkey.vy += 5.8 * dt;
    monkey.vy = clamp(monkey.vy - 3.1 * dt, -3.6, 6.4);
    monkey.y += monkey.vy * dt;
    if (monkey.y < ALTITUDE_MIN || monkey.y > ALTITUDE_MAX) {
      monkey.y = clamp(monkey.y, ALTITUDE_MIN, ALTITUDE_MAX);
      monkey.vy *= -0.15;
      cameraShake = Math.max(cameraShake, 0.08);
    }
    const laneTarget = LANES[monkey.lane];
    monkey.vx += (laneTarget - monkey.x) * 34 * dt;
    monkey.vx *= Math.exp(-9 * dt);
    monkey.x += monkey.vx * dt;
    monkey.bank += (clamp(-monkey.vx * 0.08, -0.48, 0.48) - monkey.bank) * dt * 8;
    monkey.pitch += (clamp(-monkey.vy * 0.045, -0.34, 0.34) - monkey.pitch) * dt * 7;

    PlayerVisual.update(playerController, dt, monkey, {
      active: state === "playing",
      speed: LEVELS[currentLevel].speed,
      thrust: 0.52 + clamp(Math.abs(monkey.vy) / 6.4, 0, 1) * 0.42,
    });
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
        missile.timer = Math.max(0, missile.timer - dt);
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
            jet.hp -= 1;
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
    const speed = LEVELS[currentLevel].speed * 0.5;
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
    distance += dt * (1.5 + currentLevel * 0.18);
    shotCooldown = Math.max(0, shotCooldown - dt);
    updateWeaponCooldown();
    chainTimer -= dt;
    if (chainTimer <= 0 && chain > 1) {
      chain = Math.max(1, chain - dt * 0.75);
      multiplierNode.textContent = `${chain.toFixed(2)}×`;
    }
    updateLevel();
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
    if (finalDistance > best) {
      best = finalDistance;
      bestNode.textContent = String(best);
      localStorage.setItem("monkeyNoFlyBest3D", String(best));
    }
    window.setTimeout(() => {
      state = "gameover";
      overlayTitle.textContent = "Flight terminated.";
      overlayText.textContent = `${reason}. You survived ${finalDistance} km and scored ${points.toLocaleString()} skill points.`;
      startButton.textContent = "Fly Again";
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

  startButton.addEventListener("click", startGame);
  pauseButton.addEventListener("click", pauseGame);
  resumeButton.addEventListener("click", resumeGame);
  restartButton.addEventListener("click", () => { resumeGame(); startGame(); });
  muteButton.addEventListener("click", () => { audio.setMuted?.(!(audio.isMuted?.() || false)); updateMuteControl(); });
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
  window.addEventListener("blur", () => { if (state === "playing") pauseGame(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden && state === "playing") pauseGame(); });
  window.addEventListener("keydown", (event) => {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code) || (state === "playing" && event.code === "Enter")) event.preventDefault();
    if (event.repeat && ["KeyA", "KeyD", "ArrowLeft", "ArrowRight"].includes(event.code)) return;
    keys.add(event.code);
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
