/**
 *  * 3122. Minimum Number of Operations to Satisfy Conditions
 * referenced solution: https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052516/compress-2d-vector-into-1d-and-apply-dp-simple-solution/
 * referenced solution2: https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5052486/dp-monster-style/
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // cnt[j][val]: count of col j with all numbers = val, val = [0,9].
  const cnt = new Array(n).fill(0).map((el) => new Array(10).fill(0));
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      cnt[j][grid[i][j]]++;
    }
  }
  // dp[col_index][pre_num]: value of operations
  const dp = new Array(n).fill(0).map((el) => new Array(10).fill(-1));
  function dfs(idx, pre) {
    if (idx >= n) {
      return 0;
    }
    if (dp[idx][pre] === -1) {
      let cur = Infinity;
      for (let v = 0; v < 10; v++) {
        if (idx === 0 || v !== pre) {
          // value = other cnt of cur_col to 'v' + dfs(next column)
          cur = Math.min(cur, m - cnt[idx][v] + dfs(idx + 1, v));
        }
      }
      dp[idx][pre] = cur;
    }
    return dp[idx][pre];
  }
  return dfs(0, 0);
};
