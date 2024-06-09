/**
 * https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/description/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function (n, k) {
  const mod = 1000000007;
  let pre = new Array(n).fill(1);
  let cur = new Array(n).fill(0);
  for (let t = 0; t < k; t++) {
    for (let idx = 0; idx < n; idx++) {
      if (idx === 0) {
        cur[idx] = 1;
      } else {
        cur[idx] = (cur[idx - 1] + pre[idx]) % mod;
      }
    }
    pre = [...cur];
  }
  return pre[n - 1];
};
