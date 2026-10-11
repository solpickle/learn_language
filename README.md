# Learn Language

Small, static language-learning apps.

## Kannada
The prototype lives in [kanada/](kanada/), including five phrases, saved Kannada
MP3s, pronunciation guides, and playback speed controls.

From the repository root, serve locally:
python -m http.server 4174 --bind 127.0.0.1

Then open http://127.0.0.1:4174/kanada/.

Run tests:
node --test kanada/tests/kannada-speech.test.mjs

See kanada/dev_setup.md for audio generation and kanada/plan.md for the MVP checklist.
GitHub Pages uses .github/workflows/publish.yml. Each push to main tests the app and publishes a static site; develop features on separate branches and merge them into main to release. The public app URL is https://solpickle.github.io/learn_language/kanada/.