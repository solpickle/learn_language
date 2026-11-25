import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync, readdirSync, statSync} from "node:fs";
import {phrases, dialogue, scenarios, story, questions, audioItems} from "../day-4/content.mjs";

const root = new URL("../day-4/", import.meta.url);

test("Day 4 asks where a place is and teaches reusable direction phrases", () => {
  assert.ok(phrases.some(item => item.kannada === "ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?"));
  assert.ok(phrases.some(item => item.kannada === "ಮುಂದೆ ಹೋಗಿ."));
  assert.ok(phrases.some(item => item.kannada === "ಎಡಕ್ಕೆ ತಿರುಗಿ."));
  assert.ok(phrases.some(item => item.kannada === "ಬಲಕ್ಕೆ ತಿರುಗಿ."));
  assert.ok(phrases.some(item => item.kannada === "ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ."));
  assert.equal(dialogue.length, 5);
  assert.equal(dialogue.at(-1).speaker, "To driver");
  assert.ok(phrases.some(item => item.roman === "Ee address ellide?"));
  assert.ok(phrases.some(item => item.roman === "Indiranagar-ge hogbeku."));
  assert.ok(phrases.some(item => item.roman === "MG Road-ge ondu ticket kodi."));
  assert.ok(phrases.some(item => item.roman === "Marathahalliyinda MG Road-ge eshtu time agatte?"));
  assert.equal(scenarios.length, 3);
  assert.match(scenarios.map(item => item.title).join(" "), /Indiranagar/);
  assert.match(scenarios.map(item => item.title).join(" "), /bus conductor/i);
  assert.equal(story.length, 5);
  assert.equal(questions.length, 7);
  assert.equal(audioItems.length, 32);
});

test("every Day 4 play target has a committed Sapna MP3 and matching manifest entry", () => {
  assert.equal(new Set(audioItems.map(item => item.id)).size, audioItems.length);
  for (const item of [...phrases, ...dialogue, ...scenarios.flatMap(scenario => scenario.lines), ...story]) {
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
  const mp3s = readdirSync(new URL("audio/", root)).filter(name => name.endsWith(".mp3")).sort();
  assert.deepEqual(mp3s, audioItems.map(item => `${item.id}.mp3`).sort());
});

test("Day 4 links from Home and Read Kannada and publishes the full page", () => {
  const page = readFileSync(new URL("index.html", root), "utf8");
  const home = readFileSync(new URL("../index.html", root), "utf8");
  const reading = readFileSync(new URL("../read/index.html", root), "utf8");
  const workflow = readFileSync(new URL("../../.github/workflows/publish.yml", root), "utf8");
  assert.match(page, /href="\.\.\/" aria-label="Home">Home/);
  assert.match(page, /href="\.\.\/" aria-label="Home">Home/);
  assert.match(home, /href="\.\/day-4\/">Start Day 4/);
  assert.match(reading, /href="\.\.\/day-4\/">Day 4/);
  assert.match(page, /Find your way around Bengaluru/);
  assert.match(page, /id="scenarios"/);
  assert.match(workflow, /cp kanada\/day-4\/index\.html kanada\/day-4\/styles\.css kanada\/day-4\/app\.js kanada\/day-4\/content\.mjs/);
  assert.match(workflow, /cp kanada\/day-4\/audio\/\*\.mp3/);
});
