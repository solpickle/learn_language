import { createRecordedController } from "./recorded.mjs";
import { phrases } from "./phrases.mjs";

const rateSelect = document.querySelector("#rate");
const stopButton = document.querySelector("#stop");
const playbackStatus = document.querySelector("#playback-status");
function report(event) {
  playbackStatus.textContent = event.message;
  const playing = event.state === "playing";
  stopButton.hidden = !playing;
  stopButton.disabled = !playing;
  document.querySelectorAll(".phrase").forEach(card => {
    card.classList.toggle("playing", playing && card.dataset.id === event.id);
  });
}
const recordings = createRecordedController(() => new Audio(), report);
const phraseList = document.querySelector("#phrases");
phrases.forEach((phrase, index) => {
  const card = document.createElement("article");
  card.className = "phrase";
  card.dataset.id = phrase.id;
  // Content is authored locally; use textContent so future data stays inert.
  const number = document.createElement("span");
  number.className = "number";
  number.textContent = String(index + 1).padStart(2, "0");
  const copy = document.createElement("div");
  const kannada = document.createElement("h3");
  kannada.lang = "kn";
  kannada.textContent = phrase.kannada;
  const roman = document.createElement("p");
  roman.className = "romanized";
  roman.textContent = phrase.romanized;
  const english = document.createElement("p");
  english.className = "meaning";
  english.textContent = phrase.english;
  const context = document.createElement("p");
  context.className = "hint";
  context.textContent = phrase.context;
  copy.append(kannada, roman, english, context);
  const play = document.createElement("button");
  play.className = "play";
  play.textContent = "▶ Listen";
  play.setAttribute("aria-label", "Listen: " + phrase.english);
  play.addEventListener("click", () => {
    recordings.play(new URL("./audio/" + phrase.id + ".mp3", import.meta.url).href, Number(rateSelect.value), phrase.id);
  });
  card.append(number, copy, play);
  phraseList.append(card);
});
rateSelect.addEventListener("change", () => {
  recordings.stop(false);
  report({state:"idle",message:"Speed changed. Tap Listen to hear it."});
});
stopButton.addEventListener("click", () => recordings.stop());
window.addEventListener("pagehide", () => recordings.stop(false));
