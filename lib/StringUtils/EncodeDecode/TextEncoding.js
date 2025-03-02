/* Text Encoding and Decoding */
import iconv from "iconv-lite";
import chardet from "chardet";

const ENCODING_FORMAT = Object.freeze({
    DECIMAL: "decimal",
    COMMA: "comma",
    SPACE: "space",
    HEX: "hex",
    BINARY: "binary"
})

// Ascii stuff
class Ascii {
    /***
     * @param {string} text - The input string to encode
     * @param {format} format - The format of output ("decimal", "space", "binary", "hex", "comma")
     * @returns {string} - Encoded String 
     */

    encode(text, format = ENCODING_FORMAT.DECIMAL) {
        if (typeof text !== "string") throw new TypeError("Input must be a string");

        /* By default converting to decimal itself */
        const asciiCodes = text.split("").map(char => char.charCodeAt(0));

        switch (format) {
            case "decimal":
                return asciiCodes.join(" ");

            case "comma":
                return asciiCodes.join(",");

            case "space":
                return asciiCodes.join(" ");

            case "hex":
                return asciiCodes.map(code => code.toString(16)).join(" ");

            case "binary":
                return asciiCodes.map(code => code.toString(2).padStart(8, 0)).join(" ");

            default:
                throw new Error("Unsupported format. Use 'decimal', 'hex', 'binary', 'space', or 'comma'.");
        }
    }

    decode(asciiStr) {
        if (typeof asciiStr !== "string") throw new TypeError("Input must be a string");
        if (!asciiStr) return "";

        asciiStr = asciiStr.trim().replace(/\s+/g, " ");
        if (asciiStr.length === 0) return "";

        let asciiCodes;

        if (/^[01\s]+$/.test(asciiStr) && asciiStr.replace(/\s/g, "").length % 8 === 0) {
            asciiCodes = asciiStr.split(" ").map(code => parseInt(code, 2));
        } else if (/^[0-9,\s]+$/.test(asciiStr)) {
            asciiCodes = asciiStr.split(/[,\s]+/).map(Number);
        } else if (/^[0-9a-fA-F\s]+$/.test(asciiStr)) {
            asciiCodes = asciiStr.split(" ").map(code => parseInt(code, 16));
        } else {
            throw new Error("Unknown encoding format. Cannot decode.");
        }

        return asciiCodes.map(code => String.fromCharCode(code)).join("");
    }
}

class ISO {
    encodings = {
        ISO_8859_1: "ISO-8859-1", // Latin-1 (Western Europe)
        ISO_8859_2: "ISO-8859-2", // Central European languages
        ISO_8859_3: "ISO-8859-3", // South European (Maltese, Esperanto)
        ISO_8859_4: "ISO-8859-4", // Nordic/Baltic languages
        ISO_8859_5: "ISO-8859-5", // Cyrillic
        ISO_8859_6: "ISO-8859-6", // Arabic
        ISO_8859_7: "ISO-8859-7", // Greek
        ISO_8859_8: "ISO-8859-8", // Hebrew
        ISO_8859_9: "ISO-8859-9", // Turkish
        ISO_8859_15: "ISO-8859-15", // Latin-9
    };

    /**
     * @param {string} text
     * @param {string} format
     * @returns {Buffer} - encoded text
     * @throws {TypeError} - if input is not a string
     */
    encode(text, format = "ISO-8859-1") {
        if (typeof text !== "string") {
            throw new TypeError("Input must be a string");
        }
        return iconv.encode(text, format);
    }

    /**
     * @param {Buffer} buffer
     * @param {string} format
     * @returns {string} - decoded text
     * @throws {TypeError} - if input is not a Buffer
     */
    decode(buffer, format) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError("Input must be a Buffer");
        }
        return iconv.decode(buffer, format);
    }
}

class UTF {
    // UTF-32 is not supported much
    /**
     * Encodes a string into a Buffer using the specified encoding format.
     * @param {string} text - The text to encode.
     * @param {string} format - The encoding format.
     * @returns {Buffer} - The encoded Buffer.
     * @throws {TypeError} - If input is not a string.
     */
    encode(text, format) {
        if (typeof text !== "string") {
            throw new TypeError("Input must be a string");
        }
        return iconv.encode(text, format);
    }

    /**
     * Decodes a Buffer into a string using the specified encoding format.
     * @param {Buffer} buffer - The buffer to decode.
     * @param {string} format - The encoding format.
     * @returns {string} - The decoded string.
     * @throws {TypeError} - If input is not a Buffer.
     */
    decode(buffer, format) {
        if (!Buffer.isBuffer(buffer)) {
            throw new TypeError("Input must be a Buffer");
        }

        return iconv.decode(buffer, format);
    }
}

export {
    Ascii, ENCODING_FORMAT,
    ISO, UTF
}