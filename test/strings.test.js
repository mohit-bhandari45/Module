import { expect } from "chai";
import {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
} from "../index.js";


/* Capitalize */
describe("Caps First test suit", () => {
    it("should caps the first letter of a word", () => {
        expect(capsFirst("hello")).to.be.equal("Hello");
    });

    it("should handle a single letter string", () => {
        expect(capsFirst("h")).to.be.equal("H");
    });

    it("should return the same string if already capitalized", () => {
        expect(capsFirst("Hello")).to.be.equal("Hello");
    });

    it("should return an empty string for an empty input && non-string input", () => {
        expect(capsFirst("")).to.be.equal("");
        expect(capsFirst(34)).to.be.equal("");
    })

    it("should not modify strings starting with numbers or special characters", () => {
        expect(capsFirst("123and")).to.be.equal("123and")
    })

    it("should handle non-string input gracefully", () => {
        expect(capsFirst(123)).to.be.equal("");
        expect(capsFirst(null)).to.be.equal("");
        expect(capsFirst(undefined)).to.be.equal("");
    });

    it("should handle a sentence gracefully", () => {
        expect(capsFirst("hello world")).to.be.equal("Hello world");
    })

    it("should capitalize correctly even if there are leading spaces", () => {
        expect(capsFirst("   hello")).to.be.equal("   Hello");
    });

    it("should not alter string with spaces and first letter as non character", () => {
        expect(capsFirst("   123hello")).to.be.equal("   123hello");
        expect(capsFirst("   +123hello")).to.be.equal("   +123hello");
    });

    it("should handle special characters or operators", () => {
        expect(capsFirst("   %#123hello")).to.be.equal("   %#123hello");
        expect(capsFirst("   &123hello")).to.be.equal("   &123hello");
        expect(capsFirst("   +123hello")).to.be.equal("   +123hello");
    });

    it("should not alter other letters except the first one", () => {
        expect(capsFirst("hELLO")).to.be.equal("HELLO");
    });
})

// Caps Each Word
describe("Caps Each test suit", () => {
    it('should capitalize the first letter of each word', () => {
        expect(capsEach("hello world")).to.be.equal("Hello World");
    });

    it("should handle mixed casing", () => {
        expect(capsEach("javaScript is fun")).to.be.equal("JavaScript Is Fun");
    });

    it("should handle a single word", () => {
        expect(capsEach("coding")).to.be.equal("Coding");
    });

    it("should handle non-string input or empty input", () => {
        expect(capsEach(123)).to.be.equal("");
        expect(capsEach(null)).to.be.equal("");
        expect(capsEach(undefined)).to.be.equal("");
        expect(capsEach("")).to.be.equal("");
    });

    it("should preserve multiple spaces", () => {
        expect(capsEach("  multiple   spaces ")).to.be.equal("  Multiple   Spaces ");
    });

    it("should not modify numbers", () => {
        expect(capsEach("123test 456hello")).to.be.equal("123test 456hello");
    });

    it("should handle a single length string", () => {
        expect(capsEach("s")).to.be.equal("S");
    });

    it("should capitalize strings with multiple spaces", () => {
        expect(capsEach("hello bro   rock")).to.be.equal("Hello Bro   Rock");
    });

    it("should handle special characters and keep them intact", () => {
        expect(capsEach("hello-world")).to.be.equal("Hello-World");
    });

    it("should handle leading and trailing spaces", () => {
        expect(capsEach("  hello world")).to.be.equal("  Hello World");
        expect(capsEach("hello world   ")).to.be.equal("Hello World   ");
    });

    it("should handle multiple special characters", () => {
        expect(capsEach("hello_world-how are_you")).to.be.equal("Hello_World-How Are_You");
    });

    it("should handle hyphens in the middle of words", () => {
        expect(capsEach("hello-goodbye")).to.be.equal("Hello-Goodbye");
    });

    it("should handle opeartors in the middle of words", () => {
        expect(capsEach("hello+goodbye")).to.be.equal("Hello+Goodbye");
    });

    it("should handle underscores in the middle of words", () => {
        expect(capsEach("hello_world_test")).to.be.equal("Hello_World_Test");
    });

    it("should handle mixed numbers and letters", () => {
        expect(capsEach("hello123 world456")).to.be.equal("Hello123 World456");
    });

    it("should handle empty spaces between characters", () => {
        expect(capsEach("a b c")).to.be.equal("A B C");
    });

    it("should not modify punctuation", () => {
        expect(capsEach("hello!world")).to.be.equal("Hello!World");
    });
})

// toggle casing
describe('Toggle Test cases', () => {
    it('should toggle case for each character in the string', () => {
        expect(toggleCase("hello World")).to.equal("HELLO wORLD");
        expect(toggleCase("HeLLo WoRLD!")).to.equal("hEllO wOrld!");
    });

    it('should not change numbers or punctuation', () => {
        expect(toggleCase("123 ABC!")).to.equal("123 abc!");
        expect(toggleCase("!@#")).to.equal("!@#");
    });

    it('should return an empty string when input is an empty string', () => {
        expect(toggleCase("")).to.equal("");
    });

    it('should toggle case for mixed case words', () => {
        expect(toggleCase("aBcDeFgH")).to.equal("AbCdEfGh");
        expect(toggleCase("JavaScript")).to.equal("jAVAsCRIPT");
    });

    it('should toggle case for uppercase and lowercase words', () => {
        expect(toggleCase("UPPERCASE")).to.equal("uppercase");
        expect(toggleCase("   lowercase")).to.equal("   LOWERCASE");
    });

    it('should handle non-string input gracefully', () => {
        expect(toggleCase(12345)).to.equal("");
        expect(toggleCase(null)).to.equal("");
        expect(toggleCase(undefined)).to.equal("");
    });
})

// sentence casing
describe("SentenceCase Test cases", () => {
    it("should capitalize first letter and lowercase the rest", () => {
        expect(senCase("hello WORLD")).to.equal("Hello world");
        expect(senCase("JAVA is FUN")).to.equal("Java is fun");
    });

    it("should handle leading spaces", () => {
        expect(senCase("   hello WORLD")).to.equal("   Hello world");
        expect(senCase("   JAVA is fun")).to.equal("   Java is fun");
    });

    it("should handle leading non-alphabetic characters", () => {
        expect(senCase("!hello WORLD")).to.equal("!Hello world");
        expect(senCase("123abc Def")).to.equal("123abc def");
        expect(senCase("@# java SCRIPT")).to.equal("@# Java script");
    });

    it("should return empty string for empty input", () => {
        expect(senCase("")).to.equal("");
        expect(senCase("   ")).to.equal("");
    });

    it("should return empty string for non-string input", () => {
        expect(senCase(null)).to.equal("");
        expect(senCase(undefined)).to.equal("");
        expect(senCase(42)).to.equal("");
        expect(senCase({})).to.equal("");
    });

    it("should handle mixed case sentences", () => {
        expect(senCase("hELLO WORLD")).to.equal("Hello world");
        expect(senCase("hi THERE! HOW are YOU?")).to.equal("Hi there! how are you?");
    });

    it("should handle special cases", () => {
        expect(senCase("  42 is the answer.")).to.equal("  42 is the answer.");
        expect(senCase("!!! hello")).to.equal("!!! Hello");
    });
});

// title casing
describe("TitleCase Test cases", () => {
    it("should capitalize the first letter of each word, except small words", () => {
        expect(titleCase("the lord of the rings")).to.equal("The Lord of the Rings");
        expect(titleCase("a tale of two cities")).to.equal("A Tale of Two Cities");
    });

    it("should handle leading and trailing spaces", () => {
        expect(titleCase("   the lord of the rings   ")).to.equal("The Lord of the Rings");
        expect(titleCase("   a tale of two cities   ")).to.equal("A Tale of Two Cities");
    });

    it("should remove non-alphabetic characters", () => {
        expect(titleCase("the lord of the rings!!!")).to.equal("The Lord of the Rings!");
        expect(titleCase("a tale of two cities.")).to.equal("A Tale of Two Cities.");
        expect(titleCase("hello world!!! it's a test")).to.equal("Hello World! It's a Test");
    });

    it("should handle empty string", () => {
        expect(titleCase("")).to.equal("");
        expect(titleCase("   ")).to.equal("");
    });

    it("should return empty string for non-string input", () => {
        expect(titleCase(null)).to.equal("");
        expect(titleCase(undefined)).to.equal("");
        expect(titleCase(42)).to.equal("");
        expect(titleCase({})).to.equal("");
    });

    it("should handle mixed case input", () => {
        expect(titleCase("tHe lOrd Of tHe RiNgs")).to.equal("The Lord of the Rings");
        expect(titleCase("HELLO world!! this IS a test")).to.equal("Hello World! This Is a Test");
    });

    it("should correctly handle words with special characters", () => {
        expect(titleCase("hello world!!! it's a test")).to.equal("Hello World! It's a Test");
        expect(titleCase("!!! hello")).to.equal("! Hello");
        expect(titleCase("a# tale of two-cities")).to.equal("A Tale of Two-cities");
    });

    it("should handle only small words", () => {
        expect(titleCase("and the of in on at a an to")).to.equal("And the of in on at a an to");
        expect(titleCase("to be or not to be")).to.equal("To Be or Not to Be");
    });
});


describe("Reverse String test suit", () => {
    it("should reverse the provided string", () => {
        const input = "The quick brown fox";
        const output = "fox brown quick The";

        expect(reverseString(input)).to.be.equal(output);
    })

    it("should return a single word correctly", () => {
        expect(reverseString("Quick")).to.be.equal("Quick");
    })

    it("should return empty string in case of non-string or empty input", () => {
        expect(reverseString(123)).to.be.equal("");
        expect(reverseString("")).to.be.equal("");
    })

    it("should work properly for special characters", () => {
        const input = "Hello-world @mohitbhandari45"
        const output = "@mohitbhandari45 Hello-world"

        expect(reverseString(input)).to.be.equal(output);
    })

    it('should reverse a string with multiple spaces correctly', () => {
        const input = reverseString('   hello   world   ');
        expect(input).to.equal('   world   hello   ');
    })
})


/* String Distances */
describe("Hamming Distance", () => {
    it("should return correct output for different inputs", () => {
        expect(hammingDistance("karolin", "kathrin")).to.be.equal(3);
        expect(hammingDistance("Mohit", "Rawat")).to.be.equal(4);
    })

    it("should return correct output for number strings", () => {
        expect(hammingDistance("1011101", "1001001")).to.equal(2);
        expect(hammingDistance("1011101", "1101011")).to.equal(4);
    })

    it("should return 0 for identical strings", () => {
        expect(hammingDistance("same", "same")).to.be.equal(0);
    })

    it("should throw an error for different length strings", () => {
        expect(() => hammingDistance("hello", "hell")).to.throw("Strings must be of equal length");
    })
})

describe("Levenstein Distance", () => {
    it("should return 0 when both strings are empty", () => {
        expect(levenshtein("", "")).to.be.equal(0);
    })

    it("should return the length of the other string if any one of them is empty", () => {
        expect(levenshtein("str", "")).to.be.equal(3);
        expect(levenshtein("", "strsd")).to.be.equal(5);
    })

    it("should give the distance", () => {
        expect(levenshtein("horse", "ros")).to.be.equal(3);
        expect(levenshtein("kitten", "sitting")).to.equal(3);
        expect(levenshtein("flaw", "lawn")).to.equal(2);
        expect(levenshtein("intention", "execution")).to.equal(5);
    })

    it("should return correct distance for completely different strings", () => {
        expect(levenshtein("xyz", "abd")).to.be.equal(3);
    })

    it("should handle case sensitive information", () => {
        expect(levenshtein("ans", "ANS")).to.be.equal(3);
    })

    it("should handle spaces properly", () => {
        expect(levenshtein("hello world", "hello")).to.be.equal(6);
    })
})

describe('Is Anagram check', () => {
    it("should return true for valid anagrams", () => {
        expect(isAnagram("listen", "silent")).to.be.equal(true);
        expect(isAnagram("triangle", "integral")).to.be.equal(true);
        expect(isAnagram("a", "a")).to.be.equal(true);
        expect(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")).to.be.equal(true);
        expect(isAnagram("elbow", "below")).to.be.equal(true);
    })

    it("should return false for invalid anagrams", () => {
        expect(isAnagram("listen", "silence")).to.be.equal(false);
        expect(isAnagram("hello", "world")).to.be.equal(false);
        expect(isAnagram("aaa", "aaaa")).to.be.equal(false);
    })

    it("should handle edge cases", () => {
        expect(isAnagram("", "")).to.be.equal(true);
        expect(isAnagram("a", "")).to.be.equal(false);
        expect(isAnagram("", "a")).to.be.equal(false);
        expect(isAnagram("123", "321")).to.be.equal(true);
        expect(isAnagram("aBc", "CbA")).to.be.equal(true);
    })

    // it("should handle special characters", () => {
    //     expect(isAnagram("!@#", "#!@")).to.be.equal(true);
    //     expect(isAnagram("an@gram", "nag@ram")).to.be.equal(true);
    //     expect(isAnagram("anagram!", "nagaram")).to.be.equal(false);
    //     expect(isAnagram("T@om Ma!rvolo R!ddle", "I a!m Lord V@oldemort")).to.be.equal(true);
    // })
})

describe('RLE', () => {
    it("should compress a string properly with repeated character", () => {
        const input = "AAAABBBCCDAA";
        const expected = "4A3B2C1D2A";
        expect(compressString(input)).to.be.equal(expected);
    })

    it("should handle empty strings", () => {
        expect(compressString("")).to.equal("");
    })

    it("should handle single character string", () => {
        expect(compressString("BBBBBB")).to.be.equal("6B");
    })

    it("should handle all unique strings", () => {
        expect(compressString("ABC")).to.be.equal("1A1B1C");
    })

    it("should compress a string with different runs of characters", () => {
        const input = "AABBBCCCCDDDDD";
        const expected = "2A3B4C5D";
        expect(compressString(input)).to.equal(expected);
    });

    // it("should handle numeric characters", () => {
    //     const input = "111223333444";
    //     const expected = "3122333444";
    //     expect(compressString(input)).to.equal(expected);
    // });

    it("should handle special characters", () => {
        const input = "!!!@@@###";
        const expected = "3!3@3#";
        expect(compressString(input)).to.equal(expected);
    })

    it("should compress a string with a long single run", () => {
        const input = "ZZZZZZZZZZZZZZZZZZZZZZZZZZZ";
        const expected = "27Z";
        expect(compressString(input)).to.equal(expected);
    })

    it("should handle mixed case characters", () => {
        const input = "aaBBccDD";
        const expected = "2a2B2c2D";
        expect(compressString(input)).to.equal(expected);
    })

    it("should compress a string with a single character", () => {
        const input = "a";
        const expected = "1a";
        expect(compressString(input)).to.equal(expected);
    })

    // it("should handle spaces in the string", () => {
    //     const input = "    AA  B   ";
    //     const expected = "4 1A2 1B3 ";
    //     expect(compressString(input)).to.equal(expected);
    // });

    it("should handle alternating characters correctly", () => {
        const input = "ABABAB";
        const expected = "1A1B1A1B1A1B";
        expect(compressString(input)).to.equal(expected);
    });

    it("should compress a large string", () => {
        const input = "X".repeat(1000) + "Y".repeat(2000);
        const expected = "1000X2000Y";
        expect(compressString(input)).to.equal(expected);
    });

    it("should handle varying runs of a single character", () => {
        const input = "AAAABBBBCCCC";
        const expected = "4A4B4C";
        expect(compressString(input)).to.equal(expected);
    })

    // it("should compress a string with mixed case, numbers, and special characters", () => {
    //     const input = "a1!a1!B2@B2@";
    //     const expected = "1a11!1a11!1B21@1B21@";
    //     expect(compressString(input)).to.equal(expected);
    // });
})