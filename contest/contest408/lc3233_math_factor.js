/**
 * 3233. Find the Count of Numbers Which Are Not Special
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function (l, r) {
  const x = Math.floor(Math.sqrt(r));
  // store the possible factor / divior = sqrt(num)
  const factor = new Array(x + 1).fill(true);
  factor[1] = false;
  for (let i = 2; i <= x; i++) {
    if (factor[i]) {
      for (let j = i * i; j <= x; j += i) {
        factor[j] = false;
      }
    }
  }
  let ans = 0;
  for (let i = 2; i <= x; i++) {
    if (factor[i]) {
      const num = i * i;
      if (num <= r && num >= l) {
        ans++;
      }
    }
  }
  return r - l + 1 - ans;
};
