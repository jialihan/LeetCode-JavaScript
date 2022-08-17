// https://leetcode.com/problems/count-number-of-special-subsequences/discuss/1823319/C%2B%2B-7-line

var countSpecialSubsequences = function (nums) {
  const dp = [0, 0, 0]; // dp ending with 0, 1, 2
  const mod = 10 ** 9 + 7; // Math.pow(10, 9) + 7
  for (const num of nums) {
    if (num === 2) {
      dp[2] = (dp[1] + 2 * dp[2]) % mod;
    } else if (num === 1) {
      dp[1] = (dp[0] + 2 * dp[1]) % mod;
    } else if (num === 0) {
      dp[0] = (1 + dp[0] * 2) % mod;
    }
  }
  return dp[2];
};
