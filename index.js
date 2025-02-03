/* String Utilities */
import {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
} from "./lib/StringUtils/Caps.js";

import { reverse, reverseEach, reverseSen, reverseLetters, reverseWordsIntactPuncs, reverseVowels, reverseCons,mirrorSen, shuffleWords } from "./lib/StringUtils/Reverse.js";

console.log(shuffleWords("Hello My name"));

export {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverse, reverseEach, reverseSen, reverseLetters, reverseWordsIntactPuncs, reverseVowels, reverseCons, mirrorSen, shuffleWords,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
};