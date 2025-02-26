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

import { Ascii, ENCODING_FORMAT } from "./lib/StringUtils/EncodeDecode/TextEncoding.js";

export {
    Ascii, capsEach, capsFirst, countChars,
    ENCODING_FORMAT, mirrorSen, removeDups,
    reverse, reverseCase, reverseCons,
    reverseEach, reverseInParen, reverseLetters,
    reverseSen, reverseVowels, reverseWordsIntactPuncs,
    senCase, shuffleWords, titleCase, toggleCase
};