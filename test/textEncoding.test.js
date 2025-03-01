import { expect } from "chai";
import { Ascii, ENCODING_FORMAT, ISO, UTF } from "../index.js";

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

describe("ISO Encoding/Decoding for Multiple Encodings", function () {
    let iso = new ISO();

    const testCases = [
        { encoding: "ISO_8859_1", text: "ÁÉÍÓÚÑçöø" }, // Latin-1 (Western Europe)
        { encoding: "ISO_8859_2", text: "ĄČĘŁŃÓŚŹŻ" }, // Central European
        { encoding: "ISO_8859_3", text: "ĦĊĠĦġĜ" }, // Maltese & Esperanto
        { encoding: "ISO_8859_4", text: "ÄÖÜÕŠŽ" }, // Baltic languages
        { encoding: "ISO_8859_5", text: "ДЖЖЁИЙЛ" }, // Cyrillic (Russian, Bulgarian)
        { encoding: "ISO_8859_6", text: "العربية" }, // Arabic
        { encoding: "ISO_8859_7", text: "ΑΒΓΔΕΖΗΘΙΚΛΜΝ" }, // Greek
        { encoding: "ISO_8859_8", text: "אבגדהוזחטי" }, // Hebrew
        { encoding: "ISO_8859_9", text: "ĞÜŞİÖÇ" }, // Turkish
        { encoding: "ISO_8859_15", text: "€ŠŒŽšœžŸ" }, // Latin-9 (includes Euro symbol)
    ];

    testCases.forEach(({ encoding, text }) => {
        it(`should correctly encode and decode using ${encoding}`, () => {
            const encoded = iso.encode(text, iso.encodings[encoding]);
            const decoded = iso.decode(encoded, iso.encodings[encoding]);
            expect(decoded).to.equal(text);
        });
    });

    it("should return an empty string when encoding an empty string", () => {
        const encoded = iso.encode("", iso.encodings.ISO_8859_1);
        const decoded = iso.decode(encoded, iso.encodings.ISO_8859_1);
        expect(decoded).to.equal("");
    });

    it("should throw an error for unsupported encoding", () => {
        expect(() => iso.encode("Hello", "Unsupported-Encoding")).to.throw();
    });

    it("should throw an error when input is not a string", () => {
        expect(() => iso.encode(12345, iso.encodings.ISO_8859_1)).to.throw();
    });

    it("should decode a valid ISO-8859-5 buffer to correct string", () => {
        const buffer = Buffer.from([0xC4, 0xC5, 0xC6]); // Sample ISO-8859-5 bytes
        const decoded = iso.decode(buffer, iso.encodings.ISO_8859_5);
        expect(decoded).to.be.a("string");
    });
});

describe("UTF Encoding and Decoding", () => {
    const utf = new UTF();

    const testCases = [
        { text: "Hello, World!", encoding: "utf-8" },
        { text: "你好，世界！", encoding: "utf-8" },
        { text: "😊🔥🎉", encoding: "utf-8" },

        { text: "Hello, World!", encoding: "utf-16le" },
        { text: "你好，世界！", encoding: "utf-16le" },
        { text: "😊🔥🎉", encoding: "utf-16le" },

        { text: "Hello, World!", encoding: "utf-16be" },
        { text: "你好，世界！", encoding: "utf-16be" },
        { text: "😊🔥🎉", encoding: "utf-16be" },
    ];

    testCases.forEach(({ text, encoding }) => {
        it(`should correctly encode and decode "${text}" in ${encoding}`, () => {
            const encoded = utf.encode(text, encoding);
            expect(encoded).to.be.instanceOf(Buffer);

            const decoded = utf.decode(encoded, encoding);
            expect(decoded).to.be.equal(text);
        });
    });

    it("should throw an error for unsupported encoding", () => {
        expect(() => utf.encode("Test", "utf-128")).to.throw();
    });

    it("should throw an error when encoding a non-string input", () => {
        expect(() => utf.encode(12345, "utf-8")).to.throw(TypeError, "Input must be a string");
    });

    it("should throw an error when decoding a non-buffer input", () => {
        expect(() => utf.decode("NotABuffer", "utf-8")).to.throw(TypeError, "Input must be a Buffer");
    });
});
