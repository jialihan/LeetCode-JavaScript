// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
var longestIncreasingPath = function (matrix) {
  // 9 --> 1
  // 9 --> 1
  // 4 --> max(1+dfs(9), 1+dfs(8)) --> visited 9 return 1, run dfs(8) 1 --> 2
  //   --> 2
  // 6 --> 1+1 => 2
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];
  const m = matrix.length;
  const n = matrix[0].length;
  let max = 0;
  const dp = new Array(m).fill(0).map((el) => new Array(n).fill(0));
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (!dp[i][j]) {
        max = Math.max(max, dfs(matrix, i, j, new Set()));
        // console.log("dfs at ", i, j, " max=", max);
      }
    }
  function dfs(arr, x, y, visited) {
    if (dp[x][y] > 0) {
      return dp[x][y];
    }
    let cur = 0;
    for (const d of dir) {
      const xx = x + d[0];
      const yy = y + d[1];
      if (xx >= 0 && xx < m && yy >= 0 && yy < n && arr[x][y] < arr[xx][yy]) {
        cur = Math.max(cur, dfs(arr, xx, yy, visited));
      }
    }
    dp[x][y] = cur + 1;
    return cur + 1;
  }
  return max;
};
