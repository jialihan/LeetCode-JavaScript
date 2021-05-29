// LC 1510
// https://leetcode.com/problems/stone-game-iv/

var winnerSquareGame = function (n) {
    var dp = new Array(n + 1).fill(false);
    dp[1] = true;
    for (var i = 2; i <= n; i++) {
        var canWin = false;
        for (var j = 1; j * j <= i; j++) {
            // if alice take j^2, then nothing left for bob, alice win
            if (dp[i - j * j] == false) {
                canWin = true;
                break;
            }
        }
        dp[i] = canWin;
    }
    return dp[n];

};