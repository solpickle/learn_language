// Day 1 starts with a simple introduction, then lets the learner reuse it with
// different people, ages, study/work situations, and destinations.
export const introductionPhrases = [
  {id:"how-are-you", kannada:"ನೀವು ಹೇಗಿದ್ದೀರಿ?", roman:"Nivu hegiddiri?", english:"How are you?", note:"A polite question that works with a new person."},
  {id:"well-thanks", kannada:"ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು. ನೀವು?", roman:"Naanu chennagiddene, dhanyavaadagalu. Nivu?", english:"I am well, thank you. And you?"},
  {id:"fine-thanks", kannada:"ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.", roman:"Naanu chennagiddene, dhanyavaadagalu.", english:"I am well, thank you."},
  {id:"name-question", kannada:"ನಿಮ್ಮ ಹೆಸರು ಏನು?", roman:"Nimma hesaru enu?", english:"What is your name?", note:"Use the polite form with someone you have just met."},
  {id:"name-arjun", kannada:"ನನ್ನ ಹೆಸರು ಅರ್ಜುನ್. ನಿಮ್ಮದು?", roman:"Nanna hesaru Arjun. Nimmadu?", english:"My name is Arjun. And yours?"},
  {id:"name-maya", kannada:"ನನ್ನ ಹೆಸರು ಮಾಯಾ. ನಿಮ್ಮದು?", roman:"Nanna hesaru Maya. Nimmadu?", english:"My name is Maya. And yours?"},
  {id:"live-question", kannada:"ನೀವು ಎಲ್ಲಿ ವಾಸ ಮಾಡುತ್ತೀರಿ?", roman:"Nivu elli vaasa maaduttiri?", english:"Where do you live?"},
  {id:"live-indiranagar", kannada:"ನಾನು ಇಂದಿರಾನಗರದಲ್ಲಿ ವಾಸ ಮಾಡುತ್ತೇನೆ.", roman:"Naanu Indiranagaradalli vaasa maaduttene.", english:"I live in Indiranagar."},
  {id:"work-study-question", kannada:"ನೀವು ಓದುತ್ತೀರಾ ಅಥವಾ ಕೆಲಸ ಮಾಡುತ್ತೀರಾ?", roman:"Nivu oduttira athava kelasa maaduttira?", english:"Do you study or work?"},
  {id:"work-shop", kannada:"ನಾನು ಅಂಗಡಿಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ.", roman:"Naanu angadiyalli kelasa maaduttene.", english:"I work at a shop."},
  {id:"study-school", kannada:"ನಾನು ಶಾಲೆಯಲ್ಲಿ ಓದುತ್ತೇನೆ.", roman:"Naanu shaaleyalli oduttene.", english:"I study at school."},
  {id:"study-college", kannada:"ನಾನು ಕಾಲೇಜಿನಲ್ಲಿ ಓದುತ್ತೇನೆ.", roman:"Naanu kaalejinalli oduttene.", english:"I study at college."},
  {id:"work-office", kannada:"ನಾನು ಆಫೀಸಿನಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತೇನೆ.", roman:"Naanu office-nalli kelasa maaduttene.", english:"I work in an office."},
  {id:"where-going", kannada:"ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?", roman:"Nivu ellige hoguttiddiri?", english:"Where are you going?"},
  {id:"going-market", kannada:"ನಾನು ಮಾರುಕಟ್ಟೆಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.", roman:"Naanu maarukattege hoguttiddene.", english:"I am going to the market."},
  {id:"going-school", kannada:"ನಾನು ಶಾಲೆಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.", roman:"Naanu shaalege hoguttiddene.", english:"I am going to school."},
  {id:"going-college", kannada:"ನಾನು ಕಾಲೇಜಿಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.", roman:"Naanu college-ge hoguttiddene.", english:"I am going to college."},
  {id:"going-office", kannada:"ನಾನು ಆಫೀಸಿಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.", roman:"Naanu office-ge hoguttiddene.", english:"I am going to the office."},
  {id:"going-clinic", kannada:"ನಾನು ಕ್ಲಿನಿಕ್‌ಗೆ ಹೋಗುತ್ತಿದ್ದೇನೆ.", roman:"Naanu clinic-ge hoguttiddene.", english:"I am going to the clinic."},
  {id:"nice-meet", kannada:"ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು.", roman:"Nimmannu bhetiyaagi santoshavaayitu.", english:"Nice to meet you."},
  {id:"nice-meet-too", kannada:"ನನಗೂ ಸಂತೋಷವಾಯಿತು.", roman:"Nanagoo santoshavaayitu.", english:"Nice to meet you too."}
];

export const phrases = [
  {id:"hello", kannada:"ನಮಸ್ಕಾರ", roman:"Namaskaara", english:"Hello", note:"A greeting you can use at any time."},
  {id:"little", kannada:"ನನಗೆ ಸ್ವಲ್ಪ ಕನ್ನಡ ಗೊತ್ತು", roman:"Nanage swalpa Kannada gottu", english:"I know a little Kannada", note:"A useful way to set expectations."},
  {id:"not-know", kannada:"ನನಗೆ ಕನ್ನಡ ಗೊತ್ತಿಲ್ಲ", roman:"Nanage Kannada gottilla", english:"I don't know Kannada", note:"Use ಗೊತ್ತಿಲ್ಲ (gottilla) for ‘do not know’."},
  {id:"slowly", kannada:"ದಯವಿಟ್ಟು ನಿಧಾನವಾಗಿ ಮಾತಾಡಿ", roman:"Dayavittu nidhaanavaagi maataadi", english:"Please speak slowly", note:"A polite request when someone speaks too fast."},
  {id:"again", kannada:"ಮತ್ತೊಮ್ಮೆ ಹೇಳಿ", roman:"Mattomme heli", english:"Please say it again", note:"Ask for one more repeat."},
  {id:"thanks", kannada:"ಧನ್ಯವಾದಗಳು", roman:"Dhanyavaadagalu", english:"Thank you", note:"A polite ending."},
];

const allPhrases = [...phrases, ...introductionPhrases];
const byId = new Map(allPhrases.map(item => [item.id, item]));
const line = (speaker, id) => ({speaker, audioId:id, ...byId.get(id)});

export const dialogue = [
  line("You", "hello"),
  line("Maya", "hello"),
  line("You", "how-are-you"),
  line("Maya", "well-thanks"),
  line("You", "fine-thanks"),
  line("You", "name-question"),
  line("Maya", "name-maya"),
  line("You", "name-arjun"),
  line("Maya", "live-question"),
  line("You", "live-indiranagar"),
  line("Maya", "work-study-question"),
  line("You", "work-shop"),
  line("You", "work-study-question"),
  line("Maya", "work-office"),
  line("Maya", "where-going"),
  line("You", "going-market"),
  line("You", "where-going"),
  line("Maya", "going-office"),
  line("You", "nice-meet"),
  line("Maya", "nice-meet-too")
];

export const strangerPairs = [
  {title:"Boy and girl · 15", people:"Two school students", context:"Both are waiting for the bus to school.", phraseIds:["study-school", "going-school"]},
  {title:"Boy and boy · 20", people:"Two college students", context:"They meet on the way to class.", phraseIds:["study-college", "going-college"]},
  {title:"Girl and girl · 20", people:"Two college students", context:"They are heading to college by bus.", phraseIds:["study-college", "going-college"]},
  {title:"Woman and man · 35", people:"An office worker and a shop worker", context:"One is commuting to work; the other is going to the market.", phraseIds:["work-office", "work-shop", "going-office", "going-market"]},
  {title:"Older man and schoolboy · 70 and 10", people:"A retired older man and a school student", context:"They exchange a greeting at a busy stop; the boy is with his family.", phraseIds:["going-clinic", "going-school"]}
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
  {audioId:"slowly", correct:"Please speak slowly", choices:["Please say it again","Thank you","Please speak slowly"]},
  {audioId:"name-question", correct:"What is your name?", choices:["Where do you live?","What is your name?","How are you?"]},
  {audioId:"live-question", correct:"Where do you live?", choices:["Where are you going?","Where do you live?","Do you study or work?"]},
  {audioId:"work-study-question", correct:"Do you study or work?", choices:["Do you study or work?","What is your name?","How are you?"]},
  {audioId:"where-going", correct:"Where are you going?", choices:["Where are you going?","Where do you live?","Please speak slowly"]}
];

export const audioItems = [
  ...allPhrases,
  {id:"question", kannada:"ನಿಮಗೆ ಕನ್ನಡ ಗೊತ್ತಾ?"},
  {id:"okay", kannada:"ಸರಿ"},
  ...story
];
