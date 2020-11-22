// 1662. Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {

    word1.sort((a, b) => a - b);
    word2.sort((a, b) => a - b);
    var s1 = word1.join('');
    var s2 = word2.join('');
    return s1 === s2;

};