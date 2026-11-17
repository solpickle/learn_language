import {numbers, groups, kannadaDigits} from "./content.mjs";
import {createRecordedController} from "../recorded.mjs";

const $ = id => document.getElementById(id);
const player = createRecordedController(() => new Audio(), event => { $("status").textContent = event.message; });
const groupTargets = {basics:"list-basics", tens:"list-tens", pattern:"list-pattern", hundreds:"list-hundreds"};

function element(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}
function renderNumber(item) {
  const row = element("article", "number-row");
  row.id = `number-${item.value}`;
  const figures = element("div", "number-figures");
  figures.append(element("strong", "arabic-digit", String(item.value)), element("span", "kannada-digit", kannadaDigits(item.value)));
  const word = element("div", "number-word");
  word.append(element("strong", "kannada-word", item.kannada), element("span", "romanized", item.roman), element("small", "meaning", item.english));
  const button = element("button", "number-play", "▶ Listen");
  button.type = "button";
  button.setAttribute("aria-label", `Play ${item.english}: ${item.roman}`);
  button.addEventListener("click", () => player.play(new URL(`./audio/${item.id}.mp3`, import.meta.url).href, Number($("rate").value), item.id));
  row.append(figures, word, button);
  return row;
}

for (const group of groups) {
  const heading = $(groupTargets[group.id]);
  for (const item of numbers.filter(number => number.group === group.id)) heading.append(renderNumber(item));
}
$("stop").addEventListener("click", () => player.stop());
