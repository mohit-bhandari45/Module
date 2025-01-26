/***
 * @param {string} str
 * @returns {string}
 */

/* Capitalize */
function caps(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function allCaps(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

/* Reversing strings functions */
function reverseString(str) {
    if (str.length === 0 || typeof str !== "string") return "";

    return str
        .split(" ")
        .reverse()
        .join(" ")
}

export { caps, allCaps, reverseString, levenshtein };