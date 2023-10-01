/**
 * https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4112389/js-extend-the-array-once-and-use-map-for-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function (nums, target) {
  const n = nums.length;
  const total = nums.reduce((a, b) => a + b);
  let res = 0;
  if (target > total) {
    // case1: large target, only need to consider the module
    res += Math.floor(target / total) * n;
    target = target % total;
  }
  if (res > 0 && target === 0) {
    // special case no need to continue
    return res;
  }
  // Note: need to expand the array once, then the 3rd, 4th,... can all be find in 2nd expansion.
  const arr = [...nums, ...nums];
  let sum = 0,
    len = Infinity;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === target) {
      // case 2: array from begining
      len = Math.min(len, i + 1);
    }
    if (map.has(sum - target)) {
      // case 3: sub array in the middle
      const index = map.get(sum - target);
      len = Math.min(len, i - index);
    }
    map.set(sum, i);
  }
  if (len === Infinity) {
    // not found
    return -1;
  }
  return res + len;
};
