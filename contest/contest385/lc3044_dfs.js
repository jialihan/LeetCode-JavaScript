/**
 * https://leetcode.com/problems/most-frequent-prime/description/
 * @param {number[][]} mat
 * @return {number}
 */
var mostFrequentPrime = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  const map = new Map();
  function dfs(i, j, path, d) {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return;
    }
    const s = path + mat[i][j];
    const num = parseInt(s);
    if (num > 10 && isPrime(num)) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }
    if (d) {
      dfs(i + d[0], j + d[1], s, d);
    } else {
      for (const dd of dir) {
        dfs(i + dd[0], j + dd[1], s, dd);
      }
    }
  }
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      dfs(i, j, "");
    }
  let ans = -1;
  let max = 0;
  for (const [k, v] of map.entries()) {
    if (v > max) {
      max = v;
      ans = k;
    } else if (v === max) {
      ans = Math.max(k, ans);
    }
  }
  return ans;
};
function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num !== 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
