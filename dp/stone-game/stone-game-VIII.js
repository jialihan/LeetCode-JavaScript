// LC 1872
// https://leetcode.com/problems/stone-game-viii/

var stoneGameVIII = function (stones) {
    // dp[i]: diff score wheb the first player takes (0,...i) to start the game
    // dp[i] = max(sum[0..i] - dp[j]); (j= i+1, .... n-1)
    // first player pick: [0,...,i]
    // remaining for next player: [preSum(0..i), i+1, i+2,...,n-1]
    // So, it's the same as next player starts picking at [0,...j], here j = i+1, i+2, ..., n-1.

    var n = stones.length;
    var dp = new Array(n).fill(0);
    for (var i = 1; i < n; i++) {
        stones[i] += stones[i - 1];
    }
    dp[n - 1] = stones[n - 1];

    var curBest = dp[n - 1]; // to store the best dp[j] value
    var res = -Infinity;
    for (var i = n - 2; i >= 0; i--) {
        res = Math.max(curBest, res);
        curBest = Math.max(stones[i] - curBest, curBest);
    }
    return res;
}