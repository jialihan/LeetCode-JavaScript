/**
 * https://leetcode.com/problems/construct-product-matrix/solutions/4169931/js-presum-array-and-iterate-in-reverse-way/
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let zeroCount = 0;
  let product = 1n;
  const res = new Array(n).fill(0).map((el) => new Array(m).fill(0));
  const pre = new Array(n).fill(0).map((el) => new Array(m).fill(0));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      pre[i][j] = product;
      product = (product * BigInt(grid[i][j])) % 12345n;
    }
  // calc in reverse order
  product = 1n;
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--) {
      res[i][j] = (product * pre[i][j]) % 12345n;
      product = (product * BigInt(grid[i][j])) % 12345n;
    }
  return res;
};
