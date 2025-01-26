import { caps, allCaps, reverseString } from "../index.js";
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