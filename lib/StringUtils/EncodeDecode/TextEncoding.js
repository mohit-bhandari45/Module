/* Text Encoding and Decoding */
import iconv from "iconv-lite";

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
    /**
     * @param {string} text
     * @returns {string} - encoded text
     */
    encode(text) {
        return iconv.encode(text, "ISO-8859-1");
    }

    decode(buffer) {
        return iconv.decode(buffer, "ISO-8859-1");
    }
}

export {
    Ascii, ENCODING_FORMAT,
    ISO
}