> **Day 3 update (2026-11-17):** Day 3 lives at `/kanada/day-3/`; Read Kannada groups sight words for Days 1–3 and now covers eleven Day 3 words. Day 1/2 clips play from `read/audio`, while Day 3 clips play from `day-3/audio`. The page has direct links to each day group. The publish workflow copies Day 3 HTML, JS, content, CSS, and MP3s explicitly. Generate with `--app-dir kanada/day-3 --output kanada/day-3/audio`; voice remains `kn-IN-SapnaNeural` with pinned `edge-tts==7.3.1`. Content/audio review by a fluent speaker and user phone feedback remain pending.

> **GitHub CLI workflow (2026-11-16):** For each feature, branch from latest `origin/main`, test, push, create a PR with `gh pr create`, and merge with `gh pr merge`. The merge triggers `.github/workflows/publish.yml`; check the run using `gh run list --workflow publish.yml` and `gh run watch <run-id> --exit-status`, then verify live URLs. Use `gh workflow run publish.yml --ref main` only for a needed manual redeploy. This is the current development contract; do not merge feature branches locally into `main`.

> **Day 2 update (2026-11-16):** The active repository root now has `AGENTS.md`. Day 2 lives at `/kanada/day-2/`; reading cards for Days 1–2 are at `/kanada/read/`. Generate Day 2 MP3s with `--app-dir kanada/day-2 --output kanada/day-2/audio`. The older `edge-tts==7.2.8` generator returned HTTP 403; `edge-tts==7.3.1` produced a successful Kannada sample and is now pinned in `scripts/requirements-audio.txt`. The generator records its installed version in each manifest. Commit MP3s and manifests; the published site needs no Python.

> **Reading page update (2026-10-11):** `/kanada/read/` contains Day 1 sight words, recordings, vowel-mark examples, and practice. Its data and audio are in `kanada/read/`; `phrases.mjs` adapts `content.mjs` for the shared Python generator. Regenerate with `--app-dir kanada/read --output kanada/read/audio`, then commit the MP3s and manifest.

> **Current setup (2026-10-11):** Remote `https://github.com/solpickle/learn_language.git`; `main` publishes via `.github/workflows/publish.yml` to <https://solpickle.github.io/learn_language/kanada/>. Develop on a feature branch, test, merge to `main`, and check the Pages run. Day 1 is at `/kanada/day-1/`. The older migration notes below are historical.

# Kannada app development setup

Updated: 2026-11-17

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
- The current app contains Days 1–3 of the seven-day MVP; Days 4–7 are still planned.
- Next planned lesson: Day 4, location and directions.
- Include readable Kannada, romanization, English and saved audio.
- No backend or authentication; future progress stays local to each browser.
- Phone testing and fluent-speaker language review are not recorded as complete.
- Use solpickle/learn_language for source control. GitHub Pages hosting is a separate next step.

Migration verified 2026-10-11: removal commit 7972ea5 was pushed and merged into old-site master; GitHub Pages deployment succeeded. Standalone audio played through completion; six tests and old-site Jekyll build passed. New hosting remains pending.

Repository setup: GitHub account solpickle; repository-local commit author solpicker <sankarshan96@live.com>. Source push requested by user; do not infer that GitHub Pages is already enabled.
Publishing workflow added on feature/pages-deploy (2026-10-11): GitHub Pages Source is GitHub Actions; .github/workflows/publish.yml tests the app and publishes only the root landing page plus kanada runtime files/audio after a push or merge to main. The app URL is https://solpickle.github.io/learn_language/kanada/. Future work should use a new feature branch, review/test, then merge to main.
## Day 1 commands

From the repository root, run `node --test kanada/tests/*.test.mjs` and serve
with `python -m http.server 4174`. To regenerate Day 1 MP3s, use the shared
`kanada/scripts/generate_kannada_audio.py` with `--app-dir kanada/day-1`
and `--output kanada/day-1/audio`. It reads `day-1/phrases.mjs`, an adapter for
`content.mjs`. Commit both content and generated MP3s. The old `.venv-tts`
executable was blocked by Windows application control on 2026-10-11; the
bundled Codex Python with `edge-tts==7.2.8` installed to a temporary target
worked. The published site requires no Python or network TTS calls.
