/**
 * 70. Climbing Stairs
 * Recursion - Top-down approach
 * https://leetcode.com/problems/climbing-stairs/description/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cache = new Array(n + 1);
  function helper(num) {
    if (num === 1 || num === 0) {
      return 1;
    }
    if (cache[num]) {
      return cache[num];
    }
    cache[num] = helper(num - 1) + helper(num - 2);
    return cache[num];
  }
  return helper(n);
};
