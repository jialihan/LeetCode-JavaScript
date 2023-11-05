/**
 * https://leetcode.com/problems/find-champion-ii/description/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  const p = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    p[i] = i;
  }
  for (const [u, v] of edges) {
    p[v] = u;
  }
  let cnt = 0;
  let ans;
  for (let i = 0; i < n; i++) {
    if (p[i] === i) {
      cnt++;
      ans = i;
    }
  }
  if (cnt === 1) {
    return ans;
  }
  return -1;
};
