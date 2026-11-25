// Day 5 reviews familiar phrases from Days 1–4. Keep audio in its original lesson folder.
import * as day1 from "../day-1/content.mjs";
import * as day2 from "../day-2/content.mjs";
import * as day3 from "../day-3/content.mjs";
import * as day4 from "../day-4/content.mjs";

const lessons = {1:day1, 2:day2, 3:day3, 4:day4};
const saved = (day, id) => {
  const source = [...lessons[day].phrases, ...lessons[day].dialogue, ...lessons[day].story]
    .find(item => item.id === id || item.audioId === id);
  if (!source) throw new Error(`Missing Day ${day} review phrase: ${id}`);
  const {speaker, ...phrase} = source;
  return {...phrase, audioUrl:`../day-${day}/audio/${id}.mp3`};
};

export const phrases = [
  saved(1,"hello"),
  saved(1,"little"),
  saved(2,"water-want"),
  saved(2,"tea-no"),
  saved(3,"price-question"),
  saved(3,"half-tomato"),
  saved(4,"shop-where"),
  saved(4,"ahead-is"),
  saved(4,"stop-here")
];

export const dialogue = [
  {speaker:"You", ...saved(4,"shop-where")},
  {speaker:"Local", ...saved(4,"ahead-is")},
  {speaker:"You", ...saved(1,"hello")},
  {speaker:"Shopkeeper", ...saved(2,"what-want")},
  {speaker:"You", ...saved(3,"half-tomato")},
  {speaker:"You", ...saved(3,"price-question")},
  {speaker:"Shopkeeper", ...saved(3,"price-answer")},
  {speaker:"You", ...saved(1,"thanks")}
];

export const story = [
  {...saved(1,"hello")},
  {...saved(4,"shop-where")},
  {...saved(4,"ahead-is")},
  {...saved(3,"half-tomato")},
  {...saved(1,"thanks")}
];

export const questions = [
  {audioId:"little", audioUrl:"../day-1/audio/little.mp3", correct:"I know a little Kannada", choices:["I know a little Kannada","I don't know Kannada","Please speak slowly"]},
  {audioId:"water-want", audioUrl:"../day-2/audio/water-want.mp3", correct:"I want water", choices:["I want water","I don't want water","I want tea"]},
  {audioId:"price-question", audioUrl:"../day-3/audio/price-question.mp3", correct:"How much is this?", choices:["How much is this?","What would you like?","Half a kilo, please"]},
  {audioId:"shop-where", audioUrl:"../day-4/audio/shop-where.mp3", correct:"Where is the shop?", choices:["Where is the shop?","It is ahead","Please stop here"]},
  {audioId:"ahead-is", audioUrl:"../day-4/audio/ahead-is.mp3", correct:"It is ahead", choices:["Turn left","It is ahead","Where is the shop?"]},
  {audioId:"stop-here", audioUrl:"../day-4/audio/stop-here.mp3", correct:"Please stop here", choices:["Please stop here","Thank you","I want water"]}
];
