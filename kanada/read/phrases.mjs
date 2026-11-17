// Generate Read Kannada audio locally; Day 3 word clips are served from day-3/audio.
import {words} from "./content.mjs";
export const phrases = words.filter(word => word.day !== 3).map(({id, script}) => ({id, kannada:script}));
