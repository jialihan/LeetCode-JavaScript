// https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // 1. collect zeros
  const zeros = [];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  if (zeros.length === 0) {
    return 0;
  }
  let ans = Infinity;
  for (const [x, y] of zeros) {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) {
        const d = Math.abs(i - x) + Math.abs(y - j);
        if (grid[i][j] > 1) {
          grid[i][j]--;
          grid[x][y]++;
          ans = Math.min(ans, d + minimumMoves(grid));
          // back tracking
          grid[i][j]++;
          grid[x][y]--;
        }
      }
  }
  return ans;
};
