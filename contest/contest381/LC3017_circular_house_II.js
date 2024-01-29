/**
 * 3017. Count the Number of Houses at a Certain Distance II
 * Wrong: TLS - MY Solution during contest:  541 / 549 testcases passed
 * n = 100000, x = 1496, y = 83790
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
  //   const half1 = x + Math.floor((y - x) / 2) - 1;
  //   const half2 = y - half1 + x;
  const h = Math.ceil((y - x + 1) / 2);
  const half1 = y - h;
  // update from [0, half1] -> [y, n-1]
  for (let j = y; j < n; j++) {
    // update i = [0, x, .. half1]
    for (let i = 0; i <= half1; i++) {
      const d1 = j - i;
      const d2 = Math.abs(x - i) + 1 + j - y;
      if (d1 > d2) {
        dp[d1 - 1]--;
        dp[d2 - 1]++;
      }
    }
  }
  console.log(`calc [0, ${half1}]`);

  //   // update from[0, x] -> [half2, y)
  //   for (let j = x + h; j < y; j++) {
  //     // update i = [0, ..., x]
  //     for (let i = 0; i <= x; i++) {
  //       const d1 = j - i;
  //       const d2 = Math.abs(x - i) + 1 + Math.abs(j - y);
  //       if (d1 > d2) {
  //         dp[d1 - 1]--;
  //         dp[d2 - 1]++;
  //       }
  //     }
  //   }
  //   console.log(`calc [${x + h}, ${y - 1}]`);

  // update from(0, half1) -> [half2, y)
  for (let i = half1; i >= 0; i--) {
    // update i = [0, x]
    for (let j = i > x ? i + h : x + h; j < y; j++) {
      const d1 = j - i;
      const d2 = Math.abs(x - i) + 1 + Math.abs(j - y);
      if (d1 > d2) {
        dp[d1 - 1]--;
        dp[d2 - 1]++;
      }
    }
  }
  console.log(`calc: [0, ${half1},] -> [${half1 + h}, ${y - 1})`);

  return dp.map((el) => el * 2);
};
