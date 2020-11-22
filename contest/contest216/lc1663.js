// 1663. Smallest String With A Given Numeric Value
// https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/

// Solution: Greedy
var getSmallestString = function (n, k) {
    var i = 1;
    var cur = k;
    var res = [];
    for (i = 1; i <= n; i++) {
        for (var c = 1; c <= 26; c++) {
            if ((cur - c) <= 26 * (n - i)) {
                res.push(c);
                cur = cur - c;
                break;
            }
        }
    }
    for (var j = 0; j < n; j++) {
        res[j] = String.fromCharCode(res[j] - 1 + 97);
    }
    return res.join('');
};