// https://leetcode.com/contest/weekly-contest-376/problems/find-missing-and-repeated-values/
// 2965. Find Missing and Repeated Values
// Difficulty:Easy
// You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2].
//  Each integer appears exactly once except a which appears twice and b which is missing.
// The task is to find the repeating and missing numbers a and b.

// Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  let dup;
  let sum = 0;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cur = grid[i][j];
      sum += cur;
      if (set.has(cur)) {
        dup = cur;
      }
      set.add(cur);
    }
  }
  const missing = ((1 + n * n) * (n * n)) / 2 + dup - sum;
  return [dup, missing];
};
