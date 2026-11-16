// Day 2: make a request or decline it by changing one word.
export const phrases = [
  {id:"neeru", kannada:"ನೀರು", roman:"Neeru", english:"Water", note:"The thing you want or do not want."},
  {id:"beku", kannada:"ಬೇಕು", roman:"Beku", english:"Want / need", note:"Put this after the item you want."},
  {id:"beda", kannada:"ಬೇಡ", roman:"Beda", english:"Don't want / need", note:"Use this instead of ಬೇಕು to decline an item."},
  {id:"water-want", kannada:"ನನಗೆ ನೀರು ಬೇಕು", roman:"Nanage neeru beku", english:"I want water", note:"ನನಗೆ = to me · ನೀರು = water · ಬೇಕು = wanted."},
  {id:"tea-want", kannada:"ನನಗೆ ಚಹಾ ಬೇಕು", roman:"Nanage chahaa beku", english:"I want tea", note:"Swap ನೀರು for ಚಹಾ (tea)."},
  {id:"tea-no", kannada:"ನನಗೆ ಚಹಾ ಬೇಡ", roman:"Nanage chahaa beda", english:"I don't want tea", note:"Keep the item; change ಬೇಕು to ಬೇಡ."},
  {id:"coffee-want", kannada:"ನನಗೆ ಕಾಫಿ ಬೇಕು", roman:"Nanage kaafi beku", english:"I want coffee", note:"Another item in the same pattern."},
  {id:"little-water", kannada:"ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಬೇಕು", roman:"Nanage swalpa neeru beku", english:"I want a little water", note:"Reuse ಸ್ವಲ್ಪ (a little) from Day 1."}
];

export const dialogue = [
  {speaker:"Server", id:"what-want", audioId:"what-want", kannada:"ನಿಮಗೆ ಏನು ಬೇಕು?", roman:"Nimage enu beku?", english:"What would you like?"},
  {speaker:"You", audioId:"water-want", ...phrases[3]},
  {speaker:"Server", id:"tea-question", audioId:"tea-question", kannada:"ನಿಮಗೆ ಚಹಾ ಬೇಕಾ?", roman:"Nimage chahaa bekaa?", english:"Would you like tea?"},
  {speaker:"You", audioId:"tea-no", ...phrases[5]},
  {speaker:"You", audioId:"little-water", ...phrases[7]}
];

export const story = [
  {id:"story-1", kannada:"ನಿಮಗೆ ಏನು ಬೇಕು?", roman:"Nimage enu beku?", english:"What would you like?"},
  {id:"story-2", kannada:"ನನಗೆ ಚಹಾ ಬೇಡ.", roman:"Nanage chahaa beda.", english:"I don't want tea."},
  {id:"story-3", kannada:"ನನಗೆ ಸ್ವಲ್ಪ ನೀರು ಬೇಕು.", roman:"Nanage swalpa neeru beku.", english:"I want a little water."},
  {id:"story-4", kannada:"ಸರಿ.", roman:"Sari.", english:"Okay."},
  {id:"story-5", kannada:"ಧನ್ಯವಾದಗಳು.", roman:"Dhanyavaadagalu.", english:"Thank you."}
];

export const questions = [
  {audioId:"water-want", correct:"I want water", choices:["I want water","I don't want water","I want tea"]},
  {audioId:"tea-no", correct:"I don't want tea", choices:["I want tea","I don't want tea","I want coffee"]},
  {audioId:"coffee-want", correct:"I want coffee", choices:["I don't want coffee","I want water","I want coffee"]},
  {audioId:"little-water", correct:"I want a little water", choices:["I want a little water","I don't want water","I want tea"]}
];

export const audioItems = [
  ...phrases,
  {id:"what-want", kannada:"ನಿಮಗೆ ಏನು ಬೇಕು?"},
  {id:"tea-question", kannada:"ನಿಮಗೆ ಚಹಾ ಬೇಕಾ?"},
  ...story
];
