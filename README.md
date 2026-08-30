# Monkey See, Monkey Pew

A modern browser 3D survival game starring a mechanically winged monkey flying through hostile military airspace. The game uses Three.js for a cinematic chase camera, streamed procedural cities, formation-based fighter encounters, homing missiles, per-sortie loadouts, field upgrades, pooled visual effects, and responsive desktop and touch controls.

## Play

**[Play Monkey See, Monkey Pew in your browser](https://jbisaccia-9.github.io/monkey-no-fly-zone/)**

**[Jump directly to the command relays, Titan, and ending](https://jbisaccia-9.github.io/monkey-no-fly-zone/?finale-preview=1)**

Open `monkey-no-fly-zone-standalone.html` directly, or serve this directory:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Controls

- `Space`, `W`, or `Up Arrow`: climb
- `Enter`: throw a ballistic banana
- `R`, `G`, or `B`: activate Go Bananas when fully charged
- `X`, `F`, or left `Shift`: alternate fire controls
- `P` or `Escape`: pause or resume
- `M`: mute or unmute
- Touch: steer on the left, lift independently, fire with the target control, and tap Go Bananas when ready

## Current 3D Edition

- Cinematic Commander Vesper briefing that launches Operation: Banana Sky
- Interactive 56-second real-time Three.js prologue with preloaded voices and protected dialogue timing, tracing the Skyshield breach, Earth's loss of the sky, Wingtail's Project Canopy rescue history, his relationship with Vesper, and his analog blind-spot advantage
- Bundled Eleven v3 performances for Vesper, Wingtail, and the emergency broadcast, with synchronized subtitles, telemetry, dialogue choices, and Skip Intro
- Full-frontal Wingtail armory with flight rigs, banana weapons, clothing, live specs, and 120 starting coconuts
- Easy, Hard, and Banana Insanity mission modes with explicit speed, armor, encounter, missile, crosswind, and boss tuning
- Seven authored equipment portraits with matched pose, anatomy, perspective, lighting, and materials for turbines, glider surfaces, mounted banana payloads, jackets, and stealth armor
- Inspect-before-buy equipment cards with plain-English tactical effects, cost, current balance, affordability, and coconut shortfall
- Stable wrapped equipment typography across desktop, portrait mobile, and short landscape layouts
- Equipped-to-preview comparisons with exact green/red deltas and an explicit preview-only state
- A fresh 120-coconut armory and starter inventory for every sortie, so each run begins as a new build decision
- Three flight rigs, three banana weapon systems, three outfits, and meaningful lift, handling, speed, firepower, armor, income, shield, and missile-lock modifiers
- Automatic field upgrades for flight control, banana velocity, and coconut armor at level transitions, with no modal interruptions
- An exact 120-coconut launch budget on every new sortie and restart, with purchases lasting for that sortie only
- Airborne coconut caches and rescue bananas that add currency, score, armor recovery, and Go Bananas charge
- A player-triggered eight-second Banana Rage armed by ten fury points or four aircraft takedowns, with optimized heavy banana rockets
- Realistic rear chase-view monkey flying head-first into the scene
- Physical bank, pitch, yaw, wing, scarf, tail, and thruster animation
- Eight streamed city themes with textured facades, roads, bridges, arcologies, fortresses, command spires, and skyline transitions
- F-16, F/A-18, F-22, and A-10 encounters with multi-hit armor that scales by aircraft, level, and difficulty
- Formation passes, flanking attacks, multi-missile salvos, crosswinds, tightening altitude corridors, recovery windows, and eight escalating theaters
- Supply Sweep, Air Superiority, and Missile Screen assignments that interrupt the survival loop, with short fail-forward overtime so progression never stalls
- Altitude-tracking interceptors and dedicated ceiling-hunter squadrons that punish high-altitude camping, especially on Banana Insanity
- A voiced picture-in-picture Vesper directive when the three command relays become vulnerable
- A final assault on three destructible Skyshield command relays that opens a survival portal, arms Wingtail with a Potassium RPG, and launches a three-phase Titan endurance battle with dual health bars before the fully voiced victory montage
- A sharply accelerating city-flight curve from 16 base speed in Patrol to 44 in Last Stand, further modified by mission difficulty
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
7. The rage edition added repeat-sortie funding, airborne recovery pickups, armor restoration, fury progression, and the automatic banana-rocket overdrive.
8. The performance edition replaced the original system voices with separately cast, emotionally directed character performances and retimed the cinematic around natural dialogue pacing.
9. The tuning edition protected every spoken line with preloading and timing buffers, lengthened level pacing, made Go Bananas player-triggered, and reduced its active projectile load for smoother mobile play.
10. The campaign-finale edition doubled the authored theaters, added harsher weather, crosswinds and missile salvos, then gave Wingtail a true objective: destroy the Skyshield command relays and bring humanity's skies back online.
11. The reliability edition synchronized cinematic pacing to completed voice playback, exposed the full eight-level campaign in the HUD, added a dedicated Go Bananas action, reset resources for every sortie, and refreshed deployed asset versions.
12. The Titan edition added three mission difficulties, level-scaled aircraft armor, a much faster late-game city, and a post-relay command-carrier boss that must fall before humanity can reclaim the sky.
13. The mission-operations edition rebuilt the short-screen hangar, reset every sortie to a fresh armory, added three required mid-campaign assignments, closed the ceiling exploit with altitude hunters, sharply intensified Banana Insanity, and gave Vesper a voiced final-approach directive.
14. The uninterrupted-flight edition removed modal level-up prompts, auto-installed rotating field upgrades, and added a published finale test route that jumps straight to the command relays, Titan battle, and closing montage.
15. The corridor-reliability edition bounded Level 4 objective overtime and strengthened banana aim correction against command relays and the Skyshield Titan, ensuring the final enemy always becomes reachable.
16. The survival-portal edition turned the Titan finale into a separate three-phase arena, added a boss-exclusive Potassium RPG, independent Wingtail and Titan health bars, escalating missile salvos, and a longer difficulty-scaled final battle.

Joseph originally began the broader game experiment in April 2026, when Codex had only recently become available to him. He later revisited Monkey No-Fly Zone as a teaching example for his intern, his CEO's 17-year-old son, to show that coding and AI could produce a real playable game rather than only snippets or mockups. Small changes to the instructions, combined with focused sub-agent reviews and repeated hands-on testing, drove the progression from the early arcade loop to this 3D release.

## Build

The editable entry point is `game-3d.source.js`. Supporting modules live in `game/`, and the vendored Three.js runtime lives in `vendor/`.

Install the single development dependency and rebuild from the repository root:

```bash
npm install
npm run build
npm test
```

The build produces `game.js`, embeds every referenced image and voice track into `monkey-no-fly-zone-standalone.html`, and verifies 99 required DOM hooks plus bundle integrity. The current release bundles ten modules into 683.0 KB, passes eleven automated tests across the source and standalone release, and ships as a self-contained 25.67 MB HTML game.

## Project Layout

- `game-3d.source.js`: integrated game runtime and state machine
- `game/player-visual.js`: player rig, animation, collision size, and chase camera
- `game/loadout.js`: equipment catalog, coconut economy, persistence, and run upgrades
- `game/cinematic-director.js`: deterministic Three.js prologue, dialogue choices, and cinematic cleanup
- `game/victory-director.js`: real-time relay-collapse and homecoming montage
- `game/city-stream.js`: streamed procedural city and level themes
- `game/combat-director.js`: deterministic encounter and missile scheduling
- `game/vfx.js`: pooled trails, smoke, explosions, weather, and camera impulses
- `audio.js`: procedural spatial Web Audio
- `index.html`, `styles.css`: HUD, overlays, accessibility, and mobile controls
- `assets/commander-vesper-v1.png`: original Commander Vesper mission-briefing artwork
- `assets/wingtail-hangar-front-v1.png`: original front-facing Wingtail armory artwork
- `assets/wingtail-*-v1.webp`: optimized authored flight-rig, banana-system, and clothing previews
- `assets/voices/`: bundled Vesper, Wingtail, and emergency-broadcast dialogue tracks
- `assets/`: generated hero, aircraft, and skyline art
- `game.js`: generated browser bundle
- `monkey-no-fly-zone-standalone.html`: self-contained shareable release
- `scripts/generate-elevenlabs-voices.mjs`: local-only ElevenLabs voice production pipeline; reads the ignored `.env.local` and never ships the API key
- `scripts/`: repeatable bundle, standalone, and verification tooling

## Privacy

The game runs entirely in the browser. It contains no analytics, credentials, personal data, external API integrations, or runtime network requests.

## License

Released under the [MIT License](LICENSE). Copyright (c) 2026 Joseph Bisaccia.
