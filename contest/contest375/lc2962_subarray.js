/**
 * Solution: https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4385009/js-map-sliding-window-of-k-times/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  const max = Math.max(...nums);
  const dp = new Array(n).fill(0);
  let res = 0;
  const map = new Map(); // <count, index>
  map.set(0, -1);
  for (let i = 0; i < n; i++) {
    if (nums[i] === max) {
      dp[i] = (i > 0 ? dp[i - 1] : 0) + 1;
      map.set(dp[i], i);
    } else {
      dp[i] = i > 0 ? dp[i - 1] : 0;
    }
    if (dp[i] >= k) {
      // find the breaking count diff eg: [0,...diffIndex, ... i]
      // [diffIndex+1 ,..., i] will break
      const diff = dp[i] - k + 1;
      const j = map.get(diff);
      res += j + 1;
    }
  }
  return res;
};
