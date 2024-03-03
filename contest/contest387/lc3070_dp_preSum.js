/**
 * 3070. Count Submatrices with Top-Left Element and Sum Less Than k
 * similar to calc Rectangle Area
 * my solution: https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/4814310/js-presum-dp-calculate-rectangle-area/
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  let ans = 0;
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map((el) => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  if (dp[0][0] <= k) {
    ans++;
  }
  // sum 1st row
  for (let i = 1; i < n; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
    if (dp[0][i] <= k) {
      ans++;
    }
  }
  // sum 1st column
  for (let i = 1; i < m; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
    if (dp[i][0] <= k) {
      ans++;
    }
  }
  // sum any rectangle
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + grid[i][j];
      if (dp[i][j] <= k) {
        ans++;
      }
    }
  }
  return ans;
};
