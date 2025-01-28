import { caps, allCaps, reverseString, levenshtein, isAnagram, compressString } from "../index.js";
import { expect } from "chai";

describe("Capitalize test suit", () => {
    it("should caps the first letter of a word", () => {
        const input = "mOHIT";
        const output = "Mohit";
        expect(caps(input)).to.be.equal(output);
    });

    it("should handle a single letter string", () => {
        const result = "m";
        expect(caps(result)).to.be.equal("M");
    });

    it("should not change a string that already starts with an uppercase letter", () => {
        const result = "Mohit";
        expect(caps(result)).to.be.equal("Mohit");
    });

    it("should return an empty string for an empty input && non-string input", () => {
        expect(caps("")).to.be.equal("");
        expect(caps(34)).to.be.equal("");
    })

    it("should not modify strings starting with numbers or special characters", () => {
        const result = "123and";
        expect(caps(result)).to.be.equal("123and")
    })
})

describe("All Caps test suit", () => {
    it('should capitalize the first letter of each word', () => {
        const input = 'mo hi t bh ann da ri';
        const output = 'Mo Hi T Bh Ann Da Ri';
        expect(allCaps(input)).to.be.equal(output)
    })

    it("should handle a single length string", () => {
        expect(allCaps("s")).to.be.equal("S");
    })

    it("should capitalize strings with multiple spaces", () => {
        const input = "hello grt   mohit";
        const output = "Hello Grt Mohit";
        expect(allCaps(input)).to.be.equal(output);
    })

    it("should return empty string in case of non-string or empty input", () => {
        expect(allCaps(123)).to.be.equal("");
        expect(allCaps("")).to.be.equal("");
    })

    it("should handle special characters and keep them intact", () => {
        const input = "hello-world";
        const output = "Hello-world";

        expect(allCaps(input)).to.be.equal(output);
    })
})

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

describe("Reverse String test suit", () => {
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