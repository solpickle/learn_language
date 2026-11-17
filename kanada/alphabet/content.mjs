export const vowels = [
  {id:"vowel-a", letter:"ಅ", roman:"a", name:"short a", sign:"", note:"The consonant’s built-in vowel"},
  {id:"vowel-aa", letter:"ಆ", roman:"aa", name:"long aa", sign:"ಾ"},
  {id:"vowel-i", letter:"ಇ", roman:"i", name:"short i", sign:"ಿ"},
  {id:"vowel-ii", letter:"ಈ", roman:"ii", name:"long ii", sign:"ೀ"},
  {id:"vowel-u", letter:"ಉ", roman:"u", name:"short u", sign:"ು"},
  {id:"vowel-uu", letter:"ಊ", roman:"uu", name:"long uu", sign:"ೂ"},
  {id:"vowel-ru", letter:"ಋ", roman:"ru", name:"vocalic r", sign:"ೃ", note:"Mostly in Sanskrit-derived words"},
  {id:"vowel-e", letter:"ಎ", roman:"e", name:"short e", sign:"ೆ"},
  {id:"vowel-ee", letter:"ಏ", roman:"ee", name:"long ee", sign:"ೇ"},
  {id:"vowel-ai", letter:"ಐ", roman:"ai", name:"ai", sign:"ೈ"},
  {id:"vowel-o", letter:"ಒ", roman:"o", name:"short o", sign:"ೊ"},
  {id:"vowel-oo", letter:"ಓ", roman:"oo", name:"long oo", sign:"ೋ"},
  {id:"vowel-au", letter:"ಔ", roman:"au", name:"au", sign:"ೌ"}
];

export const consonantGroups = [
  {id:"velar", title:"Back of the tongue", letters:[
    {id:"c-ka", letter:"ಕ", roman:"ka"},{id:"c-kha", letter:"ಖ", roman:"kha"},{id:"c-ga", letter:"ಗ", roman:"ga"},{id:"c-gha", letter:"ಘ", roman:"gha"},{id:"c-nga", letter:"ಙ", roman:"nga"}
  ]},
  {id:"palatal", title:"Tongue near the roof of the mouth", letters:[
    {id:"c-cha", letter:"ಚ", roman:"cha"},{id:"c-chha", letter:"ಛ", roman:"chha"},{id:"c-ja", letter:"ಜ", roman:"ja"},{id:"c-jha", letter:"ಝ", roman:"jha"},{id:"c-nya", letter:"ಞ", roman:"nya"}
  ]},
  {id:"retroflex", title:"Tongue curled back", letters:[
    {id:"c-tta", letter:"ಟ", roman:"tta"},{id:"c-ttha", letter:"ಠ", roman:"ttha"},{id:"c-dda", letter:"ಡ", roman:"dda"},{id:"c-ddha", letter:"ಢ", roman:"ddha"},{id:"c-nna", letter:"ಣ", roman:"nna"}
  ]},
  {id:"dental", title:"Tongue near the teeth", letters:[
    {id:"c-ta", letter:"ತ", roman:"ta"},{id:"c-tha", letter:"ಥ", roman:"tha"},{id:"c-da", letter:"ದ", roman:"da"},{id:"c-dha", letter:"ಧ", roman:"dha"},{id:"c-na", letter:"ನ", roman:"na"}
  ]},
  {id:"labial", title:"Lips", letters:[
    {id:"c-pa", letter:"ಪ", roman:"pa"},{id:"c-pha", letter:"ಫ", roman:"pha"},{id:"c-ba", letter:"ಬ", roman:"ba"},{id:"c-bha", letter:"ಭ", roman:"bha"},{id:"c-ma", letter:"ಮ", roman:"ma"}
  ]},
  {id:"other", title:"Other consonants", letters:[
    {id:"c-ya", letter:"ಯ", roman:"ya"},{id:"c-ra", letter:"ರ", roman:"ra"},{id:"c-la", letter:"ಲ", roman:"la"},{id:"c-va", letter:"ವ", roman:"va"},{id:"c-sha", letter:"ಶ", roman:"sha"},{id:"c-ssha", letter:"ಷ", roman:"ssha"},{id:"c-sa", letter:"ಸ", roman:"sa"},{id:"c-ha", letter:"ಹ", roman:"ha"},{id:"c-lla", letter:"ಳ", roman:"lla"}
  ]}
];

export const exampleWords = [
  {id:"word-house", script:"ಮನೆ", roman:"mane", meaning:"house / home", parts:[{script:"ಮ", roman:"ma"},{script:"ನೆ", roman:"ne"}]},
  {id:"word-milk", script:"ಹಾಲು", roman:"haalu", meaning:"milk", parts:[{script:"ಹಾ", roman:"haa"},{script:"ಲು", roman:"lu"}]},
  {id:"word-water", script:"ನೀರು", roman:"neeru", meaning:"water", parts:[{script:"ನೀ", roman:"nee"},{script:"ರು", roman:"ru"}]},
  {id:"word-ear", script:"ಕಿವಿ", roman:"kivi", meaning:"ear", parts:[{script:"ಕಿ", roman:"ki"},{script:"ವಿ", roman:"vi"}]},
  {id:"word-fruit", script:"ಕಾಯಿ", roman:"kaayi", meaning:"fruit / vegetable", parts:[{script:"ಕಾ", roman:"kaa"},{script:"ಯಿ", roman:"yi"}]}
];

export const consonants = consonantGroups.flatMap(group => group.letters);
export const audioItems = [
  ...vowels.map(({id, letter}) => ({id, kannada:letter})),
  ...consonants.map(({id, letter}) => ({id, kannada:letter})),
  ...exampleWords.map(({id, script}) => ({id, kannada:script}))
];
