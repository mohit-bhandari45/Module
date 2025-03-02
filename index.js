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

import { Ascii, ENCODING_FORMAT, ISO, UTF } from "./lib/StringUtils/EncodeDecode/TextEncoding.js";

export {
    capsEach, capsFirst, countChars,
    mirrorSen, removeDups,
    reverse, reverseCase, reverseCons,
    reverseEach, reverseInParen, reverseLetters,
    reverseSen, reverseVowels, reverseWordsIntactPuncs,
    senCase, shuffleWords, titleCase, toggleCase,
    Ascii, ENCODING_FORMAT, ISO, UTF
};