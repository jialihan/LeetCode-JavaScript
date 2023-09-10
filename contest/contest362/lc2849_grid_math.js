// https://leetcode.com/contest/weekly-contest-362/problems/determine-if-a-cell-is-reachable-at-a-given-time/

/**
 * A math problem..........
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function (sx, sy, fx, fy, t) {
  if (sx === fx && sy === fy && t === 1) {
    return false;
  }
  const h = Math.abs(fy - sy);
  const w = Math.abs(fx - sx);
  const diag = Math.min(h, w);
  const minDist = diag + Math.abs(h - w);
  if (minDist <= t) {
    return true;
  }
  return false;
};
