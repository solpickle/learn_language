import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";

const pages = [
  ["Home", "../index.html", "./"],
  ["Day 1", "../day-1/index.html", "../"],
  ["Day 2", "../day-2/index.html", "../"],
  ["Day 3", "../day-3/index.html", "../"],
  ["Read Kannada", "../read/index.html", "../"],
  ["Kannada Numbers", "../numbers/index.html", "../"],
  ["Kannada Alphabet", "../alphabet/index.html", "../"]
];

test("every Kannada page has a header link named Home to the app home", () => {
  for (const [name, path, href] of pages) {
    const page = readFileSync(new URL(path, import.meta.url), "utf8");
    assert.ok(page.includes(`<header><a href="${href}" aria-label="Home">Home</a>`), `${name} page`);
    assert.doesNotMatch(page, /Audio lab/i, `${name} page`);
    if (name !== "Home") {
      const tabRow = page.match(/<nav\b[^>]*>[\s\S]*?<\/nav>/)?.[0] || "";
      assert.ok(tabRow.includes(`<a href="${href}" aria-label="Home">Home</a>`), `${name} tab row`);
    }
  }
});
