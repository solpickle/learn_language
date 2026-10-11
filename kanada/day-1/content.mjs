// Day 1 content is kept apart from the page so later lessons can use the same pattern.
export const phrases = [
  {id:"hello", kannada:"ನಮಸ್ಕಾರ", roman:"Namaskaara", english:"Hello", note:"A greeting you can use at any time."},
  {id:"little", kannada:"ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಗೊತ್ತು", roman:"Nanage swalpa Kannada gottu", english:"I know a little Kannada", note:"A useful way to set expectations."},
  {id:"not-know", kannada:"ನನಗೆ ಕನ್ನಡ ಗೊತ್ತಿಲ್ಲ", roman:"Nanage Kannada gottilla", english:"I don't know Kannada", note:"Use ಗೊತ್ತಿಲ್ಲ (gottilla) for ‘do not know’."},
  {id:"slowly", kannada:"ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತಾಡಿ", roman:"Dayavittu nidhaanavaagi maataadi", english:"Please speak slowly", note:"A polite request when someone speaks too fast."},
  {id:"again", kannada:"ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ", roman:"Mattomme heli", english:"Please say it again", note:"Ask for one more repeat."},
  {id:"thanks", kannada:"ಧನ್ಯವಾದಗಳು", roman:"Dhanyavaadagalu", english:"Thank you", note:"A polite ending."}
];

export const dialogue = [
  {speaker:"You", audioId:"hello", ...phrases[0]},
  {speaker:"Neighbor", id:"question", audioId:"question", kannada:"ನಿಮಗೆ ಕನ್ನಡ ಗೊತ್ತಾ?", roman:"Nimage Kannada gottaa?", english:"Do you know Kannada?"},
  {speaker:"You", audioId:"little", ...phrases[1]},
  {speaker:"You", audioId:"slowly", ...phrases[3]},
  {speaker:"Neighbor", id:"okay", audioId:"okay", kannada:"ಸರಿ", roman:"Sari", english:"Okay"}
];

export const story = [
  {id:"story-1", kannada:"ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ.", roman:"Naanu Kannada kaliyuttiddene.", english:"I am learning Kannada."},
  {id:"story-2", kannada:"ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಗೊತ್ತು.", roman:"Nanage swalpa Kannada gottu.", english:"I know a little Kannada."},
  {id:"story-3", kannada:"ನಾನು ನಮಸ್ಕಾರ ಎಂದು ಹೇಳುತ್ತೇನೆ.", roman:"Naanu namaskaara endu heluttene.", english:"I say hello."},
  {id:"story-4", kannada:"ಕೆಲವು ಪದಗಳು ನನಗೆ ಗೊತ್ತಿಲ್ಲ.", roman:"Kelavu padagalu nanage gottilla.", english:"I don't know some words."},
  {id:"story-5", kannada:"ನಾನು ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ ಎಂದು ಕೇಳುತ್ತೇನೆ.", roman:"Naanu mattomme heli endu keluttene.", english:"I ask, ‘Please say it again.’"}
];

export const questions = [
  {audioId:"little", correct:"I know a little Kannada", choices:["I know a little Kannada","I don't know Kannada","Please speak slowly"]},
  {audioId:"again", correct:"Please say it again", choices:["Thank you","Please say it again","Hello"]},
  {audioId:"not-know", correct:"I don't know Kannada", choices:["I know a little Kannada","I don't know Kannada","Okay"]},
  {audioId:"slowly", correct:"Please speak slowly", choices:["Please say it again","Thank you","Please speak slowly"]}
];

export const audioItems = [
  ...phrases,
  {id:"question", kannada:"ನಿಮಗೆ ಕನ್ನಡ ಗೊತ್ತಾ?"},
  {id:"okay", kannada:"ಸರಿ"},
  ...story
];
