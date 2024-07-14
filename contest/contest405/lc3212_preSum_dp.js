/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  // dp[i][j][0]: x's count
  // dp[i][j][1]: y's count
  const dp = new Array(m)
    .fill(0)
    .map((el) => new Array(n).fill(0).map((el) => new Array(3).fill(0)));
  // 1st row
  for (let i = 0; i < n; i++) {
    const flag = grid[0][i] === "X" ? 0 : grid[0][i] === "Y" ? 1 : 2;
    if (i > 0) {
      dp[0][i] = [...dp[0][i - 1]];
    }
    dp[0][i][flag]++;
    if (dp[0][i][0] > 0 && dp[0][i][0] === dp[0][i][1]) {
      ans++;
    }
  }

  // 1st colomn
  for (let i = 1; i < m; i++) {
    const flag = grid[i][0] === "X" ? 0 : grid[i][0] === "Y" ? 1 : 2;
    dp[i][0] = [...dp[i - 1][0]];
    dp[i][0][flag]++;
    if (dp[i][0][0] > 0 && dp[i][0][0] === dp[i][0][1]) {
      ans++;
    }
  }
  // other cells
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) {
      dp[i][j] = [...dp[i - 1][j]].map((el, index) => {
        return el + dp[i][j - 1][index] - dp[i - 1][j - 1][index];
      });
      const flag = grid[i][j] === "X" ? 0 : grid[i][j] === "Y" ? 1 : 2;
      dp[i][j][flag]++;
      if (dp[i][j][0] > 0 && dp[i][j][0] === dp[i][j][1]) {
        ans++;
      }
    }
  return ans;
};
