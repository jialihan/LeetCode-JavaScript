/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const dir = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0]
  ];
  const m = grid.length;
  const n = grid[0].length;
  let max = 0,
    area;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        area = 0;
        dfs(grid, i, j);
        max = Math.max(area, max);
      }
    }
  }
  function dfs(arr, x, y) {
    arr[x][y] = -1;
    area++;
    for (const d of dir) {
      const xx = x + d[0];
      const yy = y + d[1];
      if (xx < 0 || xx >= m || yy < 0 || yy >= n || grid[xx][yy] !== 1) {
        continue;
      }
      dfs(arr, xx, yy);
    }
  }
  return max;
};
