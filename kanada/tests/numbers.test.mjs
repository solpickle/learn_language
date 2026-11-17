import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {numbers, audioItems, kannadaDigits} from "../numbers/content.mjs";

const root = new URL("../numbers/", import.meta.url);

test("number guide covers beginner numbers and saved audio", () => {
  assert.equal(numbers.length, 41);
  assert.equal(new Set(numbers.map(number => number.id)).size, numbers.length);
  assert.deepEqual(numbers.filter(number => number.value <= 20).map(number => number.value), Array.from({length: 21}, (_, index) => index));
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.deepEqual(manifest.phrases.map(({id, text}) => [id, text]), audioItems.map(({id, kannada}) => [id, kannada]));
  for (const number of numbers) assert.ok(statSync(new URL(`audio/${number.id}.mp3`, root)).size > 1000);
});

test("compound and hundred examples use the intended forms", () => {
  const byValue = new Map(numbers.map(number => [number.value, number]));
  for (const value of [21, 25, 31, 41, 51, 61, 71, 81, 91, 100, 101, 110, 120]) assert.ok(byValue.has(value), `Missing ${value}`);
  assert.equal(byValue.get(21).kannada, "ಇಪ್ಪತ್ತೊಂದು");
  assert.equal(byValue.get(31).kannada, "ಮೂವತ್ತೊಂದು");
  assert.equal(byValue.get(41).kannada, "ನಲವತ್ತೊಂದು");
  assert.equal(byValue.get(101).kannada, "ನೂರ ಒಂದು");
  assert.equal(byValue.get(110).kannada, "ನೂರ ಹತ್ತು");
  assert.equal(byValue.get(120).kannada, "ನೂರ ಇಪ್ಪತ್ತು");
  assert.equal(kannadaDigits(0), "೦");
  assert.equal(kannadaDigits(101), "೧೦೧");
  assert.equal(kannadaDigits(120), "೧೨೦");
});

test("home, reading page, and Pages workflow expose the number guide", () => {
  const home = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const reading = readFileSync(new URL("../read/index.html", import.meta.url), "utf8");
  const workflow = readFileSync(new URL("../../.github/workflows/publish.yml", import.meta.url), "utf8");
  assert.match(home, /href="\.\/numbers\/"/);
  assert.match(reading, /href="\.\.\/numbers\/"/);
  assert.match(workflow, /kanada\/numbers\/audio\/\*\.mp3/);
});
