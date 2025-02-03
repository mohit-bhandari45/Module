/***
 * @param {string} str
 * @returns {string}
 */


/* Can be used in checking palidrome or not, or in cryptography to encode a string */
// "secret code" → "edoc terces"
// "madam" → "madam"  →Palindrome
function reverse(str, flag = false) {
    if (!str || typeof str !== "string") return "";

    let reversed = [...str].reverse().join("");
    return flag ? reversed.trim() : reversed;
}


/* Can be used in checking palidrome or not, or in cryptography to encode a string */
// "Secret Message!" → "terceS !egasseM"
function reverseEach(sen, flag = false) {
    if (typeof sen !== "string" || sen.length === 0) return "";

    if (flag) sen = sen.trim();
    return sen.match(/(\s+|[^\s]+)/g)?.map(word => reverse(word)).join("") || "";
}

/* Helps in alternative indexing of search terms, seo optimization */
// "I love coding!" → "coding! love I"
// "love coding!" → "!gnidoc evol"
function reverseSen(sentence, flag = false, each = false) {
    if (typeof sentence !== "string" || sentence.length === 0) return "";

    let parts = sentence.match(/(\s+|[^\s]+)/g) || [];
    let reversed = parts.reverse().join('');
    let ans = flag ? reversed.trim() : reversed;
    return each ? reverseEach(ans) : ans;
}


/* Again can be used in encoding while the punctuations getting intact */
// "Secret Code!" → "edoC terceS!"
// The letters are reversed to make the message harder to understand, but the punctuation remains intact, making it still readable in terms of formatting.
function reverseLetters(str, each = false) {
    if (typeof str !== "string" || str.length === 0) return "";

    if (each) str = str.trim();

    let letters = str.replace(/[^a-zA-Z]/g, "").split("").reverse();
    return str.replace(/[a-zA-Z]/g, () => letters.shift());
}

/* Preserving punctuations */
function reverseWordsIntactPuncs(sentence, flag = false) {
    if (typeof sentence !== "string" || sentence.length === 0) return "";

    let words = sentence.match(/\b[a-zA-Z']+\b/g) || [];
    return sentence.replace(/\b[a-zA-Z']+\b/g, () => words.pop());
}

export { reverse, reverseEach, reverseSen, reverseLetters, reverseWordsIntactPuncs};