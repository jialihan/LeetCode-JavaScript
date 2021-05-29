// LC 877
// https://leetcode.com/problems/stone-game/

// DP Solution
// [5] alex wins with 5
// [4,5] alex wins with 5
// dp[i][j]: from i to j score of the first player
// dp[i][i] = piles[i];
// dp[i][j] = (piles[i] - dp[i+1][j]) OR (piles[j] - dp[i][j-1])
var stoneGame = function (piles) {
    var n = piles.length;
    var dp = new Array(n).fill(0).map(el => new Array(n).fill(-Infinity));
    for (var i = 0; i < n; i++) {
        for (var j = i; j >= 0; j--) {
            if (j === i) {
                dp[i][i] = piles[i];
            }
            else {
                dp[j][i] = Math.max(dp[j][i], piles[j] - dp[j + 1][i], piles[i] - dp[j][i - 1]);
            }
        }
    }
    return dp[0][n - 1] > 0;
};

// Greedy solution
// this is a simple prob just always take the largest value
// use two value to record two player's score
// two player takes the largest value in sequence
var stoneGame2 = function (piles) {
    piles.sort((a, b) => b - a);
    var val1 = 0, val2 = 0;
    while (piles.length > 0) {
        val1 += piles.shift();
        if (piles.length > 0) {
            val2 += piles.shift();
        }
    }
    return val1 > val2;
};