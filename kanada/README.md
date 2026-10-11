# Kannada Everyday

A compact static Kannada app. The approved five-phrase audio lab is at `kanada/`;
the complete first lesson is at `kanada/day-1/`. Both use committed Kannada MP3s,
so playback does not require a voice installed on the device.

Day 1 includes a phrase pattern, dialogue, five-line story, audio-first listening
quiz and local progress. The new Kannada lines and generated pronunciation still
need fluent-speaker review.

Serve the repository root over HTTP and open `/kanada/`. Run
`node --test kanada/tests/*.test.mjs`. Audio generation and deployment commands
are in [dev_setup.md](dev_setup.md); the MVP checklist is in [plan.md](plan.md).
