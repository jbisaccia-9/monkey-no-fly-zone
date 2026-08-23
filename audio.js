(() => {
  "use strict";

  const MAX_JET_VOICES = 3;
  const MAX_MISSILE_VOICES = 2;
  const MAX_ONE_SHOTS = 16;
  const EPSILON = 0.0001;
  const WORLD_PAN_RANGE = 8;
  const JET_HEARING_RANGE = 72;
  const MISSILE_HEARING_RANGE = 38;
  const BUS_LEVELS = Object.freeze({ ambience: 0.3, player: 0.66, threat: 0.7, impact: 0.84, ui: 0.42 });
  const AMBIENCE_PROFILES = Object.freeze([
    { root: 43, harmonic: 86, windRate: 0.88, windHighpass: 145, windLowpass: 2450, bedGain: 0.014 },
    { root: 49, harmonic: 73.5, windRate: 0.82, windHighpass: 120, windLowpass: 2050, bedGain: 0.019 },
    { root: 38, harmonic: 76, windRate: 0.98, windHighpass: 190, windLowpass: 3150, bedGain: 0.022 },
    { root: 32, harmonic: 48, windRate: 0.76, windHighpass: 95, windLowpass: 1800, bedGain: 0.026 },
    { root: 36, harmonic: 54, windRate: 1.04, windHighpass: 175, windLowpass: 2860, bedGain: 0.024 },
    { root: 29, harmonic: 58, windRate: 1.12, windHighpass: 210, windLowpass: 3400, bedGain: 0.027 },
    { root: 34, harmonic: 51, windRate: 0.92, windHighpass: 135, windLowpass: 2280, bedGain: 0.029 },
    { root: 26, harmonic: 39, windRate: 1.18, windHighpass: 225, windLowpass: 3600, bedGain: 0.032 },
  ]);

  let context = null;
  let unavailable = false;
  let initialized = false;
  let muted = false;
  let paused = false;
  let running = false;
  let currentLevel = 0;
  let noiseBuffer = null;
  let masterGain = null;
  let compressor = null;
  let buses = null;
  let wind = null;
  let cityBed = null;
  let listener = { x: 0, y: 0.7, z: 1.4 };
  let ambienceTimer = 3.5;
  let duckUntil = 0;

  const oneShots = [];
  const jetVoices = new Map();
  const missileVoices = new Map();
  const lockVoices = new Map();
  const jetPassState = new WeakMap();
  const missilePassState = new WeakMap();
  const announcedPasses = new WeakSet();

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, Number(value) || 0));
  }

  function now() {
    return context ? context.currentTime : 0;
  }

  function safe(action, fallback) {
    try {
      return action();
    } catch (_error) {
      return fallback;
    }
  }

  function setParam(param, value, timeConstant = 0.025) {
    if (!context || !param) return;
    const time = now();
    safe(() => {
      param.cancelScheduledValues(time);
      param.setTargetAtTime(Number(value) || 0, time, timeConstant);
    });
  }

  function createNoiseBuffer() {
    const length = Math.floor(context.sampleRate * 2);
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    let previous = 0;

    for (let index = 0; index < length; index += 1) {
      const white = Math.random() * 2 - 1;
      previous = previous * 0.62 + white * 0.38;
      data[index] = white * 0.68 + previous * 0.32;
    }

    return buffer;
  }

  function connectBus(name, gainValue) {
    const gain = context.createGain();
    gain.gain.value = gainValue;
    gain.connect(masterGain);
    buses[name] = gain;
  }

  function buildGraph() {
    masterGain = context.createGain();
    compressor = context.createDynamicsCompressor();
    buses = {};

    masterGain.gain.value = EPSILON;
    compressor.threshold.value = -7;
    compressor.knee.value = 12;
    compressor.ratio.value = 10;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.18;

    masterGain.connect(compressor);
    compressor.connect(context.destination);

    for (const [name, gain] of Object.entries(BUS_LEVELS)) connectBus(name, gain);
  }

  function createStereoPanner(pan = 0) {
    if (typeof context.createStereoPanner === "function") {
      const panner = context.createStereoPanner();
      panner.pan.value = clamp(pan, -1, 1);
      return panner;
    }
    return context.createGain();
  }

  function stopNodes(nodes, release = 0.04) {
    if (!context || !nodes) return;
    const time = now();
    if (nodes.gain && nodes.gain.gain) {
      safe(() => {
        nodes.gain.gain.cancelScheduledValues(time);
        nodes.gain.gain.setTargetAtTime(EPSILON, time, Math.max(0.005, release * 0.35));
      });
    }
    const stopAt = time + release + 0.03;
    for (const source of nodes.sources || []) {
      safe(() => source.stop(stopAt));
    }
  }

  function removeOneShot(entry) {
    const index = oneShots.indexOf(entry);
    if (index >= 0) oneShots.splice(index, 1);
  }

  function registerOneShot(sources, gain, duration) {
    while (oneShots.length >= MAX_ONE_SHOTS) {
      const oldest = oneShots.shift();
      stopNodes(oldest, 0.015);
    }

    const entry = { sources, gain };
    oneShots.push(entry);
    const primary = sources[0];
    if (primary) primary.addEventListener("ended", () => removeOneShot(entry), { once: true });
    safe(() => {
      for (const source of sources) source.start();
      for (const source of sources) source.stop(now() + duration);
    });
    return entry;
  }

  function noiseShot(options = {}) {
    if (!initialized || !noiseBuffer) return null;
    const duration = clamp(options.duration || 0.12, 0.015, 2);
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const panner = createStereoPanner(options.pan);
    const time = now();

    source.buffer = noiseBuffer;
    source.loop = duration > noiseBuffer.duration;
    source.playbackRate.value = clamp(options.rate || 1, 0.25, 4);
    filter.type = options.filterType || "bandpass";
    filter.frequency.value = clamp(options.frequency || 1400, 40, 18000);
    filter.Q.value = clamp(options.q || 0.8, 0.1, 18);
    gain.gain.setValueAtTime(EPSILON, time);
    gain.gain.exponentialRampToValueAtTime(clamp(options.gain || 0.1, EPSILON, 1), time + (options.attack || 0.008));
    gain.gain.exponentialRampToValueAtTime(EPSILON, time + duration);

    source.connect(filter).connect(gain).connect(panner).connect(buses[options.bus || "player"]);
    return registerOneShot([source], gain, duration + 0.02);
  }

  function oscillatorShot(options = {}) {
    if (!initialized) return null;
    const duration = clamp(options.duration || 0.12, 0.015, 2);
    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const panner = createStereoPanner(options.pan);
    const time = now();
    const startFrequency = clamp(options.frequency || 220, 20, 16000);
    const endFrequency = clamp(options.endFrequency || startFrequency, 20, 16000);

    oscillator.type = options.type || "triangle";
    oscillator.frequency.setValueAtTime(startFrequency, time);
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, time + duration);
    oscillator.detune.value = clamp(options.detune || 0, -1200, 1200);
    filter.type = options.filterType || "lowpass";
    filter.frequency.value = clamp(options.filterFrequency || 7000, 40, 18000);
    filter.Q.value = clamp(options.q || 0.7, 0.1, 18);
    gain.gain.setValueAtTime(EPSILON, time);
    gain.gain.exponentialRampToValueAtTime(clamp(options.gain || 0.08, EPSILON, 1), time + (options.attack || 0.006));
    gain.gain.exponentialRampToValueAtTime(EPSILON, time + duration);

    oscillator.connect(filter).connect(gain).connect(panner).connect(buses[options.bus || "player"]);
    return registerOneShot([oscillator], gain, duration + 0.02);
  }

  function startWind() {
    const source = context.createBufferSource();
    const highpass = context.createBiquadFilter();
    const lowpass = context.createBiquadFilter();
    const gain = context.createGain();

    source.buffer = noiseBuffer;
    source.loop = true;
    source.playbackRate.value = 0.92;
    highpass.type = "highpass";
    highpass.frequency.value = 150;
    lowpass.type = "lowpass";
    lowpass.frequency.value = 2600;
    gain.gain.value = EPSILON;

    source.connect(highpass).connect(lowpass).connect(gain).connect(buses.ambience);
    source.start();
    wind = { source, highpass, lowpass, gain };
  }

  function startCityBed() {
    const root = context.createOscillator();
    const harmonic = context.createOscillator();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();

    root.type = "sine";
    root.frequency.value = AMBIENCE_PROFILES[0].root;
    harmonic.type = "triangle";
    harmonic.frequency.value = AMBIENCE_PROFILES[0].harmonic;
    harmonic.detune.value = 7;
    filter.type = "lowpass";
    filter.frequency.value = 340;
    filter.Q.value = 0.55;
    gain.gain.value = EPSILON;

    root.connect(filter);
    harmonic.connect(filter);
    filter.connect(gain).connect(buses.ambience);
    root.start();
    harmonic.start();
    cityBed = { sources: [root, harmonic], root, harmonic, filter, gain };
  }

  function applyLevelAmbience(level, ramp = 0.18) {
    if (!initialized || !wind || !cityBed) return;
    const profile = AMBIENCE_PROFILES[clamp(level, 0, AMBIENCE_PROFILES.length - 1)];
    setParam(cityBed.root.frequency, profile.root, ramp);
    setParam(cityBed.harmonic.frequency, profile.harmonic, ramp);
    setParam(cityBed.filter.frequency, 280 + level * 42, ramp);
    setParam(wind.highpass.frequency, profile.windHighpass, ramp);
    setParam(wind.lowpass.frequency, profile.windLowpass, ramp);
    setParam(wind.source.playbackRate, profile.windRate, ramp);
  }

  function init() {
    if (initialized || unavailable) return initialized;

    return safe(() => {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        unavailable = true;
        return false;
      }

      context = new AudioContextClass();
      noiseBuffer = createNoiseBuffer();
      buildGraph();
      startWind();
      startCityBed();
      initialized = true;
      if (context.state === "suspended") context.resume().catch(() => {});
      applyMasterGain(0.03);
      return true;
    }, false);
  }

  function applyMasterGain(ramp = 0.04) {
    if (!initialized || !masterGain) return;
    const target = muted || paused ? EPSILON : 0.75;
    setParam(masterGain.gain, target, ramp);
  }

  function ensureReady() {
    if (!initialized && !init()) return false;
    if (context.state === "suspended") context.resume().catch(() => {});
    return true;
  }

  function startRun(level = 0) {
    if (!ensureReady()) return;
    running = true;
    currentLevel = clamp(level, 0, 12);
    ambienceTimer = 2.5;
    applyLevelAmbience(currentLevel, 0.12);
    const profile = AMBIENCE_PROFILES[Math.min(currentLevel, AMBIENCE_PROFILES.length - 1)];
    setParam(wind.gain.gain, 0.058 + currentLevel * 0.009, 0.18);
    setParam(cityBed.gain.gain, profile.bedGain, 0.22);
    applyMasterGain(0.06);
  }

  function clearThreatVoices(release = 0.08) {
    for (const voice of jetVoices.values()) stopNodes(voice, release);
    for (const voice of missileVoices.values()) stopNodes(voice, release);
    for (const voice of lockVoices.values()) stopNodes(voice, release);
    jetVoices.clear();
    missileVoices.clear();
    lockVoices.clear();
  }

  function stopRun(reason) {
    if (!initialized) return;
    running = false;
    clearThreatVoices(0.1);
    setParam(wind.gain.gain, reason ? 0.015 : EPSILON, 0.2);
    setParam(cityBed.gain.gain, reason ? 0.006 : EPSILON, 0.2);
  }

  function createJetVoice(jet) {
    const signatures = {
      f16: { root: 66, harmonic: 2.08, noise: 1180, q: 0.62 },
      fa18: { root: 58, harmonic: 1.96, noise: 980, q: 0.5 },
      f22: { root: 74, harmonic: 2.22, noise: 1420, q: 0.78 },
      a10: { root: 47, harmonic: 1.72, noise: 720, q: 0.42 },
    };
    const profile = signatures[jet.typeId] || signatures.f16;
    const low = context.createOscillator();
    const harmonic = context.createOscillator();
    const noise = context.createBufferSource();
    const noiseFilter = context.createBiquadFilter();
    const gain = context.createGain();
    const panner = createStereoPanner();

    low.type = "sawtooth";
    low.frequency.value = profile.root + Math.random() * 3;
    harmonic.type = "triangle";
    harmonic.frequency.value = low.frequency.value * profile.harmonic;
    noise.buffer = noiseBuffer;
    noise.loop = true;
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = profile.noise;
    noiseFilter.Q.value = profile.q;
    gain.gain.value = EPSILON;

    low.connect(gain);
    harmonic.connect(gain);
    noise.connect(noiseFilter).connect(gain);
    gain.connect(panner).connect(buses.threat);
    low.start();
    harmonic.start();
    noise.start();

    return { jet, profile, sources: [low, harmonic, noise], low, harmonic, noiseFilter, gain, panner };
  }

  function createMissileVoice(missile) {
    const motor = context.createOscillator();
    const noise = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();
    const panner = createStereoPanner();

    motor.type = "sawtooth";
    motor.frequency.value = 96;
    noise.buffer = noiseBuffer;
    noise.loop = true;
    filter.type = "bandpass";
    filter.frequency.value = 1500;
    filter.Q.value = 0.72;
    gain.gain.value = EPSILON;

    motor.connect(gain);
    noise.connect(filter).connect(gain);
    gain.connect(panner).connect(buses.threat);
    motor.start();
    noise.start();

    return { missile, sources: [motor, noise], motor, filter, gain, panner };
  }

  function positionVoice(voice, x, y, z, monkey, maxGain, hearingRange) {
    const dx = (Number(x) || 0) - (Number(monkey.x) || 0);
    const dy = (Number(y) || 0) - (Number(monkey.y) || 0);
    const dz = (Number(z) || 0) - (Number(monkey.z) || 0);
    const distance = Math.hypot(dx, dy, dz);
    const proximity = 1 - clamp(distance / hearingRange, 0, 1);
    setParam(voice.gain.gain, EPSILON + proximity * proximity * maxGain, 0.035);
    const pan = clamp(dx / WORLD_PAN_RANGE, -1, 1);
    if (voice.panner.pan) setParam(voice.panner.pan, pan, 0.025);
    return { proximity, distance, dz, pan };
  }

  function spatialDistance(entity, monkey) {
    return Math.hypot(
      (Number(entity.x) || 0) - (Number(monkey.x) || 0),
      (Number(entity.y) || 0) - (Number(monkey.y) || 0),
      (Number(entity.z) || 0) - (Number(monkey.z) || 0),
    );
  }

  function updateJetVoices(jets, monkey) {
    const nearest = [...jets]
      .sort((a, b) => spatialDistance(a, monkey) - spatialDistance(b, monkey))
      .slice(0, MAX_JET_VOICES);
    const selected = new Set(nearest);

    for (const [jet, voice] of jetVoices) {
      if (!selected.has(jet)) {
        stopNodes(voice, 0.07);
        jetVoices.delete(jet);
      }
    }

    for (const jet of nearest) {
      let voice = jetVoices.get(jet);
      if (!voice) {
        voice = createJetVoice(jet);
        jetVoices.set(jet, voice);
      }
      const spatial = positionVoice(voice, jet.x, jet.y, jet.z, monkey, 0.16, JET_HEARING_RANGE);
      const speedScale = clamp((jet.speed || 20) / 20, 0.68, 1.5);
      const doppler = clamp(1 - spatial.dz / 190, 0.82, 1.22);
      setParam(voice.low.frequency, voice.profile.root * speedScale * doppler, 0.04);
      setParam(voice.harmonic.frequency, voice.profile.root * voice.profile.harmonic * speedScale * doppler, 0.04);
      setParam(voice.noiseFilter.frequency, voice.profile.noise + spatial.proximity * 1550, 0.05);
    }
  }

  function updateMissileVoices(missiles, monkey) {
    const active = missiles
      .filter((missile) => missile && missile.state === "active")
      .sort((a, b) => spatialDistance(a, monkey) - spatialDistance(b, monkey))
      .slice(0, MAX_MISSILE_VOICES);
    const selected = new Set(active);

    for (const [missile, voice] of missileVoices) {
      if (!selected.has(missile)) {
        stopNodes(voice, 0.06);
        missileVoices.delete(missile);
      }
    }

    for (const missile of active) {
      let voice = missileVoices.get(missile);
      if (!voice) {
        voice = createMissileVoice(missile);
        missileVoices.set(missile, voice);
      }
      const spatial = positionVoice(voice, missile.x, missile.y, missile.z, monkey, 0.22, MISSILE_HEARING_RANGE);
      const speedScale = clamp((missile.speed || 19) / 24, 0.72, 1.35);
      setParam(voice.motor.frequency, (82 + spatial.proximity * 58) * speedScale, 0.025);
      setParam(voice.filter.frequency, 920 + spatial.proximity * 3100, 0.035);
    }
  }

  function updateLockVoices(dt, missiles) {
    for (const [target, voice] of lockVoices) {
      const missile = missiles.find((item) => item === target || item.source === target);
      if (!missile || missile.state === "active") {
        stopNodes(voice, 0.025);
        lockVoices.delete(target);
        continue;
      }

      voice.timer -= dt;
      if (voice.timer <= 0) {
        const urgency = 1 - clamp(missile.timer / (missile.lockDuration || 0.9), 0, 1);
        voice.oscillator.frequency.setValueAtTime(urgency > 0.55 ? 1040 : 780, now());
        voice.gain.gain.setValueAtTime(0.045, now());
        voice.gain.gain.exponentialRampToValueAtTime(EPSILON, now() + 0.045);
        voice.timer = 0.14 - urgency * 0.075;
      }
    }
  }

  function detectNearPasses(jets, missiles, monkey) {
    for (const jet of jets) {
      const dz = (Number(jet.z) || 0) - (Number(monkey.z) || 0);
      const lateral = Math.hypot((jet.x || 0) - (monkey.x || 0), (jet.y || 0) - (monkey.y || 0));
      const previousDz = jetPassState.get(jet);
      if (!announcedPasses.has(jet) && previousDz < 0 && dz >= 0 && lateral > 1.45 && lateral < 4.8) {
        announcedPasses.add(jet);
        playNearMiss("jet", clamp(((jet.x || 0) - (monkey.x || 0)) / WORLD_PAN_RANGE, -1, 1));
      }
      jetPassState.set(jet, dz);
    }

    for (const missile of missiles) {
      if (!missile || missile.state !== "active") continue;
      const distance = spatialDistance(missile, monkey);
      const previous = missilePassState.get(missile) || { closest: Infinity, last: Infinity };
      const closest = Math.min(previous.closest, distance);
      if (!announcedPasses.has(missile) && closest < 3.1 && closest > 0.96 && distance > previous.last + 0.16) {
        announcedPasses.add(missile);
        playNearMiss("missile", clamp(((missile.x || 0) - (monkey.x || 0)) / WORLD_PAN_RANGE, -1, 1));
      }
      missilePassState.set(missile, { closest, last: distance });
    }
  }

  function playAmbienceDetail(level, intensity) {
    const pan = (Math.random() - 0.5) * 1.4;
    if (level === 1) {
      oscillatorShot({ frequency: 52, endFrequency: 44, duration: 0.72, gain: 0.018, type: "sine", pan, bus: "ambience" });
      noiseShot({ duration: 0.32, frequency: 520, q: 2.8, gain: 0.012, rate: 0.55, pan, bus: "ambience" });
    } else if (level === 2) {
      noiseShot({ duration: 0.55, frequency: 1200 + Math.random() * 700, q: 0.34, gain: 0.014 + intensity * 0.008, rate: 0.72, pan, bus: "ambience" });
    } else if (level >= 3) {
      oscillatorShot({ frequency: 41, endFrequency: 27, duration: 0.9, gain: 0.022, type: "sine", pan, bus: "ambience" });
      noiseShot({ duration: 0.26, frequency: 860, q: 0.45, gain: 0.013, rate: 0.65, pan, bus: "ambience" });
    } else {
      noiseShot({ duration: 0.38, frequency: 1750, q: 4.2, gain: 0.009, rate: 0.8, pan, bus: "ambience" });
    }
  }

  function duckMix(amount, hold, recovery) {
    if (!initialized) return;
    const time = now();
    duckUntil = Math.max(duckUntil, time + hold + recovery);
    for (const name of ["ambience", "player", "threat", "ui"]) {
      const param = buses[name].gain;
      safe(() => {
        param.cancelScheduledValues(time);
        param.setTargetAtTime(Math.max(EPSILON, BUS_LEVELS[name] * amount), time, 0.012);
        param.setTargetAtTime(BUS_LEVELS[name], time + hold, recovery);
      });
    }
  }

  function update(dt, snapshot) {
    if (!initialized || !running || paused || !snapshot) return;

    safe(() => {
      const monkey = snapshot.monkey || { x: 0, y: 0.7, z: 1.4, vy: 0 };
      const jets = Array.isArray(snapshot.jets) ? snapshot.jets : [];
      const missiles = Array.isArray(snapshot.missiles) ? snapshot.missiles : [];
      listener = { x: Number(monkey.x) || 0, y: Number(monkey.y) || 0, z: Number(monkey.z) || 1.4 };
      currentLevel = clamp(snapshot.level, 0, AMBIENCE_PROFILES.length - 1);

      const profile = AMBIENCE_PROFILES[currentLevel];
      const verticalSpeed = clamp(Math.abs(monkey.vy || 0) / 6.4, 0, 1);
      const nearestJet = jets.reduce((nearest, jet) => Math.min(nearest, spatialDistance(jet, monkey)), Infinity);
      const jetPressure = clamp((48 - nearestJet) / 48, 0, 1) * clamp(jets.length / 3, 0.35, 1);
      const missilePressure = clamp(missiles.filter((missile) => missile.state === "active").length / 2 + missiles.filter((missile) => missile.state === "locking").length * 0.22, 0, 1);
      const intensity = clamp(currentLevel * 0.1 + jetPressure * 0.38 + missilePressure * 0.62, 0, 1);
      setParam(wind.gain.gain, 0.052 + verticalSpeed * 0.038 + intensity * 0.042, 0.08);
      setParam(wind.lowpass.frequency, profile.windLowpass + verticalSpeed * 1250 + intensity * 700, 0.08);
      setParam(wind.source.playbackRate, profile.windRate + verticalSpeed * 0.12 + intensity * 0.045, 0.08);
      setParam(cityBed.gain.gain, profile.bedGain + intensity * 0.009, 0.14);

      if (now() > duckUntil) setParam(buses.threat.gain, BUS_LEVELS.threat + intensity * 0.07, 0.12);
      ambienceTimer -= clamp(dt, 0, 0.1);
      if (ambienceTimer <= 0) {
        playAmbienceDetail(currentLevel, intensity);
        ambienceTimer = 5.5 + Math.random() * 4 - intensity * 1.2;
      }

      updateJetVoices(jets, monkey);
      updateMissileVoices(missiles, monkey);
      updateLockVoices(clamp(dt, 0, 0.1), missiles);
      detectNearPasses(jets, missiles, monkey);
    });
  }

  function playFlap(intensity = 1) {
    if (!ensureReady()) return;
    const amount = clamp(intensity, 0.25, 1.5);
    const detune = (Math.random() - 0.5) * 90;

    noiseShot({
      duration: 0.095,
      frequency: 720 + amount * 480,
      q: 0.55,
      gain: 0.075 * amount,
      rate: 0.9 + Math.random() * 0.2,
      bus: "player",
    });
    oscillatorShot({
      frequency: 178,
      endFrequency: 92,
      duration: 0.11,
      gain: 0.055 * amount,
      type: "triangle",
      detune,
      bus: "player",
    });
    oscillatorShot({
      frequency: 2100,
      endFrequency: 1250,
      duration: 0.032,
      gain: 0.018 * amount,
      type: "square",
      bus: "player",
    });
  }

  function playImpact(reason) {
    if (!ensureReady()) return;
    const missile = String(reason || "").toLowerCase().includes("missile");
    duckMix(missile ? 0.22 : 0.3, missile ? 0.22 : 0.15, missile ? 0.36 : 0.28);
    oscillatorShot({
      frequency: missile ? 76 : 62,
      endFrequency: 34,
      duration: missile ? 0.62 : 0.42,
      gain: missile ? 0.34 : 0.27,
      type: "sine",
      bus: "impact",
    });
    noiseShot({
      duration: missile ? 0.72 : 0.46,
      frequency: missile ? 1650 : 1050,
      q: 0.42,
      gain: missile ? 0.3 : 0.23,
      rate: 0.7,
      bus: "impact",
    });
    oscillatorShot({
      frequency: missile ? 320 : 240,
      endFrequency: 75,
      duration: 0.24,
      gain: 0.12,
      type: "sawtooth",
      filterFrequency: 1800,
      bus: "impact",
    });
  }

  function playLevel(level) {
    if (!ensureReady()) return;
    currentLevel = clamp(level, 0, 12);
    applyLevelAmbience(Math.min(currentLevel, AMBIENCE_PROFILES.length - 1), 0.32);
    const root = 196 + currentLevel * 24;
    const interval = currentLevel >= 3 ? 1.067 : 1.189;

    [1, interval, 1.5].forEach((ratio, index) => {
      safe(() => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const time = now() + index * 0.115;
        oscillator.type = index === 2 ? "sawtooth" : "triangle";
        oscillator.frequency.value = root * ratio;
        gain.gain.setValueAtTime(EPSILON, time);
        gain.gain.exponentialRampToValueAtTime(0.075, time + 0.018);
        gain.gain.exponentialRampToValueAtTime(EPSILON, time + 0.34);
        oscillator.connect(gain).connect(buses.ui);
        oscillator.start(time);
        oscillator.stop(time + 0.36);
      });
    });
    setParam(buses.ambience.gain, 0.17, 0.025);
    safe(() => buses.ambience.gain.setTargetAtTime(0.3, now() + 0.42, 0.18));
  }

  function playMissileLock(missile) {
    if (!ensureReady() || !missile || lockVoices.has(missile)) return;
    if (lockVoices.size >= 1) {
      const oldest = lockVoices.entries().next().value;
      if (oldest) {
        stopNodes(oldest[1], 0.02);
        lockVoices.delete(oldest[0]);
      }
    }

    safe(() => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "square";
      oscillator.frequency.value = 780;
      gain.gain.value = EPSILON;
      oscillator.connect(gain).connect(buses.ui);
      oscillator.start();
      lockVoices.set(missile, { sources: [oscillator], oscillator, gain, timer: 0 });
    });
  }

  function playMissileLaunch(missile) {
    if (!ensureReady()) return;
    for (const [target, voice] of lockVoices) {
      stopNodes(voice, 0.02);
      lockVoices.delete(target);
    }

    const pan = missile && Number.isFinite(missile.x) ? clamp((missile.x - listener.x) / WORLD_PAN_RANGE, -1, 1) : 0;
    oscillatorShot({
      frequency: 190,
      endFrequency: 62,
      duration: 0.28,
      gain: 0.18,
      type: "sawtooth",
      filterFrequency: 2400,
      pan,
      bus: "threat",
    });
    oscillatorShot({
      frequency: 960,
      endFrequency: 1420,
      duration: 0.12,
      gain: 0.048,
      type: "triangle",
      pan,
      bus: "threat",
    });
    noiseShot({
      duration: 0.3,
      frequency: 2300,
      q: 0.45,
      gain: 0.19,
      rate: 1.3,
      pan,
      bus: "threat",
    });
  }

  function playNearMiss(kind, pan = 0) {
    if (!ensureReady()) return;
    const isMissile = kind === "missile";
    const position = clamp(pan, -1, 1);

    noiseShot({
      duration: isMissile ? 0.42 : 0.31,
      frequency: isMissile ? 3200 : 2400,
      q: 0.5,
      gain: isMissile ? 0.24 : 0.19,
      rate: isMissile ? 1.55 : 1.2,
      pan: position,
      bus: "threat",
    });
    oscillatorShot({
      frequency: isMissile ? 105 : 82,
      endFrequency: 48,
      duration: 0.22,
      gain: isMissile ? 0.16 : 0.11,
      type: "sine",
      pan: position,
      bus: "impact",
    });
    duckMix(isMissile ? 0.52 : 0.64, isMissile ? 0.09 : 0.055, 0.16);
  }

  function playShot() {
    if (!ensureReady()) return;
    oscillatorShot({
      frequency: 780,
      endFrequency: 1680,
      duration: 0.1,
      gain: 0.08,
      type: "square",
      filterFrequency: 3200,
      pan: -0.45,
      bus: "player",
    });
    noiseShot({
      duration: 0.055,
      frequency: 2600,
      q: 1.1,
      gain: 0.045,
      rate: 1.7,
      pan: -0.45,
      bus: "player",
    });
  }

  function playJetDestroyed(pan = 0.25) {
    if (!ensureReady()) return;
    const position = clamp(pan, -1, 1);
    oscillatorShot({
      frequency: 112,
      endFrequency: 38,
      duration: 0.48,
      gain: 0.23,
      type: "sawtooth",
      filterFrequency: 1500,
      pan: position,
      bus: "impact",
    });
    noiseShot({
      duration: 0.52,
      frequency: 1850,
      q: 0.38,
      gain: 0.24,
      rate: 0.82,
      pan: position,
      bus: "impact",
    });
  }

  function setMuted(value) {
    muted = Boolean(value);
    safe(() => window.localStorage.setItem("monkeyNoFlyMuted", muted ? "1" : "0"));
    applyMasterGain(0.025);
  }

  function isMuted() {
    return muted;
  }

  function setPaused(value) {
    paused = Boolean(value);
    applyMasterGain(paused ? 0.03 : 0.08);
  }

  muted = safe(() => window.localStorage.getItem("monkeyNoFlyMuted") === "1", false);

  window.GameAudio = Object.freeze({
    init,
    startRun,
    stopRun,
    update,
    playFlap,
    playImpact,
    playLevel,
    playMissileLock,
    playMissileLaunch,
    playNearMiss,
    playShot,
    playJetDestroyed,
    setMuted,
    isMuted,
    setPaused,
  });
})();
