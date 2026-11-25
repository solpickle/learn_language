// Day 5 is a set of short, practical role-plays across everyday Bengaluru situations.
import * as day1 from "../day-1/content.mjs";
import * as day2 from "../day-2/content.mjs";
import * as day3 from "../day-3/content.mjs";
import * as day4 from "../day-4/content.mjs";
import {phrases as generated} from "./phrases.mjs";

const lessons = {1:day1, 2:day2, 3:day3, 4:day4};
const generatedById = new Map(generated.map(item => [item.id, item]));
const own = id => {
  const item = generatedById.get(id);
  if (!item) throw new Error(`Missing Day 5 phrase: ${id}`);
  return {...item, audioUrl:`./audio/${id}.mp3`};
};
const saved = (day, id) => {
  const item = [...lessons[day].phrases, ...lessons[day].dialogue, ...lessons[day].story]
    .find(candidate => candidate.id === id || candidate.audioId === id);
  if (!item) throw new Error(`Missing Day ${day} review phrase: ${id}`);
  const {speaker, ...phrase} = item;
  return {...phrase, audioUrl:`../day-${day}/audio/${id}.mp3`};
};
const line = (speaker, item) => ({speaker, ...item});

export const scenarios = [
  {
    id:"dmart", title:"At DMart", context:"Find milk, ask for a litre, and answer the cashier's bag question.", lines:[
      line("You", own("milk-where")), line("Staff", own("milk-over-there")),
      line("You", own("litre-milk")), line("Cashier", own("bag-question")), line("You", own("no-bag"))
    ]
  },
  {
    id:"vegetable-shop", title:"At a vegetable shop", context:"Reuse the Day 3 price and quantity phrases to buy tomatoes.", lines:[
      line("You", saved(1,"hello")), line("Shopkeeper", saved(2,"what-want")), line("You", saved(3,"half-tomato")),
      line("You", saved(3,"price-question")), line("Shopkeeper", saved(3,"price-answer")), line("You", saved(1,"thanks"))
    ]
  },
  {
    id:"sweet-shop", title:"At a sweet shop", context:"Ask for Mysore pak, request a quantity, and hear a sample price.", lines:[
      line("You", own("mysorepak-have")), line("Seller", own("mysorepak-yes")), line("You", own("half-mysorepak")),
      line("You", saved(3,"price-question")), line("Seller", own("sweet-price-answer")), line("You", saved(1,"thanks"))
    ]
  },
  {
    id:"scooter-puncture", title:"At a scooter puncture shop", context:"Explain the puncture, ask whether it can be repaired, and ask the time and cost.", lines:[
      line("You", own("puncture-problem")), line("You", own("puncture-can-fix")), line("Mechanic", own("repair-yes")),
      line("You", own("puncture-how-long")), line("Mechanic", own("half-hour")), line("You", own("puncture-cost")), line("Mechanic", own("fifty-rupees"))
    ]
  },
  {
    id:"auto-ride", title:"With an auto driver", context:"Say where you need to go, make a polite meter request, and ask to stop.", lines:[
      line("You", saved(4,"indiranagar-go")), line("You", own("meter-please")), line("Driver", saved(4,"sari")),
      line("You", saved(4,"stop-here")), line("You", saved(4,"thanks"))
    ]
  },
  {
    id:"bus-conductor", title:"With a bus conductor", context:"Check the route, ask for a ticket, and ask to be told when your stop comes.", lines:[
      line("You", own("bus-destination")), line("Conductor", saved(4,"sari")), line("You", saved(4,"mg-road-ticket")),
      line("You", own("stop-arrival")), line("Conductor", saved(4,"sari"))
    ]
  },
  {
    id:"traffic-stop", title:"Stopped by traffic police", context:"Choose one opening question: a signal crossing or a missing helmet. Then practise a calm, respectful exchange; no fine amount is assumed.", lines:[
      line("Officer · signal", own("signal-question")), line("Officer · helmet", own("helmet-question")), line("Officer", own("show-license")),
      line("You", own("sorry-mistake")), line("You", own("challan-amount")), line("You", own("challan-how-pay"))
    ]
  },
  {
    id:"udupi-restaurant", title:"At an Udupi restaurant", context:"Order idli, then choose whether you want sambar separate or poured over it.", lines:[
      line("You", own("idli-order")), line("Server", own("sambar-choice")), line("You · separate", own("sambar-separate")),
      line("You · mixed", own("sambar-mixed")), line("You", own("bill-please"))
    ]
  },
  {
    id:"temple-flowers", title:"Buying flowers near a temple", context:"Ask for a garland for the temple, check its price, and buy one.", lines:[
      line("You", own("temple-garland")), line("You", own("garland-price")), line("Seller", own("fifty-rupees")),
      line("You", own("one-garland")), line("You", saved(1,"thanks"))
    ]
  },
  {
    id:"household-help", title:"Checking in with your house helper", context:"Ask kindly why they could not come yesterday, check that all is well, and agree on letting you know next time.", lines:[
      line("You", own("maid-yesterday")), line("You", own("maid-well")), line("Helper", own("maid-couldnt-come")),
      line("You", own("maid-tell-ahead")), line("Helper", own("maid-will-tell"))
    ]
  },
  {
    id:"public-help-desk", title:"Asking for PAN–Aadhaar help", context:"Ask where to link PAN and Aadhaar. This exchange is at a public help desk; the official service is on the Income Tax e-Filing portal, not a municipal service.", lines:[
      line("You", own("pan-aadhaar-link")), line("You", own("where-do-link")), line("Staff", own("not-done-here")),
      line("Staff", own("efile-portal")), line("You", own("help-me-please"))
    ]
  }
];

const reused = [saved(1,"hello"), saved(1,"thanks"), saved(2,"what-want"), saved(3,"price-question"),
  saved(3,"half-tomato"), saved(3,"price-answer"), saved(4,"indiranagar-go"), saved(4,"sari"),
  saved(4,"stop-here"), saved(4,"mg-road-ticket")];
export const phrases = [...generated.map(item => ({...item, audioUrl:`./audio/${item.id}.mp3`})), ...reused];

const question = (audioId, choices) => ({audioId, ...own(audioId), correct:generatedById.get(audioId).english, choices});
export const questions = [
  question("milk-where", ["Where can I find milk?", "One litre of milk, please.", "Would you like a bag?"]),
  question("puncture-how-long", ["How much for the repair?", "How long will it take?", "My scooter tyre has a puncture."]),
  question("bus-destination", ["Does this bus go to MG Road?", "Please use the meter.", "Please tell me when my stop comes."]),
  question("signal-question", ["How much is the challan?", "Please show your licence.", "Did you cross the signal?"]),
  question("sambar-choice", ["The bill, please.", "Would you like the sambar separate?", "Two idlis, please."]),
  question("garland-price", ["I need a flower garland for the temple.", "One garland, please.", "How much is this flower garland?"]),
  question("maid-yesterday", ["Why did you not come yesterday?", "If you cannot come, let me know in advance.", "Is everything okay?"]),
  question("where-do-link", ["Where can I do this?", "Please do it on the Income Tax e-Filing website.", "Could you please help me?"])
];
