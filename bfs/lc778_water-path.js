/**
 *    0 | 2
 *    1 | 3
 */
var swimInWater = function (grid) {
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  const minq = new MinPriorityQueue({ priority: (bid) => bid[0] });
  const m = grid.length;
  const n = grid[0].length;
  minq.enqueue([grid[0][0], 0, 0]);
  while (!minq.isEmpty()) {
    const [val, x, y] = minq.dequeue().element;
    grid[x][y] = -1;
    if (x === n - 1 && y === n - 1) {
      return val;
    }
    for (const d of dir) {
      let i = x + d[0];
      let j = y + d[1];
      if (i >= 0 && i < m && j >= 0 && j < n && grid[i][j] !== -1) {
        minq.enqueue([Math.max(val, grid[i][j]), i, j]);
      }
    }
  }
  return -1;
};
