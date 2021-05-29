dp[i][key]
// build the DP

var keys = ['gym', 'school', 'store'];
var dp = new Array(n).fill(0).map(el => new Array(k).fill(Infinity));

for (var i = 0; i < n; i++) {
    for (var key of keys) {
        if (blocks[i][key]) {
            dp[i][key] = 0;
        }
        else {
            var l = i - 1, r = i + 1;
            while (!blocks[l][key]) {
                l++;
            }
            while (!blocks[r][key]) {
                r++;
            }
            dp[i][key] = Math.min(i - l, r - i, dp[i][key]);
        }
    }
}
// find the max
var res = Infinity;
for (var i = 0; i < n; i++) {
    var curMax = Math.max(...dp[i]);
    res = Math.min(res, curMax);
}
return res;

// Solution 2: optimized DP
dp[i][key] = blocks[i][key] ? 0 : dp[i - 1][key] + 1;
// left to right
for (var i = 0; i < n; i++) {
    for (var key of keys) {
        if (blocks[i][key]) {
            dp[i][key] = 0;
            continue;
        }
        if (i > 0) {
            dp[i][key] = dp[i - 1][key] + 1;
        }
    }
}
for (var i = n - 2; i >= 0; i--) {
    for (var key of keys) {
        if (!blocks[i][key]])
        {
            dp[i][key] = Math.min(dp[i][key], dp[i + 1][key] + 1);
        }
    }
}
// find the max
var res = Infinity;
for (var i = 0; i < n; i++) {
    var curMax = Math.max(...dp[i]);
    res = Math.min(res, curMax);
}
return res;


