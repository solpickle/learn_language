import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {phrases, dialogue, story, questions, audioItems} from "../day-1/content.mjs";

const root = new URL("../day-1/", import.meta.url);

test("Day 1 audio covers every playable phrase, dialogue line, story line and quiz prompt", () => {
  const ids = new Set(audioItems.map(item => item.id));
  assert.equal(ids.size, audioItems.length);
  assert.equal(phrases.length, 6);
  assert.equal(story.length, 5);
  for (const item of [...phrases, ...dialogue, ...story]) {
    assert.ok(item.kannada && item.roman && item.english);
    assert.ok(ids.has(item.audioId || item.id));
  }
  for (const question of questions) {
    assert.ok(ids.has(question.audioId));
    assert.ok(question.choices.includes(question.correct));
  }
  for (const item of audioItems) {
    assert.ok(statSync(new URL(`audio/${item.id}.mp3`, root)).size > 1000);
  }
});

test("recording manifest matches the Day 1 source text", () => {
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.deepEqual(manifest.phrases.map(item => [item.id, item.text]), audioItems.map(item => [item.id, item.kannada]));
});
