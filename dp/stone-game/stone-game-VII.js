// LC 1690
// https://leetcode.com/problems/stone-game-vii/

var stoneGameVII = function (piles) {
    var n = piles.length;
    var preSum = [...Array(n + 1)].fill(0);
    for (var i = 1; i <= n; i++) {
        preSum[i] = preSum[i - 1] + piles[i - 1];
    }
    // dp[j][i]: from j to i, the diff score of alice - bob
    var dp = new Array(n).fill(0).map(el => new Array(n).fill(0));
    for (var i = 0; i < n; i++)
        for (var j = i; j >= 0; j--) {
            if (i == j)
                dp[j][i] = 0;
            else {
                var value1 = preSum[i] - preSum[j] - dp[j][i - 1]; // take i
                var value2 = preSum[i + 1] - preSum[j + 1] - dp[j + 1][i]; // take j
                dp[j][i] = Math.max(dp[j][i], value1, value2);
            }
        }
    return dp[0][n - 1];
};
