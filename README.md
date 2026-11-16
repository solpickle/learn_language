# Learn Language

Small, static language-learning apps. Kannada is at [kanada/](kanada/): an audio
lab, [Day 1](kanada/day-1/), [Day 2](kanada/day-2/), and a [reading bridge](kanada/read/).
The lessons use committed Kannada MP3s, so playback needs no installed voice.

Serve the repository root over HTTP and open `/kanada/`. Run
`node --test kanada/tests/*.test.mjs`. See [AGENTS.md](AGENTS.md) for development
and styling guidance, [kanada/dev_setup.md](kanada/dev_setup.md) for audio
generation, and [kanada/plan.md](kanada/plan.md) for the seven-day checklist.

GitHub Pages publishes `main` at <https://solpickle.github.io/learn_language/kanada/>.
Use a feature branch for each change, then merge to release.
