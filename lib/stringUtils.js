/***
 * @param {string} str
 * @returns {string}
 */

/* Capitalize */

// Caps first letter
function capsFirst(str, flag = false) {
    if (typeof str !== "string" || str.length === 0) return "";

    if (flag) str = str.trim();

    return str.replace(/\s*(\w)/, (match, firstletter) => match.replace(firstletter, firstletter.toUpperCase()));
}

// Caps each word of a sentence
function capsEach(str, flag = false) {
    if (typeof str !== "string" || str.length === 0) return "";

    if (flag) str = str.trim();

    return str.replace(/(?:^|\s|[-_.,;!&+*\/=<>?^])\w/g, (match) => match.toUpperCase());
}

// Toggle Case
function toggleCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";

    return str
        .split("")
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join("");
}

//sentence casing
function senCase(str, flag = false) {
    if (typeof str !== "string" || str.trim().length === 0) return "";

    if (flag) str = str.trim();
    str = str.toLowerCase();

    return str.replace(/(?:^|\s|[-_.,;!&+*\/=<>?^])\w/, (match) => match.toUpperCase());
}

//title casing

function titleCase(str) {
    if (typeof str !== "string") return "";
    const smallWords = [
        "a", "an", "and", "as", "at", "but", "by", "for", "if", "in", "nor", "of", 
        "on", "or", "so", "the", "to", "up", "yet", "with", "about", "as", "from", 
        "into", "like", "near", "off", "onto", "over", "past", "since", "than", 
        "till", "until", "upon", "via", "with", "within", "without"
    ];

    str = str.trim();

    return str
        .split(" ")
        .map((word, index) => {
            word = word.replace(/[^a-zA-Z!'.\s-]+/g, "");

            if (word.endsWith("!") || word.endsWith(".")) {
                word = word.replace(/([!.\s])\1+$/, "$1");
            }

            if (smallWords.includes(word.toLowerCase()) && index !== 0) {
                return word.toLowerCase();
            }

            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
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

/* String Distance */
function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        throw new Error("Strings must be of equal length");
    }

    let distance = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) != str2.charAt(i)) {
            distance += 1;
        }
    }

    return distance;
}

function levenshtein(str1, str2) {
    return levenshteinHelper(str1, str2);
}

function levenshteinHelper(str1, str2) {
    const n = str1.length;
    const m = str2.length;

    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let i = 0; i <= m; i++) {
        dp[0][i] = i;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                const del = 1 + dp[i - 1][j];
                const insert = 1 + dp[i][j - 1];
                const swap = 1 + dp[i - 1][j - 1];

                dp[i][j] = Math.min(del, Math.min(insert, swap));
            }
        }
    }

    return dp[n][m];
}

/* Anagram checking */
function isAnagram(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('Both inputs must be strings');
    }

    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}


/* String Compression */
function compressString(str) {
    if (str.length === 0) return "";

    let result = "";
    let count = 1;

    for (let i = 0; i < str.length - 1; i++) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            count++;
        } else {
            result += count + str.charAt(i);
            count = 1;
        }
    }

    result += count + str.charAt(str.length - 1);

    return result;
}

export {
    capsFirst, capsEach, toggleCase, senCase, titleCase,
    reverseString,
    hammingDistance, levenshtein,
    isAnagram, compressString
};