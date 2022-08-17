/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  const m = maze.length;
  const n = maze[0].length;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  const dp = new Array(m).fill(0).map((el) => new Array(n).fill(-1));

  function dfs(x, y, dist) {
    if (x === destination[0] && y === destination[1]) {
      return;
    }
    for (const d of dir) {
      let i = x,
        j = y;
      let step = dist;
      while (
        i + d[0] < m &&
        i + d[0] >= 0 &&
        j + d[1] < n &&
        j + d[1] >= 0 &&
        maze[i + d[0]][j + d[1]] !== 1
      ) {
        i += d[0];
        j += d[1];
        step++;
      }
      if (dp[i][j] === -1 || step < dp[i][j]) {
        dp[i][j] = step;
        dfs(i, j, step);
      }
    }
  }
  dfs(start[0], start[1], 0);
  return dp[destination[0]][destination[1]];
};

/**
 * Question: why not visited array?
 */
//  https://leetcode.com/problems/the-maze-ii/discuss/98401/JAVA-Accepted-DFS
// since we use dist[][] array here, if dist !== -1 we do the dfs, similar to visited array to limit the recursion times.
