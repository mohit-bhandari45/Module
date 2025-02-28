/* String Utilities */
import {
    capsEach,
    capsFirst,
    senCase, titleCase,
    toggleCase
} from "./lib/StringUtils/Caps.js";

import {
    countChars,
    mirrorSen, removeDups,
    reverse, reverseCase, reverseCons, reverseEach, reverseInParen, reverseLetters, reverseSen, reverseVowels, reverseWordsIntactPuncs,
    shuffleWords
} from "./lib/StringUtils/Reverse.js";

import { Ascii, ENCODING_FORMAT, ISO } from "./lib/StringUtils/EncodeDecode/TextEncoding.js";

const i = new ISO();
const encoded = i.encode("Hello World");
console.log("Encoded Buffer:", encoded);
const decoded = i.decode(encoded);
console.log("Decoded Text:", decoded);

export {
    capsEach, capsFirst, countChars,
    mirrorSen, removeDups,
    reverse, reverseCase, reverseCons,
    reverseEach, reverseInParen, reverseLetters,
    reverseSen, reverseVowels, reverseWordsIntactPuncs,
    senCase, shuffleWords, titleCase, toggleCase,
    Ascii, ENCODING_FORMAT, ISO
};