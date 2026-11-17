import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createTimedAnswerHighlights} from "../quiz-feedback.mjs";

test("selected correct and wrong choices get distinct temporary highlight classes", async () => {
  const expired = [];
  const highlights = createTimedAnswerHighlights(2, {duration:20, onExpire:index => expired.push(index)});
  highlights.flash(0, "Wrong answer");
  highlights.flash(1, "Correct answer");
  assert.equal(highlights.classFor(0, "Wrong answer", "Correct answer"), "incorrect");
  assert.equal(highlights.classFor(0, "Correct answer", "Correct answer"), "");
  assert.equal(highlights.classFor(1, "Correct answer", "Correct answer"), "correct");
  await new Promise(resolve => setTimeout(resolve, 35));
  assert.equal(highlights.classFor(0, "Wrong answer", "Correct answer"), "");
  assert.equal(highlights.classFor(1, "Correct answer", "Correct answer"), "");
  assert.deepEqual(expired.sort(), [0, 1]);
});

test("a new answer replaces the prior timer and reset cancels pending highlights", async () => {
  const expired = [];
  const highlights = createTimedAnswerHighlights(1, {duration:25, onExpire:index => expired.push(index)});
  highlights.flash(0, "First");
  await new Promise(resolve => setTimeout(resolve, 12));
  highlights.flash(0, "Second");
  await new Promise(resolve => setTimeout(resolve, 16));
  assert.equal(highlights.classFor(0, "Second", "Second"), "correct");
  highlights.reset();
  await new Promise(resolve => setTimeout(resolve, 20));
  assert.deepEqual(expired, []);
  assert.equal(highlights.classFor(0, "Second", "Second"), "");
});

test("quiz answer buttons stay active so the learner can change an answer", () => {
  for (const path of ["../day-1/app.js", "../day-2/app.js", "../day-3/app.js", "../read/app.js"]) {
    const source = readFileSync(new URL(path, import.meta.url), "utf8");
    assert.match(source, /answers\[index\] = choice === question\.correct/, path);
    assert.match(source, /highlights\.flash\(index, choice\)/, path);
    assert.doesNotMatch(source, /(?:option|button)\.disabled\s*=\s*(?:resolved|answers\[index\])/, path);
  }
});
