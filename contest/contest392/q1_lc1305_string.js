/**
 * 3105. Longest Strictly Increasing or Strictly Decreasing Subarray
 * https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let inc = 0;
  let dec = 0;
  let start = 0;
  let isInc = true;
  let isDec = true;
  let ans = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isInc = true;
      if (isDec) {
        ans = Math.max(i - start, ans);
        isDec = false;
        start = i - 1;
      }
    } else if (nums[i] < nums[i - 1]) {
      isDec = true;
      if (isInc) {
        ans = Math.max(i - start, ans);
        isInc = false;
        start = i - 1;
      }
    } else {
      if (isInc) {
        ans = Math.max(i - start, ans);
        isInc = false;
        start = i - 1;
      }
      if (isDec) {
        ans = Math.max(i - start, ans);
        isDec = false;
        start = i - 1;
      }
      start = i;
    }
  }
  return Math.max(ans, nums.length - start);
};
