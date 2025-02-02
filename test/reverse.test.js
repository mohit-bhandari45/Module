import { reverse, reverseEach, reverseLetters, reverseSen } from "../index.js";
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
        expect(reverseSen("Hello World",false,true)).to.equal("dlroW olleH");
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
