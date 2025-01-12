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
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

export { caps, allCaps };