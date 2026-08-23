const DEFAULT_LEVELS = Object.freeze([
  Object.freeze({
    id: "patrol",
    roster: Object.freeze(["f16", "fa18"]),
    weights: Object.freeze({ formation: 52, intercept: 30, missileSortie: 12, flankingRun: 6 }),
    baseAircraft: 2,
    maxAircraft: 3,
    maxMissiles: 1,
    missileSalvo: 1,
    speedScale: 0.94,
    recovery: Object.freeze([3.1, 4.2]),
    warningLead: Object.freeze([2.2, 2.7]),
  }),
  Object.freeze({
    id: "intercept",
    roster: Object.freeze(["f16", "fa18", "a10"]),
    weights: Object.freeze({ formation: 34, intercept: 34, missileSortie: 20, flankingRun: 12 }),
    baseAircraft: 2,
    maxAircraft: 4,
    maxMissiles: 1,
    missileSalvo: 1,
    speedScale: 1.04,
    recovery: Object.freeze([2.6, 3.7]),
    warningLead: Object.freeze([1.9, 2.45]),
  }),
  Object.freeze({
    id: "missile-lock",
    roster: Object.freeze(["f16", "fa18", "f22", "a10"]),
    weights: Object.freeze({ formation: 24, intercept: 25, missileSortie: 34, flankingRun: 17 }),
    baseAircraft: 3,
    maxAircraft: 5,
    maxMissiles: 2,
    missileSalvo: 1,
    speedScale: 1.13,
    recovery: Object.freeze([2.2, 3.2]),
    warningLead: Object.freeze([1.55, 2.15]),
  }),
  Object.freeze({
    id: "overdrive",
    roster: Object.freeze(["f16", "fa18", "f22", "a10"]),
    weights: Object.freeze({ formation: 20, intercept: 23, missileSortie: 34, flankingRun: 23 }),
    baseAircraft: 3,
    maxAircraft: 6,
    maxMissiles: 3,
    missileSalvo: 1,
    speedScale: 1.24,
    recovery: Object.freeze([1.8, 2.8]),
    warningLead: Object.freeze([1.25, 1.85]),
  }),
  Object.freeze({
    id: "crossfire",
    roster: Object.freeze(["f16", "fa18", "f22", "a10"]),
    weights: Object.freeze({ formation: 16, intercept: 20, missileSortie: 44, flankingRun: 20 }),
    baseAircraft: 3,
    maxAircraft: 7,
    maxMissiles: 4,
    missileSalvo: 2,
    speedScale: 1.3,
    recovery: Object.freeze([1.65, 2.45]),
    warningLead: Object.freeze([1.2, 1.72]),
  }),
  Object.freeze({
    id: "tempest",
    roster: Object.freeze(["f16", "fa18", "f22", "a10"]),
    weights: Object.freeze({ formation: 13, intercept: 18, missileSortie: 49, flankingRun: 20 }),
    baseAircraft: 4,
    maxAircraft: 7,
    maxMissiles: 5,
    missileSalvo: 2,
    speedScale: 1.36,
    recovery: Object.freeze([1.55, 2.25]),
    warningLead: Object.freeze([1.18, 1.62]),
  }),
  Object.freeze({
    id: "killbox",
    roster: Object.freeze(["f16", "fa18", "f22", "a10"]),
    weights: Object.freeze({ formation: 10, intercept: 16, missileSortie: 54, flankingRun: 20 }),
    baseAircraft: 4,
    maxAircraft: 8,
    maxMissiles: 6,
    missileSalvo: 2,
    speedScale: 1.42,
    recovery: Object.freeze([1.45, 2.05]),
    warningLead: Object.freeze([1.15, 1.55]),
  }),
  Object.freeze({
    id: "last-stand",
    roster: Object.freeze(["f16", "fa18", "f22", "a10"]),
    weights: Object.freeze({ formation: 8, intercept: 14, missileSortie: 58, flankingRun: 20 }),
    baseAircraft: 4,
    maxAircraft: 8,
    maxMissiles: 7,
    missileSalvo: 3,
    speedScale: 1.48,
    recovery: Object.freeze([1.4, 1.9]),
    warningLead: Object.freeze([1.15, 1.48]),
  }),
]);

export const ENCOUNTER_TYPES = Object.freeze({
  FORMATION: "formation",
  INTERCEPT: "intercept",
  MISSILE_SORTIE: "missileSortie",
  FLANKING_RUN: "flankingRun",
});

export const LEVEL_PATTERNS = DEFAULT_LEVELS;

const EVENT_CALLBACKS = Object.freeze({
  encounterStart: "onEncounterStart",
  aircraftSpawn: "onAircraftSpawn",
  missileWarning: "onMissileWarning",
  missileLaunch: "onMissileLaunch",
  recoveryStart: "onRecoveryStart",
  recoveryEnd: "onRecoveryEnd",
  levelChange: "onLevelChange",
  actionSkipped: "onActionSkipped",
});

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const finiteOr = (value, fallback) => Number.isFinite(value) ? value : fallback;

function hashSeed(seed) {
  if (typeof seed === "number" && Number.isFinite(seed)) return seed >>> 0;
  const source = String(seed ?? "monkey-no-fly-zone");
  let hash = 2166136261;
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/** Returns a deterministic RNG compatible with Math.random. */
export function createSeededRng(seed = 0x74ac31) {
  let state = hashSeed(seed) || 0x6d2b79f5;
  const random = () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
  random.getState = () => state;
  random.setState = (nextState) => { state = hashSeed(nextState) || 0x6d2b79f5; };
  return random;
}

/**
 * Small browser-safe object pool. The pool owns lifecycle, while the runtime owns
 * rendering and physics details through create/onAcquire/onRelease callbacks.
 */
export class EntityPool {
  constructor({ name = "entity", initialSize = 0, maxSize = Infinity, create, onAcquire, onRelease } = {}) {
    if (typeof create !== "function") throw new TypeError(`EntityPool(${name}) requires a create function.`);
    this.name = name;
    this.maxSize = Math.max(0, finiteOr(maxSize, Infinity));
    this.create = create;
    this.onAcquire = onAcquire;
    this.onRelease = onRelease;
    this.records = [];
    this.lookup = new Map();
    this.prewarm(initialSize);
  }

  prewarm(count) {
    const target = Math.min(this.maxSize, this.records.length + Math.max(0, Math.floor(count)));
    while (this.records.length < target) this.#append();
    return this;
  }

  #append() {
    const value = this.create(this.records.length);
    if (value == null) throw new TypeError(`EntityPool(${this.name}) create returned ${value}.`);
    const record = { value, active: false };
    this.records.push(record);
    this.lookup.set(value, record);
    return record;
  }

  acquire(payload) {
    let record = this.records.find((candidate) => !candidate.active);
    if (!record && this.records.length < this.maxSize) record = this.#append();
    if (!record) return null;
    record.active = true;
    this.onAcquire?.(record.value, payload);
    return record.value;
  }

  release(value, reason = "released") {
    const record = this.lookup.get(value);
    if (!record || !record.active) return false;
    record.active = false;
    this.onRelease?.(record.value, reason);
    return true;
  }

  releaseAll(reason = "reset") {
    for (const record of this.records) {
      if (record.active) this.release(record.value, reason);
    }
  }

  forEachActive(visitor) {
    for (const record of this.records) if (record.active) visitor(record.value);
  }

  get activeCount() {
    let count = 0;
    for (const record of this.records) if (record.active) count += 1;
    return count;
  }

  get size() {
    return this.records.length;
  }
}

/** Creates the three standard pools expected by the combat runtime. */
export function createCombatPools({ aircraft, missiles, playerProjectiles } = {}) {
  return {
    aircraft: new EntityPool({ name: "aircraft", ...aircraft }),
    missiles: new EntityPool({ name: "missiles", ...missiles }),
    playerProjectiles: new EntityPool({ name: "playerProjectiles", ...playerProjectiles }),
  };
}

function normalizeRng(rng) {
  if (typeof rng !== "function") throw new TypeError("CombatDirector rng must be a function.");
  return () => clamp(finiteOr(rng(), 0.5), 0, 0.999999999999);
}

function shuffled(values, random) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  return result;
}

export class CombatDirector {
  constructor({
    seed = 0x74ac31,
    rng = createSeededRng(seed),
    levels = DEFAULT_LEVELS,
    callbacks = {},
    initialDelay = 1.1,
    warningLeadFloor = 1.15,
    spawnRetryDelay = 0.3,
    maxSpawnRetries = 4,
  } = {}) {
    if (!Array.isArray(levels) || levels.length === 0) throw new TypeError("CombatDirector requires level patterns.");
    this.random = normalizeRng(rng);
    this.levels = levels;
    this.callbacks = callbacks;
    this.initialDelay = Math.max(0, initialDelay);
    this.warningLeadFloor = Math.max(0.8, warningLeadFloor);
    this.spawnRetryDelay = Math.max(0.05, spawnRetryDelay);
    this.maxSpawnRetries = Math.max(0, Math.floor(maxSpawnRetries));
    this.queue = [];
    this.cancelledMissiles = new Set();
    this.serial = 0;
    this.reset();
  }

  reset({ levelIndex = 0, delay = this.initialDelay } = {}) {
    this.time = 0;
    this.survivalTime = 0;
    this.levelIndex = clamp(Math.floor(levelIndex), 0, this.levels.length - 1);
    this.state = "idle";
    this.running = false;
    this.queue.length = 0;
    this.cancelledMissiles.clear();
    this.nextWindowAt = Math.max(0, delay);
    this.currentEncounter = null;
    this.stats = { encounters: 0, aircraftRequested: 0, missilesRequested: 0, actionsSkipped: 0 };
    return this;
  }

  start(options = {}) {
    if (options.levelIndex != null) this.setLevel(options.levelIndex, { clearSchedule: true });
    if (options.delay != null) this.nextWindowAt = this.time + Math.max(0, options.delay);
    this.running = true;
    return this;
  }

  stop({ clearSchedule = false } = {}) {
    this.running = false;
    if (clearSchedule) {
      this.queue.length = 0;
      this.currentEncounter = null;
      this.state = "idle";
    }
    return this;
  }

  setLevel(index, { clearSchedule = false } = {}) {
    const nextIndex = clamp(Math.floor(index), 0, this.levels.length - 1);
    if (nextIndex === this.levelIndex && !clearSchedule) return this;
    this.levelIndex = nextIndex;
    if (clearSchedule) {
      this.queue.length = 0;
      this.cancelledMissiles.clear();
      this.currentEncounter = null;
      this.state = "idle";
      this.nextWindowAt = this.time + 0.65;
    }
    this.#emit("levelChange", { levelIndex: nextIndex, level: this.levels[nextIndex] });
    return this;
  }

  update(dt, context = {}) {
    if (!this.running || !Number.isFinite(dt) || dt <= 0) return this.snapshot();
    const step = Math.min(dt, 0.25);
    this.time += step;
    this.survivalTime += step;

    if (this.state === "idle" && this.time >= this.nextWindowAt) this.#scheduleEncounter(null, context);

    while (this.queue.length && this.queue[0].at <= this.time) {
      const action = this.queue.shift();
      this.#dispatch(action, context);
    }
    return this.snapshot();
  }

  forceEncounter(type, context = {}) {
    if (!Object.values(ENCOUNTER_TYPES).includes(type)) throw new RangeError(`Unknown encounter type: ${type}`);
    this.queue.length = 0;
    this.#scheduleEncounter(type, context);
    return this.currentEncounter;
  }

  snapshot() {
    return Object.freeze({
      time: this.time,
      levelIndex: this.levelIndex,
      levelId: this.levels[this.levelIndex].id,
      state: this.state,
      encounter: this.currentEncounter ? { ...this.currentEncounter } : null,
      queuedActions: this.queue.length,
      nextWindowIn: Math.max(0, this.nextWindowAt - this.time),
      stats: { ...this.stats },
    });
  }

  #difficulty(context) {
    const level = this.levels[this.levelIndex];
    const survivalBoost = clamp(this.survivalTime / 180, 0, 0.42);
    const external = clamp(finiteOr(context.difficulty, 0), -0.25, 0.5);
    const scalar = clamp(0.82 + this.levelIndex * 0.12 + survivalBoost + external, 0.7, 1.65);
    return {
      scalar,
      maxAircraft: Math.max(1, Math.floor(finiteOr(context.maxAircraft, level.maxAircraft))),
      maxMissiles: Math.max(0, Math.floor(finiteOr(context.maxMissiles, level.maxMissiles))),
      activeAircraft: Math.max(0, Math.floor(finiteOr(context.activeAircraft, 0))),
      activeMissiles: Math.max(0, Math.floor(finiteOr(context.activeMissiles, 0))),
    };
  }

  #range(min, max) {
    return min + (max - min) * this.random();
  }

  #pick(values) {
    return values[Math.floor(this.random() * values.length)];
  }

  #weightedType(weights) {
    const entries = Object.entries(weights).filter(([, weight]) => weight > 0);
    const total = entries.reduce((sum, [, weight]) => sum + weight, 0);
    let cursor = this.random() * total;
    for (const [type, weight] of entries) {
      cursor -= weight;
      if (cursor <= 0) return type;
    }
    return entries.at(-1)?.[0] || ENCOUNTER_TYPES.FORMATION;
  }

  #id(prefix) {
    this.serial += 1;
    return `${prefix}-${this.serial}`;
  }

  #enqueue(atOffset, kind, payload = {}) {
    this.queue.push({ at: this.time + Math.max(0, atOffset), kind, payload, retries: 0 });
    this.queue.sort((left, right) => left.at - right.at);
  }

  #scheduleEncounter(forcedType, context) {
    const level = this.levels[this.levelIndex];
    const difficulty = this.#difficulty(context);
    const type = forcedType || this.#weightedType(level.weights);
    const encounterId = this.#id("encounter");
    const plan = this.#buildPlan(type, encounterId, level, difficulty);
    this.currentEncounter = Object.freeze({ encounterId, type, levelIndex: this.levelIndex, duration: plan.duration });
    this.state = "encounter";
    this.stats.encounters += 1;
    this.#emit("encounterStart", {
      encounterId,
      encounterType: type,
      levelIndex: this.levelIndex,
      duration: plan.duration,
      difficulty: difficulty.scalar,
    });
    for (const action of plan.actions) this.#enqueue(action.at, action.kind, action.payload);
    this.#enqueue(plan.duration, "recoveryStart", { encounterId, encounterType: type, recovery: plan.recovery });
  }

  #aircraftPayload(encounterId, level, difficulty, overrides = {}) {
    return {
      entityId: this.#id("aircraft"),
      encounterId,
      typeHint: this.#pick(level.roster),
      role: "interceptor",
      lane: Math.floor(this.random() * 3),
      altitude: this.#range(-1.4, 5.0),
      spawnZ: -82,
      speedScale: level.speedScale * this.#range(0.94, 1.08) * difficulty.scalar,
      behavior: "intercept",
      phase: this.#range(0, Math.PI * 2),
      amplitude: this.#range(0.75, 1.8),
      ...overrides,
    };
  }

  #missileActions(encounterId, sourceEntityId, level, difficulty, warningAt, bearingHint) {
    const missileId = this.#id("missile");
    const [minLead, maxLead] = level.warningLead;
    const scaledLead = this.#range(minLead, maxLead) / clamp(difficulty.scalar, 0.9, 1.35);
    const leadTime = Math.max(this.warningLeadFloor, scaledLead);
    return [
      {
        at: warningAt,
        kind: "missileWarning",
        payload: { missileId, encounterId, sourceEntityId, leadTime, bearingHint, severity: this.levelIndex + 1 },
      },
      {
        at: warningAt + leadTime,
        kind: "missileLaunch",
        payload: {
          missileId,
          encounterId,
          sourceEntityId,
          speedScale: clamp(0.92 + difficulty.scalar * 0.2, 1, 1.28),
          guidanceScale: clamp(0.88 + difficulty.scalar * 0.16, 0.96, 1.18),
          lifetime: 5.5,
        },
      },
    ];
  }

  #buildPlan(type, encounterId, level, difficulty) {
    const actions = [];
    const capacity = Math.max(1, difficulty.maxAircraft - difficulty.activeAircraft);
    const lanes = shuffled([0, 1, 2], this.random);
    let duration = 5;

    if (type === ENCOUNTER_TYPES.FORMATION) {
      const count = Math.min(capacity, clamp(level.baseAircraft + (this.random() < 0.38 ? 1 : 0), 2, 4));
      const shape = this.#pick(["vee", "echelon", "stack"]);
      for (let index = 0; index < count; index += 1) {
        const lane = lanes[index % lanes.length];
        actions.push({
          at: index * this.#range(0.42, 0.7),
          kind: "aircraftSpawn",
          payload: this.#aircraftPayload(encounterId, level, difficulty, {
            role: shape,
            lane,
            altitude: 0.2 + (shape === "stack" ? index * 1.25 : (index % 2 ? 1.5 : 0)),
            spawnZ: -82 - index * 7,
            behavior: shape === "vee" ? "intercept" : "sweep",
          }),
        });
      }
      duration = 4.7 + count * 0.62;
    } else if (type === ENCOUNTER_TYPES.INTERCEPT) {
      const count = Math.min(capacity, this.levelIndex >= 2 && this.random() < 0.5 ? 2 : 1);
      for (let index = 0; index < count; index += 1) {
        actions.push({
          at: index * 0.8,
          kind: "aircraftSpawn",
          payload: this.#aircraftPayload(encounterId, level, difficulty, {
            role: "high-speed-intercept",
            lane: lanes[index],
            altitude: this.#range(-0.5, 4.8),
            spawnZ: -90 - index * 9,
            speedScale: level.speedScale * difficulty.scalar * this.#range(1.08, 1.2),
            behavior: this.random() < 0.55 ? "dive" : "intercept",
          }),
        });
      }
      duration = 5.1 + count * 0.7;
    } else if (type === ENCOUNTER_TYPES.MISSILE_SORTIE) {
      const count = Math.min(capacity, 1 + (this.levelIndex >= 3 ? 1 : 0) + (this.levelIndex >= 6 && this.random() < 0.55 ? 1 : 0));
      const missileSlots = Math.max(0, difficulty.maxMissiles - difficulty.activeMissiles);
      let plannedMissiles = 0;
      for (let index = 0; index < count; index += 1) {
        const source = this.#aircraftPayload(encounterId, level, difficulty, {
          role: "missile-carrier",
          lane: lanes[index],
          altitude: this.#range(1.2, 5.0),
          spawnZ: -88 - index * 11,
          behavior: "missile-sortie",
          missileCarrier: true,
        });
        actions.push({ at: index * 1.05, kind: "aircraftSpawn", payload: source });
        const salvo = Math.max(1, Math.floor(level.missileSalvo || 1));
        for (let shot = 0; shot < salvo && plannedMissiles < missileSlots; shot += 1) {
          actions.push(...this.#missileActions(
            encounterId,
            source.entityId,
            level,
            difficulty,
            2.1 + index * 1.1 + shot * 0.78,
            source.lane === 0 ? "left" : source.lane === 2 ? "right" : "ahead",
          ));
          plannedMissiles += 1;
        }
      }
      duration = 6.4 + count * 0.8 + Math.max(0, (level.missileSalvo || 1) - 1) * 0.78;
    } else {
      const count = Math.min(capacity, 2 + (this.levelIndex >= 3 && this.random() < 0.4 ? 1 : 0));
      const flankLanes = [0, 2, this.random() < 0.5 ? 0 : 2];
      for (let index = 0; index < count; index += 1) {
        const lane = flankLanes[index];
        actions.push({
          at: index < 2 ? index * 0.18 : 1.05,
          kind: "aircraftSpawn",
          payload: this.#aircraftPayload(encounterId, level, difficulty, {
            role: lane === 0 ? "left-flanker" : "right-flanker",
            lane,
            altitude: this.#range(-0.8, 4.3),
            spawnZ: -78 - index * 6,
            speedScale: level.speedScale * difficulty.scalar * 1.07,
            behavior: "flank",
            amplitude: this.#range(1.6, 2.5),
          }),
        });
      }
      duration = 5.8 + count * 0.55;
    }

    const [recoveryMin, recoveryMax] = level.recovery;
    const recovery = Math.max(1.35, this.#range(recoveryMin, recoveryMax) / clamp(difficulty.scalar, 0.9, 1.3));
    return { actions, duration, recovery };
  }

  #dispatch(action, context) {
    if (action.kind === "aircraftSpawn") {
      const difficulty = this.#difficulty(context);
      if (difficulty.activeAircraft >= difficulty.maxAircraft) {
        this.#retryOrSkip(action, "aircraft-cap");
        return;
      }
      this.stats.aircraftRequested += 1;
      this.#emit("aircraftSpawn", action.payload);
      return;
    }

    if (action.kind === "missileWarning") {
      const difficulty = this.#difficulty(context);
      if (difficulty.activeMissiles >= difficulty.maxMissiles) {
        this.cancelledMissiles.add(action.payload.missileId);
        this.#skip(action, "missile-cap");
        return;
      }
      const accepted = this.#emit("missileWarning", action.payload);
      if (accepted === false) this.cancelledMissiles.add(action.payload.missileId);
      return;
    }

    if (action.kind === "missileLaunch") {
      if (this.cancelledMissiles.delete(action.payload.missileId)) {
        this.#skip(action, "warning-rejected");
        return;
      }
      this.stats.missilesRequested += 1;
      this.#emit("missileLaunch", action.payload);
      return;
    }

    if (action.kind === "recoveryStart") {
      this.state = "recovery";
      this.#emit("recoveryStart", action.payload);
      this.#enqueue(action.payload.recovery, "recoveryEnd", action.payload);
      return;
    }

    if (action.kind === "recoveryEnd") {
      this.state = "idle";
      this.currentEncounter = null;
      this.nextWindowAt = this.time;
      this.#emit("recoveryEnd", action.payload);
    }
  }

  #retryOrSkip(action, reason) {
    if (action.retries >= this.maxSpawnRetries) {
      this.#skip(action, reason);
      return;
    }
    action.retries += 1;
    action.at = this.time + this.spawnRetryDelay;
    this.queue.push(action);
    this.queue.sort((left, right) => left.at - right.at);
  }

  #skip(action, reason) {
    this.stats.actionsSkipped += 1;
    this.#emit("actionSkipped", { kind: action.kind, reason, payload: action.payload });
  }

  #emit(name, payload) {
    const event = Object.freeze({ ...payload, type: name, time: this.time, levelIndex: this.levelIndex });
    const generalResult = this.callbacks.onEvent?.(event);
    const namedResult = this.callbacks[EVENT_CALLBACKS[name]]?.(event);
    return namedResult === false || generalResult === false ? false : true;
  }
}

export function createCombatDirector(options) {
  return new CombatDirector(options);
}
