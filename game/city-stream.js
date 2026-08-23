import * as THREE from "../vendor/three.module.min.js";

const DEFAULT_BACKDROPS = [
  "./assets/skyline-level-1.jpg",
  "./assets/skyline-level-2.jpg",
  "./assets/skyline-level-3.jpg",
  "./assets/skyline-level-4.jpg",
];

const GROUND_Y = -5.32;
const DEFAULT_BLOCK_COUNT = 18;
const DEFAULT_BLOCK_SPACING = 11.5;
const DEFAULT_CORRIDOR_HALF_WIDTH = 10.7;
const MAX_LEVEL = 3;

export const CITY_THEMES = Object.freeze([
  Object.freeze({
    id: "coastal-dawn",
    name: "Coastal Dawn",
    sky: 0x315b65,
    fog: 0x58777a,
    road: 0x18262a,
    sidewalk: 0x738083,
    roof: 0x3d5155,
    metal: 0x71878a,
    marking: 0xe8d798,
    light: 0x7ef4dd,
    beacon: 0xffb44f,
    facade: [0x4e747b, 0x668993, 0x516b72],
    windows: [0xa9f6eb, 0xffd99a, 0x75ccdf],
    minHeight: 5.5,
    maxHeight: 15,
    density: 8,
  }),
  Object.freeze({
    id: "industrial-amber",
    name: "Industrial Amber",
    sky: 0x68443e,
    fog: 0x76544c,
    road: 0x211f21,
    sidewalk: 0x67615c,
    roof: 0x403b39,
    metal: 0x77736a,
    marking: 0xe3b853,
    light: 0xffc15e,
    beacon: 0xff6245,
    facade: [0x5c5650, 0x4b5754, 0x665648],
    windows: [0xffc163, 0xff8c43, 0xd9e4b4],
    minHeight: 4,
    maxHeight: 12.5,
    density: 7,
  }),
  Object.freeze({
    id: "storm-finance-core",
    name: "Storm Finance Core",
    sky: 0x202d3b,
    fog: 0x445260,
    road: 0x111a20,
    sidewalk: 0x53616b,
    roof: 0x27353e,
    metal: 0x60727d,
    marking: 0xc8d7d9,
    light: 0x88dfff,
    beacon: 0xff4d45,
    facade: [0x354e5b, 0x435966, 0x2c414c],
    windows: [0x9ee8ff, 0xd6f5ff, 0x7ab8d4],
    minHeight: 10,
    maxHeight: 25,
    density: 9,
  }),
  Object.freeze({
    id: "blackout-siege",
    name: "Blackout Siege",
    sky: 0x2f171c,
    fog: 0x4b292c,
    road: 0x151313,
    sidewalk: 0x493f3d,
    roof: 0x282326,
    metal: 0x554a47,
    marking: 0xa88766,
    light: 0xff513d,
    beacon: 0xff2f29,
    facade: [0x302b2d, 0x3b3232, 0x28282d],
    windows: [0xff5b3f, 0xffa04f, 0x7b6b62],
    minHeight: 7,
    maxHeight: 21,
    density: 8,
  }),
]);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function clampLevel(level) {
  return clamp(Math.round(Number(level) || 0), 0, MAX_LEVEL);
}

function normalizeSeed(seed) {
  if (typeof seed === "string") {
    let hash = 2166136261;
    for (let i = 0; i < seed.length; i += 1) {
      hash ^= seed.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }
  return (Number(seed) >>> 0) || 0x6d2b79f5;
}

function mixSeed(seed, serial, level = 0) {
  let value = normalizeSeed(seed) ^ Math.imul(serial + 1, 0x9e3779b1) ^ Math.imul(level + 17, 0x85ebca6b);
  value ^= value >>> 16;
  value = Math.imul(value, 0x7feb352d);
  value ^= value >>> 15;
  value = Math.imul(value, 0x846ca68b);
  return (value ^ (value >>> 16)) >>> 0;
}

function createRandom(seed) {
  let state = normalizeSeed(seed);
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function range(random, min, max) {
  return min + (max - min) * random();
}

function createCanvas(width, height) {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function makeFacadeTexture(theme, family, seed) {
  const canvas = createCanvas(128, 256);
  if (!canvas) {
    const color = new THREE.Color(theme.facade[family]);
    const data = new Uint8Array([color.r * 255, color.g * 255, color.b * 255, 255]);
    const texture = new THREE.DataTexture(data, 1, 1);
    texture.needsUpdate = true;
    return texture;
  }

  const random = createRandom(mixSeed(seed, family, 41));
  const context = canvas.getContext("2d");
  const base = new THREE.Color(theme.facade[family]);
  const shadow = base.clone().multiplyScalar(0.48);
  const panel = base.clone().lerp(new THREE.Color(0xffffff), 0.12);
  const lit = theme.windows.map((value) => new THREE.Color(value));

  context.fillStyle = `#${shadow.getHexString()}`;
  context.fillRect(0, 0, canvas.width, canvas.height);
  const columns = family === 0 ? 6 : family === 1 ? 8 : 5;
  const rows = family === 2 ? 18 : 22;
  const cellWidth = canvas.width / columns;
  const cellHeight = canvas.height / rows;

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const x = column * cellWidth;
      const y = row * cellHeight;
      context.fillStyle = `#${panel.clone().multiplyScalar(range(random, 0.66, 1.08)).getHexString()}`;
      context.fillRect(x + 1, y + 1, cellWidth - 2, cellHeight - 2);

      const litChance = theme.id === "blackout-siege" ? 0.16 : theme.id === "industrial-amber" ? 0.5 : 0.68;
      const windowColor = random() < litChance ? lit[Math.floor(random() * lit.length)] : shadow;
      context.fillStyle = `#${windowColor.clone().multiplyScalar(range(random, 0.72, 1.08)).getHexString()}`;
      const insetX = family === 1 ? 3 : 4;
      const insetY = family === 2 ? 3 : 2;
      context.fillRect(x + insetX, y + insetY, Math.max(2, cellWidth - insetX * 2), Math.max(2, cellHeight - insetY * 2));
    }
  }

  if (theme.id === "blackout-siege") {
    context.fillStyle = "rgba(5, 4, 4, 0.7)";
    for (let i = 0; i < 16; i += 1) {
      const x = Math.floor(random() * columns) * cellWidth;
      const y = Math.floor(random() * rows) * cellHeight;
      context.fillRect(x + 1, y + 1, cellWidth - 2, cellHeight - 2);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(family === 1 ? 1.5 : 1, family === 2 ? 1.5 : 2);
  texture.needsUpdate = true;
  return texture;
}

function makeProceduralBackdrop(theme, seed) {
  const canvas = createCanvas(1024, 320);
  if (!canvas) return null;
  const random = createRandom(mixSeed(seed, 813, CITY_THEMES.indexOf(theme)));
  const context = canvas.getContext("2d");
  const sky = new THREE.Color(theme.sky);
  const horizon = new THREE.Color(theme.fog).lerp(new THREE.Color(theme.light), 0.08);
  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, `#${sky.clone().multiplyScalar(0.72).getHexString()}`);
  gradient.addColorStop(0.66, `#${sky.getHexString()}`);
  gradient.addColorStop(1, `#${horizon.getHexString()}`);
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  let x = -12;
  while (x < canvas.width + 20) {
    const width = range(random, 18, 54);
    const height = range(random, 32, theme.id === "storm-finance-core" ? 190 : 128);
    context.fillStyle = random() < 0.28 ? "rgba(7, 12, 15, 0.76)" : "rgba(15, 20, 23, 0.68)";
    context.fillRect(x, canvas.height - height, width, height);
    if (random() < 0.25) context.fillRect(x + width * 0.42, canvas.height - height - range(random, 12, 55), 2, range(random, 12, 55));
    x += width + range(random, 3, 13);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function makeStandardMaterial(parameters) {
  return new THREE.MeshStandardMaterial({
    roughness: 0.76,
    metalness: 0.24,
    ...parameters,
  });
}

function createInstancedMesh(geometry, material, capacity, name) {
  const mesh = new THREE.InstancedMesh(geometry, material, capacity);
  mesh.name = name;
  mesh.count = 0;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}

function addBox(target, x, y, z, width, height, depth, extra = {}) {
  target.push({ x, y, z, sx: width, sy: height, sz: depth, ry: extra.ry || 0, color: extra.color });
}

function addCylinder(target, x, y, z, radius, height, extra = {}) {
  target.push({ x, y, z, sx: radius * 2, sy: height, sz: radius * 2, ry: extra.ry || 0, color: extra.color });
}

function generateBlock(state, serial, level) {
  const theme = CITY_THEMES[level];
  const random = createRandom(mixSeed(state.seed, serial, level));
  const block = {
    serial,
    level,
    facade: [],
    roof: [],
    road: [],
    sidewalk: [],
    metalBox: [],
    metalCylinder: [],
    markings: [],
    lights: [],
  };
  const corridor = state.corridorHalfWidth;
  const spacing = state.blockSpacing;

  addBox(block.road, 0, GROUND_Y + 0.035, 0, corridor * 2, 0.07, spacing - 0.08, { color: theme.road });
  addBox(block.sidewalk, -(corridor + 0.72), GROUND_Y + 0.11, 0, 1.4, 0.22, spacing - 0.1, { color: theme.sidewalk });
  addBox(block.sidewalk, corridor + 0.72, GROUND_Y + 0.11, 0, 1.4, 0.22, spacing - 0.1, { color: theme.sidewalk });

  for (const laneX of [-6.2, 0, 6.2]) {
    for (const z of [-3.7, 0, 3.7]) addBox(block.markings, laneX, GROUND_Y + 0.09, z, 0.12, 0.035, 1.7, { color: theme.marking });
  }

  for (const side of [-1, 1]) {
    for (const z of [-3.3, 3.3]) {
      const poleX = side * (corridor + 0.38);
      addCylinder(block.metalCylinder, poleX, GROUND_Y + 1.5, z, 0.055, 2.85, { color: theme.metal });
      addBox(block.metalBox, poleX - side * 0.27, GROUND_Y + 2.83, z, 0.58, 0.06, 0.06, { color: theme.metal });
      addBox(block.lights, poleX - side * 0.52, GROUND_Y + 2.8, z, 0.14, 0.12, 0.24, { color: theme.light });
    }
  }

  const lotsPerSide = theme.density === 9 ? 5 : 4;
  for (const side of [-1, 1]) {
    for (let lot = 0; lot < lotsPerSide; lot += 1) {
      const row = lot % 2;
      const width = range(random, level === 1 ? 3.4 : 2.5, level === 2 ? 5.8 : 5.1);
      const depth = range(random, 2.8, 4.8);
      const innerEdge = corridor + 1.45 + row * 4.6 + range(random, 0, 1.2);
      const x = side * (innerEdge + width / 2);
      const z = range(random, -spacing * 0.42, spacing * 0.42);
      let height = range(random, theme.minHeight, theme.maxHeight);
      if (level === 1 && lot > 1) height *= 0.72;
      if (level === 3 && random() < 0.22) height *= 0.58;
      const family = Math.floor(random() * 3);
      const podiumHeight = clamp(height * range(random, 0.18, 0.28), 1.2, 3.4);
      const upperHeight = height - podiumHeight;

      block.facade.push({
        level,
        family,
        x,
        y: GROUND_Y + podiumHeight / 2,
        z,
        sx: width * 1.14,
        sy: podiumHeight,
        sz: depth * 1.12,
        ry: 0,
      });

      const hasSetback = level === 2 || height > 10 || random() < 0.42;
      const lowerRatio = hasSetback ? range(random, 0.58, 0.74) : 1;
      const lowerHeight = upperHeight * lowerRatio;
      block.facade.push({
        level,
        family,
        x,
        y: GROUND_Y + podiumHeight + lowerHeight / 2,
        z,
        sx: width,
        sy: lowerHeight,
        sz: depth,
        ry: 0,
      });

      let roofY = GROUND_Y + podiumHeight + lowerHeight;
      let roofWidth = width;
      let roofDepth = depth;
      if (hasSetback) {
        const topHeight = upperHeight - lowerHeight;
        roofWidth = width * range(random, 0.58, 0.78);
        roofDepth = depth * range(random, 0.6, 0.82);
        block.facade.push({
          level,
          family: (family + 1) % 3,
          x,
          y: roofY + topHeight / 2,
          z,
          sx: roofWidth,
          sy: topHeight,
          sz: roofDepth,
          ry: 0,
        });
        roofY += topHeight;
      }

      addBox(block.roof, x, roofY + 0.11, z, roofWidth * 0.88, 0.22, roofDepth * 0.86, { color: theme.roof });
      if (random() < 0.78) {
        addBox(block.metalBox, x + range(random, -roofWidth * 0.2, roofWidth * 0.2), roofY + 0.35, z, roofWidth * 0.24, 0.5, roofDepth * 0.24, { color: theme.metal });
      }
      if (height > 11 && random() < 0.46) {
        const mastHeight = range(random, 1.1, level === 2 ? 3.8 : 2.5);
        addCylinder(block.metalCylinder, x, roofY + mastHeight / 2, z, 0.055, mastHeight, { color: theme.metal });
        addBox(block.lights, x, roofY + mastHeight, z, 0.12, 0.12, 0.12, { color: theme.beacon });
      }
    }
  }

  if (level === 0 && serial % 5 === 2) {
    addBox(block.metalBox, 0, GROUND_Y + 0.38, 0, corridor * 2 + 2.1, 0.36, 1.6, { color: 0x647579 });
    for (const side of [-1, 1]) addCylinder(block.metalCylinder, side * (corridor + 0.32), GROUND_Y + 0.18, 0, 0.25, 0.7, { color: 0x4b5e62 });
  }

  if (level === 1) {
    for (const side of [-1, 1]) {
      const industrialX = side * (corridor + 8.4 + range(random, 0, 3));
      if (serial % 2 === 0) {
        const stackHeight = range(random, 7, 13);
        addCylinder(block.metalCylinder, industrialX, GROUND_Y + stackHeight / 2, range(random, -3, 3), 0.52, stackHeight, { color: 0x655e58 });
        addBox(block.lights, industrialX, GROUND_Y + stackHeight + 0.15, 0, 0.22, 0.22, 0.22, { color: theme.beacon });
      } else {
        addCylinder(block.metalCylinder, industrialX, GROUND_Y + 1.15, range(random, -3, 3), 1.6, 2.3, { color: 0x716c62 });
      }
    }
  }

  if (level === 3 && serial % 3 === 0) {
    for (const side of [-1, 1]) {
      const fireX = side * (corridor + range(random, 4.5, 10));
      addBox(block.lights, fireX, GROUND_Y + range(random, 1.2, 5), range(random, -4, 4), range(random, 0.35, 0.75), range(random, 0.6, 1.4), 0.35, { color: random() < 0.5 ? 0xff3d23 : 0xff9a35 });
    }
  }

  return block;
}

function setInstance(mesh, index, descriptor, blockZ, dummy, color) {
  dummy.position.set(descriptor.x, descriptor.y, blockZ + descriptor.z);
  dummy.rotation.set(0, descriptor.ry || 0, 0);
  dummy.scale.set(descriptor.sx, descriptor.sy, descriptor.sz);
  dummy.updateMatrix();
  mesh.setMatrixAt(index, dummy.matrix);
  if (descriptor.color !== undefined) {
    color.setHex(descriptor.color);
    mesh.setColorAt(index, color);
  }
}

function rebuildInstances(state) {
  const counts = new Map();
  for (const mesh of state.instanceMeshes) {
    mesh.count = 0;
    counts.set(mesh, 0);
  }

  const dummy = state.dummy;
  const color = state.color;
  const write = (mesh, descriptor, blockZ) => {
    const index = counts.get(mesh);
    if (index >= mesh.instanceMatrix.count) return;
    setInstance(mesh, index, descriptor, blockZ, dummy, color);
    counts.set(mesh, index + 1);
  };

  state.blocks.forEach((block, rank) => {
    const blockZ = state.frontZ - rank * state.blockSpacing;
    for (const descriptor of block.facade) write(state.facadeMeshes[descriptor.level][descriptor.family], descriptor, blockZ);
    for (const descriptor of block.roof) write(state.meshes.roof, descriptor, blockZ);
    for (const descriptor of block.road) write(state.meshes.road, descriptor, blockZ);
    for (const descriptor of block.sidewalk) write(state.meshes.sidewalk, descriptor, blockZ);
    for (const descriptor of block.metalBox) write(state.meshes.metalBox, descriptor, blockZ);
    for (const descriptor of block.metalCylinder) write(state.meshes.metalCylinder, descriptor, blockZ);
    for (const descriptor of block.markings) write(state.meshes.markings, descriptor, blockZ);
    for (const descriptor of block.lights) write(state.meshes.lights, descriptor, blockZ);
  });

  for (const mesh of state.instanceMeshes) {
    mesh.count = counts.get(mesh);
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  state.stats.instances = [...counts.values()].reduce((sum, count) => sum + count, 0);
}

function loadBackdropAsset(state, level, slot, token) {
  const url = state.backdropUrls[level];
  if (!url || !state.textureLoader) return;
  state.textureLoader.load(
    url,
    (texture) => {
      if (state.disposed || token !== state.backdropTokens[slot]) {
        texture.dispose();
        return;
      }
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      const oldTexture = state.backdropMaterials[slot].map;
      state.backdropMaterials[slot].map = texture;
      state.backdropMaterials[slot].needsUpdate = true;
      state.externalTextures.add(texture);
      if (oldTexture && state.generatedTextures.delete(oldTexture)) oldTexture.dispose();
      if (oldTexture && state.externalTextures.delete(oldTexture)) oldTexture.dispose();
    },
    undefined,
    () => {},
  );
}

function prepareBackdrop(state, level, slot) {
  const procedural = makeProceduralBackdrop(CITY_THEMES[level], state.seed);
  if (procedural) {
    const oldTexture = state.backdropMaterials[slot].map;
    state.generatedTextures.add(procedural);
    state.backdropMaterials[slot].map = procedural;
    state.backdropMaterials[slot].needsUpdate = true;
    if (oldTexture && state.generatedTextures.delete(oldTexture)) oldTexture.dispose();
    if (oldTexture && state.externalTextures.delete(oldTexture)) oldTexture.dispose();
  }
  state.backdropTokens[slot] += 1;
  loadBackdropAsset(state, level, slot, state.backdropTokens[slot]);
}

function updateTransition(state, dt) {
  const transition = state.transition;
  if (!transition) return;
  transition.elapsed = Math.min(transition.duration, transition.elapsed + dt);
  const mix = transition.duration <= 0 ? 1 : transition.elapsed / transition.duration;
  const easedMix = mix * mix * (3 - 2 * mix);
  const sourceMaterial = state.backdropMaterials[transition.fromSlot];
  const targetMaterial = state.backdropMaterials[transition.toSlot];
  sourceMaterial.opacity = 1 - easedMix;
  targetMaterial.opacity = easedMix;

  const desiredRethemed = Math.ceil(mix * state.blockCount);
  let rethemed = transition.rethemed;
  while (rethemed < desiredRethemed) {
    let changed = false;
    for (let rank = state.blocks.length - 1; rank >= 0; rank -= 1) {
      if (state.blocks[rank].level === transition.toLevel) continue;
      state.blocks[rank] = generateBlock(state, state.blocks[rank].serial, transition.toLevel);
      changed = true;
      break;
    }
    rethemed += 1;
    if (!changed) break;
  }
  if (rethemed !== transition.rethemed) {
    transition.rethemed = rethemed;
    rebuildInstances(state);
  }

  state.environmentMix = easedMix;
  state.onThemeMix?.({
    fromLevel: transition.fromLevel,
    toLevel: transition.toLevel,
    mix: easedMix,
    from: CITY_THEMES[transition.fromLevel],
    to: CITY_THEMES[transition.toLevel],
  });

  if (mix >= 1) {
    for (let index = 0; index < state.blocks.length; index += 1) {
      if (state.blocks[index].level !== transition.toLevel) state.blocks[index] = generateBlock(state, state.blocks[index].serial, transition.toLevel);
    }
    rebuildInstances(state);
    state.level = transition.toLevel;
    state.targetLevel = transition.toLevel;
    state.activeBackdropSlot = transition.toSlot;
    sourceMaterial.opacity = 0;
    targetMaterial.opacity = 1;
    state.transition = null;
    state.environmentMix = 1;
  }
}

function createSceneResources(state) {
  const maxBuildings = state.blockCount * 5 * 2 * 3;
  const maxDetails = state.blockCount * 48;
  const maxCylinders = state.blockCount * 32;
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 8, 1, false);
  // Overscan the camera frustum so the skyline never reads as a floating panel.
  const backdropGeometry = new THREE.PlaneGeometry(340, 205, 1, 1);
  state.geometries.add(boxGeometry);
  state.geometries.add(cylinderGeometry);
  state.geometries.add(backdropGeometry);

  state.facadeMeshes = CITY_THEMES.map((theme, level) => theme.facade.map((color, family) => {
    const texture = makeFacadeTexture(theme, family, state.seed);
    state.generatedTextures.add(texture);
    const material = makeStandardMaterial({
      color,
      map: texture,
      emissiveMap: texture,
      emissive: new THREE.Color(theme.windows[0]).multiplyScalar(level === 3 ? 0.08 : 0.14),
      emissiveIntensity: level === 3 ? 0.24 : 0.46,
    });
    state.materials.add(material);
    const mesh = createInstancedMesh(boxGeometry, material, maxBuildings, `city-facade-${level}-${family}`);
    state.instanceMeshes.push(mesh);
    state.movingRoot.add(mesh);
    return mesh;
  }));

  const makeColoredMesh = (name, geometry, material, capacity) => {
    state.materials.add(material);
    const mesh = createInstancedMesh(geometry, material, capacity, name);
    state.instanceMeshes.push(mesh);
    state.movingRoot.add(mesh);
    return mesh;
  };

  state.meshes = {
    roof: makeColoredMesh("city-rooftops", boxGeometry, makeStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.92, metalness: 0.08 }), maxDetails),
    road: makeColoredMesh("city-roads", boxGeometry, makeStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.98, metalness: 0.02 }), state.blockCount * 2),
    sidewalk: makeColoredMesh("city-sidewalks", boxGeometry, makeStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.9, metalness: 0.04 }), state.blockCount * 4),
    metalBox: makeColoredMesh("city-mechanical-boxes", boxGeometry, makeStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.58, metalness: 0.54 }), maxDetails),
    metalCylinder: makeColoredMesh("city-cylinders", cylinderGeometry, makeStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.55, metalness: 0.58 }), maxCylinders),
    markings: makeColoredMesh("city-road-markings", boxGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true }), state.blockCount * 12),
    lights: makeColoredMesh("city-practical-lights", boxGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: true, toneMapped: false }), maxDetails),
  };

  state.backdropMaterials = [0, 1].map(() => {
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      fog: false,
      side: THREE.DoubleSide,
    });
    state.materials.add(material);
    return material;
  });
  state.backdropMeshes = state.backdropMaterials.map((material, index) => {
    const mesh = new THREE.Mesh(backdropGeometry, material);
    mesh.name = `city-distant-skyline-${index}`;
    mesh.position.set(0, 15, -176 - index * 0.08);
    mesh.renderOrder = -5 + index;
    state.backdropRoot.add(mesh);
    return mesh;
  });
  prepareBackdrop(state, state.level, 0);
  state.backdropMaterials[0].opacity = 1;
}

export function createCityStream(options = {}) {
  const blockCount = clamp(Math.floor(options.blockCount || DEFAULT_BLOCK_COUNT), 10, 24);
  const blockSpacing = clamp(Number(options.blockSpacing) || DEFAULT_BLOCK_SPACING, 9, 16);
  const corridorHalfWidth = Math.max(DEFAULT_CORRIDOR_HALF_WIDTH, Number(options.corridorHalfWidth) || 0);
  const level = clampLevel(options.level);
  const root = new THREE.Group();
  root.name = "streamed-city";
  const movingRoot = new THREE.Group();
  movingRoot.name = "streamed-city-blocks";
  const backdropRoot = new THREE.Group();
  backdropRoot.name = "streamed-city-backdrops";
  root.add(backdropRoot, movingRoot);

  const state = {
    root,
    movingRoot,
    backdropRoot,
    scene: options.scene || null,
    blockCount,
    blockSpacing,
    corridorHalfWidth,
    frontZ: Number(options.frontZ) || 18,
    seed: normalizeSeed(options.seed),
    speed: Math.max(0, Number(options.speed) || 16),
    level,
    targetLevel: level,
    scroll: 0,
    nextSerial: blockCount,
    blocks: [],
    transition: null,
    environmentMix: 1,
    activeBackdropSlot: 0,
    backdropTokens: [0, 0],
    backdropUrls: Array.isArray(options.backdropUrls) ? options.backdropUrls.slice(0, 4) : DEFAULT_BACKDROPS.slice(),
    textureLoader: typeof document === "undefined" ? null : new THREE.TextureLoader(),
    onThemeMix: typeof options.onThemeMix === "function" ? options.onThemeMix : null,
    geometries: new Set(),
    materials: new Set(),
    generatedTextures: new Set(),
    externalTextures: new Set(),
    instanceMeshes: [],
    facadeMeshes: [],
    meshes: {},
    backdropMaterials: [],
    backdropMeshes: [],
    dummy: new THREE.Object3D(),
    color: new THREE.Color(),
    disposed: false,
    stats: { drawCalls: 0, instances: 0, blocks: blockCount },
  };

  createSceneResources(state);
  for (let serial = 0; serial < blockCount; serial += 1) state.blocks.push(generateBlock(state, serial, level));
  rebuildInstances(state);
  state.stats.drawCalls = state.instanceMeshes.length + state.backdropMeshes.length;
  state.scene?.add(root);

  const api = {
    root,
    get level() { return state.level; },
    get targetLevel() { return state.targetLevel; },
    get seed() { return state.seed; },
    update(dt, updateOptions) { return updateCityStream(api, dt, updateOptions); },
    setLevel(nextLevel, levelOptions) { return setCityLevel(api, nextLevel, levelOptions); },
    setSeed(nextSeed, seedOptions) { return setCitySeed(api, nextSeed, seedOptions); },
    getEnvironment() { return getCityEnvironment(api); },
    getStats() { return { ...state.stats }; },
    dispose() { disposeCityStream(api); },
  };
  Object.defineProperty(api, "_cityState", { value: state });
  return api;
}

function getState(city) {
  const state = city?._cityState;
  if (!state || state.disposed) return null;
  return state;
}

export function updateCityStream(city, deltaSeconds, options = {}) {
  const state = getState(city);
  if (!state) return null;
  const dt = clamp(Number(deltaSeconds) || 0, 0, 0.1);
  const speed = typeof options === "number" ? options : options.speed;
  const movementSpeed = Math.max(0, Number.isFinite(speed) ? speed : state.speed);
  state.speed = movementSpeed;
  state.scroll += movementSpeed * dt;

  let recycled = false;
  while (state.scroll >= state.blockSpacing) {
    state.scroll -= state.blockSpacing;
    state.blocks.shift();
    state.blocks.push(generateBlock(state, state.nextSerial, state.targetLevel));
    state.nextSerial += 1;
    recycled = true;
  }
  state.movingRoot.position.z = state.scroll;
  if (recycled) rebuildInstances(state);
  updateTransition(state, dt);
  return getCityEnvironment(city);
}

export function setCityLevel(city, level, options = {}) {
  const state = getState(city);
  if (!state) return false;
  const nextLevel = clampLevel(level);
  if (nextLevel === state.targetLevel && !options.immediate) return false;
  const immediate = Boolean(options.immediate);
  const duration = clamp(Number(options.duration) || 2.8, 0.4, 8);
  const fromLevel = state.transition?.toLevel ?? state.level;
  const fromSlot = state.activeBackdropSlot;
  const toSlot = 1 - fromSlot;
  state.targetLevel = nextLevel;
  prepareBackdrop(state, nextLevel, toSlot);

  if (immediate) {
    state.blocks = state.blocks.map((block) => generateBlock(state, block.serial, nextLevel));
    state.level = nextLevel;
    state.targetLevel = nextLevel;
    state.transition = null;
    state.backdropMaterials[fromSlot].opacity = 0;
    state.backdropMaterials[toSlot].opacity = 1;
    state.activeBackdropSlot = toSlot;
    state.environmentMix = 1;
    rebuildInstances(state);
    state.onThemeMix?.({ fromLevel: nextLevel, toLevel: nextLevel, mix: 1, from: CITY_THEMES[nextLevel], to: CITY_THEMES[nextLevel] });
    return true;
  }

  state.backdropMaterials[fromSlot].opacity = 1;
  state.backdropMaterials[toSlot].opacity = 0;
  state.transition = {
    fromLevel,
    toLevel: nextLevel,
    fromSlot,
    toSlot,
    elapsed: 0,
    duration,
    rethemed: 0,
  };
  return true;
}

export function setCitySeed(city, seed, options = {}) {
  const state = getState(city);
  if (!state) return false;
  const normalized = normalizeSeed(seed);
  if (normalized === state.seed && options.regenerate !== true) return false;
  state.seed = normalized;
  state.nextSerial = state.blockCount;
  if (options.regenerate !== false) {
    state.blocks = [];
    for (let serial = 0; serial < state.blockCount; serial += 1) state.blocks.push(generateBlock(state, serial, state.targetLevel));
    state.scroll = 0;
    state.movingRoot.position.z = 0;
    rebuildInstances(state);
  }
  return true;
}

export function getCityEnvironment(city) {
  const state = getState(city);
  if (!state) return null;
  if (!state.transition) {
    const theme = CITY_THEMES[state.targetLevel];
    return { level: state.targetLevel, mix: 1, sky: theme.sky, fog: theme.fog, light: theme.light, theme };
  }
  const { fromLevel, toLevel } = state.transition;
  const mix = state.environmentMix;
  const from = CITY_THEMES[fromLevel];
  const to = CITY_THEMES[toLevel];
  return {
    level: toLevel,
    mix,
    sky: new THREE.Color(from.sky).lerp(new THREE.Color(to.sky), mix).getHex(),
    fog: new THREE.Color(from.fog).lerp(new THREE.Color(to.fog), mix).getHex(),
    light: new THREE.Color(from.light).lerp(new THREE.Color(to.light), mix).getHex(),
    theme: to,
  };
}

export function disposeCityStream(city) {
  const state = city?._cityState;
  if (!state || state.disposed) return;
  state.disposed = true;
  state.backdropTokens[0] += 1;
  state.backdropTokens[1] += 1;
  state.root.parent?.remove(state.root);
  for (const geometry of state.geometries) geometry.dispose();
  for (const material of state.materials) material.dispose();
  for (const texture of state.generatedTextures) texture.dispose();
  for (const texture of state.externalTextures) texture.dispose();
  state.blocks.length = 0;
  state.instanceMeshes.length = 0;
  state.generatedTextures.clear();
  state.externalTextures.clear();
  state.materials.clear();
  state.geometries.clear();
}
