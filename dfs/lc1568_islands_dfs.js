/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  let cnt = numIslands(grid);
  console.log(cnt);
  if (cnt === 0 || cnt > 1) {
    // all water or multi-islands
    return 0;
  }
  // check if need to return 1
  const m = grid.length;
  const n = grid[0].length;
  let islands = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        count = numIslands(grid);
        console.log("count =", count);
        if (count > 1 || count === 0) {
          return 1;
        }
        grid[i][j] = 1;
      }
    }
  return 2;
};

function numIslands(grid) {
  const dir = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0]
  ];
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Array(m).fill(0).map((el) => new Array(n).fill(false));
  let islands = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        islands++;
        dfs(grid, i, j);
      }
    }
  }
  function dfs(arr, x, y) {
    visited[x][y] = true;
    for (const d of dir) {
      const xx = x + d[0];
      const yy = y + d[1];
      if (
        xx < 0 ||
        xx >= m ||
        yy < 0 ||
        yy >= n ||
        grid[xx][yy] !== 1 ||
        visited[xx][yy]
      ) {
        continue;
      }
      dfs(arr, xx, yy);
    }
  }
  return islands;
}
