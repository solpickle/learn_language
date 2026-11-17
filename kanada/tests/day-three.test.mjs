import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {phrases, dialogue, story, questions, audioItems} from "../day-3/content.mjs";

const root = new URL("../day-3/", import.meta.url);

test("Day 3 teaches the price question and reusable quantity request", () => {
  assert.ok(phrases.some(item => item.kannada === "ಎಷ್ಟು?"));
  assert.ok(phrases.some(item => item.kannada === "ಇದರ ಬೆಲೆ ಎಷ್ಟು?"));
  assert.ok(phrases.some(item => item.kannada === "ಅರ್ಧ ಕೆಜಿ ಟೊಮೇಟೊ ಕೊಡಿ."));
  assert.ok(phrases.some(item => item.kannada === "ಒಂದು ಕೆಜಿ ಟೊಮೇಟೊ ಕೊಡಿ."));
  assert.equal(story.length, 5);
  assert.equal(questions.length, 4);
});

test("every Day 3 play target has a committed MP3 and matching manifest text", () => {
  assert.equal(new Set(audioItems.map(item => item.id)).size, audioItems.length);
  for (const item of [...phrases, ...dialogue, ...story]) {
    assert.ok(item.kannada && item.roman && item.english);
    assert.ok(audioItems.some(audio => audio.id === (item.audioId || item.id)));
  }
  for (const question of questions) {
    assert.ok(audioItems.some(audio => audio.id === question.audioId));
    assert.ok(question.choices.includes(question.correct));
  }
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.equal(manifest.generator, "edge-tts 7.3.1");
  assert.deepEqual(manifest.phrases.map(item => [item.id, item.text]), audioItems.map(item => [item.id, item.kannada]));
  for (const item of audioItems) assert.ok(statSync(new URL(`audio/${item.id}.mp3`, root)).size > 1000);
});

test("Day 3 stores completion separately and links to its sight words", () => {
  const script = readFileSync(new URL("app.js", root), "utf8");
  const page = readFileSync(new URL("index.html", root), "utf8");
  assert.match(script, /learn-kannada-day-3-v1/);
  assert.match(page, /\.\.\/read\/#word-eshtu/);
});
