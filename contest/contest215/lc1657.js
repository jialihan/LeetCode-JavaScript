/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    // 1) check length of two words
    if (word1.length !== word2.length)
        return false;
    
    var obj1 = {};
    [...word1].forEach(c => {
        if (obj1[c]) {
            obj1[c]++;
        }
        else {
            obj1[c] = 1;
        }
    });
    var obj2 = {};
    [...word2].forEach(c => {
        if (obj2[c]) {
            obj2[c]++;
        }
        else {
            obj2[c] = 1;
        }
    });

    // 2) check unique character is the same
    var s1 = Object.keys(obj1);
    var s2 = Object.keys(obj2);
    if (s1.length !== s2.length) {
        return false;
    }
    s1.sort();
    s2.sort();
    for (let j = 0; j < s1.length; j++) {
        if (s1[j] !== s2[j]) {
            return false;
        }
    }
    // 3) check each character's count is the same
    var a1 = Object.values(obj1);
    var a2 = Object.values(obj2);
    a1.sort((a, b) => a - b);
    a2.sort((a, b) => a - b);
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return false;
        }
    }
    return true;
};