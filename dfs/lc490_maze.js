/**
 * BFS Space O(1) visited array
 */
var hasPath = function (maze, start, destination) {
  const m = maze.length;
  const n = maze[0].length;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  const q = [start];
  maze[start[0]][start[1]] = -1; // visited
  while (q.length > 0) {
    const [x, y] = q.shift();
    if (x === destination[0] && y === destination[1]) {
      return true;
    }

    for (const d of dir) {
      let i = x,
        j = y;
      while (i < m && i >= 0 && j < n && j >= 0 && maze[i][j] !== 1) {
        i += d[0];
        j += d[1];
      }
      i -= d[0];
      j -= d[1];
      if (maze[i][j] !== -1) {
        maze[i][j] = -1; // visited
        q.push([i, j]);
      }
    }
  }
  return false;
};

/**
 * DFS Space O(1) visited array
 */
var hasPath = function (maze, start, destination) {
  const m = maze.length;
  const n = maze[0].length;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];

  function dfs(x, y) {
    if (x === destination[0] && y === destination[1]) {
      return true;
    }
    if (maze[x][y] === -1) {
      // visited
      return false;
    }
    maze[x][y] = -1;
    for (const d of dir) {
      let i = x,
        j = y;
      while (i < m && i >= 0 && j < n && j >= 0 && maze[i][j] !== 1) {
        i += d[0];
        j += d[1];
      }
      i -= d[0];
      j -= d[1];
      if (dfs(i, j)) {
        return true;
      }
    }
  }
  if (dfs(start[0], start[1])) {
    return true;
  }
  return false;
};
