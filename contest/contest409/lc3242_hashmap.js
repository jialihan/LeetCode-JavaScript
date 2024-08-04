/**
 * @param {number[][]} grid
 */
var neighborSum = function (grid) {
  this.grid = grid;
  this.n = grid.length;
  this.map = new Map();
  for (let i = 0; i < this.n; i++)
    for (let j = 0; j < this.n; j++) {
      this.map.set(grid[i][j], [i, j]);
    }
  this.dir1 = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  this.dir2 = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
};

/**
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.adjacentSum = function (value) {
  const [i, j] = this.map.get(value);
  //console.log("val = ", i, j);
  let sum = 0;
  for (const d of this.dir1) {
    // console.log("cur d: ", d);
    const x = i + d[0];
    const y = j + d[1];

    if (x >= 0 && x < this.n && y >= 0 && y < this.n) {
      sum += this.grid[x][y];
    }
  }
  return sum;
};

/**
 * @param {number} value
 * @return {number}
 */
neighborSum.prototype.diagonalSum = function (value) {
  const [i, j] = this.map.get(value);
  //console.log("val = ", i, j);
  let sum = 0;
  for (const d of this.dir2) {
    const x = i + d[0];
    const y = j + d[1];
    if (x >= 0 && x < this.n && y >= 0 && y < this.n) {
      sum += this.grid[x][y];
    }
  }
  return sum;
};

/**
 * Your neighborSum object will be instantiated and called as such:
 * var obj = new neighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
