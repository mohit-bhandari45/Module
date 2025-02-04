/* String Utilities */
import {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
} from "./lib/StringUtils/Caps.js";

import { reverse, reverseEach, reverseSen, reverseLetters, reverseWordsIntactPuncs, reverseVowels, reverseCons,mirrorSen, shuffleWords, countChars } from "./lib/StringUtils/Reverse.js";

console.log(countChars("Hello this is the goat of the football, messi",'t'));

export {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverse, reverseEach, reverseSen, reverseLetters, reverseWordsIntactPuncs, reverseVowels, reverseCons, mirrorSen, shuffleWords, countChars,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
};