import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {words, forms, questions} from "../read/content.mjs";

const root = new URL("../read/", import.meta.url);

test("sight words have audio and the expected Day 1 content", () => {
  assert.equal(words.length, 10);
  assert.equal(new Set(words.map(word => word.id)).size, words.length);
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.deepEqual(manifest.phrases.map(item => [item.id, item.text]), words.map(word => [word.id, word.script]));
  for (const word of words) {
    assert.ok(word.roman && word.meaning && word.example && word.exampleRoman);
    assert.ok(statSync(new URL(`audio/${word.id}.mp3`, root)).size > 1000);
  }
});

test("vowel-mark examples and recognition answers match visible words", () => {
  for (const form of forms) {
    for (const variant of form.variants) {
      assert.ok(words.some(word => word.script.includes(variant.script) && word.script === variant.cue));
    }
  }
  for (const question of questions) {
    assert.ok(words.some(word => word.id === question.wordId));
    assert.ok(question.choices.includes(question.correct));
  }
});

test("Day 1 reading links resolve to available cards", () => {
  const lesson = readFileSync(new URL("../day-1/index.html", import.meta.url), "utf8");
  const ids = [...lesson.matchAll(/\.\.\/read\/#word-([a-z-]+)/g)].map(match => match[1]);
  assert.ok(ids.length >= 5);
  for (const id of ids) assert.ok(words.some(word => word.id === id), id);
});
