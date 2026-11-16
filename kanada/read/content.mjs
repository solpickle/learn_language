// A short reading bridge for words used in the first two lessons.
export const words = [
  {id:"naanu", script:"ನಾನು", roman:"Naanu", meaning:"I", example:"ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ.", exampleRoman:"Naanu Kannada kaliyuttiddene.", note:"Look for ನಾ at the start."},
  {id:"nanage", script:"ನನಗೆ", roman:"Nanage", meaning:"to me / for me", example:"ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಗೊತ್ತು.", exampleRoman:"Nanage swalpa Kannada gottu.", note:"Look for ಗೆ at the end."},
  {id:"sari", script:"ಸರಿ", roman:"Sari", meaning:"Okay", example:"ಸರಿ.", exampleRoman:"Sari.", note:"A short, useful answer."},
  {id:"kannada", script:"ಕನ್ನಡ", roman:"Kannada", meaning:"Kannada (language)", example:"ನನಗೆ ಕನ್ನಡ ಗೊತ್ತು.", exampleRoman:"Nanage Kannada gottu.", note:"The middle letters join; recognize the whole word first."},
  {id:"swalpa", script:"ಸ್ವಲ್ಪ", roman:"Swalpa", meaning:"a little", example:"ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಗೊತ್ತು.", exampleRoman:"Nanage swalpa Kannada gottu.", note:"The joined letters make this one easier to learn by sight."},
  {id:"gottu", script:"ಗೊತ್ತು", roman:"Gottu", meaning:"known / familiar", example:"ನನಗೆ ಕನ್ನಡ ಗೊತ್ತು.", exampleRoman:"Nanage Kannada gottu.", note:"Compare it with ಗೊತ್ತಿಲ್ಲ below."},
  {id:"gottilla", script:"ಗೊತ್ತಿಲ್ಲ", roman:"Gottilla", meaning:"not known", example:"ನನಗೆ ಕನ್ನಡ ಗೊತ್ತಿಲ್ಲ.", exampleRoman:"Nanage Kannada gottilla.", note:"The longer form changes the meaning to ‘do not know’."},
  {id:"namaskaara", script:"ನಮಸ್ಕಾರ", roman:"Namaskaara", meaning:"Hello", example:"ನಮಸ್ಕಾರ.", exampleRoman:"Namaskaara.", note:"Start by recognizing the whole greeting."},
  {id:"dayavittu", script:"ದಯವಿಟ್ಟು", roman:"Dayavittu", meaning:"Please", example:"ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತಾಡಿ.", exampleRoman:"Dayavittu nidhaanavaagi maataadi.", note:"A polite word at the start of a request."},
  {id:"maataadi", script:"ಮಾತಾಡಿ", roman:"Maataadi", meaning:"Speak (polite request)", example:"ನಿಧಾನವಾಗಿ ಮಾತಾಡಿ.", exampleRoman:"Nidhaanavaagi maataadi.", note:"Look for ಮಾ at the start."},
  {id:"neeru", day:2, script:"ನೀರು", roman:"Neeru", meaning:"Water", example:"ನನಗೆ ನೀರು ಬೇಕು.", exampleRoman:"Nanage neeru beku.", note:"The item in Day 2's first request."},
  {id:"beku", day:2, script:"ಬೇಕು", roman:"Beku", meaning:"Want / need", example:"ನನಗೆ ನೀರು ಬೇಕು.", exampleRoman:"Nanage neeru beku.", note:"Compare this with ಬೇಡ below."},
  {id:"beda", day:2, script:"ಬೇಡ", roman:"Beda", meaning:"Don't want / need", example:"ನನಗೆ ಚಹಾ ಬೇಡ.", exampleRoman:"Nanage chahaa beda.", note:"Use it to decline an item."},
  {id:"chahaa", day:2, script:"ಚಹಾ", roman:"Chahaa", meaning:"Tea", example:"ನನಗೆ ಚಹಾ ಬೇಕು.", exampleRoman:"Nanage chahaa beku.", note:"Another item in the same pattern."},
  {id:"kaafi", day:2, script:"ಕಾಫಿ", roman:"Kaafi", meaning:"Coffee", example:"ನನಗೆ ಕಾಫಿ ಬೇಕು.", exampleRoman:"Nanage kaafi beku.", note:"Try swapping it with ನೀರು or ಚಹಾ."}
];

export const forms = [
  {base:"ನ", baseSound:"na", variants:[{script:"ನಾ",sound:"naa", cue:"ನಾನು"},{script:"ನು",sound:"nu",cue:"ನಾನು"}], explanation:"The added marks change the vowel you read with ನ."},
  {base:"ಗ", baseSound:"ga", variants:[{script:"ಗೆ",sound:"ge",cue:"ನನಗೆ"}], explanation:"The vowel mark in ಗೆ gives it a different sound from ಗ."},
  {base:"ಮ", baseSound:"ma", variants:[{script:"ಮಾ",sound:"maa",cue:"ಮಾತಾಡಿ"}], explanation:"The mark in ಮಾ makes the vowel longer."}
];

export const questions = [
  {wordId:"naanu", ask:"Which reading matches this word?", choices:["Naanu","Nanage","Sari"], correct:"Naanu"},
  {wordId:"nanage", ask:"Which reading matches this word?", choices:["Namaskaara","Nanage","Gottu"], correct:"Nanage"},
  {wordId:"sari", ask:"What does this word mean?", choices:["Please","I","Okay"], correct:"Okay"},
  {wordId:"gottilla", ask:"What does this word mean?", choices:["not known","a little","Hello"], correct:"not known"},
  {wordId:"neeru", ask:"Which reading matches this word?", choices:["Beku","Neeru","Chahaa"], correct:"Neeru"},
  {wordId:"beda", ask:"What does this word mean?", choices:["Want / need","Don't want / need","Water"], correct:"Don't want / need"}
];

export const phrases = words.map(({id, script}) => ({id, kannada:script}));
