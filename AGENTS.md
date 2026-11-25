# Learn Language repository guide

This repository hosts the Kannada learning MVP at `kanada/` on GitHub Pages. The active source and plan are here; `C:\Users\sanka\work\learn_kanada_app` is a historical planning workspace. Read `kanada/plan.md` and `kanada/dev_setup.md` before changing the app. Their newest status notes take precedence over old migration and `imsank.github.io` sections.

## Product scope

- Build only Days 1–7 of the spoken Kannada course. Do not add architecture or features whose only purpose is a future 30-day course.
- The user is a beginner who cannot yet read Kannada. Show Kannada script, a consistent romanized reading aid, a plain English meaning, and saved audio for new spoken content. Never make a task depend on reading Kannada script alone.
- Teach reusable phrases by explaining parts and showing one or two substitutions. Use beginner-friendly descriptions; verify grammar and spelling before teaching formal labels.
- Keep a separate, small `Read Kannada` path for sight words and letter forms introduced in the lessons. Do not turn each day into a full alphabet course.
- New Kannada text, romanization, and synthetic pronunciation need fluent-speaker review before being called polished. Record the review as pending when it has not happened.
- Progress and preferences stay in each browser's local storage, with a graceful fallback when storage is unavailable. No backend or account is needed for this MVP.

## Visual and interaction style

- Preserve the existing compact, calm visual language in `kanada/styles.css` and the day-specific styles: warm off-white background, dark green text/buttons, pale sage panels, subtle borders, modest radii, and restrained serif page headings.
- Prefer short rows and dense, scannable sections over large cards or empty space. Keep spacing tight without making Kannada text hard to read.
- Keep the main content around the existing 900px maximum width. Check laptop and 360–430px phone layouts. Horizontal section navigation may scroll on phones; primary actions must remain easy to find.
- Use readable Kannada font fallbacks (`Nirmala UI`, `Noto Sans Kannada`, sans-serif), adequate line height, strong contrast, visible keyboard focus, and controls around 44px tall where practical.
- Use semantic headings, labels, links, and buttons. Announce audio/quiz feedback through status text. A Play button must identify what it plays to assistive technology.
- Page-specific CSS is fine; keep the shared theme consistent. Do not introduce a framework or broad redesign for an individual lesson.

## User preferences to apply across future lessons and tabs

- The learner is an adult beginner who cannot yet read Kannada and does not speak it. Never make an activity depend on Kannada script alone: pair new script with simple romanization, a plain-English meaning, and saved audio.
- Keep the interface compact at laptop and phone widths. Prefer short, vertically stacked links and rows; avoid oversized cards and excess whitespace. The Home page entry links should remain a single vertical list on desktop as well as mobile.
- Every lesson and reference tab must have a Home link in its header and as the first link in its in-page navigation row. Use relative links that work under the GitHub Pages `/learn_language/` path.
- Keep Home audio controls intuitive for a first-time visitor: use the saved Kannada Sapna recordings, show only speaking speed, and show Stop only during playback. Do not show browser voice selection or voice-refresh controls on Home.
- Keep learning references as separate, clearly linked tabs: Read Kannada for sight words from lessons, Kannada Numbers for spoken number forms and patterns, and Kannada Alphabet for letter recognition and combining sounds.
- On the Alphabet tab, make Kannada letterforms visibly large and bold. Explain independent vowels versus consonant vowel signs, show how a consonant changes when a vowel sign is added, and use simple words broken into readable chunks. Do not present a chart without showing how to use it.
- In quizzes and recognition practice, briefly highlight the selected choice pale green when correct and pale red when incorrect; clear the color after about 1.8 seconds while retaining the answer explanation and score. Keep choices enabled so learners can change an answer and try again without refreshing. Reuse `kanada/quiz-feedback.mjs` for this behavior.
- Keep every new lesson focused on the agreed Days 1–7 MVP. Do not build for a future 30-day course unless the user expands scope.
- When it fits the lesson, use practical Bengaluru settings such as asking for a local address, telling an auto driver a destination, buying a bus ticket, and asking about journey time. Keep each new phrase beginner-readable with Kannada script, romanization, English, and saved audio.
- Include practical pickup conversations when helpful: ask the driver where they are, exchange nearby landmarks, and guide them with a short route. Treat user-provided place names and directions as their scenario, not as independently map-verified information. Keep new phrases playable and add useful standalone words to Read Kannada.
- When published learning material or a reference informs a lesson's words or patterns, add a compact Sources section on that lesson page. Link the actual source and, where possible, cite the lesson/page that supports the pattern. Treat citations as traceability and further reading, not as a substitute for fluent-speaker review.

## App and audio structure

- The site is buildless HTML, CSS, and ES modules. Use relative URLs so it works at the GitHub Pages repository path `/learn_language/` and in local HTTP preview.
- Keep lesson content in a simple data module separate from DOM rendering. Follow the existing `kanada/day-1/` structure where useful, without copying unnecessary features.
- Saved Kannada MP3s are the default playback path. Browser `kn-IN` TTS is only an optional comparison in the older audio lab; do not depend on an installed Kannada voice or a runtime network TTS request.
- Generate new recordings with `kanada/scripts/generate_kannada_audio.py`, `kn-IN-SapnaNeural`, and the local `phrases.mjs` adapter. Commit the MP3s and `audio/manifest.json` with the text that produced them. Generation uses online `edge-tts`; the published site does not.
- Keep Stop, replay, and 0.6x / 0.8x / 1.0x speed behavior predictable, without overlapping audio. Show a clear error if a file cannot play.

## Workflow and checks

- Work in a new feature branch from the latest `origin/main` for each feature. Review the diff and run relevant checks. Push the branch, create its PR with `gh pr create`, and merge it with `gh pr merge`; do not merge a feature branch into `main` locally. Keep the PR title and body focused on the final change and validation.
- A PR merge pushes to `main` and triggers `.github/workflows/publish.yml`. Use GitHub CLI to check deployment (`gh run list --workflow publish.yml`, then `gh run watch <run-id> --exit-status`). Use `gh workflow run publish.yml --ref main` only when a manual deployment is needed; avoid starting a duplicate run after the automatic one. Verify the live page and audio URLs after a successful run.
- Update `.github/workflows/publish.yml` whenever a new runtime page or asset directory is added; its static-site copy list is explicit.
- Run `node --test kanada/tests/*.test.mjs`, JavaScript syntax checks for changed modules, and `git diff --check`. Add tests for meaningful content/audio references or behavior, not for trivial styling.
- Preview over HTTP rather than `file://`, and inspect the compact laptop and phone layouts when browser tooling is available. User phone testing and fluent-speaker review must be recorded separately from automated tests.
- Update the current checklist and handoff notes in `kanada/plan.md` and `kanada/dev_setup.md` as work is completed. Avoid perpetuating historical status statements as if they describe the current app.
- Production: <https://solpickle.github.io/learn_language/kanada/>. Day pages and reading path live under that URL.
