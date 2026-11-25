import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {phrases, dialogue, story, questions} from "../day-5/content.mjs";

const root = new URL("../day-5/", import.meta.url);

test("Day 5 reviews familiar phrases in a market mini conversation", () => {
  assert.equal(dialogue.length, 8);
  assert.equal(story.length, 5);
  assert.equal(questions.length, 6);
  assert.ok(phrases.some(item => item.english === "Hello"));
  assert.ok(phrases.some(item => item.english === "I want water"));
  assert.ok(phrases.some(item => item.english === "How much is this?"));
  assert.ok(phrases.some(item => item.english === "Where is the shop?"));
  assert.match(dialogue.map(item => item.english).join(" "), /half a kilo of tomatoes/i);
  assert.match(dialogue.map(item => item.english).join(" "), /How much is this/);
  assert.ok(questions.every(item => [1, 2, 3, 4].some(day => item.audioUrl.startsWith(`../day-${day}/`))));
});

test("Day 5 reuses committed audio and each quiz answer has a visible phrase", () => {
  for (const item of [...phrases, ...dialogue, ...story, ...questions]) {
    assert.ok(item.kannada && item.roman && item.english || item.audioId, JSON.stringify(item));
    assert.ok(item.audioUrl, JSON.stringify(item));
    assert.ok(statSync(new URL(item.audioUrl, root)).size > 1000, item.audioUrl);
  }
  for (const question of questions) {
    assert.ok(phrases.some(item => item.id === question.audioId));
    assert.ok(question.choices.includes(question.correct));
  }
});

test("Day 5 is linked from Home and included in the Pages static copy step", () => {
  const page = readFileSync(new URL("index.html", root), "utf8");
  const home = readFileSync(new URL("../index.html", root), "utf8");
  const workflow = readFileSync(new URL("../../.github/workflows/publish.yml", root), "utf8");
  const app = readFileSync(new URL("app.js", root), "utf8");
  assert.match(page, /href="\.\.\/" aria-label="Home">Home/);
  assert.match(page, /Finish Day 5/);
  assert.match(home, /href="\.\/day-5\/">Start Day 5/);
  assert.match(page, /href="\.\.\/day-4\/">Day 4/);
  assert.match(workflow, /kanada\/day-5\/index\.html kanada\/day-5\/styles\.css kanada\/day-5\/app\.js kanada\/day-5\/content\.mjs/);
  assert.match(app, /learn-kannada-day-5-v1/);
  assert.match(app, /item\.audioUrl/);
});
