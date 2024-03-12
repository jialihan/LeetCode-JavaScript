/**
 * 3077. Maximum Strength of K Disjoint Subarrays
 * https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4863085/js-dp-3d-array-written-from-the-hints/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumStrength = function (nums, k) {
  const n = nums.length;
  const small = -Infinity; // initial value as not visited
  const dp = new Array(n)
    .fill(0)
    .map((el) =>
      new Array(2).fill(0).map((el) => new Array(k + 1).fill(small)),
    );
  function helper(i, g, x) {
    if (g === 0) {
      return 0;
    }
    if (i === n) {
      // if current is selected and this is the last 1 group
      if (g === 1 && x === 1) {
        return 0;
      }
      return -Math.pow(10, 15);
    }
    if (dp[i][x][g] != small) {
      // if previous visited, return the cached value.
      return dp[i][x][g];
    }
    const bit = g % 2 === 0 ? -1 : 1;

    // case1: select i element  = (create a new sub) OR (include i into current)
    const res1 =
      Math.max(helper(i + 1, g - 1, 0), helper(i + 1, g, 1)) +
      nums[i] * bit * g;

    // case2: doesn't select i
    const res2 = x === 0 ? helper(i + 1, g, 0) : small;
    const res = Math.max(res1, res2);
    dp[i][x][g] = res;
    return res;
  }

  return helper(0, k, 0);
};
