// LC 1686
// https://leetcode.com/problems/stone-game-vi/

/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
    // The optimal will be: choose the index that (alice[i]+bob[i]) is the max
    var stones = [];
    for (var i = 0; i < aliceValues.length; i++) {
        stones.push([aliceValues[i] + bobValues[i], i]);
    }
    stones.sort((a, b) => b[0] - a[0]);
    var res1 = 0;
    var res2 = 0;
    for (var i = 0; i < aliceValues.length; i++) {
        var stone = stones.shift();
        if (i % 2 === 0) {
            res1 += aliceValues[stone[1]];
        }
        else {
            res2 += bobValues[stone[1]];
        }
    }
    if (res1 === res2) {
        return 0;
    }
    return res1 > res2 ? 1 : -1;

};