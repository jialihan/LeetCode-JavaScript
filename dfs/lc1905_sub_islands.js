/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const dir = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0]
  ];
  const m = grid2.length;
  const n = grid2[0].length;
  const visited = new Array(m).fill(0).map((el) => new Array(n).fill(false));
  let isSub = true;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1 && !visited[i][j]) {
        isSub = true;
        dfs(grid1, grid2, i, j);
        if (isSub) {
          res++;
        }
      }
    }
  }
  function dfs(g1, g2, x, y) {
    visited[x][y] = true;
    if (g1[x][y] !== 1) {
      isSub = false;
    }
    for (const d of dir) {
      const xx = x + d[0];
      const yy = y + d[1];
      if (
        xx < 0 ||
        xx >= m ||
        yy < 0 ||
        yy >= n ||
        g2[xx][yy] !== 1 ||
        visited[xx][yy]
      ) {
        continue;
      }
      dfs(g1, g2, xx, yy);
    }
  }
  return res;
};

// https://leetcode.com/problems/count-sub-islands/
