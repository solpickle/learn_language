import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {phrases, introductionPhrases, dialogue, strangerPairs, story, questions, audioItems} from "../day-1/content.mjs";

const root = new URL("../day-1/", import.meta.url);

test("Day 1 audio covers every playable phrase, dialogue line, story line and quiz prompt", () => {
  const ids = new Set(audioItems.map(item => item.id));
  assert.equal(ids.size, audioItems.length);
  assert.equal(phrases.length, 6);
  assert.equal(strangerPairs.length, 5);
  assert.equal(story.length, 5);
  for (const item of [...phrases, ...dialogue, ...story]) {
    assert.ok(item.kannada && item.roman && item.english);
    assert.ok(ids.has(item.audioId || item.id));
  }
  for (const question of questions) {
    assert.ok(ids.has(question.audioId));
    assert.ok(question.choices.includes(question.correct));
  }
  for (const pair of strangerPairs) {
    assert.ok(pair.title && pair.people && pair.context);
    for (const id of pair.phraseIds) assert.ok(introductionPhrases.some(item => item.id === id), id);
  }
  for (const item of audioItems) {
    assert.ok(statSync(new URL(`audio/${item.id}.mp3`, root)).size > 1000);
  }
});

test("Day 1 teaches a reusable bus-stop introduction and covers varied pairs", () => {
  for (const id of ["how-are-you", "name-question", "live-question", "work-study-question", "where-going", "nice-meet"]) {
    const item = introductionPhrases.find(phrase => phrase.id === id);
    assert.ok(item?.kannada && item?.roman && item?.english, id);
  }
  for (const expected of ["Boy and girl", "Boy and boy", "Girl and girl", "Woman and man", "Older man and schoolboy"]) {
    assert.ok(strangerPairs.some(pair => pair.title.startsWith(expected)), expected);
  }
  assert.ok(dialogue.some(item => item.id === "live-indiranagar"));
  assert.ok(dialogue.some(item => item.id === "work-office"));
  assert.ok(dialogue.some(item => item.id === "going-office"));
  const page = readFileSync(new URL("../day-1/index.html", import.meta.url), "utf8");
  const workflow = readFileSync(new URL("../../.github/workflows/publish.yml", import.meta.url), "utf8");
  assert.match(page, /href="#pairings"/);
  assert.match(page, /Kannada Abhivrudhi Pradhikara/);
  assert.match(workflow, /cp kanada\/day-1\/audio\/\*\.mp3 kanada\/day-1\/audio\/manifest\.json/);
});

test("Day 1 still renders the pairing cards if its optional data export is empty", () => {
  const app = readFileSync(new URL("../day-1/app.js", import.meta.url), "utf8");
  assert.match(app, /const defaultPairings = \[/);
  assert.match(app, /const availablePairs = strangerPairs\?\.length \? strangerPairs : defaultPairings/);
  for (const expected of ["Boy and girl", "Boy and boy", "Girl and girl", "Woman and man", "Older man and schoolboy"]) {
    assert.ok(app.includes(expected), expected);
  }
  assert.match(app, /availablePairs\.forEach\(pair =>/);
});

test("recording manifest matches the Day 1 source text", () => {
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.deepEqual(manifest.phrases.map(item => [item.id, item.text]), audioItems.map(item => [item.id, item.kannada]));
});
