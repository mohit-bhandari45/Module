import { expect } from "chai";
import {
    capsFirst, capsEach, toggleCase, senCase, titleCase, 
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