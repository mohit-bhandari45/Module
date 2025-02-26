import { reverse, reverseEach, reverseLetters, reverseSen, reverseWordsIntactPuncs, reverseVowels, countChars, reverseCase, removeDups, reverseInParen } from "../index.js";
import { expect } from "chai";

describe("Reverse whole string test suite", () => {
    it("should reverse a given string", () => {
        expect(reverse("hello")).to.equal("olleh");
    });

    it("should reverse a given string and trim spaces when flag is true", () => {
        expect(reverse("  hello      ", true)).to.equal("olleh");
    });

    it("should reverse a given string with spaces when flag is false", () => {
        expect(reverse("  hello      ")).to.equal("      olleh  ");
    });

    it("should handle non-string input and empty string gracefully", () => {
        expect(reverse("")).to.equal("");
        expect(reverse(78)).to.equal("");
        expect(reverse(null)).to.equal("");
        expect(reverse(undefined)).to.equal("");
    });

    it("should handle single letter correctly", () => {
        expect(reverse("a")).to.equal("a");
    });

    it("should handle strings with spaces correctly", () => {
        expect(reverse("hello world")).to.equal("dlrow olleh");
    });

    it("should reverse strings containing numbers", () => {
        expect(reverse("34132453")).to.equal("35423143");
        expect(reverse("299hello")).to.equal("olleh992");
    });

    it("should handle strings with special characters", () => {
        expect(reverse("hello!")).to.equal("!olleh");
        expect(reverse("@1234#")).to.equal("#4321@");
    });

    it("should handle strings with newlines and tabs", () => {
        expect(reverse("\tHello\nWorld")).to.equal("dlroW\nolleH\t");
    });
});

describe("Reverse Each Word Test Suite", () => {
    it("should reverse each word in the sentence", () => {
        expect(reverseEach("Hello World")).to.equal("olleH dlroW");
    });

    it("should reverse a single word", () => {
        expect(reverseEach("JavaScript")).to.equal("tpircSavaJ");
    });

    it("should handle empty string", () => {
        expect(reverseEach("")).to.equal("");
    });

    it("should handle multiple spaces between words", () => {
        expect(reverseEach("  Hello   World  ")).to.equal("  olleH   dlroW  ");
    });

    it("should trim the input when flag is true and then reverse words", () => {
        expect(reverseEach("  Hello   World  ", true)).to.equal("olleH   dlroW");
    });

    it("should handle a string with only spaces", () => {
        expect(reverseEach("       ")).to.equal("       ");
    });

    it("should handle single-character words", () => {
        expect(reverseEach("A B C")).to.equal("A B C");
    });

    it("should reverse words containing numbers", () => {
        expect(reverseEach("123 abc 456")).to.equal("321 cba 654");
    });

    it("should reverse words with special characters", () => {
        expect(reverseEach("hello! world?")).to.equal("!olleh ?dlrow");
    });

    it("should handle sentences with punctuation", () => {
        expect(reverseEach("Hello, World!")).to.equal(",olleH !dlroW");
    });

    it("should handle words with mixed casing", () => {
        expect(reverseEach("HeLLo WoRLd")).to.equal("oLLeH dLRoW");
    });

    it("should handle tabs and newlines", () => {
        expect(reverseEach("\tHello\nWorld")).to.equal("\tolleH\ndlroW");
    });
});

describe('Reverse Sentence Test Cases', () => {
    it('should reverse the sentence', () => {
        expect(reverseSen("Hello World")).to.equal("World Hello");
    });

    it('should reverse the words with the whole sentence when each arg is passed', () => {
        expect(reverseSen("Hello World", false, true)).to.equal("dlroW olleH");
    });

    it("should return the same sentence if there is only one word", () => {
        expect(reverseSen("Hello")).to.equal("Hello");
    });

    it('should handle empty strings', () => {
        expect(reverseSen("")).to.equal("");
    });

    it('should return the same sentence if words are separated by multiple spaces', () => {
        expect(reverseSen("  Hello   World  ")).to.equal("  World   Hello  ");
    });

    it('should return the trimmed reversed sentence if flag=true', () => {
        expect(reverseSen("  Hello   World  ", true)).to.equal("World   Hello");
    });

    it('should work for sentences with more than two words', () => {
        const input = 'I love programming in JavaScript';
        const expected = 'JavaScript in programming love I';
        expect(reverseSen(input)).to.equal(expected);
    });

    it('should handle sentences with leading and trailing spaces', () => {
        expect(reverseSen("   Foo Bar Baz   ")).to.equal("   Baz Bar Foo   ");
    });

    it('should handle all spaces correctly', () => {
        expect(reverseSen("     ")).to.equal("     ");
        expect(reverseSen("     ", true)).to.equal("");
    });

    it('should handle tabs and newlines', () => {
        const input = "   \nFoo  Bar\n   ";
        const expected = "\n   Bar  Foo   \n";
        expect(reverseSen(input)).to.equal(expected);
    });
});

describe("Reverse Letters Test Suite", () => {
    it("should reverse the letters in the string while keeping non-letters in place", () => {
        expect(reverseLetters("a,b$c")).to.equal("c,b$a");
    });

    it("should reverse letters in a sentence with spaces", () => {
        expect(reverseLetters("hello world")).to.equal("dlrow olleh");
    });

    it("should handle empty string", () => {
        expect(reverseLetters("")).to.equal("");
    });

    it("should handle a string with no letters", () => {
        expect(reverseLetters("123456!@#")).to.equal("123456!@#");
    });

    it("should handle strings with punctuation and spaces", () => {
        expect(reverseLetters("hello, world!")).to.equal("dlrow, olleh!");
    });

    it("should handle uppercase letters", () => {
        expect(reverseLetters("HELLO world")).to.equal("dlrow OLLEH");
    });

    it("should handle strings with mixed letter cases", () => {
        expect(reverseLetters("HeLlO WoRlD")).to.equal("DlRoW OlLeH");
    });

    it("should handle strings with multiple spaces", () => {
        expect(reverseLetters("  Hello   World  ")).to.equal("  dlroW   olleH  ");
    });

    it("should return the same string if no letters to reverse", () => {
        expect(reverseLetters("1234!@#")).to.equal("1234!@#");
    });

    it("should return the correct result with mixed symbols", () => {
        expect(reverseLetters("a,b$c 123")).to.equal("c,b$a 123");
    });
});

describe('ReverseWordsIntactPuncs Test suites', () => {
    it('should reverse words and preserve punctuation', () => {
        const result = reverseWordsIntactPuncs("Hello, world! How are you?");
        expect(result).to.equal("you, are! How world Hello?");
    });

    it('should handle single word sentence', () => {
        const result = reverseWordsIntactPuncs("Hello!");
        expect(result).to.equal("Hello!");
    });

    it('should preserve multiple spaces between words', () => {
        const result = reverseWordsIntactPuncs("Hello   world!   How   are   you?");
        expect(result).to.equal("you   are!   How   world   Hello?");
    });

    it('should reverse words when there is no punctuation', () => {
        const result = reverseWordsIntactPuncs("The quick brown fox");
        expect(result).to.equal("fox brown quick The");
    });

    it('should reverse words and preserve punctuation at the end', () => {
        const result = reverseWordsIntactPuncs("Good morning, John.");
        expect(result).to.equal("John morning, Good.");
    });

    it('should handle sentence with multiple punctuation marks', () => {
        const result = reverseWordsIntactPuncs("This is a test, right? Really!");
        expect(result).to.equal("Really right test a, is? This!");
    });

    it('should return an empty string for empty input', () => {
        const result = reverseWordsIntactPuncs("");
        expect(result).to.equal("");
    });

    it('should return the same value if there are no alphabetic words', () => {
        const result = reverseWordsIntactPuncs("!@#$%^&*()");
        expect(result).to.equal("!@#$%^&*()");
    });

    it('should handle long sentences', () => {
        const result = reverseWordsIntactPuncs("The quick brown fox jumps over the lazy dog!");
        expect(result).to.equal("dog lazy the over jumps fox brown quick The!");
    });

    it('should handle multiple punctuation marks between words', () => {
        const result = reverseWordsIntactPuncs("Let's test... this, and see!");
        expect(result).to.equal("see and... this, test Let's!");
    });
});

describe("reverseVowels function", () => {
    it("should reverse vowels in a simple word", () => {
        expect(reverseVowels("hello")).to.equal("holle");
    });

    it("should reverse vowels in a sentence", () => {
        expect(reverseVowels("Reverse Vowels")).to.equal("Revorse Vewels");
    });

    it("should handle words with no vowels", () => {
        expect(reverseVowels("rhythm")).to.equal("rhythm");
    });

    it("should return an empty string when input is empty", () => {
        expect(reverseVowels("")).to.equal("");
    });

    it("should handle uppercase and lowercase vowels correctly", () => {
        expect(reverseVowels("HELLO")).to.equal("HOLLE");
    });

    it("should handle a single vowel", () => {
        expect(reverseVowels("a")).to.equal("a");
    });

    it("should handle multiple spaces correctly", () => {
        expect(reverseVowels("a e i o u")).to.equal("u o i e a");
    });

    it("should handle specail characters correctly", () => {
        expect(reverseVowels("ab#fioffes%%%%    ")).to.equal("eb#foiffas%%%%    ");
    });

    it("should ignore non-string input and return empty string", () => {
        expect(reverseVowels(12345)).to.equal("");
        expect(reverseVowels(null)).to.equal("");
        expect(reverseVowels(undefined)).to.equal("");
        expect(reverseVowels({})).to.equal("");
    });

    it("should trim input if flag is true", () => {
        expect(reverseVowels("  hello  ", true)).to.equal("holle");
    });

    it("should not trim input if flag is false", () => {
        expect(reverseVowels("  hello  ", false)).to.equal("  holle  ");
    });
});

describe('CountChars test suites', () => {
    it('should return 0 if the string is empty', () => {
        const result = countChars("", "a");
        expect(result).to.equal(0);
    });

    it('should return 0 if the character is not found', () => {
        const result = countChars("hello world", "z");
        expect(result).to.equal(0);
    });

    it('should return the correct count for a single character', () => {
        const result = countChars("hello world", "l");
        expect(result).to.equal(3);
    });

    it('should return the correct count for multiple occurrences', () => {
        const result = countChars("aaaaaa", "a");
        expect(result).to.equal(6);
    });

    it('should handle case sensitivity correctly', () => {
        const result = countChars("Hello World", "h");
        expect(result).to.equal(0);
        const result2 = countChars("Hello World", "H");
        expect(result2).to.equal(1);
    });

    it('should return an empty string if the input is not a valid string', () => {
        const result = countChars(123, "1");
        expect(result).to.equal(0);
    });

    it('should return 0 if the input string is not a string or is empty', () => {
        const result = countChars(undefined, "a");
        expect(result).to.equal(0);
    });
});

describe("Reverse Case Test Cases", () => {
    it("should reverse case of each character in a simple string", () => {
        expect(reverseCase("Hello World")).to.equal("hELLO wORLD");
    });

    it("should handle an all-lowercase string", () => {
        expect(reverseCase("javascript")).to.equal("JAVASCRIPT");
    });

    it("should handle an all-uppercase string", () => {
        expect(reverseCase("MOCHA")).to.equal("mocha");
    });

    it("should handle a mix of numbers and special characters", () => {
        expect(reverseCase("Mocha123!")).to.equal("mOCHA123!");
    });

    it("should handle an empty string", () => {
        expect(reverseCase("")).to.equal("");
    });

    it("should handle a string with spaces only", () => {
        expect(reverseCase("   ")).to.equal("   ");
    });

    it("should handle a string with mixed characters and symbols", () => {
        expect(reverseCase("ChAi123$#")).to.equal("cHaI123$#");
    });

    it("should handle a string with newline characters", () => {
        expect(reverseCase("Line\nBreak")).to.equal("lINE\nbREAK");
    });

    it("should not alter numbers", () => {
        expect(reverseCase("12345")).to.equal("12345");
    });

    it("should reverse case for a single character", () => {
        expect(reverseCase("a")).to.equal("A");
        expect(reverseCase("Z")).to.equal("z");
    });
});

describe("Remove Duplicates Test Suites", () => {
    it("should remove duplicate letters from a string", () => {
        expect(removeDups("hello")).to.equal("helo");
    });

    it("should maintain order of first appearance", () => {
        expect(removeDups("banana")).to.equal("ban");
    });

    it("should handle strings with spaces correctly", () => {
        expect(removeDups("hello world")).to.equal("helo wrd");
    });

    it("should remove duplicate numbers but keep unique ones", () => {
        expect(removeDups("112233")).to.equal("123");
    });

    it("should handle mixed characters (letters, numbers, symbols)", () => {
        expect(removeDups("aabbcc1122!!")).to.equal("abc12!");
    });

    it("should return an empty string when input is empty", () => {
        expect(removeDups("")).to.equal("");
    });

    it("should return the same string if there are no duplicates", () => {
        expect(removeDups("abc")).to.equal("abc");
    });

    it("should be case-sensitive (treat 'A' and 'a' as different)", () => {
        expect(removeDups("aAaA")).to.equal("aA");
    });

    it("should handle special characters", () => {
        expect(removeDups("!!##$$%%^^&&")).to.equal("!#$%^&");
    });

    it("should handle single character strings", () => {
        expect(removeDups("a")).to.equal("a");
    });
});

describe("Reverse In Paren Test Suites", () => {
    it("should reverse text inside parentheses", () => {
        expect(reverseInParen("Hello (world)")).to.equal("Hello (dlrow)");
    });

    it("should reverse multiple words inside parentheses", () => {
        expect(reverseInParen("(hello world)")).to.equal("(dlrow olleh)");
    });

    it("should reverse numbers inside parentheses", () => {
        expect(reverseInParen("(12345)")).to.equal("(54321)");
    });

    it("should handle multiple parentheses in a sentence", () => {
        expect(reverseInParen("I (love) (coding)")).to.equal("I (evol) (gnidoc)");
    });

    it("should keep words outside parentheses unchanged", () => {
        expect(reverseInParen("This is a (test)")).to.equal("This is a (tset)");
    });

    it("should return the same string if no parentheses are present", () => {
        expect(reverseInParen("No parentheses here")).to.equal("No parentheses here");
    });

    it("should be case-sensitive", () => {
        expect(reverseInParen("(Hello)")).to.equal("(olleH)");
    });

    it("should handle special characters inside parentheses", () => {
        expect(reverseInParen("(abc123!@#)")).to.equal("(#@!321cba)");
    });

    it("should return an empty string if the input is empty", () => {
        expect(reverseInParen("")).to.equal("");
    });

    it("should not reverse nested parentheses correctly (expected limitation)", () => {
        expect(reverseInParen("Nested (pa(rent)heses)")).to.equal("Nested (pa(tner)heses)");
    });
});
