// https://leetcode.com/problems/shortest-path-in-binary-matrix/

/**
 * BFS with path printed out
 * @param {*} grid
 * @returns
 */
var shortestPathBinaryMatrix = function (grid) {
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ];
  if (grid[0][0] === 1) {
    return -1;
  }
  const q = [[[0, 0], [[0, 0]]]]; // point, path
  const n = grid.length;
  grid[0][0] = 2; // visited
  let cnt = 0;
  while (q.length > 0) {
    const size = q.length;
    cnt++;
    for (let i = 0; i < size; i++) {
      const [cur, path] = q.shift();
      if (cur[0] === n - 1 && cur[1] === n - 1) {
        // console.log("find path: ", path);
        return cnt;
      }
      for (const d of dir) {
        let x = d[0] + cur[0];
        let y = d[1] + cur[1];
        if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === 0) {
          const newPath = [...path, [x, y]];
          q.push([[x, y], newPath]);
          grid[x][y] = 2;
        }
      }
    }
  }
  return -1;
};
