# Monkey No-Fly Zone

A modern browser 3D survival game starring a mechanically winged monkey flying through hostile military airspace. The game uses Three.js for a cinematic chase camera, streamed procedural cities, formation-based fighter encounters, homing missiles, player weapons, pooled visual effects, and responsive desktop and touch controls.

## Play

**[Play Monkey No-Fly Zone in your browser](https://jbisaccia-9.github.io/monkey-no-fly-zone/)**

Open `monkey-no-fly-zone-standalone.html` directly, or serve this directory:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Controls

- `Space`, `W`, or `Up Arrow`: climb
- `X`, `F`, or `Right Arrow`: fire banana pulse
- `P` or `Escape`: pause or resume
- `M`: mute or unmute
- Touch: steer on the left, lift independently, and fire with the target control

## Current 3D Edition

- Realistic rear chase-view monkey flying head-first into the scene
- Physical bank, pitch, yaw, wing, scarf, tail, and thruster animation
- Four streamed city themes with textured facades, roads, bridges, rooftops, and skyline transitions
- F-16, F/A-18, F-22, and A-10 encounters
- Formation passes, flanking attacks, missile sorties, recovery windows, and escalating difficulty
- Player-fired banana pulses, aircraft damage, takedowns, missile impacts, and scoring chains
- Pooled trails, smoke, explosions, weather, near-miss feedback, and adaptive visual quality
- Procedural spatial audio and mobile-safe HUD controls

## Project Evolution

1. The first browser experiment used a simple Flappy Bird-like flight loop.
2. The 2D survival edition added realistic monkey and aircraft sprites, changing skylines, randomized fighters, missiles, return fire, scoring, mobile controls, and a standalone release.
3. The first Three.js edition moved the game into perspective 3D while preserving the same escalating survival structure.
4. The current cinematic rebuild began with a master-agent audit, then used focused agents for hero art, player and camera, city streaming, combat, VFX, audio, UI, mobile behavior, and build QA before master integration.

Joseph originally began the broader game experiment in April 2026, when Codex had only recently become available to him. He later revisited Monkey No-Fly Zone as a teaching example for his intern, his CEO's 17-year-old son, to show that coding and AI could produce a real playable game rather than only snippets or mockups. Small changes to the instructions, combined with focused sub-agent reviews and repeated hands-on testing, drove the progression from the early arcade loop to this 3D release.

## Build

The editable entry point is `game-3d.source.js`. Supporting modules live in `game/`, and the vendored Three.js runtime lives in `vendor/`.

Install the single development dependency and rebuild from the repository root:

```bash
npm install
npm run build
npm test
```

The build produces `game.js`, embeds every referenced image into `monkey-no-fly-zone-standalone.html`, and verifies 29 required DOM hooks plus bundle integrity. The current release bundles seven modules into 621.1 KB, passes six automated tests across the source and standalone release, and ships as a self-contained 4.83 MB HTML game.

## Project Layout

- `game-3d.source.js`: integrated game runtime and state machine
- `game/player-visual.js`: player rig, animation, collision size, and chase camera
- `game/city-stream.js`: streamed procedural city and level themes
- `game/combat-director.js`: deterministic encounter and missile scheduling
- `game/vfx.js`: pooled trails, smoke, explosions, weather, and camera impulses
- `audio.js`: procedural spatial Web Audio
- `index.html`, `styles.css`: HUD, overlays, accessibility, and mobile controls
- `assets/`: generated hero, aircraft, and skyline art
- `game.js`: generated browser bundle
- `monkey-no-fly-zone-standalone.html`: self-contained shareable release
- `scripts/`: repeatable bundle, standalone, and verification tooling

## Privacy

The game runs entirely in the browser. It contains no analytics, credentials, personal data, external API integrations, or runtime network requests.
