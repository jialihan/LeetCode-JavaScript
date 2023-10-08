// Referenced solutions:
// 1. DP: https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4143915/c-dp-memo-simple/
// 2. dfs + memo: https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4143961/simple-c-topdown-dp-approach-recursion-memorization/

/**
 *
 * @param {string} s1
 * @param {string} s2
 * @param {number} x <= 10^9
 * @return {number}
 */
var minOperations = function (s1, s2, x) {
  const d = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      d.push(i);
    }
  }
  if (d.length % 2) {
    return -1;
  }
  const n = d.length;
  if (n === 0) {
    return 0;
  }
  const dp = new Array(n).fill(Infinity);
  for (let i = 0; i < n; i++) {
    dp[i] = (i > 0 ? dp[i - 1] : 0) + x; // option 1: flip with x
    if (i > 0) {
      dp[i] = Math.min(dp[i], (i > 1 ? dp[i - 2] : 0) + 2 * (d[i] - d[i - 1])); // option 2: double because we add x to a single flip
    }
  }
  return Math.floor(dp[n - 1] / 2);
};
