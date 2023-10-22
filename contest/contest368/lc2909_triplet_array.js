// https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
  const n = nums.length;
  const preMin = new Array(n).fill(0);
  let cur = Infinity;
  for (let i = 1; i < n; i++) {
    cur = Math.min(nums[i - 1], cur);
    if (cur >= nums[i]) {
      // not available
      preMin[i] = Infinity;
    } else {
      preMin[i] = cur;
    }
  }
  let res = Infinity;
  cur = Infinity;
  for (let i = n - 2; i > 0; i--) {
    cur = Math.min(nums[i + 1], cur);
    if (cur < nums[i] && preMin[i] !== Infinity) {
      res = Math.min(res, nums[i] + preMin[i] + cur);
    }
  }

  return res === Infinity ? -1 : res;
};
