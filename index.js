/* String Utilities */
import {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
} from "./lib/StringUtils/Caps.js";

import { reverse, reverseEach, reverseSen, reverseLetters } from "./lib/StringUtils/Reverse.js";

console.log(reverse("mohit"));
console.log(reverseEach("mohit is goat"));
console.log(reverseSen("mohit is goat"));

export {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverse, reverseEach, reverseSen, reverseLetters,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
};