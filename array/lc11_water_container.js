/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let r = height.length - 1,
    l = 0;
  while (l < r) {
    const h = Math.min(height[l], height[r]);
    max = Math.max((r - l) * h, max);
    if (l >= r) {
      break;
    }
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};
