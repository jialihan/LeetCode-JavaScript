// https://leetcode.com/problems/knight-probability-in-chessboard/

var knightProbability = function (n, k, row, column) {
  const dp = new Array(26)
    .fill(0)
    .map((el) => new Array(26).fill(0).map((el) => new Array(101).fill(0)));

  const dir = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1]
  ];
  function dfs(x, y, k) {
    if (x >= n || x < 0 || y < 0 || y >= n) {
      return 0; // out of board
    }
    if (k <= 0) {
      return 1; // remain on board
    }
    if (dp[x][y][k] > 0) {
      return dp[x][y][k]; // if already computed state x, y, k
    }
    let ans = 0;
    for (const d of dir) {
      const xx = x + d[0];
      const yy = y + d[1];
      ans += dfs(xx, yy, k - 1);
    }
    dp[x][y][k] = ans / 8;
    return dp[x][y][k];
  }
  return dfs(row, column, k);
};
