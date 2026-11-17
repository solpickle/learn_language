import {vowels, consonantGroups, consonants, exampleWords} from "./content.mjs";
import {createRecordedController} from "../recorded.mjs";

const $ = id => document.getElementById(id);
const player = createRecordedController(() => new Audio(), event => { $("status").textContent = event.message; });
let selected = consonants.find(letter => letter.letter === "ಕ");

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function play(id, label) {
  player.play(new URL(`./audio/${id}.mp3`, import.meta.url).href, Number($("rate").value), id);
  $("status").textContent = `Playing ${label}.`;
}

$("stop").addEventListener("click", () => player.stop());

for (const vowel of vowels) {
  const card = node("article", "vowel-card");
  const button = node("button", "", vowel.letter);
  button.type = "button";
  button.lang = "kn";
  button.setAttribute("aria-label", `Hear vowel ${vowel.letter}, ${vowel.name}`);
  button.addEventListener("click", () => play(vowel.id, `${vowel.name}, ${vowel.roman}`));
  card.append(button, node("span", "roman", vowel.roman), node("small", "", vowel.name));
  $("vowel-grid").append(card);
}

function renderSyllables() {
  $("selected-label").textContent = `Selected: ${selected.letter} (${selected.roman}) · short a is built in`;
  $("syllable-grid").replaceChildren();
  for (const vowel of vowels) {
    const card = node("article", "syllable-card");
    const form = `${selected.letter}${vowel.sign}`;
    const syllable = node("strong", "form", form);
    syllable.lang = "kn";
    const sign = vowel.sign ? `+ ${vowel.sign}` : "no extra sign";
    card.append(syllable, node("span", "roman", `${selected.roman.slice(0, -1)}${vowel.roman}`), node("small", "", sign));
    $("syllable-grid").append(card);
  }
}

for (const consonant of consonants) {
  const button = node("button", "consonant-choice", "");
  button.type = "button";
  button.setAttribute("aria-pressed", String(consonant.letter === selected.letter));
  button.setAttribute("aria-label", `Select and hear ${consonant.letter}, ${consonant.roman}`);
  const letter = node("strong", "", consonant.letter);
  letter.lang = "kn";
  button.append(letter, node("span", "", consonant.roman));
  button.addEventListener("click", () => {
    selected = consonant;
    for (const choice of $("builder-consonants").querySelectorAll("button")) choice.setAttribute("aria-pressed", String(choice === button));
    renderSyllables();
    play(consonant.id, `${consonant.roman} sound`);
  });
  $("builder-consonants").append(button);
}
renderSyllables();

for (const group of consonantGroups) {
  const section = node("section", "consonant-group");
  section.append(node("h3", "", group.title));
  const grid = node("div", "consonant-grid");
  for (const consonant of group.letters) {
    const card = node("article", "consonant-card");
    const button = node("button", "", consonant.letter);
    button.type = "button";
    button.lang = "kn";
    button.setAttribute("aria-label", `Hear ${consonant.letter}, ${consonant.roman}`);
    button.addEventListener("click", () => play(consonant.id, `${consonant.roman} sound`));
    card.append(button, node("span", "", consonant.roman));
    grid.append(card);
  }
  section.append(grid);
  $("consonant-groups").append(section);
}

for (const word of exampleWords) {
  const card = node("article", "word-card");
  const top = node("div", "word-top");
  const script = node("strong", "", word.script);
  script.lang = "kn";
  const button = node("button", "word-play", "▶ Listen");
  button.type = "button";
  button.setAttribute("aria-label", `Hear ${word.meaning}, ${word.roman}`);
  button.addEventListener("click", () => play(word.id, `${word.roman}, ${word.meaning}`));
  top.append(script, button);
  card.append(top, node("div", "roman", word.roman), node("div", "meaning", word.meaning));
  const parts = node("div", "word-parts");
  for (const part of word.parts) {
    const item = node("span", "word-part");
    const partScript = node("strong", "", part.script);
    partScript.lang = "kn";
    item.append(partScript, document.createTextNode(` ${part.roman}`));
    parts.append(item);
  }
  card.append(parts);
  $("word-list").append(card);
}
