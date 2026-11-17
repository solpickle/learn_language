// Day 3: ask the price and say how much you want.
export const phrases = [
  {id:"eshtu", kannada:"ಎಷ್ಟು?", roman:"Eshtu?", english:"How much? / How many?", note:"A useful question word for price or quantity."},
  {id:"idara", kannada:"ಇದರ", roman:"Idara", english:"Of this / its", note:"Use this to ask about the price of something."},
  {id:"bele", kannada:"ಬೆಲೆ", roman:"Bele", english:"Price", note:"The word for price."},
  {id:"keji", kannada:"ಕೆಜಿ", roman:"Keji", english:"Kilo / kilogram", note:"A common spoken way to say kilogram."},
  {id:"ondu", kannada:"ಒಂದು", roman:"Ondu", english:"One", note:"One kilo: ಒಂದು ಕೆಜಿ (ondu keji)."},
  {id:"ardha", kannada:"ಅರ್ಧ", roman:"Ardha", english:"Half", note:"Half a kilo: ಅರ್ಧ ಕೆಜಿ (ardha keji)."},
  {id:"kodi", kannada:"ಕೊಡಿ", roman:"Kodi", english:"Please give", note:"A polite, useful request ending."},
  {id:"tomato", kannada:"ಟೊಮೇಟೊ", roman:"Tomato", english:"Tomato", note:"A familiar item to swap into the request."},
  {id:"brinjal", kannada:"ಬದನೆಕಾಯಿ", roman:"Badanekaayi", english:"Eggplant / brinjal", note:"A common vegetable in the market example."},
  {id:"nalavattu", kannada:"ನಲವತ್ತು", roman:"Nalavattu", english:"Forty", note:"A sample number in the market price answer."},
  {id:"roopaayi", kannada:"ರೂಪಾಯಿ", roman:"Roopaayi", english:"Rupee / rupees", note:"Money word used with the sample price."},
  {id:"price-question", kannada:"ಇದರ ಬೆಲೆ ಎಷ್ಟು?", roman:"Idara bele eshtu?", english:"How much is this?", note:"ಇದರ = of this · ಬೆಲೆ = price · ಎಷ್ಟು = how much."},
  {id:"half-tomato", kannada:"ಅರ್ಧ ಕೆಜಿ ಟೊಮೇಟೊ ಕೊಡಿ.", roman:"Ardha keji tomato kodi.", english:"Half a kilo of tomatoes, please.", note:"Change ಅರ್ಧ (half) to ಒಂದು (one) to ask for a full kilo."},
  {id:"one-tomato", kannada:"ಒಂದು ಕೆಜಿ ಟೊಮೇಟೊ ಕೊಡಿ.", roman:"Ondu keji tomato kodi.", english:"One kilo of tomatoes, please.", note:"ಒಂದು (one) + ಕೆಜಿ (kilo) + item + ಕೊಡಿ (please give)."},
  {id:"brinjal-price", kannada:"ಒಂದು ಕೆಜಿ ಬದನೆಕಾಯಿಗೆ ಎಷ್ಟು ಬೆಲೆ?", roman:"Ondu keji badanekaayige eshtu bele?", english:"What is the price of one kilo of eggplant?", note:"A market question from the Karnataka government's beginner lesson."},
  {id:"price-answer", kannada:"ಕೆಜಿಗೆ ನಲವತ್ತು ರೂಪಾಯಿ.", roman:"Kejige nalavattu roopaayi.", english:"Forty rupees per kilo.", note:"A sample answer for practice; market prices vary."}
];

const phrase = id => phrases.find(item => item.id === id);

export const dialogue = [
  {speaker:"Shopkeeper", id:"what-want", audioId:"what-want", kannada:"ನಿಮಗೆ ಏನು ಬೇಕು?", roman:"Nimage enu beku?", english:"What would you like?"},
  {speaker:"You", audioId:"half-tomato", ...phrase("half-tomato")},
  {speaker:"You", audioId:"price-question", ...phrase("price-question")},
  {speaker:"Shopkeeper", audioId:"price-answer", ...phrase("price-answer")},
  {speaker:"You", id:"half-kilo-please", audioId:"half-kilo-please", kannada:"ಅರ್ಧ ಕೆಜಿ ಕೊಡಿ.", roman:"Ardha keji kodi.", english:"Half a kilo, please."}
];

export const story = [
  {...phrase("price-question")},
  {...phrase("price-answer")},
  {...phrase("half-tomato")},
  {id:"sari", kannada:"ಸರಿ.", roman:"Sari.", english:"Okay."},
  {id:"thanks", kannada:"ಧನ್ಯವಾದಗಳು.", roman:"Dhanyavaadagalu.", english:"Thank you."}
];
export const questions = [
  {audioId:"price-question", correct:"How much is this?", choices:["How much is this?","What would you like?","One kilo, please."]},
  {audioId:"half-tomato", correct:"Half a kilo of tomatoes, please.", choices:["One kilo of tomatoes, please.","Half a kilo of tomatoes, please.","How much is this?"]},
  {audioId:"brinjal-price", correct:"What is the price of one kilo of eggplant?", choices:["What is the price of one kilo of eggplant?","Half a kilo of tomatoes, please.","Forty rupees per kilo."]},
  {audioId:"price-answer", correct:"Forty rupees per kilo.", choices:["How much is this?","Forty rupees per kilo.","One kilo of tomatoes, please."]}
];

export const audioItems = [
  ...phrases,
  {id:"what-want", kannada:"ನಿಮಗೆ ಏನು ಬೇಕು?"},
  {id:"half-kilo-please", kannada:"ಅರ್ಧ ಕೆಜಿ ಕೊಡಿ."},
  {id:"sari", kannada:"ಸರಿ."},
  {id:"thanks", kannada:"ಧನ್ಯವಾದಗಳು."}
];
