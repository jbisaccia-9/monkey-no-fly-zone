import * as THREE from "../vendor/three.module.min.js";

const DURATION = 14;

function ease(value) {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
}

function makeJet() {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x56636a, metalness: 0.82, roughness: 0.3 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.16, 1.25, 7), metal);
  body.rotation.x = Math.PI / 2;
  group.add(body);
  const wing = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.035, 0.36), metal);
  wing.position.z = 0.08;
  group.add(wing);
  const tail = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.03, 0.2), metal);
  tail.position.z = 0.48;
  group.add(tail);
  const engine = new THREE.PointLight(0xff5f32, 2.4, 3);
  engine.position.z = 0.7;
  group.add(engine);
  return group;
}

function makeCity(seed = 17) {
  const group = new THREE.Group();
  let state = seed >>> 0;
  const random = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  const material = new THREE.MeshStandardMaterial({
    color: 0x142229,
    emissive: 0x173f46,
    emissiveIntensity: 0.44,
    metalness: 0.28,
    roughness: 0.78,
  });
  for (let index = 0; index < 52; index += 1) {
    const height = 1.1 + random() * 5.5;
    const building = new THREE.Mesh(
      new THREE.BoxGeometry(0.7 + random() * 1.1, height, 0.7 + random() * 1.1),
      material,
    );
    const side = index % 2 ? -1 : 1;
    building.position.set(side * (2.3 + random() * 7.5), height * 0.5 - 1.2, -index * 0.9 + random() * 2);
    group.add(building);
  }
  group.userData.material = material;
  return group;
}

function loadPortrait(url) {
  const texture = new THREE.TextureLoader().load(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, toneMapped: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.35, 5.35), material);
  mesh.position.set(0, 1.25, -4);
  mesh.visible = false;
  return { mesh, texture, material };
}

function makeThreatGlobe() {
  const group = new THREE.Group();
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(2.25, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0x48d8d0, wireframe: true, transparent: true, opacity: 0.38 }),
  );
  group.add(shell);

  const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xff463d, transparent: true, opacity: 0.8 });
  [0, 1, 2].forEach((index) => {
    const orbit = new THREE.Mesh(new THREE.TorusGeometry(3 + index * 0.18, 0.018, 5, 72), orbitMaterial);
    orbit.rotation.set(Math.PI * (0.18 + index * 0.19), Math.PI * (0.1 + index * 0.24), 0);
    group.add(orbit);
  });

  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xff5c48 });
  const nodePositions = [
    [-1.4, 1.2, 1.3], [1.6, 0.65, 1.25], [0.5, -1.65, 1.3], [-1.7, -0.7, -1.15], [1.35, 1.45, -1.15],
  ];
  nodePositions.forEach((position) => {
    const node = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), nodeMaterial);
    node.position.set(...position);
    group.add(node);
  });
  group.position.set(0, 1.25, -5.5);
  group.userData.shell = shell;
  return group;
}

function makeLockout() {
  const group = new THREE.Group();
  const material = new THREE.MeshBasicMaterial({ color: 0xff3d36, transparent: true, opacity: 0.72 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.075, 8, 48), material);
  const slash = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.14, 0.08), material);
  slash.rotation.z = -Math.PI / 4;
  group.add(ring, slash);
  group.position.set(0, 1.3, -4.4);
  group.visible = false;
  return group;
}

export function createCinematicDirector({
  canvas,
  vesperAsset,
  wingtailAsset,
  reducedMotion = false,
  onCue = () => {},
  onChoice = () => {},
  onComplete = () => {},
} = {}) {
  if (!canvas) return null;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !matchMedia("(max-width: 700px)").matches, alpha: false });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x02080b);
  scene.fog = new THREE.FogExp2(0x07131a, 0.035);
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 140);
  const city = makeCity();
  scene.add(city);
  const threatGlobe = makeThreatGlobe();
  const lockout = makeLockout();
  scene.add(threatGlobe, lockout);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 120),
    new THREE.MeshStandardMaterial({ color: 0x050a0d, metalness: 0.55, roughness: 0.62 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -1.2, -34);
  scene.add(ground);

  const ambient = new THREE.HemisphereLight(0x79d8d4, 0x030506, 1.5);
  const warning = new THREE.PointLight(0xff4438, 0, 24, 2);
  warning.position.set(-2, 4, -12);
  scene.add(ambient, warning);

  const jets = [makeJet(), makeJet(), makeJet()];
  jets.forEach((jet, index) => {
    jet.position.set(-9 - index * 2.4, 3.4 + index * 0.7, -8 - index * 5);
    jet.scale.setScalar(0.78 + index * 0.1);
    scene.add(jet);
  });

  const blast = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 14, 9),
    new THREE.MeshBasicMaterial({ color: 0xff8c3c, transparent: true, opacity: 0 }),
  );
  blast.position.set(-2.4, 2.1, -13);
  scene.add(blast);

  const vesper = loadPortrait(vesperAsset);
  const wingtail = loadPortrait(wingtailAsset);
  scene.add(vesper.mesh, wingtail.mesh);

  const frame = new THREE.Mesh(
    new THREE.PlaneGeometry(5.05, 6.05),
    new THREE.MeshBasicMaterial({ color: 0x0d2f34, transparent: true, opacity: 0.72 }),
  );
  frame.position.set(0, 1.25, -4.18);
  frame.visible = false;
  scene.add(frame);

  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 2.4, 14),
    new THREE.Vector3(0.8, 1.65, 5),
    new THREE.Vector3(-1.5, 2.1, -5),
    new THREE.Vector3(1.2, 2.8, -13),
  ]);
  const target = new THREE.Vector3();
  const timers = new Set();
  let active = false;
  let paused = false;
  let awaitingChoice = false;
  let resolving = false;
  let startTime = 0;
  let pausedAt = 0;
  let raf = 0;
  let lastCue = -1;

  const cues = [
    {
      at: 0,
      speaker: "Emergency broadcast",
      text: "A rogue cell seized the world's autonomous strike network.",
      telemetry: ["STRIKE NETWORK // HIJACKED", "GLOBAL COMMAND // LOST"],
    },
    {
      at: 2.8,
      speaker: "Skyshield command",
      text: "They rewrote its identification system. Our own fighters turned on every city still resisting.",
      telemetry: ["IFF DATABASE // REWRITTEN", "DEFENSE FLEET // HOSTILE"],
    },
    {
      at: 5.7,
      speaker: "Evacuation channel",
      text: "Every human pilot and networked aircraft was locked out of the sky.",
      telemetry: ["HUMAN PILOTS // LOCKED OUT", "DIGITAL FLIGHT SYSTEMS // COMPROMISED"],
    },
    {
      at: 7.6,
      speaker: "Commander Vesper",
      text: "Their targeting model knows every human face, aircraft, and weapon on Earth.",
      telemetry: ["ENEMY TARGET MODEL // HUMAN", "KNOWN AIRCRAFT // TRACKED"],
    },
    {
      at: 10.1,
      speaker: "Commander Vesper",
      text: "But it has no record of you. Your biology is unknown, your wings are analog, and your bananas cannot be hacked.",
      telemetry: ["BIO-SIGNATURE // UNKNOWN", "FLIGHT SYSTEM // ANALOG", "ORDNANCE // UNHACKABLE"],
    },
    {
      at: 12.6,
      speaker: "Commander Vesper",
      text: "Wingtail, you are the one blind spot left in their sky. Will you fly?",
      telemetry: ["MISSION CANDIDATE // WINGTAIL", "SURVIVAL PROBABILITY // CLASSIFIED"],
    },
  ];

  function resize() {
    const width = Math.max(2, canvas.clientWidth || 640);
    const height = Math.max(2, canvas.clientHeight || 420);
    const mobile = width <= 700;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.15 : 1.45));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.fov = mobile && height > width ? 62 : 52;
    camera.updateProjectionMatrix();
  }

  function showPortrait(subject) {
    threatGlobe.visible = false;
    lockout.visible = false;
    city.visible = false;
    ground.visible = false;
    jets.forEach((jet) => { jet.visible = false; });
    frame.visible = true;
    vesper.mesh.visible = subject === "vesper";
    wingtail.mesh.visible = subject === "wingtail";
    camera.position.set(0, 1.35, 2.4);
    camera.lookAt(0, 1.2, -4);
  }

  function updateCue(time) {
    let cueIndex = 0;
    for (let index = 0; index < cues.length; index += 1) {
      if (time >= cues[index].at) cueIndex = index;
    }
    if (cueIndex !== lastCue) {
      lastCue = cueIndex;
      onCue({ ...cues[cueIndex], progress: time / DURATION });
    }
  }

  function updateScene(time) {
    updateCue(time);
    if (time < 2.8) {
      threatGlobe.visible = true;
      lockout.visible = false;
      city.visible = false;
      ground.visible = false;
      jets.forEach((jet) => { jet.visible = false; });
      frame.visible = false;
      vesper.mesh.visible = false;
      wingtail.mesh.visible = false;
      camera.position.set(0, 1.4, 2.4);
      camera.lookAt(0, 1.25, -5.5);
      threatGlobe.rotation.y = time * (reducedMotion ? 0.08 : 0.28);
      threatGlobe.rotation.x = Math.sin(time * 0.55) * 0.08;
      threatGlobe.userData.shell.material.color.setHex(time > 1.5 ? 0xff4b42 : 0x48d8d0);
      warning.intensity = ease((time - 1.2) / 1.3) * 4;
    } else if (time < 7.6) {
      threatGlobe.visible = false;
      city.visible = true;
      ground.visible = true;
      lockout.visible = time >= 5.7;
      frame.visible = false;
      vesper.mesh.visible = false;
      wingtail.mesh.visible = false;
      const cityTime = time - 2.8;
      const pathTime = reducedMotion ? Math.floor(cityTime / 1.2) / 4 : ease(cityTime / 4.8);
      camera.position.copy(path.getPoint(Math.min(0.98, pathTime)));
      target.set(0, 1.1, camera.position.z - 13);
      camera.lookAt(target);
      jets.forEach((jet, index) => {
        jet.visible = true;
        jet.position.x = -9 - index * 2.2 + cityTime * (4.8 + index * 0.35);
        jet.position.y += Math.sin(time * 2.2 + index) * 0.002;
      });
      const blackout = ease((time - 4.4) / 2.1);
      city.userData.material.emissiveIntensity = 0.44 * (1 - blackout) + 0.035;
      warning.intensity = blackout * 7;
      const blastTime = Math.max(0, Math.min(1, (time - 4.8) / 1.2));
      blast.material.opacity = Math.sin(blastTime * Math.PI) * 0.88;
      blast.scale.setScalar(1 + blastTime * 6);
      if (lockout.visible) {
        lockout.rotation.z = reducedMotion ? 0 : Math.sin(time * 4) * 0.025;
        lockout.scale.setScalar(0.92 + ease((time - 5.7) / 0.5) * 0.08);
      }
    } else {
      showPortrait(time < 10.1 ? "vesper" : "wingtail");
      const pulse = 1 + Math.sin(time * 3.4) * 0.006;
      (vesper.mesh.visible ? vesper.mesh : wingtail.mesh).scale.setScalar(reducedMotion ? 1 : pulse);
    }
  }

  function render(now) {
    if (!active) return;
    if (!paused && !awaitingChoice && !resolving) {
      const time = Math.min(DURATION, (now - startTime) / 1000);
      updateScene(time);
      onCue({ progress: time / DURATION });
      if (time >= DURATION) {
        awaitingChoice = true;
        showPortrait("wingtail");
        onChoice();
      }
    } else if (awaitingChoice || resolving) {
      const subject = vesper.mesh.visible ? vesper.mesh : wingtail.mesh;
      if (!reducedMotion) subject.rotation.z = Math.sin(now * 0.0017) * 0.008;
    }
    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  }

  function start() {
    if (active) return;
    active = true;
    paused = false;
    awaitingChoice = false;
    resolving = false;
    lastCue = -1;
    canvas.hidden = false;
    resize();
    startTime = performance.now();
    raf = requestAnimationFrame(render);
  }

  function choose(choice) {
    if (!awaitingChoice || resolving) return;
    awaitingChoice = false;
    resolving = true;
    showPortrait("wingtail");
    onCue({
      speaker: "Wingtail",
      text: choice === "doubt" ? "I am the plan because I am not human?" : "Their system cannot track me. Open the armory.",
      telemetry: ["WINGTAIL // MISSION ACCEPTANCE PENDING"],
      progress: 1,
    });
    const first = setTimeout(() => {
      showPortrait("vesper");
      onCue({
        speaker: "Commander Vesper",
        text: choice === "doubt" ? "You are the only pilot their system was never taught to recognize." : "Exactly. Stay off their network and make every banana count.",
        telemetry: ["OPERATION BANANA SKY // AUTHORIZED"],
        progress: 1,
      });
    }, 1500);
    const second = setTimeout(() => finish(false), 3300);
    timers.add(first);
    timers.add(second);
  }

  function finish(skipped = true) {
    if (!active) return;
    active = false;
    cancelAnimationFrame(raf);
    timers.forEach(clearTimeout);
    timers.clear();
    canvas.hidden = true;
    onComplete({ skipped });
  }

  function setPaused(value) {
    if (!active || awaitingChoice || resolving) return;
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
    timers.forEach(clearTimeout);
    scene.traverse((object) => {
      object.geometry?.dispose?.();
      if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose?.());
      else object.material?.dispose?.();
    });
    vesper.texture.dispose();
    wingtail.texture.dispose();
    renderer.dispose();
  }

  return { start, choose, skip: () => finish(true), setPaused, resize, dispose };
}
