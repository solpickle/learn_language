import {words, forms, questions} from "./content.mjs";
import {createRecordedController} from "../recorded.mjs";

const $ = id => document.getElementById(id);
const byId = new Map(words.map(word => [word.id, word]));
const player = createRecordedController(() => new Audio(), event => { $("status").textContent = event.message; });
let answers = Array(questions.length).fill(null);

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
function listen(word) {
  player.play(new URL(`./audio/${word.id}.mp3`, import.meta.url).href, Number($("rate").value), word.id);
}
function playButton(word, label = "▶ Listen") {
  const button = element("button", "", label);
  button.type = "button";
  button.setAttribute("aria-label", `Play ${word.roman}`);
  button.addEventListener("click", () => listen(word));
  return button;
}

for (const word of words) {
  const card = element("article", "word-card");
  card.id = `word-${word.id}`;
  const header = element("div", "word-head");
  header.append(element("h3", "", word.script), playButton(word));
  card.append(header, element("p", "romanized", word.roman), element("p", "meaning", word.meaning), element("p", "example", `${word.example} · ${word.exampleRoman}`), element("p", "hint", word.note));
  $("word-list").append(card);
}

for (const group of forms) {
  const row = element("div", "form-row");
  const base = element("div", "form-piece");
  base.append(element("strong", "", group.base), element("span", "", group.baseSound));
  row.append(base);
  for (const variant of group.variants) {
    row.append(element("span", "form-arrow", "→"));
    const piece = element("div", "form-piece");
    piece.append(element("strong", "", variant.script), element("span", "", `${variant.sound} · in ${variant.cue}`));
    row.append(piece);
  }
  row.append(element("span", "form-note", group.explanation));
  $("form-list").append(row);
}

function renderQuestions() {
  $("question-list").replaceChildren();
  questions.forEach((question, index) => {
    const word = byId.get(question.wordId);
    const article = element("article", "question");
    const head = element("div", "question-head");
    head.append(element("strong", "", word.script), playButton(word, "▶ Hear it"));
    const choices = element("div", "choices");
    const feedback = element("p", "feedback");
    for (const choice of question.choices) {
      const button = element("button", answers[index] !== null && choice === question.correct ? "correct" : "", choice);
      button.type = "button";
      button.disabled = answers[index] !== null;
      button.addEventListener("click", () => { answers[index] = choice === question.correct; renderQuestions(); });
      choices.append(button);
    }
    if (answers[index] !== null) feedback.textContent = `${answers[index] ? "Correct" : "Good try"} · ${word.script} · ${word.roman} · ${word.meaning}`;
    article.append(head, element("p", "", question.ask), choices, feedback);
    $("question-list").append(article);
  });
  const done = answers.every(answer => answer !== null);
  $("score").textContent = done ? `${answers.filter(Boolean).length} of ${questions.length} correct. Replay the words above, then try again.` : `${answers.filter(answer => answer !== null).length} of ${questions.length} answered`;
  $("retry").hidden = !done;
}
renderQuestions();
$("retry").addEventListener("click", () => { answers = Array(questions.length).fill(null); renderQuestions(); });
$("stop").addEventListener("click", () => player.stop());
