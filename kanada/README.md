# Kannada Everyday — audio prototype

A standalone static app for learning everyday Kannada. Five phrases with Kannada
script, romanization, English and saved MP3 audio. No installed Kannada voice,
API key, Jekyll or backend is needed for playback.

See [dev_setup.md](dev_setup.md) for local preview, audio generation and migration
details, and [plan.md](plan.md) for the seven-day MVP checklist.

Serve this directory over HTTP (for example, Python's http.server) and open its
index page. Tests: `node --test tests/kannada-speech.test.mjs`.

New GitHub hosting details are pending. Audio files must be included when publishing.
