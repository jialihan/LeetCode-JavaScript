/**
 * https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/description/
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  const postMax = new Array(n).fill(0);
  const preMax = new Array(n).fill(0);
  postMax[n - 2] = nums[n - 1];
  preMax[0] = nums[0];

  for (let i = n - 2; i >= 0; i--) {
    postMax[i] = Math.max(nums[i + 1], postMax[i + 1]);
  }
  for (let i = 1; i < n; i++) {
    preMax[i] = Math.max(nums[i - 1], preMax[i - 1]);
  }
  let max = -Infinity;
  for (let i = 1; i < n - 1; i++) {
    const res = postMax[i] * (preMax[i] - nums[i]);
    max = Math.max(res, max);
  }
  return max < 0 ? 0 : max;
};
