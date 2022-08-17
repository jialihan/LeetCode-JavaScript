// 7 8 9
// 4 5 6
// 1 2 4
// X  0 X
// each step can only go [-1, 2], [-1, -2], [1, 2], [1,-2], [2, 1], [2, -1], [-2, 1], [-2, -1]
// m * n = 4 * 3
const dir = [
  [-1, 2],
  [-1, -2],
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1]
];
const grid = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [-1, 0, -1]
];
// from center how many steps to go to dest, return -1 if cannot reached
function canReach(x, y, dest_x, dest_y) {
  const m = grid.length,
    n = grid[0].length;
  const visited = new Array(m).fill(0).map((el) => new Array(n).fill(false));
  const q = [[x, y]];
  let step = 0;
  while (q.length > 0) {
    const size = q.length;
    for (let k = 0; k < size; k++) {
      const [i, j] = q.shift();
      if (i === dest_x && j === dest_y) {
        return step;
      }
      visited[i][j] = true;
      for (const d of dir) {
        const ii = i + d[0];
        const jj = j + d[1];
        if (ii >= 0 && ii < m && jj < n && jj >= 0 && !visited[ii][jj]) {
          q.push([ii, jj]);
        }
      }
    }
    step++;
  }
  return -1;
}
