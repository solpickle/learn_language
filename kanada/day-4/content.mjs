// Day 4: ask where a place is and follow simple directions.
export const phrases = [
  {id:"elli", kannada:"ಎಲ್ಲಿ?", roman:"Elli?", english:"Where?", note:"The key question word for finding a place."},
  {id:"illi", kannada:"ಇಲ್ಲಿ", roman:"Illi", english:"Here", note:"Use it for a place near you."},
  {id:"alli", kannada:"ಅಲ್ಲಿ", roman:"Alli", english:"There", note:"Use it for a place away from you."},
  {id:"munde", kannada:"ಮುಂದೆ", roman:"Munde", english:"Ahead / in front", note:"A place word; combine it with hogi (go) for “go ahead.”"},
  {id:"edakke", kannada:"ಎಡಕ್ಕೆ", roman:"Edakke", english:"To the left", note:"A direction word; edakke tirugi means “turn left.”"},
  {id:"balakke", kannada:"ಬಲಕ್ಕೆ", roman:"Balakke", english:"To the right", note:"A direction word; balakke tirugi means “turn right.”"},
  {id:"neravaagi", kannada:"ನೇರವಾಗಿ", roman:"Neravaagi", english:"Straight", note:"Use with hogi: neravaagi hogi, “go straight.”"},
  {id:"bus-stop-where", kannada:"ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?", roman:"Bus nildana ellide?", english:"Where is the bus stop?", note:"Place + ellide? is a useful “Where is …?” question."},
  {id:"go-ahead", kannada:"ಮುಂದೆ ಹೋಗಿ.", roman:"Munde hogi.", english:"Go ahead, please.", note:"A common short direction."},
  {id:"straight", kannada:"ನೇರವಾಗಿ ಹೋಗಿ.", roman:"Neravaagi hogi.", english:"Go straight, please.", note:"Neravaagi (straight) + hogi (go)."},
  {id:"turn-left", kannada:"ಎಡಕ್ಕೆ ತಿರುಗಿ.", roman:"Edakke tirugi.", english:"Turn left, please.", note:"Edakke (to the left) + tirugi (turn)."},
  {id:"turn-right", kannada:"ಬಲಕ್ಕೆ ತಿರುಗಿ.", roman:"Balakke tirugi.", english:"Turn right, please.", note:"Balakke (to the right) + tirugi (turn)."},
  {id:"shop-where", kannada:"ಅಂಗಡಿ ಎಲ್ಲಿದೆ?", roman:"Angadi ellide?", english:"Where is the shop?", note:"Swap bus nildana for angadi (shop) in the same question pattern."},
  {id:"ahead-is", kannada:"ಮುಂದೆ ಇದೆ.", roman:"Munde ide.", english:"It is ahead.", note:"A short answer to a where question."},
  {id:"shop-there", kannada:"ಅಂಗಡಿ ಅಲ್ಲಿದೆ.", roman:"Angadi allide.", english:"The shop is there.", note:"Alli (there) + ide (is)."},
  {id:"stop-here", kannada:"ಇಲ್ಲಿ ನಿಲ್ಲಿಸಿ.", roman:"Illi nillisi.", english:"Please stop here.", note:"A useful polite request to a driver."},
  {id:"thanks", kannada:"ಧನ್ಯವಾದಗಳು.", roman:"Dhanyavaadagalu.", english:"Thank you.", note:"A polite way to finish the exchange."}
];
const phrase = id => phrases.find(item => item.id === id);
export const dialogue = [
  {speaker:"You", ...phrase("bus-stop-where"), audioId:"bus-stop-where"},
  {speaker:"Local", ...phrase("go-ahead"), audioId:"go-ahead"},
  {speaker:"Local", ...phrase("turn-right"), audioId:"turn-right"},
  {speaker:"You", ...phrase("thanks"), audioId:"thanks"},
  {speaker:"To driver", ...phrase("stop-here"), audioId:"stop-here"}
];
export const story = [
  {...phrase("shop-where")},
  {...phrase("ahead-is")},
  {...phrase("turn-right")},
  {...phrase("shop-there")},
  {...phrase("thanks")}
];
export const questions = [
  {audioId:"bus-stop-where", correct:"Where is the bus stop?", choices:["Where is the bus stop?","Go straight, please.","Please stop here."]},
  {audioId:"turn-left", correct:"Turn left, please.", choices:["Turn right, please.","Turn left, please.","It is ahead."]},
  {audioId:"shop-there", correct:"The shop is there.", choices:["The shop is there.","Where is the shop?","Go ahead, please."]},
  {audioId:"stop-here", correct:"Please stop here.", choices:["Please stop here.","Thank you.","Go straight, please."]}
];
export const audioItems = [...phrases, {id:"bus-nildana", kannada:"ಬಸ್ ನಿಲ್ದಾಣ"}, {id:"nillisi", kannada:"ನಿಲ್ಲಿಸಿ"}];