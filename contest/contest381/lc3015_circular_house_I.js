/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function (n, x, y) {
  if (x > y) {
    [x, y] = [y, x];
  }
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n - 1; i++) {
    dp[i] = n - i - 1;
  }
  if (x === y) {
    return dp.map((el) => el * 2);
  }
  x--;
  y--;
  for (let i = 0; i < n; i++) {
    if (i < y) {
      for (let j = Math.max(x, i) + 1; j < n; j++) {
        const oldLen = j - i;
        const newLen = Math.abs(x - i) + 1 + Math.abs(y - j);
        // console.log(`pair(${i+1}, ${j+1}): newLen=${newLen}`);
        if (newLen < oldLen) {
          dp[oldLen - 1]--;
          dp[newLen - 1]++;
        }
      } // end for
    } // end if
  }
  return dp.map((el) => el * 2);
};

// Optimized Solution
/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function (n, x, y) {
  if (x > y) {
    [x, y] = [y, x];
  }
  const dp = new Array(n).fill(0);
  x--;
  y--;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // direct path
      const d1 = j - i;
      // path through x->y
      const d2 = Math.abs(x - i) + 1 + Math.abs(j - y);
      const min = Math.min(d1, d2);
      if (min > 0) {
        dp[min - 1] += 2;
      }
    }
  }
  return dp;
};
