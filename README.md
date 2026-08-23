# Monkey See, Monkey Pew

A modern browser 3D survival game starring a mechanically winged monkey flying through hostile military airspace. The game uses Three.js for a cinematic chase camera, streamed procedural cities, formation-based fighter encounters, homing missiles, persistent loadouts, field upgrades, pooled visual effects, and responsive desktop and touch controls.

## Play

**[Play Monkey See, Monkey Pew in your browser](https://jbisaccia-9.github.io/monkey-no-fly-zone/)**

Open `monkey-no-fly-zone-standalone.html` directly, or serve this directory:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Controls

- `Space`, `W`, or `Up Arrow`: climb
- `Enter`: throw a ballistic banana
- `X`, `F`, or left `Shift`: alternate fire controls
- `P` or `Escape`: pause or resume
- `M`: mute or unmute
- Touch: steer on the left, lift independently, and fire with the target control

## Current 3D Edition

- Cinematic Commander Vesper briefing that launches Operation: Banana Sky
- Interactive 12-second real-time Three.js prologue with a city blackout, fighter attack, Vesper transmission, frontal Wingtail response, local character speech, dialogue choices, subtitles, and Skip Intro
- Full-frontal Wingtail armory with flight rigs, banana weapons, clothing, live specs, and 120 starting coconuts
- Seven authored equipment portraits with matched pose, anatomy, perspective, lighting, and materials for turbines, glider surfaces, mounted banana payloads, jackets, and stealth armor
- Inspect-before-buy equipment cards with plain-English tactical effects, cost, current balance, affordability, and coconut shortfall
- Stable wrapped equipment typography across desktop, portrait mobile, and short landscape layouts
- Equipped-to-preview comparisons with exact green/red deltas and an explicit preview-only state
- Persistent purchases and equipped gear, with coconuts earned from takedowns, level clears, and survival
- Three flight rigs, three banana weapon systems, three outfits, and meaningful lift, handling, speed, firepower, armor, income, shield, and missile-lock modifiers
- Mid-mission upgrades for flight control, banana velocity, and coconut armor at level transitions
- Realistic rear chase-view monkey flying head-first into the scene
- Physical bank, pitch, yaw, wing, scarf, tail, and thruster animation
- Four streamed city themes with textured facades, roads, bridges, rooftops, and skyline transitions
- F-16, F/A-18, F-22, and A-10 encounters
- Formation passes, flanking attacks, missile sorties, recovery windows, and escalating difficulty
- Player-fired tumbling bananas, aircraft damage, takedowns, missile impacts, and scoring chains
- Pooled trails, smoke, explosions, weather, near-miss feedback, and adaptive visual quality
- Procedural spatial audio and mobile-safe HUD controls

## Project Evolution

1. The first browser experiment used a simple Flappy Bird-like flight loop.
2. The 2D survival edition added realistic monkey and aircraft sprites, changing skylines, randomized fighters, missiles, return fire, scoring, mobile controls, and a standalone release.
3. The first Three.js edition moved the game into perspective 3D while preserving the same escalating survival structure.
4. The cinematic rebuild began with a master-agent audit, then used focused agents for hero art, player and camera, city streaming, combat, VFX, audio, UI, mobile behavior, and build QA before master integration.
5. The progression edition added the Vesper Field Armory: a face-to-face Wingtail equipment preview, coconut economy, persistent purchases, selectable flight rigs, banana weapons and clothing, plus upgrades earned during each mission.
6. The transmission edition turned Vesper's static briefing into a real-time interactive prologue, showing the fall of the defense network before Wingtail answers the call.

Joseph originally began the broader game experiment in April 2026, when Codex had only recently become available to him. He later revisited Monkey No-Fly Zone as a teaching example for his intern, his CEO's 17-year-old son, to show that coding and AI could produce a real playable game rather than only snippets or mockups. Small changes to the instructions, combined with focused sub-agent reviews and repeated hands-on testing, drove the progression from the early arcade loop to this 3D release.

## Build

The editable entry point is `game-3d.source.js`. Supporting modules live in `game/`, and the vendored Three.js runtime lives in `vendor/`.

Install the single development dependency and rebuild from the repository root:

```bash
npm install
npm run build
npm test
```

The build produces `game.js`, embeds every referenced image into `monkey-no-fly-zone-standalone.html`, and verifies 70 required DOM hooks plus bundle integrity. The current release bundles nine modules into 645.9 KB, passes eight automated tests across the source and standalone release, and ships as a self-contained 16.98 MB HTML game.

## Project Layout

- `game-3d.source.js`: integrated game runtime and state machine
- `game/player-visual.js`: player rig, animation, collision size, and chase camera
- `game/loadout.js`: equipment catalog, coconut economy, persistence, and run upgrades
- `game/cinematic-director.js`: deterministic Three.js prologue, dialogue choices, and cinematic cleanup
- `game/city-stream.js`: streamed procedural city and level themes
- `game/combat-director.js`: deterministic encounter and missile scheduling
- `game/vfx.js`: pooled trails, smoke, explosions, weather, and camera impulses
- `audio.js`: procedural spatial Web Audio
- `index.html`, `styles.css`: HUD, overlays, accessibility, and mobile controls
- `assets/commander-vesper-v1.png`: original Commander Vesper mission-briefing artwork
- `assets/wingtail-hangar-front-v1.png`: original front-facing Wingtail armory artwork
- `assets/wingtail-*-v1.webp`: optimized authored flight-rig, banana-system, and clothing previews
- `assets/`: generated hero, aircraft, and skyline art
- `game.js`: generated browser bundle
- `monkey-no-fly-zone-standalone.html`: self-contained shareable release
- `scripts/`: repeatable bundle, standalone, and verification tooling

## Privacy

The game runs entirely in the browser. It contains no analytics, credentials, personal data, external API integrations, or runtime network requests.
