/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/description/
 * two pointer & Math
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let res = 0;
  while (l < r) {
    const min = Math.min(height[r], height[l]);
    res = Math.max(res, min * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
};
