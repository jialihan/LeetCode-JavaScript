/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[l]) {
      // left sorted
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } // right sorted
    else {
      if (target <= nums[r] && target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
