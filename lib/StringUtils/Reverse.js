/***
 * @param {string} str
 * @returns {string}
 */

function reverse(str, flag = false) {
    if (!str || typeof str !== "string") return "";

    let reversed = str.split("").reverse().join("");
    return flag ? reversed.trim() : reversed;
}

function reverseEach(sen, flag = false) {
    if (typeof sen !== "string" || sen.length === 0) return "";

    if (flag) sen = sen.trim();
    return sen.match(/(\s+|[^\s]+)/g)?.map(word => reverse(word)).join("") || "";
}

function reverseSen(sentence, flag = false, each = false) {
    if (typeof sentence !== "string" || sentence.length === 0) return "";

    let parts = sentence.match(/(\s+|[^\s]+)/g) || [];
    let reversed = parts.reverse().join('');
    let ans = flag ? reversed.trim() : reversed;
    return each ? reverseEach(ans) : ans;
}

function reverseLetters(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    let letters = str.replace(/[^a-zA-Z]/g, "").split("").reverse();
    return str.replace(/[a-zA-Z]/g, () => letters.shift());
}

export { reverse, reverseEach, reverseSen, reverseLetters };