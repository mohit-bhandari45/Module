/* String Utilities */
import {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
} from "./lib/StringUtils/Caps.js";

import {
    reverse, reverseEach, reverseSen, reverseLetters,
    reverseWordsIntactPuncs, reverseVowels, reverseCons, reverseInParen,
    mirrorSen, shuffleWords, countChars, reverseCase, removeDups
} from "./lib/StringUtils/Reverse.js";

import { Ascii,ENCODING_FORMAT } from "./lib/StringUtils/EncodeDecode/TextEncoding.js";

export {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverse, reverseEach, reverseSen, reverseLetters, reverseWordsIntactPuncs, reverseVowels, reverseCons, mirrorSen, shuffleWords, countChars, reverseCase, removeDups, reverseInParen,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString,
    Ascii, ENCODING_FORMAT
};