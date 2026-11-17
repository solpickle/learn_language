import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";

const page = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const app = readFileSync(new URL("../app.js", import.meta.url), "utf8");

test("Home shows only saved Sapna audio, speed control, and a playback-only Stop button", () => {
  assert.match(page, /Voice: Kannada Sapna recordings\./);
  assert.match(page, /<label>Speaking speed<select id="rate">/);
  assert.match(page, /id="stop"[^>]*hidden/);
  assert.doesNotMatch(page, /id="voice"|id="refresh"|Kannada voice|Refresh voices|Your audio setup/);
  assert.match(app, /stopButton\.hidden = !playing/);
  assert.match(app, /recordings\.play\(/);
  assert.doesNotMatch(app, /speechSynthesis|SpeechSynthesisUtterance|getKannadaVoices|refreshVoices/);
});
