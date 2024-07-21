/**
 * 1526. Minimum Number of Increments on Subarrays to Form a Target Array
 * https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/description/
 *
 * You are given an integer array target. You have an integer array initial of the same size as target with all elements initially zeros.
 * In one operation you can choose any subarray from initial and increment each value by one.
 * Return the minimum number of operations to form a target array from initial.
 * The test cases are generated so that the answer fits in a 32-bit integer.
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  let ans = target[0]; // 1. the base count is the 1st num
  for (let i = 1; i < target.length; i++) {
    ans += Math.max(target[i] - target[i - 1], 0); // 2. ignore the negative, should already been covered
  }
  return ans;
};
