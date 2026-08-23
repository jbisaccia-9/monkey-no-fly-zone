#!/bin/sh
set -eu

ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)
OUT="$ROOT/assets/voices"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUT"

render() {
  file=$1
  voice=$2
  rate=$3
  filter=$4
  text=$5
  say -v "$voice" -r "$rate" -o "$TMP/$file.aiff" "$text"
  ffmpeg -loglevel error -y -i "$TMP/$file.aiff" -af "$filter" -codec:a libmp3lame -b:a 96k "$OUT/$file.mp3"
}

RADIO='highpass=f=260,lowpass=f=3800,acompressor=threshold=-20dB:ratio=3:attack=8:release=90,volume=1.35'
VESPER='highpass=f=95,lowpass=f=9200,equalizer=f=190:t=q:w=1:g=2.5,acompressor=threshold=-22dB:ratio=2.4:attack=10:release=120,volume=1.25'
WINGTAIL='highpass=f=120,lowpass=f=9800,equalizer=f=1400:t=q:w=1:g=2,acompressor=threshold=-20dB:ratio=2.2:attack=8:release=100,volume=1.3'

render 01-skyshield-breach Daniel 196 "$RADIO" "At oh four seventeen, Black Flag uploaded a command virus during a global defense drill."
render 02-earth-loses-sky Daniel 192 "$RADIO" "Skyshield seized every connected aircraft and turned Earth's defenses against its cities."
render 03-rescue-ace Samantha 184 "$VESPER" "I know one pilot it never studied. Project Canopy's analog rescue ace."
render 04-direction Reed 202 "$WINGTAIL" "You forgot my excellent sense of direction."
render 05-office Samantha 176 "$VESPER" "You landed in my office."
render 06-found-you Reed 205 "$WINGTAIL" "I found you."
render 07-first-wings Samantha 182 "$VESPER" "I built your wings. You crossed three cyclones and brought forty-seven people home."
render 08-invisible-pilot Samantha 184 "$VESPER" "No biometric profile. No digital controls. No guided weapons. To Skyshield, you do not exist."
render 09-recognition Reed 198 "$WINGTAIL" "Finally. Professional recognition."
render 10-mission Samantha 186 "$VESPER" "Destroy the command relays and give humanity back its sky. Are you in?"
render 11-open-armory Reed 198 "$WINGTAIL" "Open the armory. Let's make history nervous."
render 12-why-bananas Reed 198 "$WINGTAIL" "One question. Why bananas?"
render 13-armory-response Samantha 174 "$VESPER" "That's the rescue ace I remember."
render 14-potassium Samantha 178 "$VESPER" "Because nobody has ever hacked potassium."

printf 'Generated cinematic voices in %s\n' "$OUT"
