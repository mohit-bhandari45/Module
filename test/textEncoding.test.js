import { expect } from "chai";
import { Ascii, ENCODING_FORMAT, ISO } from "../index.js";

describe("Ascii Encoding", () => {
    const as = new Ascii();

    describe("encode", () => {
        it("should encode text to binary", () => {
            expect(as.encode("Hello", ENCODING_FORMAT.BINARY)).to.equal("01001000 01100101 01101100 01101100 01101111");
            expect(as.encode("ABC", ENCODING_FORMAT.BINARY)).to.equal("01000001 01000010 01000011");
        })

        it("should encode text to decimal", () => {
            expect(as.encode("Hello", ENCODING_FORMAT.DECIMAL)).to.equal("72 101 108 108 111");
            expect(as.encode("ABC", ENCODING_FORMAT.DECIMAL)).to.equal("65 66 67");
        })

        it("should encode text to hex", () => {
            expect(as.encode("Hello", ENCODING_FORMAT.HEX)).to.equal("48 65 6c 6c 6f");
            expect(as.encode("ABC", ENCODING_FORMAT.HEX)).to.equal("41 42 43");
        })

        it("should throw an error for unknown formats", () => {
            expect(() => as.encode("Hello", "unknown")).to.throw("Unsupported format. Use 'decimal', 'hex', 'binary', 'space', or 'comma'.");
        });
    })

    describe("decode", () => {
        it("should decode binary to text", () => {
            expect(as.decode("01001000 01100101 01101100 01101100 01101111")).to.equal("Hello");
            expect(as.decode("01000001 01000010 01000011")).to.equal("ABC");
        });

        it("should decode decimal to text", () => {
            expect(as.decode("72 101 108 108 111")).to.equal("Hello");
            expect(as.decode("65,66,67")).to.equal("ABC");
        });

        it("should decode hexadecimal to text", () => {
            expect(as.decode("48 65 6c 6c 6f")).to.equal("Hello");
            expect(as.decode("41 42 43")).to.equal(")*+");
        });

        it("should handle extra spaces and still decode correctly", () => {
            expect(as.decode("  01001000   01100101 01101100 01101100 01101111   ")).to.equal("Hello");
            expect(as.decode("   72   101   108 108 111   ")).to.equal("Hello");
        });

        it("should return an empty string for empty input", () => {
            expect(as.decode("")).to.equal("");
            expect(as.decode("   ")).to.equal("");
        });

        it("should throw an error for unknown formats", () => {
            expect(() => as.decode("random text here")).to.throw("Unknown encoding format. Cannot decode.");
            expect(() => as.decode("123XYZ")).to.throw("Unknown encoding format. Cannot decode.");
        });

        it("should correctly decode single characters", () => {
            expect(as.decode("01001000")).to.equal("H");
            expect(as.decode("72")).to.equal("H");
            expect(as.decode("48")).to.equal("0");
        });
    })
})

describe("ISO Encoding & Decoding", () => {
    const iso = new ISO();

    describe("Encoding", () => {
        it("should encode a string into an ISO-8859-1 buffer", () => {
            const text = "Héllo Wörld!";
            const encoded = iso.encode(text);
            expect(Buffer.isBuffer(encoded)).to.be.true;
            expect(encoded.toString("latin1")).to.equal(text);
        });

        it("should encode an empty string to an empty buffer", () => {
            const encoded = iso.encode("");
            expect(Buffer.isBuffer(encoded)).to.be.true;
            expect(encoded.length).to.equal(0);
        });

        it("should encode special characters correctly", () => {
            const text = "Çüéâäàåéèù"; // Special Latin-1 characters
            const encoded = iso.encode(text);
            expect(Buffer.isBuffer(encoded)).to.be.true;
            expect(encoded.toString("latin1")).to.equal(text);
        });
    });

    describe("Decoding", () => {
        it("should decode an ISO-8859-1 buffer back to a string", () => {
            const text = "Héllo Wörld!";
            const encoded = iso.encode(text);
            const decoded = iso.decode(encoded);
            expect(decoded).to.equal(text);
        });

        it("should decode an empty buffer to an empty string", () => {
            const encoded = Buffer.from("", "latin1");
            const decoded = iso.decode(encoded);
            expect(decoded).to.equal("");
        });

        it("should decode special characters correctly", () => {
            const text = "Çüéâäàåéèù";
            const encoded = iso.encode(text);
            const decoded = iso.decode(encoded);
            expect(decoded).to.equal(text);
        });
    });
});
