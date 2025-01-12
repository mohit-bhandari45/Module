import { caps, allCaps } from "../index.js";
import { expect } from "chai";

describe("Caps", () => {
    it("should caps the first letter of a word", () => {
        const input="mOHIT";
        const output="Mohit";
        expect(caps(input)).to.be.equal(output);
    });

    it("should handle a single letter string", () => {
        const result = caps("m");
        expect(result).to.be.equal("M");
    });

    it("should not change a string that already starts with an uppercase letter", () => {
        const result = caps("Mohit");
        expect(result).to.be.equal("Mohit");
    });

    it("should return an empty string for a non-string input", () => {
        const result = caps(34);
        expect(result).to.be.equal("");
    });

    it("should return an empty string for an empty input", () => {
        const result = caps("");
        expect(result).to.be.equal("");
    })

    it("should not modify strings starting with numbers or special characters", () => {
        const result = caps("123and");
        expect(result).to.be.equal("123and")
    })
})

describe("All Caps function", () => {
    it('should capitalize the first letter of each word', () => {
        const input = 'mo hi t bh ann da ri';
        const output = 'Mo Hi T Bh Ann Da Ri';
        expect(allCaps(input)).to.be.equal(output)
    })
})