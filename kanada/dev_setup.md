# Kannada app development setup

Updated: 2026-10-11

## Current home
All application code, MP3s, generator, tests and planning documents now live in:
`C:\Users\sanka\work\learn_language\kanada`

This is a standalone static HTML/CSS/JavaScript app. It does not depend on Jekyll
or the imsank website layout. The app is at the folder root, with relative assets
so it can later be hosted at a domain root or a GitHub Pages repository path.

The new GitHub account/repository details are pending. No new remote has been
configured and nothing has been published to a new account.

## Files
- index.html, styles.css, app.js: interface.
- phrases.mjs: five prototype phrases.
- recorded.mjs: saved MP3 playback; speech.mjs: optional browser TTS.
- audio/: all five MP3s plus manifest.json recording source text and voice.
- scripts/generate_kannada_audio.py: regenerate audio from phrase data.
- tests/kannada-speech.test.mjs: six speech tests.
- plan.md: product plan and checklist; this file: active setup contract.

## Local preview and validation
From this folder:
```powershell
& 'C:\Users\sanka\miniconda3\envs\ds_310\python.exe' -m http.server 4174 --bind 127.0.0.1
node --test tests/kannada-speech.test.mjs
node --check app.js
```
Open http://127.0.0.1:4174/ . Use HTTP because the app uses JavaScript modules.

## Audio generation
Python is only needed for generation/preview, not for the published app.
The existing isolated environment remains at
`C:\Users\sanka\work\learn_kanada_app\.venv-tts`; it contains edge-tts==7.2.8.
It was not moved or copied because Python virtual environments are not portable.

From this folder:
```powershell
& 'C:\Users\sanka\work\learn_kanada_app\.venv-tts\Scripts\python.exe' scripts/generate_kannada_audio.py --app-dir . --output audio
```
Alternatively create a local .venv and install scripts/requirements-audio.txt.
Generation needs internet and Node.js. It calls Microsoft's online service via
the third-party edge-tts library, using kn-IN-SapnaNeural. No API key is used.
Commit generated MP3s and the manifest with changes to phrase content.

## Migration and status
The app was copied from imsank.github.io/hobby/learn-kannada, and every app/audio
file plus the generator and test was hash-verified before source removal.
The old Hobby directory, primary navigation entry and related site notes were
removed. Source removal is on feature/learn-kannada_v2 in the old repository;
deployment status is recorded below when verified. This is an ordinary Git
deletion, not a rewrite of historical commits.

The original planning workspace remains at C:\Users\sanka\work\learn_kanada_app
as an archive and pointer; plans in this new folder are now authoritative.

## Product agreement
- Keep the compact visual style and comfortable tap targets.
- Generated sample audio was accepted by the user.
- The current app is the five-phrase prototype, not the seven-day course.
- Next: word-by-word phrase explanations and substitutions, then Day 1 and Days 2–7.
- Include readable Kannada, romanization, English and saved audio.
- No backend or authentication; future progress stays local to each browser.
- Phone testing and fluent-speaker language review are not recorded as complete.
- Use solpickle/learn_language for source control. GitHub Pages hosting is a separate next step.

Migration verified 2026-10-11: removal commit 7972ea5 was pushed and merged into old-site master; GitHub Pages deployment succeeded. Standalone audio played through completion; six tests and old-site Jekyll build passed. New hosting remains pending.

Repository setup: GitHub account solpickle; repository-local commit author solpicker <sankarshan96@live.com>. Source push requested by user; do not infer that GitHub Pages is already enabled.