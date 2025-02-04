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

    if (flag) sentence = sentence.trim();

    let words = sentence.match(/\b[a-zA-Z']+\b/g) || [];
    return sentence.replace(/\b[a-zA-Z']+\b/g, () => words.pop());
}

/* for fun */
// "hello world" → "holle werld"
function reverseVowels(sen, flag = false) {
    if (typeof sen !== "string" || sen.length === 0) return "";

    if (flag) sen = sen.trim();

    let vowels = sen.match(/[aeiouAEIOU]/g) || [];
    if (vowels.length == 0) return sen;
    return sen.replace(/[aeiouAEIOU]/g, () => vowels.pop());
}

// "Secret Code!" → "Cercet Sode!"
function reverseCons(sen, flag = false) {
    if (typeof sen !== "string" || sen.length === 0) return "";

    if (flag) sen = sen.trim();

    let consonants = sen.match(/[^aeiouAEIOU\s\W\d]/g) || [];
    if (consonants.length == 0) return sen;
    return sen.replace(/[^aeiouAEIOU\s\W\d]/g, () => consonants.pop());
}

function mirrorSen(sen, flag = false) {
    if (typeof sen !== "string" || sen.length === 0) return "";

    if (flag) sen = sen.trim();

    return sen + " " + reverse(sen);
}

function shuffleWords(sen) {
    if (typeof sen !== "string" || sen.length === 0) return "";

    let words = sen.split(/\s+/);
    return words.sort(() => Math.random() - 0.5).join(" ");
}


function countChars(sen, char) {
    if (typeof sen !== "string" || sen.length == 0) return 0;

    return sen.split("").map(c => c === char).filter(Boolean).length;
}

export { reverse, reverseEach, reverseSen, reverseLetters, reverseWordsIntactPuncs, reverseVowels, reverseCons, mirrorSen, shuffleWords, countChars };