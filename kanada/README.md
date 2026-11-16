# Kannada Everyday

A compact static Kannada app at `/kanada/`, with lessons for
[Day 1](day-1/) and [Day 2](day-2/) plus a [Read Kannada](read/) bridge. Saved
MP3s play without an installed Kannada voice or a runtime TTS service.

Each lesson has reusable phrases, a short exchange and story, listening practice,
and browser-local completion. Kannada wording and generated pronunciation still
need fluent-speaker review.

Serve the repository root over HTTP and open `/kanada/`. Run
`node --test kanada/tests/*.test.mjs`. See [dev_setup.md](dev_setup.md) for
generation and deployment, and [plan.md](plan.md) for the seven-day checklist.
