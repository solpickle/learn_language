const entries = [
  {id:"n0", value:0, kannada:"ಸೊನ್ನೆ", roman:"Sonne", english:"Zero", group:"basics"},
  {id:"n1", value:1, kannada:"ಒಂದು", roman:"Ondu", english:"One", group:"basics"},
  {id:"n2", value:2, kannada:"ಎರಡು", roman:"Eradu", english:"Two", group:"basics"},
  {id:"n3", value:3, kannada:"ಮೂರು", roman:"Mooru", english:"Three", group:"basics"},
  {id:"n4", value:4, kannada:"ನಾಲ್ಕು", roman:"Naalku", english:"Four", group:"basics"},
  {id:"n5", value:5, kannada:"ಐದು", roman:"Aidu", english:"Five", group:"basics"},
  {id:"n6", value:6, kannada:"ಆರು", roman:"Aaru", english:"Six", group:"basics"},
  {id:"n7", value:7, kannada:"ಏಳು", roman:"Elu", english:"Seven", group:"basics"},
  {id:"n8", value:8, kannada:"ಎಂಟು", roman:"Entu", english:"Eight", group:"basics"},
  {id:"n9", value:9, kannada:"ಒಂಬತ್ತು", roman:"Ombattu", english:"Nine", group:"basics"},
  {id:"n10", value:10, kannada:"ಹತ್ತು", roman:"Hattu", english:"Ten", group:"basics"},
  {id:"n11", value:11, kannada:"ಹನ್ನೊಂದು", roman:"Hannondu", english:"Eleven", group:"basics"},
  {id:"n12", value:12, kannada:"ಹನ್ನೆರಡು", roman:"Hanneradu", english:"Twelve", group:"basics"},
  {id:"n13", value:13, kannada:"ಹದಿಮೂರು", roman:"Hadimooru", english:"Thirteen", group:"basics"},
  {id:"n14", value:14, kannada:"ಹದಿನಾಲ್ಕು", roman:"Hadinaalku", english:"Fourteen", group:"basics"},
  {id:"n15", value:15, kannada:"ಹದಿನೈದು", roman:"Hadinaidu", english:"Fifteen", group:"basics"},
  {id:"n16", value:16, kannada:"ಹದಿನಾರು", roman:"Hadinaaru", english:"Sixteen", group:"basics"},
  {id:"n17", value:17, kannada:"ಹದಿನೇಳು", roman:"Hadinelu", english:"Seventeen", group:"basics"},
  {id:"n18", value:18, kannada:"ಹದಿನೆಂಟು", roman:"Hadinentu", english:"Eighteen", group:"basics"},
  {id:"n19", value:19, kannada:"ಹತ್ತೊಂಬತ್ತು", roman:"Hattombattu", english:"Nineteen", group:"basics"},
  {id:"n20", value:20, kannada:"ಇಪ್ಪತ್ತು", roman:"Ippattu", english:"Twenty", group:"basics"},
  {id:"n21", value:21, kannada:"ಇಪ್ಪತ್ತೊಂದು", roman:"Ippattondu", english:"Twenty-one", group:"pattern"},
  {id:"n25", value:25, kannada:"ಇಪ್ಪತ್ತೈದು", roman:"Ippattaidu", english:"Twenty-five", group:"pattern"},
  {id:"n30", value:30, kannada:"ಮೂವತ್ತು", roman:"Moovattu", english:"Thirty", group:"tens"},
  {id:"n31", value:31, kannada:"ಮೂವತ್ತೊಂದು", roman:"Moovattondu", english:"Thirty-one", group:"pattern"},
  {id:"n40", value:40, kannada:"ನಲವತ್ತು", roman:"Nalavattu", english:"Forty", group:"tens"},
  {id:"n41", value:41, kannada:"ನಲವತ್ತೊಂದು", roman:"Nalavattondu", english:"Forty-one", group:"pattern"},
  {id:"n50", value:50, kannada:"ಐವತ್ತು", roman:"Aivattu", english:"Fifty", group:"tens"},
  {id:"n51", value:51, kannada:"ಐವತ್ತೊಂದು", roman:"Aivattondu", english:"Fifty-one", group:"pattern"},
  {id:"n60", value:60, kannada:"ಅರವತ್ತು", roman:"Aravattu", english:"Sixty", group:"tens"},
  {id:"n61", value:61, kannada:"ಅರವತ್ತೊಂದು", roman:"Aravattondu", english:"Sixty-one", group:"pattern"},
  {id:"n70", value:70, kannada:"ಎಪ್ಪತ್ತು", roman:"Eppattu", english:"Seventy", group:"tens"},
  {id:"n71", value:71, kannada:"ಎಪ್ಪತ್ತೊಂದು", roman:"Eppattondu", english:"Seventy-one", group:"pattern"},
  {id:"n80", value:80, kannada:"ಎಂಬತ್ತು", roman:"Embattu", english:"Eighty", group:"tens"},
  {id:"n81", value:81, kannada:"ಎಂಬತ್ತೊಂದು", roman:"Embattondu", english:"Eighty-one", group:"pattern"},
  {id:"n90", value:90, kannada:"ತೊಂಬತ್ತು", roman:"Tombattu", english:"Ninety", group:"tens"},
  {id:"n91", value:91, kannada:"ತೊಂಬತ್ತೊಂದು", roman:"Tombattondu", english:"Ninety-one", group:"pattern"},
  {id:"n100", value:100, kannada:"ನೂರು", roman:"Nooru", english:"One hundred", group:"tens"},
  {id:"n101", value:101, kannada:"ನೂರ ಒಂದು", roman:"Noora ondu", english:"One hundred and one", group:"hundreds"},
  {id:"n110", value:110, kannada:"ನೂರ ಹತ್ತು", roman:"Noora hattu", english:"One hundred and ten", group:"hundreds"},
  {id:"n120", value:120, kannada:"ನೂರ ಇಪ್ಪತ್ತು", roman:"Noora ippattu", english:"One hundred and twenty", group:"hundreds"}
];

export const numbers = entries;
export const groups = [
  {id:"basics", title:"Start here · 0–20"},
  {id:"tens", title:"Tens · 30–100"},
  {id:"pattern", title:"Tens + ones · see the pattern"},
  {id:"hundreds", title:"Past 100"}
];
export const audioItems = numbers.map(({id, kannada}) => ({id, kannada}));
export function kannadaDigits(value) {
  return String(value).replace(/[0-9]/g, digit => String.fromCharCode("೦".codePointAt(0) + Number(digit)));
}
