/**
 * Binary Search  + Sliding window - TLE
 */
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function (nums, x) {
  const n = nums.length;
  let min = Infinity;
  const map = new Map();
  for (let i = x; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  // Binary search closest value
  for (let i = 0; i < n; i++) {
    const arr = Array.from(map.keys()).sort((a, b) => a - b);
    // console.log("arr =", arr);
    if (arr.length === 0) {
      break;
    }
    const closest = findClosestNumber(arr, nums[i]);
    min = Math.min(min, closest);
    // remove the outdated value on [i+x] in the next round
    if (i + x < n) {
      const val = nums[i + x];
      if (map.get(val) === 1) {
        map.delete(val);
      } else {
        map.set(val, map.get(val) - 1);
      }
    }
  }
  function findClosestNumber(array, target) {
    let l = 0,
      r = array.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (array[mid] === target) {
        return 0;
      } else if (array[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    const a = l < array.length ? Math.abs(array[l] - target) : -1;
    const b = r >= 0 ? Math.abs(array[r] - target) : -1;
    if (a >= 0 && b >= 0) {
      return Math.min(a, b);
    } else if (a >= 0) {
      return a;
    } else {
      return b;
    }
  }
  return min;
};
