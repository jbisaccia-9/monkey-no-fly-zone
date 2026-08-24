export const STORAGE_KEY = "monkeySeeMonkeyPewProfileV1";

export const CATALOG = {
  airframe: [
    {
      id: "clockwork-pinions",
      name: "Clockwork Pinions",
      previewAsset: "./assets/wingtail-hangar-front-v1.png",
      cost: 0,
      tag: "Balanced",
      description: "Reliable brass-and-steel wings with forgiving controls.",
      benefit: "Balanced baseline flight with predictable lift, turning, and cruising speed.",
      specs: ["Lift 100", "Handling 100", "Speed 100"],
      modifiers: { lift: 1, handling: 1, speed: 1, armor: 0 },
    },
    {
      id: "howler-rocket-rig",
      name: "Howler Rocket Rig",
      previewAsset: "./assets/wingtail-howler-rig-v1.webp",
      cost: 60,
      tag: "High lift",
      description: "Twin coconut-fuel turbines trade finesse for violent acceleration.",
      benefit: "28% more lift and 14% more speed, but 12% less turning agility.",
      specs: ["Lift 128", "Handling 88", "Speed 114"],
      modifiers: { lift: 1.28, handling: 0.88, speed: 1.14, armor: 0 },
    },
    {
      id: "thunderbird-glider",
      name: "Thunderbird Glider",
      previewAsset: "./assets/wingtail-thunderbird-v1.webp",
      cost: 110,
      tag: "Elite",
      description: "Wide control surfaces, armored spars, and excellent pursuit speed.",
      benefit: "21% more agility, 18% more speed, and light protection against missile locks.",
      specs: ["Lift 112", "Handling 121", "Speed 118"],
      modifiers: { lift: 1.12, handling: 1.21, speed: 1.18, armor: 0.12 },
    },
  ],
  weapon: [
    {
      id: "ripe-repeater",
      name: "Ripe Repeater",
      previewAsset: "./assets/wingtail-ripe-repeater-v1.webp",
      cost: 0,
      tag: "Standard",
      description: "Single ripe bananas with a quick, predictable throwing cycle.",
      benefit: "Rapid single-banana fire for accurate, sustained attacks.",
      specs: ["Damage 1", "Rate 5/sec", "Bananas 1"],
      modifiers: { damage: 1, cooldown: 0.2, projectiles: 1, spread: 0, velocity: 54 },
    },
    {
      id: "plantain-piercer",
      name: "Plantain Piercer",
      previewAsset: "./assets/wingtail-plantain-piercer-v1.webp",
      cost: 45,
      tag: "Heavy",
      description: "Dense green plantains hit twice as hard but need a longer reload.",
      benefit: "Double damage and higher velocity, with a slightly slower firing cycle.",
      specs: ["Damage 2", "Rate 4/sec", "Bananas 1"],
      modifiers: { damage: 2, cooldown: 0.25, projectiles: 1, spread: 0, velocity: 58 },
    },
    {
      id: "cluster-bunch",
      name: "Cluster Bunch",
      previewAsset: "./assets/wingtail-cluster-bunch-v1.webp",
      cost: 95,
      tag: "Spread",
      description: "Throws three smaller bananas in a fighter-clearing fan.",
      benefit: "Launches three bananas at once to cover a wide area and catch agile fighters.",
      specs: ["Damage 1", "Rate 3.6/sec", "Bananas 3"],
      modifiers: { damage: 1, cooldown: 0.28, projectiles: 3, spread: 0.065, velocity: 52 },
    },
  ],
  outfit: [
    {
      id: "rescue-scarf",
      name: "Red Rescue Scarf",
      previewAsset: "./assets/wingtail-hangar-front-v1.png",
      cost: 0,
      tag: "Classic",
      description: "Bright, aerodynamic, and accepted by absolutely no air force.",
      benefit: "No stat tradeoffs. Pure heroic scarf energy.",
      specs: ["Coconuts 100%", "Shield 0", "Lock resist 0%"],
      modifiers: { income: 1, shield: 0, lockResistance: 0 },
    },
    {
      id: "ace-jacket",
      name: "Coconut Ace Jacket",
      previewAsset: "./assets/wingtail-ace-jacket-v1.webp",
      cost: 30,
      tag: "Fortune",
      description: "Lucky leather pockets recover more coconuts from every takedown.",
      benefit: "Earn 20% more coconuts and resist missile locks 8% longer.",
      specs: ["Coconuts 120%", "Shield 0", "Lock resist 8%"],
      modifiers: { income: 1.2, shield: 0, lockResistance: 0.08 },
    },
    {
      id: "midnight-suit",
      name: "Midnight Monkey Suit",
      previewAsset: "./assets/wingtail-midnight-suit-v1.webp",
      cost: 70,
      tag: "Defense",
      description: "Radar-dampening fabric and one emergency coconut armor plate.",
      benefit: "Start with one impact shield and resist missile locks 22% longer.",
      specs: ["Coconuts 108%", "Shield 1", "Lock resist 22%"],
      modifiers: { income: 1.08, shield: 1, lockResistance: 0.22 },
    },
  ],
};

export const FIELD_UPGRADES = [
  {
    id: "flight",
    name: "Turbo Feathering",
    tag: "Flight",
    description: "Increase lift, lane response, and top control authority for this run.",
    effect: "+10% lift and handling",
  },
  {
    id: "arsenal",
    name: "Peel Velocity",
    tag: "Weapons",
    description: "Tighten the throwing cycle and make every banana hit harder.",
    effect: "-12% reload, +0.35 damage",
  },
  {
    id: "armor",
    name: "Coconut Plating",
    tag: "Defense",
    description: "Bolt another sacrificial coconut shell around the flight harness.",
    effect: "+1 impact shield",
  },
];

const DEFAULT_PROFILE = {
  coconuts: 120,
  owned: {
    airframe: ["clockwork-pinions"],
    weapon: ["ripe-repeater"],
    outfit: ["rescue-scarf"],
  },
  equipped: {
    airframe: "clockwork-pinions",
    weapon: "ripe-repeater",
    outfit: "rescue-scarf",
  },
};

function cloneDefaultProfile() {
  return JSON.parse(JSON.stringify(DEFAULT_PROFILE));
}

export function getItem(category, id) {
  return CATALOG[category]?.find((item) => item.id === id) || CATALOG[category]?.[0] || null;
}

export function loadProfile(storage = globalThis.localStorage) {
  const fallback = cloneDefaultProfile();
  try {
    const saved = JSON.parse(storage?.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return fallback;
    fallback.coconuts = Math.max(0, Math.floor(Number(saved.coconuts) || 0));
    for (const category of Object.keys(CATALOG)) {
      const validIds = new Set(CATALOG[category].map((item) => item.id));
      const owned = Array.isArray(saved.owned?.[category]) ? saved.owned[category].filter((id) => validIds.has(id)) : [];
      fallback.owned[category] = [...new Set([CATALOG[category][0].id, ...owned])];
      fallback.equipped[category] = fallback.owned[category].includes(saved.equipped?.[category])
        ? saved.equipped[category]
        : CATALOG[category][0].id;
    }
  } catch {
    return fallback;
  }
  return fallback;
}

export function saveProfile(profile, storage = globalThis.localStorage) {
  try {
    storage?.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Progress still works for this session when storage is unavailable.
  }
  return profile;
}

export function purchaseOrEquip(profile, category, id, storage = globalThis.localStorage) {
  const item = getItem(category, id);
  if (!item || !profile.owned?.[category]) return { ok: false, reason: "Unknown equipment." };
  const owned = profile.owned[category].includes(id);
  if (!owned && profile.coconuts < item.cost) {
    return { ok: false, reason: "Need " + (item.cost - profile.coconuts) + " more coconuts." };
  }
  if (!owned) {
    profile.coconuts -= item.cost;
    profile.owned[category].push(id);
  }
  profile.equipped[category] = id;
  saveProfile(profile, storage);
  return { ok: true, action: owned ? "equipped" : "purchased", item };
}

export function awardCoconuts(profile, amount) {
  const earned = Math.max(0, Math.floor(Number(amount) || 0));
  profile.coconuts += earned;
  saveProfile(profile);
  return earned;
}

export function ensureLaunchBudget(profile, minimum = 120, storage = globalThis.localStorage) {
  const floor = Math.max(0, Math.floor(Number(minimum) || 0));
  const current = Math.max(0, Math.floor(Number(profile.coconuts) || 0));
  const granted = Math.max(0, floor - current);
  if (granted > 0) {
    profile.coconuts = floor;
    saveProfile(profile, storage);
  }
  return granted;
}

export function resetLaunchBudget(profile, amount = 120, storage = globalThis.localStorage) {
  const budget = Math.max(0, Math.floor(Number(amount) || 0));
  profile.coconuts = budget;
  saveProfile(profile, storage);
  return budget;
}

export function resetSortieProfile(profile, storage = globalThis.localStorage) {
  const defaults = cloneDefaultProfile();
  profile.coconuts = defaults.coconuts;
  profile.owned = defaults.owned;
  profile.equipped = defaults.equipped;
  saveProfile(profile, storage);
  return profile;
}

export function createRunUpgrades() {
  return { flight: 0, arsenal: 0, armor: 0 };
}

export function resolveRunStats(profile, runUpgrades = createRunUpgrades()) {
  const airframe = getItem("airframe", profile.equipped.airframe).modifiers;
  const weapon = getItem("weapon", profile.equipped.weapon).modifiers;
  const outfit = getItem("outfit", profile.equipped.outfit).modifiers;
  return {
    lift: airframe.lift * (1 + runUpgrades.flight * 0.1),
    handling: airframe.handling * (1 + runUpgrades.flight * 0.1),
    speed: airframe.speed,
    armor: airframe.armor,
    damage: weapon.damage + runUpgrades.arsenal * 0.35,
    cooldown: weapon.cooldown * Math.pow(0.88, runUpgrades.arsenal),
    projectiles: weapon.projectiles,
    spread: weapon.spread,
    projectileVelocity: weapon.velocity * (1 + runUpgrades.arsenal * 0.04),
    income: outfit.income,
    lockResistance: Math.min(0.45, outfit.lockResistance + airframe.armor * 0.25),
    maxShields: outfit.shield + runUpgrades.armor,
  };
}

export function displayStats(profile) {
  const stats = resolveRunStats(profile);
  const clamp = (value) => Math.max(8, Math.min(100, Math.round(value)));
  return {
    lift: clamp(stats.lift * 72),
    handling: clamp(stats.handling * 72),
    firepower: clamp(stats.damage * stats.projectiles * 32),
    survival: clamp(18 + stats.maxShields * 35 + stats.lockResistance * 100 + stats.armor * 90),
  };
}
