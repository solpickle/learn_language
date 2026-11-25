import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {words, forms, questions} from "../read/content.mjs";

const root = new URL("../read/", import.meta.url);

test("sight words have audio and the expected Days 1–5 content", () => {
  assert.equal(words.length, 58);
  assert.equal(new Set(words.map(word => word.id)).size, words.length);
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.deepEqual(manifest.phrases.map(item => [item.id, item.text]).sort((a, b) => a[0].localeCompare(b[0])), words.filter(word => word.day !== 3 && word.day !== 4 && word.day !== 5).map(word => [word.id, word.script]).sort((a, b) => a[0].localeCompare(b[0])));
  assert.deepEqual(new Set(manifest.phrases.map(item => item.generator)), new Set(["edge-tts 7.2.8", "edge-tts 7.3.1"]));
  for (const word of words) {
    assert.ok(word.roman && word.meaning && word.example && word.exampleRoman);
    const audioUrl = word.day === 3 ? new URL(`../day-3/audio/${word.id}.mp3`, root) : word.day === 4 ? new URL(`../day-4/audio/${word.id}.mp3`, root) : word.day === 5 ? new URL(`../day-5/audio/${word.id}.mp3`, root) : new URL(`audio/${word.id}.mp3`, root);
    assert.ok(statSync(audioUrl).size > 1000);
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

test("Day 2 reading links resolve to available cards", () => {
  const lesson = readFileSync(new URL("../day-2/index.html", import.meta.url), "utf8");
  const ids = [...lesson.matchAll(/\.\.\/read\/#word-([a-z-]+)/g)].map(match => match[1]);
  assert.ok(ids.length >= 5);
  for (const id of ids) assert.ok(words.some(word => word.id === id), id);
});

test("Day 3 reading links resolve to available cards", () => {
  const lesson = readFileSync(new URL("../day-3/index.html", import.meta.url), "utf8");
  const ids = [...lesson.matchAll(/\.\.\/read\/#word-([a-z-]+)/g)].map(match => match[1]);
  assert.ok(ids.length >= 5);
  for (const id of ids) assert.ok(words.some(word => word.id === id), id);
});

test("sight words are grouped and directly reachable by lesson day", () => {
  const page = readFileSync(new URL("../read/index.html", import.meta.url), "utf8");
  const app = readFileSync(new URL("../read/app.js", import.meta.url), "utf8");
  assert.deepEqual([1, 2, 3, 4, 5].map(day => words.filter(word => (word.day || 1) === day).length), [16, 5, 11, 17, 9]);
  for (const id of ["address", "indiranagar", "mg-road", "ticket", "time", "traffic", "marathahalli", "hattira", "sight-cheela", "sight-puncture", "sight-sambar", "sight-hoovu", "sight-haara", "sight-challan", "sight-helmet", "sight-license", "sight-sahaaya"]) assert.ok(words.some(word => word.id === id));
  assert.ok(app.includes("const dayLabels = {1:"));
  assert.ok(app.includes("divider.id = `day-${day}`;"));
  for (const day of [1, 2, 3, 4, 5]) assert.ok(page.includes(`href="#day-${day}"`));
});

test("Day 5 sight-word links resolve to audio-backed cards", () => {
  const lesson = readFileSync(new URL("../day-5/index.html", import.meta.url), "utf8");
  assert.match(lesson, /href="\.\.\/read\/#day-5"/);
  for (const id of ["sight-cheela", "sight-sambar", "sight-haara", "sight-sahaaya"]) assert.ok(words.some(word => word.id === id));
});

test("Day 4 reading links resolve to available cards", () => {
  const lesson = readFileSync(new URL("../day-4/index.html", import.meta.url), "utf8");
  const ids = [...lesson.matchAll(/\.\.\/read\/#word-([a-z-]+)/g)].map(match => match[1]);
  assert.ok(ids.length >= 5);
  for (const id of ids) assert.ok(words.some(word => word.id === id), id);
});
