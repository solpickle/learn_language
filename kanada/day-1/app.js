import {phrases, dialogue, story, questions} from "./content.mjs";

const $ = id => document.getElementById(id);
const rate = $("rate"), status = $("status");
const romanToggle = $("show-roman"), englishToggle = $("show-english");
const storyMode = $("story-mode");
const storeKey = "learn-kannada-day-1-v1";
let currentAudio = null, playToken = 0, activeRow = null, cancelCurrent = null;
let answers = Array(questions.length).fill(null);

function saveProgress() {
  try { localStorage.setItem(storeKey, JSON.stringify({answers, completed: $("complete").dataset.done === "true", roman:romanToggle.checked, english:englishToggle.checked, rate:rate.value})); }
  catch { $("completion").textContent = "Progress could not be saved in this browser."; }
}
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storeKey) || "null");
    if (!saved) return;
    if (Array.isArray(saved.answers) && saved.answers.length === answers.length) answers = saved.answers.map(v => v === true || v === false ? v : null);
    if (typeof saved.roman === "boolean") romanToggle.checked = saved.roman;
    if (typeof saved.english === "boolean") englishToggle.checked = saved.english;
    if (["0.6","0.8","1"].includes(saved.rate)) rate.value = saved.rate;
    if (saved.completed) { $("complete").dataset.done = "true"; $("completion").textContent = "Day 1 finished on this browser. You can practice again anytime."; }
  } catch { /* Private browsing can deny storage; the lesson still works. */ }
}
function el(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
function stopAudio(message = "Audio stopped.") {
  ++playToken;
  if (cancelCurrent) { const cancel = cancelCurrent; cancelCurrent = null; cancel(); }
  if (currentAudio) { currentAudio.pause(); currentAudio.removeAttribute("src"); currentAudio.load(); currentAudio = null; }
  if (activeRow) { activeRow.classList.remove("story-active"); activeRow = null; }
  status.textContent = message;
}
function play(id, row) {
  stopAudio("Loading Kannada audio…");
  const token = playToken;
  if (row) { activeRow = row; row.classList.add("story-active"); }
  const audio = new Audio(new URL(`./audio/${id}.mp3`, import.meta.url).href);
  currentAudio = audio;
  audio.playbackRate = Number(rate.value);
  audio.preservesPitch = true;
  return new Promise(resolve => {
    let settled = false;
    const finish = ok => {
      if (settled) return;
      settled = true;
      if (cancelCurrent === cancel) cancelCurrent = null;
      if (token === playToken) {
        if (activeRow) activeRow.classList.remove("story-active");
        activeRow = null; currentAudio = null;
        status.textContent = ok ? "Finished. Listen again or continue." : "Audio could not play. Check your connection and try again.";
      }
      resolve(ok && token === playToken);
    };
    const cancel = () => finish(false);
    cancelCurrent = cancel;
    audio.onplaying = () => { if (token === playToken) status.textContent = "Playing saved Kannada audio. Listen, then repeat."; };
    audio.onended = () => finish(true);
    audio.onerror = () => finish(false);
    audio.play().catch(() => finish(false));
  });
}
function row(item, label, showSpeaker = false) {
  const article = el("article", "lesson-row");
  const copy = el("div");
  if (showSpeaker) copy.append(el("span", "speaker", item.speaker));
  copy.append(el("h3", "", item.kannada));
  const roman = el("p", "romanized", item.roman);
  roman.dataset.roman = "";
  const english = el("p", "meaning", item.english);
  english.dataset.english = "";
  copy.append(roman, english);
  if (item.note) copy.append(el("p", "hint", item.note));
  const button = el("button", "", `▶ ${label}`);
  button.type = "button";
  button.setAttribute("aria-label", `Play ${item.english}`);
  button.addEventListener("click", () => play(item.audioId || item.id, article));
  article.append(copy, button);
  return article;
}
function applyVisibility() {
  document.querySelectorAll("[data-roman]").forEach(node => node.hidden = !romanToggle.checked);
  document.querySelectorAll("[data-english]").forEach(node => node.hidden = !englishToggle.checked);
  applyStoryMode();
}
function applyStoryMode() {
  const mode = storyMode.value;
  for (const node of $("story-list").children) {
    node.querySelector("h3").hidden = mode === "audio";
    node.querySelector("[data-roman]").hidden = mode !== "both" || !romanToggle.checked;
    node.querySelector("[data-english]").hidden = mode !== "both" || !englishToggle.checked;
  }
  $("reveal-story").hidden = mode !== "audio";
}
function renderQuiz() {
  const container = $("quiz-list");
  container.replaceChildren();
  questions.forEach((question, index) => {
    const section = el("div", "quiz-item");
    const listen = el("button", "", `▶ Play clip ${index + 1}`);
    listen.type = "button";
    listen.addEventListener("click", () => play(question.audioId));
    const choices = el("div", "answer-options");
    const reveal = el("p", "quiz-reveal");
    const resolved = answers[index] !== null;
    question.choices.forEach(choice => {
      const option = el("button", resolved && choice === question.correct ? "correct" : "", choice);
      option.type = "button";
      option.disabled = resolved;
      option.addEventListener("click", () => {
        answers[index] = choice === question.correct;
        renderQuiz(); saveProgress();
      });
      choices.append(option);
    });
    if (resolved) {
      const item = phrases.find(phrase => phrase.id === question.audioId);
      reveal.textContent = `${answers[index] ? "Correct" : "Good try"} · ${item.kannada} · ${item.roman} · ${question.correct}`;
    }
    section.append(listen, choices, reveal);
    container.append(section);
  });
  const done = answers.every(answer => answer !== null);
  $("complete").disabled = !done;
  $("quiz-score").textContent = done ? `${answers.filter(Boolean).length} of ${answers.length} correct. Replay any clip to practice.` : `${answers.filter(answer => answer !== null).length} of ${answers.length} answered`;
}

loadProgress();
phrases.forEach(item => $("phrase-list").append(row(item, "Listen")));
dialogue.forEach(item => $("dialogue-list").append(row(item, "Listen", true)));
story.forEach((item, i) => $("story-list").append(row(item, `Line ${i + 1}`)));
renderQuiz(); applyVisibility();
romanToggle.addEventListener("change", () => { applyVisibility(); saveProgress(); });
englishToggle.addEventListener("change", () => { applyVisibility(); saveProgress(); });
rate.addEventListener("change", saveProgress);
storyMode.addEventListener("change", applyStoryMode);
$("reveal-story").addEventListener("click", () => { storyMode.value = "both"; applyStoryMode(); });
$("stop").addEventListener("click", () => stopAudio());
$("stop-story").addEventListener("click", () => stopAudio());
$("play-story").addEventListener("click", async () => {
  stopAudio("Starting the story…");
  for (const [index, item] of story.entries()) {
    const ok = await play(item.id, $("story-list").children[index]);
    if (!ok) break;
  }
});
$("complete").addEventListener("click", () => {
  if (answers.some(answer => answer === null)) return;
  $("complete").dataset.done = "true";
  $("completion").textContent = "Day 1 finished! Come back and replay the conversation tomorrow.";
  saveProgress();
});
