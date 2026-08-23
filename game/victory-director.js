import * as THREE from "../vendor/three.module.min.js";

const WINGTAIL_CUE = 8.6;
const FINAL_VESPER_CUE = 14;
const DURATION = 19.7;

export const VICTORY_VOICE_ASSETS = Object.freeze([
  "./assets/voices/15-relays-down.mp3",
  "./assets/voices/16-wingtail-victory.mp3",
  "./assets/voices/17-sky-restored.mp3",
]);

function makeCity() {
  const group = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: 0x172126, emissive: 0x071012, roughness: 0.82 });
  const lit = new THREE.MeshStandardMaterial({ color: 0x40545b, emissive: 0x49cdb8, emissiveIntensity: 0, roughness: 0.68 });
  for (let index = 0; index < 48; index += 1) {
    const side = index % 2 ? -1 : 1;
    const height = 1.6 + ((index * 47) % 19) * 0.24;
    const building = new THREE.Mesh(new THREE.BoxGeometry(1.1 + (index % 3) * 0.28, height, 1.4), index % 3 ? dark : lit);
    building.position.set(side * (2.7 + (index % 8) * 1.15), height * 0.5 - 2.2, -index * 1.45);
    group.add(building);
  }
  group.userData.litMaterial = lit;
  return group;
}

function makeRelay() {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x3b474d, metalness: 0.78, roughness: 0.3 });
  const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xff3e36, transparent: true, opacity: 0.95 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.85, 3.8, 10), metal);
  group.add(body);
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.52, 16, 12), coreMaterial);
  group.add(core);
  const rings = [];
  for (let index = 0; index < 3; index += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.05 + index * 0.32, 0.055, 8, 48), coreMaterial);
    ring.rotation.set(Math.PI / 2 + index * 0.35, index * 0.48, 0);
    group.add(ring);
    rings.push(ring);
  }
  group.userData = { core, rings };
  return group;
}

function makePortrait(url) {
  const texture = new THREE.TextureLoader().load(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, toneMapped: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.1, 5.1), material);
  mesh.position.set(0, 1.1, -4.4);
  mesh.visible = false;
  return { mesh, texture, material };
}

export function createVictoryDirector({
  canvas,
  vesperAsset,
  wingtailAsset,
  reducedMotion = false,
  onCue = () => {},
  onComplete = () => {},
} = {}) {
  if (!canvas) return null;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !matchMedia("(max-width: 700px)").matches });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x03080a);
  scene.fog = new THREE.FogExp2(0x07171a, 0.028);
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 140);
  const city = makeCity();
  const relay = makeRelay();
  relay.position.set(0, 1, -8);
  scene.add(city, relay);

  const vesper = makePortrait(vesperAsset);
  const wingtail = makePortrait(wingtailAsset);
  scene.add(vesper.mesh, wingtail.mesh);

  const light = new THREE.HemisphereLight(0xa7eeea, 0x06090a, 1.5);
  const red = new THREE.PointLight(0xff3e36, 5, 22, 2);
  red.position.set(0, 2, -7);
  const dawn = new THREE.DirectionalLight(0xffe0a1, 0);
  dawn.position.set(-6, 8, 4);
  scene.add(light, red, dawn);

  const particleCount = 90;
  const positions = new Float32Array(particleCount * 3);
  for (let index = 0; index < particleCount; index += 1) {
    positions[index * 3] = (Math.random() - 0.5) * 2;
    positions[index * 3 + 1] = 1 + (Math.random() - 0.5) * 2;
    positions[index * 3 + 2] = -8 + (Math.random() - 0.5) * 2;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({ color: 0xffc75e, size: 0.11, transparent: true, opacity: 0, blending: THREE.AdditiveBlending }),
  );
  scene.add(particles);

  const cues = [
    { at: 0, speaker: "Commander Vesper", text: "The relays are down. Skyshield is blind, and every stolen aircraft is returning to human control.", voice: VICTORY_VOICE_ASSETS[0] },
    { at: WINGTAIL_CUE, speaker: "Wingtail", text: "Tell humanity the sky is open. And tell them to keep the fruit bowl stocked.", voice: VICTORY_VOICE_ASSETS[1] },
    { at: FINAL_VESPER_CUE, speaker: "Commander Vesper", text: "Operation Banana Sky is complete. Welcome home, Wingtail.", voice: VICTORY_VOICE_ASSETS[2] },
  ];

  let active = false;
  let paused = false;
  let startTime = 0;
  let pausedAt = 0;
  let raf = 0;
  let lastCue = -1;

  function resize() {
    const width = Math.max(2, canvas.clientWidth || 640);
    const height = Math.max(2, canvas.clientHeight || 420);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, width <= 700 ? 1.1 : 1.45));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.fov = width <= 700 && height > width ? 62 : 52;
    camera.updateProjectionMatrix();
  }

  function update(time) {
    let cueIndex = 0;
    for (let index = 0; index < cues.length; index += 1) if (time >= cues[index].at) cueIndex = index;
    if (cueIndex !== lastCue) {
      lastCue = cueIndex;
      onCue({ ...cues[cueIndex], progress: time / DURATION });
    } else onCue({ progress: time / DURATION });

    if (time < WINGTAIL_CUE) {
      relay.visible = true;
      city.visible = true;
      vesper.mesh.visible = false;
      wingtail.mesh.visible = false;
      camera.position.set(0, 2.1, 5.5 - time * 0.24);
      camera.lookAt(0, 1, -8);
      relay.userData.rings.forEach((ring, index) => { ring.rotation.z += 0.02 + index * 0.006; });
      const collapse = Math.max(0, (time - 2.4) / 3.5);
      relay.scale.setScalar(1 + Math.sin(time * 9) * collapse * 0.08);
      relay.userData.core.material.opacity = Math.max(0, 1 - collapse);
      red.intensity = Math.max(0, 5 * (1 - collapse));
      particles.material.opacity = Math.min(0.9, collapse * 1.4);
      particles.scale.setScalar(1 + collapse * 6);
    } else if (time < FINAL_VESPER_CUE) {
      relay.visible = false;
      vesper.mesh.visible = false;
      wingtail.mesh.visible = true;
      camera.position.set(0, 1.35, 2.2);
      camera.lookAt(0, 1.1, -4.4);
      city.userData.litMaterial.emissiveIntensity = Math.min(1.7, (time - WINGTAIL_CUE) * 0.35);
      dawn.intensity = Math.min(3.2, (time - WINGTAIL_CUE) * 0.55);
      wingtail.mesh.scale.setScalar(reducedMotion ? 1 : 1 + Math.sin(time * 2.8) * 0.006);
    } else {
      relay.visible = false;
      wingtail.mesh.visible = false;
      vesper.mesh.visible = true;
      camera.position.set(0, 1.35, 2.2);
      camera.lookAt(0, 1.1, -4.4);
      dawn.intensity = 3.2;
      city.userData.litMaterial.emissiveIntensity = 1.7;
      vesper.mesh.scale.setScalar(reducedMotion ? 1 : 1 + Math.sin(time * 2.4) * 0.005);
    }
  }

  function render(now) {
    if (!active) return;
    if (!paused) {
      const time = Math.min(DURATION, (now - startTime) / 1000);
      update(time);
      if (time >= DURATION) {
        active = false;
        onComplete();
        return;
      }
    }
    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  }

  function start() {
    if (active) return;
    active = true;
    paused = false;
    lastCue = -1;
    canvas.hidden = false;
    resize();
    startTime = performance.now();
    raf = requestAnimationFrame(render);
  }

  function finish() {
    if (!active) return;
    active = false;
    cancelAnimationFrame(raf);
    onComplete();
  }

  function setPaused(value) {
    if (!active) return;
    if (value && !paused) {
      paused = true;
      pausedAt = performance.now();
    } else if (!value && paused) {
      startTime += performance.now() - pausedAt;
      paused = false;
    }
  }

  function dispose() {
    active = false;
    cancelAnimationFrame(raf);
    scene.traverse((object) => {
      object.geometry?.dispose?.();
      if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose?.());
      else object.material?.dispose?.();
    });
    vesper.texture.dispose();
    wingtail.texture.dispose();
    renderer.dispose();
  }

  return { start, skip: finish, setPaused, resize, dispose };
}
