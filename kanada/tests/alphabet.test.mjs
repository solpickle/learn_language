import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, statSync} from "node:fs";
import {vowels, consonants, consonantGroups, exampleWords, audioItems} from "../alphabet/content.mjs";

const root = new URL("../alphabet/", import.meta.url);

test("alphabet lists 13 vowels and 34 consonants with readable forms", () => {
  assert.equal(vowels.length, 13);
  assert.equal(new Set(vowels.map(vowel => vowel.letter)).size, 13);
  assert.equal(consonants.length, 34);
  assert.equal(new Set(consonants.map(letter => letter.letter)).size, 34);
  assert.deepEqual(consonantGroups.map(group => group.letters.length), [5, 5, 5, 5, 5, 9]);
  for (const vowel of vowels) assert.ok(vowel.roman && vowel.name && typeof vowel.sign === "string");
  for (const consonant of consonants) assert.ok(consonant.roman && consonant.id);
  assert.equal(`ಕ${vowels.find(vowel => vowel.roman === "aa").sign}`, "ಕಾ");
  assert.equal(`ಕ${vowels.find(vowel => vowel.roman === "i").sign}`, "ಕಿ");
});

test("example words are chunked into their visible Kannada spellings", () => {
  assert.equal(exampleWords.length, 5);
  for (const word of exampleWords) {
    assert.ok(word.meaning && word.roman);
    assert.equal(word.parts.map(part => part.script).join(""), word.script);
    assert.equal(word.parts.map(part => part.roman).join(""), word.roman);
    for (const part of word.parts) assert.ok(part.script && part.roman);
  }
});

test("vowel, consonant, and word recordings match the manifest", () => {
  const manifest = JSON.parse(readFileSync(new URL("audio/manifest.json", root), "utf8"));
  assert.equal(manifest.voice, "kn-IN-SapnaNeural");
  assert.deepEqual(manifest.phrases.map(({id, text}) => [id, text]), audioItems.map(({id, kannada}) => [id, kannada]));
  for (const item of audioItems) assert.ok(statSync(new URL(`audio/${item.id}.mp3`, root)).size > 1000, item.id);
});

test("app home, reading page, numbers page, and Pages workflow link and publish the alphabet", () => {
  const home = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const reading = readFileSync(new URL("../read/index.html", import.meta.url), "utf8");
  const numbers = readFileSync(new URL("../numbers/index.html", import.meta.url), "utf8");
  const page = readFileSync(new URL("../alphabet/index.html", import.meta.url), "utf8");
  const workflow = readFileSync(new URL("../../.github/workflows/publish.yml", import.meta.url), "utf8");
  assert.match(home, /href="\.\/alphabet\/"/);
  assert.match(reading, /href="\.\.\/alphabet\/"/);
  assert.match(numbers, /href="\.\.\/alphabet\/"/);
  assert.match(page, /href="\.\.\/" aria-label="Home">Home/);
  assert.match(workflow, /kanada\/alphabet\/audio\/\*\.mp3/);
});
