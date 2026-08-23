import * as THREE from "../vendor/three.module.min.js";

const QUALITY = Object.freeze({
  low: { particleLimit: 0.48, weatherLimit: 0.32, weatherStep: 2 },
  medium: { particleLimit: 0.74, weatherLimit: 0.64, weatherStep: 1 },
  high: { particleLimit: 1, weatherLimit: 1, weatherStep: 1 },
});

const LEVEL_WEATHER = Object.freeze([
  { kind: "haze", color: 0xa9e0de, density: 0.16, speed: 0.65, drift: 0.3, size: 0.16, opacity: 0.16 },
  { kind: "dust", color: 0xe5b56c, density: 0.36, speed: 1.9, drift: 1.1, size: 0.2, opacity: 0.26 },
  { kind: "rain", color: 0x9fc8d9, density: 1, speed: 24, drift: 4.8, size: 0.26, opacity: 0.46 },
  { kind: "ash", color: 0xff805e, density: 0.58, speed: 1.4, drift: 1.8, size: 0.24, opacity: 0.35 },
]);

const CAPACITY = Object.freeze({
  projectileTrail: 40,
  missileSmoke: 92,
  jetExhaust: 54,
  explosion: 120,
  nearMiss: 20,
  weather: 260,
});

const Z_AXIS = new THREE.Vector3(0, 0, 1);
const ZERO_SCALE = new THREE.Vector3(0, 0, 0);
const IDENTITY_QUATERNION = new THREE.Quaternion();
const WHITE = new THREE.Color(0xffffff);

function makeSoftTexture(kind) {
  const canvas = document.createElement("canvas");
  canvas.width = kind === "streak" ? 16 : 32;
  canvas.height = kind === "streak" ? 64 : 32;
  const context = canvas.getContext("2d");

  if (kind === "streak") {
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(255,255,255,0)");
    gradient.addColorStop(0.25, "rgba(255,255,255,0.35)");
    gradient.addColorStop(0.72, "rgba(255,255,255,1)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient;
    context.fillRect(5, 0, 6, canvas.height);
  } else {
    const gradient = context.createRadialGradient(16, 16, 1, 16, 16, 15);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.36, "rgba(255,255,255,0.65)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createSlot() {
  return {
    active: false,
    age: 0,
    life: 1,
    x: 0,
    y: 0,
    z: 0,
    vx: 0,
    vy: 0,
    vz: 0,
    drag: 0,
    gravity: 0,
    width: 1,
    length: 1,
    growth: 0,
    spin: 0,
    rotation: 0,
    r: 1,
    g: 1,
    b: 1,
  };
}

function createPool(manager, name, geometry, material, capacity) {
  const mesh = new THREE.InstancedMesh(geometry, material, capacity);
  mesh.name = `VFX:${name}`;
  mesh.frustumCulled = false;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.renderOrder = material.blending === THREE.AdditiveBlending ? 30 : 20;

  const slots = Array.from({ length: capacity }, createSlot);
  for (let index = 0; index < capacity; index += 1) {
    manager.matrix.compose(manager.hiddenPosition, IDENTITY_QUATERNION, ZERO_SCALE);
    mesh.setMatrixAt(index, manager.matrix);
    mesh.setColorAt(index, WHITE);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  manager.group.add(mesh);
  manager.resources.add(geometry);
  manager.resources.add(material);

  return { name, mesh, slots, capacity, limit: capacity, cursor: 0 };
}

function nextRandom(manager) {
  manager.seed = (manager.seed * 1664525 + 1013904223) >>> 0;
  return manager.seed / 4294967296;
}

function randomRange(manager, min, max) {
  return min + (max - min) * nextRandom(manager);
}

function readComponent(value, key, fallback = 0) {
  return value && Number.isFinite(value[key]) ? value[key] : fallback;
}

function setSlotPosition(slot, value) {
  slot.x = readComponent(value, "x");
  slot.y = readComponent(value, "y");
  slot.z = readComponent(value, "z");
}

function setSlotVelocity(slot, value) {
  slot.vx = readComponent(value, "x");
  slot.vy = readComponent(value, "y");
  slot.vz = readComponent(value, "z");
}

function setSlotColor(slot, color, fallback) {
  const resolved = color == null ? fallback : color;
  if (resolved && resolved.isColor) managerColor.copy(resolved);
  else managerColor.set(resolved);
  slot.r = managerColor.r;
  slot.g = managerColor.g;
  slot.b = managerColor.b;
}

const managerColor = new THREE.Color();

function takeSlot(manager, pool) {
  const limit = Math.max(1, pool.limit);
  for (let offset = 0; offset < limit; offset += 1) {
    const index = (pool.cursor + offset) % limit;
    if (!pool.slots[index].active) {
      pool.cursor = (index + 1) % limit;
      return pool.slots[index];
    }
  }

  const index = pool.cursor % limit;
  pool.cursor = (index + 1) % limit;
  return pool.slots[index];
}

function activateSlot(manager, pool, options, defaults) {
  const slot = takeSlot(manager, pool);
  slot.active = true;
  slot.age = 0;
  slot.life = Math.max(0.03, options.life ?? defaults.life);
  slot.drag = options.drag ?? defaults.drag ?? 0;
  slot.gravity = options.gravity ?? defaults.gravity ?? 0;
  slot.width = options.width ?? defaults.width ?? 1;
  slot.length = options.length ?? defaults.length ?? 1;
  slot.growth = options.growth ?? defaults.growth ?? 0;
  slot.rotation = options.rotation ?? randomRange(manager, -Math.PI, Math.PI);
  slot.spin = options.spin ?? defaults.spin ?? 0;
  setSlotPosition(slot, options.position);
  setSlotVelocity(slot, options.velocity);
  setSlotColor(slot, options.color, defaults.color);
  return slot;
}

function applyQuality(manager, resolvedQuality) {
  const config = QUALITY[resolvedQuality] || QUALITY.medium;
  manager.resolvedQuality = resolvedQuality in QUALITY ? resolvedQuality : "medium";
  const motionScale = manager.reducedMotion ? 0.45 : 1;

  for (const key of Object.keys(manager.pools)) {
    const pool = manager.pools[key];
    const nextLimit = Math.max(2, Math.floor(pool.capacity * config.particleLimit * motionScale));
    pool.limit = nextLimit;
    for (let index = nextLimit; index < pool.capacity; index += 1) pool.slots[index].active = false;
  }

  manager.weatherStep = config.weatherStep;
  manager.weatherLimit = Math.floor(CAPACITY.weather * config.weatherLimit * (manager.reducedMotion ? 0.3 : 1));
  resetWeather(manager, true);
}

function resetWeatherParticle(manager, index, initial) {
  const center = manager.weatherCenter;
  const offset = index * 3;
  manager.weatherPositions[offset] = center.x + randomRange(manager, -18, 18);
  manager.weatherPositions[offset + 1] = center.y + randomRange(manager, initial ? -7 : 9, 14);
  manager.weatherPositions[offset + 2] = center.z + randomRange(manager, -28, 12);
  manager.weatherPhases[index] = randomRange(manager, 0, Math.PI * 2);
}

function resetWeather(manager, initial) {
  const weather = LEVEL_WEATHER[manager.level] || LEVEL_WEATHER[0];
  const count = Math.floor(manager.weatherLimit * weather.density);
  manager.weatherCount = count;
  manager.weather.geometry.setDrawRange(0, count);
  manager.weather.material.color.setHex(weather.color);
  manager.weather.material.opacity = weather.opacity;
  manager.weather.material.size = weather.size;
  manager.weather.material.map = weather.kind === "rain" ? manager.streakTexture : manager.softTexture;
  manager.weather.material.needsUpdate = true;

  for (let index = 0; index < count; index += 1) resetWeatherParticle(manager, index, initial);
  manager.weather.geometry.attributes.position.needsUpdate = true;
}

function updateWeather(manager, dt, context) {
  if (!manager.weatherCount) return;
  const weather = LEVEL_WEATHER[manager.level] || LEVEL_WEATHER[0];
  const center = context.playerPosition || context.cameraPosition || manager.camera.position;
  manager.weatherCenter.copy(center);
  const speed = weather.speed * dt;
  const drift = weather.drift * dt;
  const positions = manager.weatherPositions;

  for (let index = 0; index < manager.weatherCount; index += manager.weatherStep) {
    const offset = index * 3;
    manager.weatherPhases[index] += dt * (0.65 + (index % 5) * 0.09);
    if (weather.kind === "rain") {
      positions[offset] -= drift;
      positions[offset + 1] -= speed;
      positions[offset + 2] += speed * 0.34;
    } else {
      positions[offset] += Math.sin(manager.weatherPhases[index]) * drift;
      positions[offset + 1] -= speed;
      positions[offset + 2] += drift * 0.45;
    }

    if (
      positions[offset + 1] < center.y - 8 ||
      positions[offset + 2] > center.z + 14 ||
      Math.abs(positions[offset] - center.x) > 20
    ) {
      resetWeatherParticle(manager, index, false);
    }
  }
  manager.weather.geometry.attributes.position.needsUpdate = true;
}

function updatePool(manager, pool, dt, kind) {
  let changed = false;
  for (let index = 0; index < pool.limit; index += 1) {
    const slot = pool.slots[index];
    if (!slot.active) continue;
    changed = true;
    slot.age += dt;
    if (slot.age >= slot.life) {
      slot.active = false;
      manager.matrix.compose(manager.hiddenPosition, IDENTITY_QUATERNION, ZERO_SCALE);
      pool.mesh.setMatrixAt(index, manager.matrix);
      continue;
    }

    const damping = Math.max(0, 1 - slot.drag * dt);
    slot.vx *= damping;
    slot.vy = slot.vy * damping - slot.gravity * dt;
    slot.vz *= damping;
    slot.x += slot.vx * dt;
    slot.y += slot.vy * dt;
    slot.z += slot.vz * dt;
    slot.rotation += slot.spin * dt;

    const progress = slot.age / slot.life;
    const fade = 1 - progress;
    const width = Math.max(0.001, slot.width * (fade + slot.growth * progress));
    const length = Math.max(0.001, slot.length * (kind === "smoke" ? 0.65 + progress : fade));
    manager.position.set(slot.x, slot.y, slot.z);

    if (kind === "smoke" || kind === "explosion") {
      manager.quaternion.copy(manager.camera.quaternion);
      if (kind === "explosion") {
        manager.rollQuaternion.setFromAxisAngle(Z_AXIS, slot.rotation);
        manager.quaternion.multiply(manager.rollQuaternion);
      }
      manager.scale.set(width, width, length);
    } else {
      manager.direction.set(slot.vx, slot.vy, slot.vz);
      if (manager.direction.lengthSq() < 0.0001) manager.direction.set(0, 0, -1);
      else manager.direction.normalize();
      manager.quaternion.setFromUnitVectors(Z_AXIS, manager.direction);
      manager.scale.set(width, width, length);
    }

    manager.matrix.compose(manager.position, manager.quaternion, manager.scale);
    pool.mesh.setMatrixAt(index, manager.matrix);
    manager.color.setRGB(slot.r * fade, slot.g * fade, slot.b * fade);
    pool.mesh.setColorAt(index, manager.color);
  }

  if (changed) {
    pool.mesh.instanceMatrix.needsUpdate = true;
    if (pool.mesh.instanceColor) pool.mesh.instanceColor.needsUpdate = true;
  }
}

function addImpulse(manager, strength, roll = 0) {
  const motionScale = manager.reducedMotion ? 0.12 : 1;
  manager.impulseStrength = Math.min(1.5, manager.impulseStrength + strength * motionScale);
  manager.impulseRoll += roll * motionScale;
}

function updateImpulse(manager, dt) {
  manager.impulseTime += dt * 37;
  manager.impulseStrength *= Math.exp(-11 * dt);
  manager.impulseRoll *= Math.exp(-9 * dt);
  const strength = manager.impulseStrength;
  manager.cameraImpulse.x = Math.sin(manager.impulseTime * 1.13) * strength * 0.17;
  manager.cameraImpulse.y = Math.cos(manager.impulseTime * 1.71) * strength * 0.12;
  manager.cameraImpulse.z = Math.sin(manager.impulseTime * 0.63) * strength * 0.07;
  manager.cameraImpulse.roll = manager.impulseRoll + Math.sin(manager.impulseTime) * strength * 0.012;
  manager.cameraImpulse.strength = strength;
}

function updateHitFlash(manager, dt) {
  manager.hitFlashEnergy *= Math.exp(-13 * dt);
  if (manager.hitFlashEnergy < 0.01) {
    manager.hitFlash.visible = false;
    return;
  }

  manager.hitFlash.visible = true;
  manager.direction.set(0, 0, -1).applyQuaternion(manager.camera.quaternion);
  manager.hitFlash.position.copy(manager.camera.position).addScaledVector(manager.direction, 0.32);
  manager.hitFlash.quaternion.copy(manager.camera.quaternion);
  const aspect = manager.camera.aspect || 1.78;
  manager.hitFlash.scale.set(0.42 * aspect, 0.42, 1);
  manager.hitFlash.material.opacity = Math.min(0.68, manager.hitFlashEnergy * 0.58);
}

function updateAdaptiveQuality(manager, dt) {
  if (manager.qualityMode !== "auto") return;
  manager.frameAverage += (dt - manager.frameAverage) * 0.035;
  manager.qualityTimer += dt;
  if (manager.qualityTimer < 2.2) return;
  manager.qualityTimer = 0;

  let target = manager.resolvedQuality;
  if (manager.frameAverage > 1 / 43) target = "low";
  else if (manager.frameAverage > 1 / 54 || manager.mobile) target = "medium";
  else if (manager.frameAverage < 1 / 58) target = "high";
  if (target !== manager.resolvedQuality) applyQuality(manager, target);
}

function spawnProjectileTrail(manager, options) {
  const slot = activateSlot(manager, manager.pools.projectileTrail, options, {
    life: 0.18,
    drag: 0.4,
    width: 0.055,
    length: 1.8,
    color: 0xffe58b,
  });

  if (options.start && options.end) {
    slot.x = (options.start.x + options.end.x) * 0.5;
    slot.y = (options.start.y + options.end.y) * 0.5;
    slot.z = (options.start.z + options.end.z) * 0.5;
    slot.vx = options.end.x - options.start.x;
    slot.vy = options.end.y - options.start.y;
    slot.vz = options.end.z - options.start.z;
    slot.length = Math.max(0.1, Math.sqrt(slot.vx * slot.vx + slot.vy * slot.vy + slot.vz * slot.vz));
  }
  return slot;
}

function spawnMissileSmoke(manager, options) {
  if (manager.reducedMotion && nextRandom(manager) > 0.42) return null;
  return activateSlot(manager, manager.pools.missileSmoke, options, {
    life: 0.72,
    drag: 1.8,
    gravity: -0.08,
    width: 0.18,
    length: 0.18,
    growth: 2.8,
    spin: randomRange(manager, -1.8, 1.8),
    color: 0xd9d7cf,
  });
}

function spawnJetExhaust(manager, options) {
  if (manager.reducedMotion && nextRandom(manager) > 0.6) return null;
  return activateSlot(manager, manager.pools.jetExhaust, options, {
    life: 0.22,
    drag: 2.2,
    width: 0.08,
    length: 0.74,
    color: 0x65d9ff,
  });
}

function spawnExplosion(manager, options) {
  const countBase = options.count ?? 18;
  const count = Math.max(4, Math.floor(countBase * QUALITY[manager.resolvedQuality].particleLimit * (manager.reducedMotion ? 0.48 : 1)));
  const speed = options.speed ?? 4.6;
  const scale = options.scale ?? 1;
  let first = null;

  for (let index = 0; index < count; index += 1) {
    manager.direction.set(
      randomRange(manager, -1, 1),
      randomRange(manager, -0.75, 1),
      randomRange(manager, -1, 1),
    );
    if (manager.direction.lengthSq() < 0.01) manager.direction.set(0, 1, 0);
    manager.direction.normalize().multiplyScalar(speed * randomRange(manager, 0.45, 1.25));
    manager.spawnOptions.position = options.position;
    manager.spawnOptions.velocity = manager.direction;
    manager.spawnOptions.life = randomRange(manager, 0.3, 0.82) * (options.lifeScale ?? 1);
    manager.spawnOptions.width = randomRange(manager, 0.08, 0.24) * scale;
    manager.spawnOptions.length = manager.spawnOptions.width;
    manager.spawnOptions.color = index % 4 === 0 ? (options.smokeColor ?? 0x5b5550) : (options.color ?? 0xff8a32);
    manager.spawnOptions.drag = randomRange(manager, 1.2, 3.2);
    manager.spawnOptions.gravity = randomRange(manager, 0.15, 1.3);
    manager.spawnOptions.growth = index % 4 === 0 ? 2.5 : 0.7;
    const slot = activateSlot(manager, manager.pools.explosion, manager.spawnOptions, {
      life: 0.55,
      color: 0xff8a32,
    });
    if (!first) first = slot;
  }

  addImpulse(manager, options.impulse ?? 0.55 * scale, randomRange(manager, -0.018, 0.018));
  return first;
}

function spawnNearMiss(manager, options) {
  if (manager.reducedMotion) return null;
  const slot = activateSlot(manager, manager.pools.nearMiss, options, {
    life: 0.2,
    drag: 0.08,
    width: 0.035,
    length: 5.8,
    color: 0xeaf7ff,
  });
  addImpulse(manager, options.impulse ?? 0.22, options.roll ?? randomRange(manager, -0.01, 0.01));
  return slot;
}

function spawnHitFlash(manager, options) {
  manager.hitFlashEnergy = Math.max(manager.hitFlashEnergy, options.intensity ?? 1);
  manager.hitFlash.material.color.set(options.color ?? 0xff5a3d);
  addImpulse(manager, options.impulse ?? 0.85, options.roll ?? randomRange(manager, -0.025, 0.025));
  return manager.hitFlash;
}

/**
 * Creates a pooled effects manager. Add no VFX objects manually; the returned
 * group is already attached to the supplied scene.
 */
export function create({
  scene,
  camera,
  mobile = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches,
  reducedMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches,
  quality = "auto",
  seed = 0x9e3779b9,
} = {}) {
  if (!scene || !camera) throw new Error("VFX create() requires a Three.js scene and camera.");

  const manager = {
    scene,
    camera,
    mobile: Boolean(mobile),
    reducedMotion: Boolean(reducedMotion),
    qualityMode: quality,
    resolvedQuality: quality === "auto" ? (mobile ? "medium" : "high") : quality,
    level: 0,
    seed: seed >>> 0,
    disposed: false,
    group: new THREE.Group(),
    pools: {},
    resources: new Set(),
    matrix: new THREE.Matrix4(),
    position: new THREE.Vector3(),
    direction: new THREE.Vector3(),
    scale: new THREE.Vector3(),
    quaternion: new THREE.Quaternion(),
    rollQuaternion: new THREE.Quaternion(),
    color: new THREE.Color(),
    hiddenPosition: new THREE.Vector3(0, -10000, 0),
    weatherCenter: new THREE.Vector3(),
    frameAverage: 1 / 60,
    qualityTimer: 0,
    weatherStep: 1,
    weatherLimit: CAPACITY.weather,
    weatherCount: 0,
    impulseStrength: 0,
    impulseRoll: 0,
    impulseTime: 0,
    hitFlashEnergy: 0,
    cameraImpulse: { x: 0, y: 0, z: 0, roll: 0, strength: 0 },
    spawnOptions: {
      position: null,
      velocity: null,
      life: 0,
      width: 0,
      length: 0,
      color: 0,
      drag: 0,
      gravity: 0,
      growth: 0,
    },
  };

  manager.group.name = "VFXManager";
  scene.add(manager.group);

  const additive = (opacity) => new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
    vertexColors: true,
  });
  const transparent = (opacity) => new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity,
    depthWrite: false,
    vertexColors: true,
  });

  manager.pools.projectileTrail = createPool(
    manager,
    "projectileTrail",
    new THREE.BoxGeometry(1, 1, 1),
    additive(0.95),
    CAPACITY.projectileTrail,
  );
  manager.pools.missileSmoke = createPool(
    manager,
    "missileSmoke",
    new THREE.IcosahedronGeometry(1, 1),
    transparent(0.42),
    CAPACITY.missileSmoke,
  );
  manager.pools.jetExhaust = createPool(
    manager,
    "jetExhaust",
    new THREE.BoxGeometry(1, 1, 1),
    additive(0.72),
    CAPACITY.jetExhaust,
  );
  manager.pools.explosion = createPool(
    manager,
    "explosion",
    new THREE.IcosahedronGeometry(1, 0),
    additive(0.9),
    CAPACITY.explosion,
  );
  manager.pools.nearMiss = createPool(
    manager,
    "nearMiss",
    new THREE.BoxGeometry(1, 1, 1),
    additive(0.84),
    CAPACITY.nearMiss,
  );

  manager.softTexture = makeSoftTexture("soft");
  manager.streakTexture = makeSoftTexture("streak");
  manager.resources.add(manager.softTexture);
  manager.resources.add(manager.streakTexture);

  manager.weatherPositions = new Float32Array(CAPACITY.weather * 3);
  manager.weatherPhases = new Float32Array(CAPACITY.weather);
  const weatherGeometry = new THREE.BufferGeometry();
  weatherGeometry.setAttribute("position", new THREE.BufferAttribute(manager.weatherPositions, 3).setUsage(THREE.DynamicDrawUsage));
  const weatherMaterial = new THREE.PointsMaterial({
    color: LEVEL_WEATHER[0].color,
    size: LEVEL_WEATHER[0].size,
    map: manager.softTexture,
    transparent: true,
    opacity: LEVEL_WEATHER[0].opacity,
    depthWrite: false,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });
  manager.weather = new THREE.Points(weatherGeometry, weatherMaterial);
  manager.weather.name = "VFX:weather";
  manager.weather.frustumCulled = false;
  manager.weather.renderOrder = 10;
  manager.group.add(manager.weather);
  manager.resources.add(weatherGeometry);
  manager.resources.add(weatherMaterial);

  const flashMaterial = new THREE.MeshBasicMaterial({
    color: 0xff5a3d,
    map: manager.softTexture,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  manager.hitFlash = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), flashMaterial);
  manager.hitFlash.name = "VFX:hitFlash";
  manager.hitFlash.visible = false;
  manager.hitFlash.frustumCulled = false;
  manager.hitFlash.renderOrder = 1000;
  manager.group.add(manager.hitFlash);
  manager.resources.add(manager.hitFlash.geometry);
  manager.resources.add(flashMaterial);

  applyQuality(manager, manager.resolvedQuality);
  return manager;
}

/**
 * Advances all effects and returns a stable camera impulse object. Apply its
 * values after the camera spring settles, then render.
 */
export function update(manager, dt, context = {}) {
  if (!manager || manager.disposed || !Number.isFinite(dt) || dt <= 0) return manager?.cameraImpulse || null;
  const safeDt = Math.min(dt, 0.05);
  if (context.camera) manager.camera = context.camera;

  updateAdaptiveQuality(manager, safeDt);
  updatePool(manager, manager.pools.projectileTrail, safeDt, "streak");
  updatePool(manager, manager.pools.missileSmoke, safeDt, "smoke");
  updatePool(manager, manager.pools.jetExhaust, safeDt, "streak");
  updatePool(manager, manager.pools.explosion, safeDt, "explosion");
  updatePool(manager, manager.pools.nearMiss, safeDt, "streak");
  updateWeather(manager, safeDt, context);
  updateImpulse(manager, safeDt);
  updateHitFlash(manager, safeDt);
  return manager.cameraImpulse;
}

/**
 * Spawns a pooled effect. Supported types: projectileTrail, missileSmoke,
 * jetExhaust, explosion, nearMiss, and hitFlash.
 */
export function spawn(manager, type, options = {}) {
  if (!manager || manager.disposed) return null;
  switch (type) {
    case "projectileTrail": return spawnProjectileTrail(manager, options);
    case "missileSmoke": return spawnMissileSmoke(manager, options);
    case "jetExhaust": return spawnJetExhaust(manager, options);
    case "explosion": return spawnExplosion(manager, options);
    case "nearMiss": return spawnNearMiss(manager, options);
    case "hitFlash": return spawnHitFlash(manager, options);
    default: throw new Error(`Unknown VFX type: ${type}`);
  }
}

export function setLevel(manager, level) {
  if (!manager || manager.disposed) return;
  manager.level = Math.max(0, Math.min(LEVEL_WEATHER.length - 1, Math.floor(level)));
  resetWeather(manager, true);
}

/**
 * quality accepts auto, low, medium, or high. Pass reducedMotion to react to a
 * live accessibility-setting change without recreating the manager.
 */
export function setQuality(manager, quality, { reducedMotion = manager?.reducedMotion } = {}) {
  if (!manager || manager.disposed) return;
  manager.reducedMotion = Boolean(reducedMotion);
  manager.qualityMode = quality;
  const resolved = quality === "auto" ? (manager.mobile ? "medium" : "high") : quality;
  applyQuality(manager, resolved);
}

export function dispose(manager) {
  if (!manager || manager.disposed) return;
  manager.disposed = true;
  manager.scene.remove(manager.group);
  for (const resource of manager.resources) resource.dispose?.();
  manager.resources.clear();
  manager.group.clear();
}
