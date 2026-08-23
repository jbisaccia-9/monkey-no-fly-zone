import * as THREE from "../vendor/three.module.min.js";

export const PLAYER_COLLISION_RADIUS = 0.55;

const DEFAULT_ASSET = "./assets/hero-monkey-chase-v2.png";
const FORWARD = new THREE.Vector3(0, 0, -1);
const UP = new THREE.Vector3(0, 1, 0);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.damp(current, target, lambda, dt);
}

function springVector(position, velocity, target, angularFrequency, dt) {
  const frequencySquared = angularFrequency * angularFrequency;
  const stepFrequency = dt * frequencySquared;
  const denominator = 1 / (1 + 2 * dt * angularFrequency + dt * stepFrequency);
  for (const axis of ["x", "y", "z"]) {
    const current = position[axis];
    const currentVelocity = velocity[axis];
    position[axis] = (current * (1 + 2 * dt * angularFrequency) + dt * currentVelocity + dt * stepFrequency * target[axis]) * denominator;
    velocity[axis] = (currentVelocity + stepFrequency * (target[axis] - current)) * denominator;
  }
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Unable to load player art: ${url}`));
    image.src = url;
  });
}

function smoothstep(edge0, edge1, value) {
  const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function buildPlayerTexture(image, renderer) {
  const maxDimension = 1280;
  const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(2, Math.round(image.naturalWidth * scale));
  const height = Math.max(2, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Canvas 2D is required to prepare player art.");
  context.drawImage(image, 0, 0, width, height);

  const pixels = context.getImageData(0, 0, width, height);
  const data = pixels.data;
  for (let index = 0; index < data.length; index += 4) {
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const dominance = green - Math.max(red, blue);
    const screenConfidence = smoothstep(24, 92, dominance) * smoothstep(72, 180, green);
    if (screenConfidence <= 0) continue;

    data[index + 3] = Math.round(data[index + 3] * (1 - screenConfidence));
    const spill = screenConfidence * 0.78;
    data[index + 1] = Math.round(green * (1 - spill) + Math.max(red, blue) * spill);
  }
  context.putImageData(pixels, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = Math.min(4, renderer?.capabilities?.getMaxAnisotropy?.() || 1);
  texture.needsUpdate = true;
  return texture;
}

function makeRibbon(color, opacity) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(18), 3));
  geometry.setIndex([0, 1, 2, 2, 1, 3, 2, 3, 4, 4, 3, 5]);
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.NormalBlending,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.frustumCulled = false;
  return mesh;
}

function updateRibbon(ribbon, time, side, airSpeed) {
  const positions = ribbon.geometry.attributes.position.array;
  const flutter = Math.sin(time * 12.5 + side * 1.7) * 0.055;
  const length = 0.5 + airSpeed * 0.025;
  const points = [
    [-0.12 + side * 0.03, 0.18, 0.08],
    [-0.18 + side * 0.08, 0.12 + flutter, length * 0.55],
    [-0.27 + side * 0.12, 0.05 - flutter * 0.7, length],
  ];
  let cursor = 0;
  for (const [x, y, z] of points) {
    positions[cursor++] = x - 0.035;
    positions[cursor++] = y;
    positions[cursor++] = z;
    positions[cursor++] = x + 0.035;
    positions[cursor++] = y + 0.025;
    positions[cursor++] = z;
  }
  ribbon.geometry.attributes.position.needsUpdate = true;
}

function makeTail() {
  const positions = new Float32Array(8 * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.LineBasicMaterial({
    color: 0x3a2417,
    transparent: true,
    opacity: 0.86,
    depthWrite: false,
  });
  const tail = new THREE.Line(geometry, material);
  tail.frustumCulled = false;
  return tail;
}

function updateTail(tail, time, bank) {
  const positions = tail.geometry.attributes.position.array;
  for (let index = 0; index < 8; index += 1) {
    const t = index / 7;
    const wave = Math.sin(time * 5.3 - t * 4.8) * (0.04 + t * 0.1);
    positions[index * 3] = -0.18 - t * 0.18 + wave - bank * t * 0.1;
    positions[index * 3 + 1] = -0.29 - t * 0.13 + Math.cos(time * 4.1 - t * 3.2) * t * 0.045;
    positions[index * 3 + 2] = 0.08 + t * 0.78;
  }
  tail.geometry.attributes.position.needsUpdate = true;
}

function makeWingAccent(side, shared) {
  const pivot = new THREE.Group();
  pivot.position.set(side * 0.27, 0.14, 0.055);

  const strut = new THREE.Mesh(shared.strutGeometry, shared.metalMaterial);
  strut.rotation.z = side * -Math.PI / 2;
  strut.position.x = side * 0.31;
  pivot.add(strut);

  const joint = new THREE.Mesh(shared.jointGeometry, shared.brassMaterial);
  joint.position.x = side * 0.62;
  pivot.add(joint);

  const thruster = new THREE.Mesh(shared.thrusterGeometry, shared.thrusterMaterial);
  thruster.rotation.x = Math.PI / 2;
  thruster.position.set(side * 0.62, -0.015, 0.08);
  pivot.add(thruster);

  const trail = new THREE.Mesh(shared.trailGeometry, shared.trailMaterial);
  trail.rotation.x = Math.PI / 2;
  trail.position.set(side * 0.62, -0.015, 0.31);
  pivot.add(trail);

  pivot.userData.trail = trail;
  return pivot;
}

function disposeObject(root) {
  const geometries = new Set();
  const materials = new Set();
  root.traverse((object) => {
    if (object.geometry) geometries.add(object.geometry);
    if (Array.isArray(object.material)) object.material.forEach((material) => materials.add(material));
    else if (object.material) materials.add(object.material);
  });
  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => material.dispose());
}

/**
 * Creates the rear chase-view player. Additions and resources are owned by the
 * returned controller and are removed by dispose().
 */
export async function create({
  scene,
  camera,
  renderer,
  assetUrl = DEFAULT_ASSET,
  mobile = typeof matchMedia === "function" && matchMedia("(max-width: 700px)").matches,
  reducedMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches,
} = {}) {
  if (!scene || !camera) throw new Error("Player visual requires a Three.js scene and camera.");

  const image = await loadImage(assetUrl);
  const texture = buildPlayerTexture(image, renderer);
  const rig = new THREE.Group();
  rig.name = "playerRig";

  const attitude = new THREE.Group();
  attitude.name = "playerAttitude";
  rig.add(attitude);

  const heroMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.06,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: true,
  });
  const hero = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 1.03), heroMaterial);
  hero.name = "playerHeroBillboard";
  hero.renderOrder = 5;
  attitude.add(hero);

  const shared = {
    strutGeometry: new THREE.CylinderGeometry(0.018, 0.025, 0.62, 6),
    jointGeometry: new THREE.SphereGeometry(0.065, 8, 5),
    thrusterGeometry: new THREE.CylinderGeometry(0.045, 0.06, 0.14, 7),
    trailGeometry: new THREE.ConeGeometry(0.06, 0.48, 7, 1, true),
    metalMaterial: new THREE.MeshStandardMaterial({ color: 0x7d8585, metalness: 0.82, roughness: 0.28 }),
    brassMaterial: new THREE.MeshStandardMaterial({ color: 0xb88a3a, metalness: 0.78, roughness: 0.3 }),
    thrusterMaterial: new THREE.MeshBasicMaterial({ color: 0xffd66b, transparent: true, opacity: 0.94 }),
    trailMaterial: new THREE.MeshBasicMaterial({
      color: 0xff8a32,
      transparent: true,
      opacity: 0.44,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    }),
  };

  const leftWing = makeWingAccent(-1, shared);
  const rightWing = makeWingAccent(1, shared);
  attitude.add(leftWing, rightWing);

  const scarfLeft = makeRibbon(0xc42025, 0.88);
  const scarfRight = makeRibbon(0x8f1118, 0.78);
  attitude.add(scarfLeft, scarfRight);

  const tail = makeTail();
  attitude.add(tail);

  const engineLight = new THREE.PointLight(0xffb13b, mobile ? 1.4 : 2.1, 4.5, 2);
  engineLight.position.set(0, -0.04, 0.34);
  attitude.add(engineLight);

  scene.add(rig);

  const controller = {
    rig,
    attitude,
    hero,
    texture,
    camera,
    collisionRadius: PLAYER_COLLISION_RADIUS,
    mobile: Boolean(mobile),
    reducedMotion: Boolean(reducedMotion),
    time: 0,
    wings: [leftWing, rightWing],
    scarves: [scarfLeft, scarfRight],
    tail,
    engineLight,
    materials: {
      metal: shared.metalMaterial,
      brass: shared.brassMaterial,
      thruster: shared.thrusterMaterial,
      trail: shared.trailMaterial,
      scarves: [scarfLeft.material, scarfRight.material],
    },
    cameraVelocity: new THREE.Vector3(),
    cameraTarget: new THREE.Vector3(),
    lookTarget: new THREE.Vector3(),
    aimForward: FORWARD.clone(),
    disposed: false,
  };

  setMobile(controller, mobile);
  return controller;
}

/** Updates the physical player rig from the simulation's player state. */
export function update(controller, dt, player, options = {}) {
  if (!controller || controller.disposed || !player) return;
  const step = clamp(Number.isFinite(dt) ? dt : 0, 0, 0.05);
  controller.time += step;

  const bank = clamp(player.bank ?? -(player.vx || 0) * 0.08, -0.52, 0.52);
  const pitch = clamp(player.pitch ?? -(player.vy || 0) * 0.045, -0.36, 0.36);
  const yaw = clamp(-(player.vx || 0) * 0.022, -0.18, 0.18);
  const speed = clamp(options.speed ?? 16, 8, 34);
  const active = options.active !== false;
  const idleBob = active || controller.reducedMotion ? 0 : Math.sin(controller.time * 2.4) * 0.045;

  controller.rig.position.set(player.x || 0, (player.y || 0) + idleBob, player.z || 0);
  controller.attitude.rotation.x = damp(controller.attitude.rotation.x, pitch * 0.72, 9, step);
  controller.attitude.rotation.y = damp(controller.attitude.rotation.y, yaw, 10, step);
  controller.attitude.rotation.z = damp(controller.attitude.rotation.z, bank, 11, step);

  const flap = Math.sin(controller.time * (active ? 8.5 : 3.2)) * (active ? 0.055 : 0.025);
  controller.wings[0].rotation.z = damp(controller.wings[0].rotation.z, flap, 12, step);
  controller.wings[1].rotation.z = damp(controller.wings[1].rotation.z, -flap, 12, step);

  updateRibbon(controller.scarves[0], controller.time, -1, speed);
  updateRibbon(controller.scarves[1], controller.time + 0.17, 1, speed);
  updateTail(controller.tail, controller.time, bank);

  const thrust = clamp(options.thrust ?? 0.55 + Math.abs(player.vy || 0) * 0.055, 0.35, 1);
  controller.engineLight.intensity = (controller.mobile ? 1.3 : 1.9) * thrust;
  controller.wings.forEach((wing, index) => {
    const trail = wing.userData.trail;
    const pulse = 0.9 + Math.sin(controller.time * 28 + index) * 0.12;
    trail.scale.set(0.85 + thrust * 0.25, 0.55 + thrust * 0.7 * pulse, 0.85 + thrust * 0.25);
    trail.material.opacity = 0.22 + thrust * 0.32;
  });

  const visualScale = controller.mobile ? 0.92 : 1;
  controller.attitude.scale.setScalar(visualScale);
}

/**
 * Applies a damped over-the-shoulder chase camera. `shake` is a world-space
 * amplitude and can be omitted when the VFX system owns camera impulses.
 */
export function updateCamera(controller, dt, player, options = {}) {
  if (!controller || controller.disposed || !player) return;
  const camera = options.camera || controller.camera;
  const step = clamp(Number.isFinite(dt) ? dt : 0, 0, 0.05);
  const portrait = controller.mobile && camera.aspect < 0.82;
  const chaseDistance = portrait ? 10.7 : controller.mobile ? 9.9 : 9.35;
  const cameraHeight = portrait ? 2.45 : 2.05;
  const followX = portrait ? 0.16 : 0.22;
  const shake = controller.reducedMotion ? (options.shake || 0) * 0.12 : options.shake || 0;
  const time = controller.time;

  controller.cameraTarget.set(
    (player.x || 0) * followX + Math.sin(time * 47.1) * shake,
    (player.y || 0) + cameraHeight + Math.cos(time * 41.7) * shake,
    (player.z || 0) + chaseDistance,
  );

  springVector(camera.position, controller.cameraVelocity, controller.cameraTarget, portrait ? 7.2 : 8.4, step);

  const lookAhead = clamp(options.lookAhead ?? (portrait ? 29 : 32), 28, 35);
  controller.lookTarget.set(
    (player.x || 0) * 0.58,
    (player.y || 0) + (portrait ? 1.05 : 0.82),
    (player.z || 0) - lookAhead,
  );
  camera.up.copy(UP);
  camera.lookAt(controller.lookTarget);
  camera.rotateZ(clamp(-(player.bank || 0) * 0.12, -0.07, 0.07));
}

export function setMobile(controller, mobile) {
  if (!controller || controller.disposed) return;
  controller.mobile = Boolean(mobile);
  controller.hero.scale.setScalar(controller.mobile ? 0.94 : 1);
  controller.engineLight.distance = controller.mobile ? 3.6 : 4.5;
}

/** Applies persistent hangar equipment to the in-flight rig. */
export function applyLoadout(controller, equipped = {}) {
  if (!controller || controller.disposed) return;
  const airframe = equipped.airframe || "clockwork-pinions";
  const outfit = equipped.outfit || "rescue-scarf";
  const materials = controller.materials;

  const airframeStyle = {
    "clockwork-pinions": { metal: 0x7d8585, brass: 0xb88a3a, trail: 0xff8a32, scaleX: 1, scaleY: 1 },
    "howler-rocket-rig": { metal: 0x8b4933, brass: 0xe4a246, trail: 0xff5a24, scaleX: 0.92, scaleY: 1.16 },
    "thunderbird-glider": { metal: 0x4b6f73, brass: 0x7ee8d3, trail: 0x54e8e0, scaleX: 1.18, scaleY: 0.96 },
  }[airframe];
  materials.metal.color.setHex(airframeStyle.metal);
  materials.brass.color.setHex(airframeStyle.brass);
  materials.trail.color.setHex(airframeStyle.trail);
  controller.engineLight.color.setHex(airframeStyle.trail);
  controller.wings.forEach((wing) => wing.scale.set(airframeStyle.scaleX, airframeStyle.scaleY, 1));

  const outfitStyle = {
    "rescue-scarf": { left: 0xc42025, right: 0x8f1118, tint: 0xffffff },
    "ace-jacket": { left: 0xe0a23b, right: 0x9d5f20, tint: 0xfff1d8 },
    "midnight-suit": { left: 0x2b7274, right: 0x163f48, tint: 0xc9e1df },
  }[outfit];
  materials.scarves[0].color.setHex(outfitStyle.left);
  materials.scarves[1].color.setHex(outfitStyle.right);
  controller.hero.material.color.setHex(outfitStyle.tint);
}

export function dispose(controller) {
  if (!controller || controller.disposed) return;
  controller.disposed = true;
  controller.rig.removeFromParent();
  disposeObject(controller.rig);
  controller.texture.dispose();
  controller.wings.length = 0;
  controller.scarves.length = 0;
  controller.materials = null;
}
