/**
 * https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/description/
 *
 * 2946. Matrix Similarity After Cyclic Shifts
 *
 * You are given a 0-indexed m x n integer matrix mat and an integer k.
 * You have to cyclically right shift odd indexed rows k times and cyclically
 * left shift even indexed rows k times.
 *
 * Return true if the initial and final matrix are exactly the same and false otherwise.
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  k = k % n;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i % 2 === 0) {
        if (mat[i][j] !== mat[i][(j - k + n) % n]) {
          return false;
        }
      } else {
        if (mat[i][j] !== mat[i][(j + k) % n]) {
          return false;
        }
      }
    }
  }
  return true;
};
