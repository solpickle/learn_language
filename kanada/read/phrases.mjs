// Generate Read Kannada audio locally; Day 3 and Day 4 word clips are served from their lesson folders.
import {words} from "./content.mjs";
export const phrases = words.filter(word => word.day !== 3 && word.day !== 4 && word.day !== 5).map(({id, script}) => ({id, kannada:script}));
