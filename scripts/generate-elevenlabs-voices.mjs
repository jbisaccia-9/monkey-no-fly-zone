import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = join(root, ".env.local");
const voiceStatePath = join(root, ".elevenlabs-voices.local.json");
const outputDir = join(root, "assets", "voices");
const stagingDir = join(root, "assets", ".voices-staging");

function parseEnv(source) {
  return Object.fromEntries(
    source
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && line.includes("="))
      .map((line) => {
        const separator = line.indexOf("=");
        return [line.slice(0, separator), line.slice(separator + 1).replace(/^['"]|['"]$/g, "")];
      }),
  );
}

const env = parseEnv(await readFile(envPath, "utf8"));
const apiKey = env.ELEVENLABS_API_KEY;
if (!apiKey) throw new Error("ELEVENLABS_API_KEY is missing from .env.local");

const cast = {
  broadcast: {
    name: "Banana Sky Emergency Broadcast",
    premadeVoiceId: "onwK4e9ZLuTAKqWW03F9",
    seed: 417,
    description:
      "A believable American emergency news broadcaster in his early forties. Grounded, grave, urgent but controlled, with crisp diction and a warm human chest voice. Modern cinematic video game performance, never robotic, never exaggerated, never trailer-like.",
    preview:
      "At zero four seventeen, the defense drill changed. Every screen showed green, but the aircraft stopped answering their pilots. This is an emergency broadcast. Stay indoors, move away from windows, and await instructions from local rescue teams.",
  },
  vesper: {
    name: "Commander Vesper",
    premadeVoiceId: "pFZP5JQG7iQjIQuC4Bku",
    seed: 1947,
    description:
      "A mature female field commander with an elegant, slightly unusual resonance. Calm authority, dry intelligence, restrained warmth, and the emotional weight of someone protecting the last hope on Earth. Natural American English, intimate cinematic game acting, nuanced and human, never synthetic or announcer-like.",
    preview:
      "Wingtail, listen to me. I did not choose you because you are fearless. I chose you because when the instruments failed and the storm swallowed the horizon, you still brought everyone home. I built your wings. Now I need you to trust them one more time.",
  },
  wingtail: {
    name: "Wingtail",
    premadeVoiceId: "bIHbv24MWmeRgasZH58o",
    seed: 90210,
    description:
      "A charismatic young adult male adventure pilot with a light, agile voice, subtle playful rasp, quick wit, and real courage beneath the jokes. Warm, expressive, physically alive modern video game acting. Natural American English, never cartoonish, squeaky, robotic, or an imitation of any real performer.",
    preview:
      "Commander, I have flown through three cyclones, landed on a moving train, and repaired a wing with half a belt and a very judgmental coconut. I am not saying this plan is impossible. I am saying it finally sounds interesting.",
  },
};

const lines = [
  ["01-skyshield-breach.mp3", "broadcast", "[grave, controlled urgency] At oh four seventeen, Black Flag uploaded a command virus during a global defense drill."],
  ["02-earth-loses-sky.mp3", "broadcast", "[the danger becomes personal] Skyshield seized every connected aircraft and turned Earth's defenses against its cities."],
  ["03-rescue-ace.mp3", "vesper", "[quiet confidence] I know one pilot it never studied. Project Canopy's analog rescue ace."],
  ["04-direction.mp3", "wingtail", "[dryly amused] You forgot my excellent sense of direction."],
  ["05-office.mp3", "vesper", "[deadpan, remembering the damage] You landed in my office."],
  ["06-found-you.mp3", "wingtail", "[cheerful, completely sincere] I found you."],
  ["07-first-wings.mp3", "vesper", "[warm pride rising beneath command discipline] I built your wings. You crossed three cyclones and brought forty-seven people home."],
  ["08-invisible-pilot.mp3", "vesper", "[precise, then quietly hopeful] No biometric profile. No digital controls. No guided weapons. To Skyshield, you do not exist."],
  ["09-recognition.mp3", "wingtail", "[pleased, with a small grin] Finally. Professional recognition."],
  ["10-mission.mp3", "vesper", "[firm, intimate, the fate of the world held in check] Destroy the command relays and give humanity back its sky. Are you in?"],
  ["11-open-armory.mp3", "wingtail", "[decisive, delighted by the danger] Open the armory. Let's make history nervous."],
  ["12-why-bananas.mp3", "wingtail", "[curious pause, then genuine concern] One question. Why bananas?"],
  ["13-armory-response.mp3", "vesper", "[fond approval] That's the rescue ace I remember."],
  ["14-potassium.mp3", "vesper", "[perfectly dry] Because nobody has ever hacked potassium."],
];

async function eleven(path, options = {}) {
  const response = await fetch(`https://api.elevenlabs.io${path}`, {
    ...options,
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!response.ok) {
    const detail = (await response.text()).slice(0, 600);
    throw new Error(`ElevenLabs request failed (${response.status}): ${detail}`);
  }
  return response;
}

async function loadVoiceState() {
  try {
    return JSON.parse(await readFile(voiceStatePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

async function createVoice(role, config) {
  process.stdout.write(`Designing ${config.name}...\n`);
  const designResponse = await eleven("/v1/text-to-voice/design?output_format=mp3_44100_128", {
    method: "POST",
    body: JSON.stringify({
      model_id: "eleven_ttv_v3",
      voice_description: config.description,
      text: config.preview,
      seed: config.seed,
      quality: 0.95,
      guidance_scale: 4,
    }),
  });
  const design = await designResponse.json();
  const preview = design.previews?.[0];
  if (!preview?.generated_voice_id) throw new Error(`No voice preview returned for ${role}`);

  const createResponse = await eleven("/v1/text-to-voice", {
    method: "POST",
    body: JSON.stringify({
      voice_name: config.name,
      voice_description: config.description,
      generated_voice_id: preview.generated_voice_id,
      labels: { project: "Operation Banana Sky", character: role, language: "en" },
    }),
  });
  const voice = await createResponse.json();
  if (!voice.voice_id) throw new Error(`No voice ID returned for ${role}`);
  return voice.voice_id;
}

const voiceState = await loadVoiceState();
for (const [role, config] of Object.entries(cast)) {
  if (!voiceState[role]) {
    voiceState[role] = env.ELEVENLABS_CUSTOM_VOICES === "1"
      ? await createVoice(role, config)
      : config.premadeVoiceId;
    await writeFile(voiceStatePath, `${JSON.stringify(voiceState, null, 2)}\n`, { mode: 0o600 });
  }
}

await rm(stagingDir, { recursive: true, force: true });
await mkdir(stagingDir, { recursive: true });

try {
  for (const [file, role, text] of lines) {
    process.stdout.write(`Rendering ${file}...\n`);
    const response = await eleven(
      `/v1/text-to-speech/${voiceState[role]}?output_format=mp3_44100_128`,
      {
        method: "POST",
        body: JSON.stringify({
          text,
          model_id: "eleven_v3",
          language_code: "en",
          voice_settings: {
            stability: 0.5,
            speed: role === "broadcast" ? 1.02 : role === "wingtail" ? 1.04 : 0.96,
          },
        }),
      },
    );
    await writeFile(join(stagingDir, file), Buffer.from(await response.arrayBuffer()));
  }

  await mkdir(outputDir, { recursive: true });
  for (const [file] of lines) await rename(join(stagingDir, file), join(outputDir, file));
  process.stdout.write(`Generated ${lines.length} cinematic performances in ${outputDir}\n`);
} finally {
  await rm(stagingDir, { recursive: true, force: true });
}
