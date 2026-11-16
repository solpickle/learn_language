import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {phrases, dialogue, story, questions, audioItems} from "../day-2/content.mjs";

const root = new URL("../day-2/", import.meta.url);

test("Day 2 has distinct need, decline, and item substitutions", () => {
  assert.equal(phrases.length, 8);
  assert.ok(phrases.some(item => item.kannada === "ನೀರು" && item.english === "Water"));
  assert.ok(phrases.some(item => item.kannada === "ಬೇಕು" && item.english === "Want / need"));
  assert.ok(phrases.some(item => item.kannada === "ಬೇಡ" && item.english === "Don't want / need"));
  assert.ok(phrases.some(item => item.kannada === "ನನಗೆ ನೀರು ಬೇಕು"));
  assert.ok(phrases.some(item => item.kannada === "ನನಗೆ ಚಹಾ ಬೇಡ"));
  assert.equal(story.length, 5);
  assert.equal(questions.length, 4);
});

test("every Day 2 play target has a committed MP3 and matching manifest text", () => {
  const ids = new Set(audioItems.map(item => item.id));
  assert.equal(ids.size, audioItems.length);
  for (const item of [...phrases, ...dialogue, ...story]) {
    assert.ok(item.kannada && item.roman && item.english);
    assert.ok(ids.has(item.audioId || item.id));
  }
  for (const question of questions) {
    assert.ok(ids.has(question.audioId));
    assert.ok(question.choices.includes(question.correct));
  }
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.equal(manifest.generator, "edge-tts 7.3.1");
  assert.deepEqual(manifest.phrases.map(item => [item.id, item.text]), audioItems.map(item => [item.id, item.kannada]));
  for (const item of audioItems) assert.ok(statSync(new URL(`audio/${item.id}.mp3`, root)).size > 1000);
});

test("Day 2 stores progress separately from Day 1", () => {
  const script = readFileSync(new URL("app.js", root), "utf8");
  assert.match(script, /learn-kannada-day-2-v1/);
  assert.doesNotMatch(script, /learn-kannada-day-1-v1/);
});
