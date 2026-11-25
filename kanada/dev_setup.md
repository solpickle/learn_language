> **Day 5 scope correction in progress — 2026-11-25:** The user clarified that all the practical scenarios they listed were expected in Day 5. Branch `feature/day-5-real-life-scenarios` now expands the published single-market review into 11 short, expandable exchanges; adds 52 saved Sapna recordings (including nine sight-word clips); and extends Read Kannada to 58 words and 20 questions. The PAN–Aadhaar scene uses an e-Filing help desk because that is the official service. Tests, PR, deployment, and live review are pending. Fluent-speaker review and phone feedback remain open.

> **Previous Day 5 publication — 2026-11-25:** The first review version merged in PR #23; Pages run [45666697799](https://github.com/solpickle/learn_language/actions/runs/45666697799) passed. It covered a directions-plus-vegetable-shop mini conversation and reused Days 1–4 audio. That release is superseded by the user's clarified Day 5 scope; see the latest checklist in `plan.md`.

> **Day 4 update (2026-11-25):** Day 4 is live at [https://solpickle.github.io/learn_language/kanada/day-4/](https://solpickle.github.io/learn_language/kanada/day-4/). PR #17 added three Bengaluru travel scenarios: finding an address in Indiranagar, telling an auto driver the destination, and asking a bus conductor for an MG Road ticket and the Marathahalli-to-MG Road journey time. The Day 4 folder contains 32 `kn-IN-SapnaNeural` recordings, generated with pinned `edge-tts==7.3.1`; regenerate with `python kanada/scripts/generate_kannada_audio.py --app-dir kanada/day-4 --output kanada/day-4/audio`. Read Kannada now groups 48 words across Days 1–4 and has 16 recognition questions. Pages run 45543949652 passed; the live lesson and representative scenario recordings return HTTP 200, and the ticket clip played through in browser review. All 36 project tests passed before merge. The page now cites the Kannada Abhivrudhi Pradhikara course (Lesson 5, pp. 29–39) and two travel phrase guides. Citations document source patterns but do not replace fluent-speaker review; phone feedback also remains open.

> **GitHub CLI workflow (2026-11-16):** For each feature, branch from latest `origin/main`, test, push, create a PR with `gh pr create`, and merge with `gh pr merge`. The merge triggers `.github/workflows/publish.yml`; check the run using `gh run list --workflow publish.yml` and `gh run watch <run-id> --exit-status`, then verify live URLs. Use `gh workflow run publish.yml --ref main` only for a needed manual redeploy. This is the current development contract; do not merge feature branches locally into `main`.

> **Day 2 update (2026-11-16):** The active repository root now has `AGENTS.md`. Day 2 lives at `/kanada/day-2/`; reading cards for Days 1–2 are at `/kanada/read/`. Generate Day 2 MP3s with `--app-dir kanada/day-2 --output kanada/day-2/audio`. The older `edge-tts==7.2.8` generator returned HTTP 403; `edge-tts==7.3.1` produced a successful Kannada sample and is now pinned in `scripts/requirements-audio.txt`. The generator records its installed version in each manifest. Commit MP3s and manifests; the published site needs no Python.

> **Reading page update (2026-10-11):** `/kanada/read/` contains Day 1 sight words, recordings, vowel-mark examples, and practice. Its data and audio are in `kanada/read/`; `phrases.mjs` adapts `content.mjs` for the shared Python generator. Regenerate with `--app-dir kanada/read --output kanada/read/audio`, then commit the MP3s and manifest.

> **Current setup (2026-10-11):** Remote `https://github.com/solpickle/learn_language.git`; `main` publishes via `.github/workflows/publish.yml` to <https://solpickle.github.io/learn_language/kanada/>. Develop on a feature branch, test, merge to `main`, and check the Pages run. Day 1 is at `/kanada/day-1/`. The older migration notes below are historical.

# Kannada app development setup

> **Day 1 bus-stop update published — 2026-11-26:** PR #27 merged as `c23028b`; Pages run [45676489959](https://github.com/solpickle/learn_language/actions/runs/45676489959) passed. Follow-up PRs #28 and #29 fixed stale module caching and ensured all five pair profiles render; Pages runs 45677235325 and 45677518128 passed. The live [Day 1 page](https://solpickle.github.io/learn_language/kanada/day-1/) has the two-way stranger conversation and five expandable age/gender/student/work profiles. Twenty-one new `kn-IN-SapnaNeural` recordings are included in the Day 1 manifest. Read Kannada has 69 total sight words, 27 grouped under Day 1. All 42 project tests passed; fresh-page review confirmed all five profiles, and live Sapna recording playback succeeded. Fluent-speaker review and user phone feedback remain open.

> **Latest published update — 2026-11-25:** Day 5's scope correction is live. PR #25 merged as `38bffa2`; Pages run 45670566281 passed. It adds all 11 requested practical conversations, saved Sapna MP3s, nine Day 5 sight words, and expanded Read Kannada coverage. The public Day 5 page and phrase playback were verified. All 40 project tests and JavaScript syntax checks passed. See `plan.md` for the checklist. Fluent-speaker review and user phone feedback remain open.

> **Scenario scope — 2026-11-25:** The user clarified that all previously listed situations belong in Day 5: DMart, vegetable/sweet/puncture shops, auto and bus, a traffic stop, Udupi restaurant with separate/mixed sambar, temple flowers, household help, and a PAN–Aadhaar help desk. Keep them in Day 5; do not move these categories to a later backlog. PAN–Aadhaar linking is handled on Income Tax e-Filing, not by a municipal office; link the official source and keep the role-play at a general help desk.

> **Day 4 pickup update — 2026-11-25:** The auto pickup exchange using Spice Garden, Smahitha Maruthi Homes, and the user-provided Chinnapannahalli Road direction was merged in PR #20 and deployed successfully (Pages run 45660301987). Five new Sapna MP3s are live, including `hattira` (near) in Read Kannada; its total is 49 sight words and 17 questions. The KDP citation now includes Lesson 9, pp. 73–75. See the latest handoff at the top of this file and `plan.md` for the scenario backlog. Fluent-speaker review and phone feedback remain pending.

Updated: 2026-11-17

> **Standing user preferences — 2026-11-17:** Future lesson work should follow the user-specific checklist in the repository-root `AGENTS.md`: beginner-friendly script + romanization + English + saved audio; compact vertical links and a Home link in every page header/tab row; Alphabet focused on vowel signs and making simple word chunks; short red/green quiz feedback that clears after 1.8 seconds while keeping choices repeatable; and a simple Home audio area that hides browser voice selection/refresh. The active MVP remains Days 1–7.

> **Future lesson ideas — 2026-11-17:** The user proposed Days 8–11 on bus/auto travel, ordering at Rameshwaram Cafe, a respectful traffic-stop conversation, and de-escalating a car/auto collision. Keep these as rough post-MVP concepts; discuss and agree on final scripts before implementation. Current active scope remains Days 1–7.

> **Home audio controls — 2026-11-17:** The Home page uses saved Sapna MP3s, shows the speaking-speed selector and a short voice note, and displays Stop only during playback. Browser voice selection and refresh controls were removed from Home.

> **Quiz feedback — 2026-11-17:** Day 1–3 listening quizzes and Read Kannada practice briefly highlight the selected choice green (correct) or red (incorrect), then clear it after 1.8 seconds. Choices stay enabled for repeat attempts, and each new answer updates the score/result. Read Kannada retry cancels any pending highlight timers. Shared code is `kanada/quiz-feedback.mjs` and the Pages workflow copies it to the site root.

> **Home page layout — 2026-11-17:** Main entry links now stay in one vertical column at desktop and mobile widths, following the user's preferred mobile arrangement.

> **Home in tab navigation — 2026-11-17:** Added Home as the first link in each lesson, reading, numbers, and alphabet navigation row, in addition to the page header/footer links.

> **Kannada Alphabet feature — 2026-11-17:** `/kanada/alphabet/` teaches 13 vowels, 34 consonants, how consonants take vowel signs, and five example words split into readable chunks. Letter sounds and example words have 52 saved `kn-IN-SapnaNeural` recordings. Regenerate with `python kanada/scripts/generate_kannada_audio.py --app-dir kanada/alphabet --output kanada/alphabet/audio`. The publish workflow copies the page and MP3s; fluent-speaker review and phone feedback remain open.

> **Day 5 scenario expansion — 2026-11-25:** Published in PR #25; Pages run 45670566281 passed. `kanada/day-5/phrases.mjs` contains the new audio source lines and nine standalone reading clips. Regenerate with `python kanada/scripts/generate_kannada_audio.py --app-dir kanada/day-5 --output kanada/day-5/audio`. No separate Read Kannada audio generation is needed; `kanada/read/app.js` plays these clips from `../day-5/audio/`. The Pages workflow copies the Day 5 page, module, recordings, and manifest.

> **Home navigation — 2026-11-17:** Every Kannada page (home, Days 1–3, Read Kannada, and Kannada Numbers) has a header Home link to `/kanada/`; footer navigation uses the same label. The entry page is titled Home instead of Audio Lab.

> **Kannada Numbers feature — 2026-11-17:** The current feature branch adds `/kanada/numbers/`, linked from the app home and Read Kannada. The page teaches Kannada digit forms and spoken number words for 0–20, tens through 100, selected tens-plus-ones examples, and 101/110/120, with 41 saved `kn-IN-SapnaNeural` MP3s. Generate/regenerate with `python kanada/scripts/generate_kannada_audio.py --app-dir kanada/numbers --output kanada/numbers/audio`. The workflow explicitly copies the page and its MP3s. Number-language/audio review and phone feedback remain pending; see `plan.md`.

## Current repository and app

The planning workspace is `C:\Users\sanka\work\learn_kanada_app`. The app source
is the nested Git checkout at
`C:\Users\sanka\work\learn_kanada_app\.preview-site\repo`; its lesson source is
in `kanada/`. Keep the product plan here in `kanada/plan.md` and this setup
contract in `kanada/dev_setup.md`.

- Remote: `https://github.com/solpickle/learn_language.git`
- Production: <https://solpickle.github.io/learn_language/kanada/>
- GitHub Pages deploys from `main` using `.github/workflows/publish.yml`.
- The app is static HTML/CSS/JavaScript and does not depend on the imsank site.
- The seven-day MVP is active; Days 1–5 exist, with Days 6–7 planned.

For each feature, fetch latest `origin/main`, create a new feature branch, run
the checks, push, create/merge a PR with GitHub CLI, watch the Pages workflow,
then verify the public page and representative MP3. The user authorized this
GitHub CLI workflow. Do not merge feature branches locally into `main`.

## Main files

- `kanada/index.html`, `styles.css`, `app.js`: Home and shared app behavior.
- `kanada/day-1/` through `kanada/day-5/`: lesson pages, content modules, local
  styling, and generated audio folders with manifests.
- `kanada/read/`: sight words, recognition practice, and vowel-mark examples.
- `kanada/numbers/` and `kanada/alphabet/`: reference tabs.
- `kanada/scripts/generate_kannada_audio.py`: generate committed Sapna MP3s.
- `kanada/tests/`: content, audio, interaction, navigation, and publish checks.
- `.github/workflows/publish.yml`: test and deploy static files to GitHub Pages.
- `AGENTS.md`: standing content, accessibility, styling, and workflow instructions.
- `kanada/plan.md`: active checklist, content scope, and progress history.

## Local preview and validation

From the repository root:
```powershell
& 'C:\Users\sanka\work\learn_kanada_app\.venv-tts\Scripts\python.exe' -m http.server 4174 --bind 127.0.0.1
node --test kanada/tests/*.test.mjs
node --check kanada/day-1/app.js
```
Open `http://127.0.0.1:4174/kanada/` or the lesson path you are reviewing.
Serve over HTTP because pages use JavaScript modules.

## Saved audio generation

Python is only needed to generate MP3s, not to play the published app. The
working environment is `C:\Users\sanka\work\learn_kanada_app\.venv-tts`; it has
`edge-tts==7.3.1`. The generator sends the Kannada text to Microsoft's online
speech service using `kn-IN-SapnaNeural`; generated MP3s and `manifest.json` are
committed with the lesson. A published page makes no online TTS requests.

For example, regenerate Day 1 from the repository root:
```powershell
& 'C:\Users\sanka\work\learn_kanada_app\.venv-tts\Scripts\python.exe' kanada/scripts/generate_kannada_audio.py --app-dir kanada/day-1 --output kanada/day-1/audio
```
Use the same generator with the relevant day directory for other lessons.

## Current product agreement

- Keep the app compact, readable, and friendly at laptop and phone widths.
- Pair Kannada script with plain romanization, English meaning, and saved audio.
- Teach short practical conversations and reusable phrases; preserve citations on
  lesson pages when a source informed the lesson.
- Progress stays in each browser's local storage; there is no backend or login.
- Fluent-speaker language/audio review and user phone feedback are tracked as
  pending until actually completed.
- Future content remains within Days 1–7 unless the user extends the scope.

Older migration and prototype notes below are historical records. For the
current workflow and state, follow the dated notes at the top of this file.
