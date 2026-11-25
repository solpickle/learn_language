import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {phrases, scenarios, questions} from "../day-5/content.mjs";
import {phrases as generated} from "../day-5/phrases.mjs";

const root = new URL("../day-5/", import.meta.url);

test("Day 5 includes every requested everyday conversation category", () => {
  assert.deepEqual(scenarios.map(item => item.title), [
    "At DMart", "At a vegetable shop", "At a sweet shop", "At a scooter puncture shop",
    "With an auto driver", "With a bus conductor", "Stopped by traffic police",
    "At an Udupi restaurant", "Buying flowers near a temple",
    "Checking in with your house helper", "Asking for PAN–Aadhaar help"
  ]);
  assert.equal(questions.length, 8);
  assert.match(scenarios.find(item => item.id === "udupi-restaurant").context, /sambar separate or poured over it/);
  assert.match(scenarios.find(item => item.id === "public-help-desk").context, /not a municipal service/);
});

test("every Day 5 conversation line has readable text and a committed Sapna recording", () => {
  assert.equal(generated.length, new Set(generated.map(item => item.id)).size);
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.deepEqual(manifest.phrases.map(item => [item.id, item.text]), generated.map(item => [item.id, item.kannada]));
  for (const item of phrases) {
    assert.ok(item.kannada && item.roman && item.english, JSON.stringify(item));
    assert.ok(statSync(new URL(item.audioUrl, root)).size > 1000, item.audioUrl);
  }
  for (const scenario of scenarios) {
    assert.ok(scenario.lines.length >= 4, scenario.title);
    for (const line of scenario.lines) {
      assert.ok(line.speaker && line.kannada && line.roman && line.english && line.audioUrl, JSON.stringify(line));
      assert.ok(statSync(new URL(line.audioUrl, root)).size > 1000, `${scenario.title}: ${line.audioUrl}`);
    }
  }
  for (const question of questions) {
    assert.ok(phrases.some(item => item.id === question.audioId));
    assert.ok(question.choices.includes(question.correct));
    assert.ok(statSync(new URL(question.audioUrl, root)).size > 1000);
  }
});

test("Day 5 links its new sight words, Home, citations, and audio in GitHub Pages", () => {
  const page = readFileSync(new URL("index.html", root), "utf8");
  const home = readFileSync(new URL("../index.html", root), "utf8");
  const workflow = readFileSync(new URL("../../.github/workflows/publish.yml", root), "utf8");
  const app = readFileSync(new URL("app.js", root), "utf8");
  const reader = readFileSync(new URL("../read/index.html", root), "utf8");
  const readApp = readFileSync(new URL("../read/app.js", root), "utf8");
  assert.match(page, /href="\.\.\/" aria-label="Home">Home/);
  assert.match(page, /Everyday conversations/);
  assert.match(page, /href="\.\.\/read\/#day-5">Read Kannada · Day 5 words/);
  assert.match(page, /incometax\.gov\.in/);
  assert.match(home, /href="\.\/day-5\/">Start Day 5/);
  assert.match(workflow, /kanada\/day-5\/index\.html kanada\/day-5\/styles\.css kanada\/day-5\/app\.js kanada\/day-5\/content\.mjs kanada\/day-5\/phrases\.mjs/);
  assert.match(workflow, /cp kanada\/day-5\/audio\/\*\.mp3 kanada\/day-5\/audio\/manifest\.json/);
  assert.match(app, /learn-kannada-day-5-v2/);
  assert.match(app, /item\.audioUrl/);
  assert.match(reader, /href="#day-5">Day 5 words/);
  assert.match(reader, /69 words/);
  assert.match(readApp, /word\.day === 5 \? "\.\.\/day-5\/audio"/);
});
