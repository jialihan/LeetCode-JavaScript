// 3134. Find the Median of the Uniqueness Array
// referenced solution: https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5081935/java-c-python-binary-search-sliding-window/
/**
 * @param {number[]} nums
 * @return {number}
 */
var medianOfUniquenessArray = function (nums) {
  const n = nums.length;
  let l = 1;
  let r = new Set(nums).size; // max of the distinct #
  const total = (n * (1 + n)) / 2; // total # of subarrays
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (countSubArrayLessThanK(nums, mid) < total / 2) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  // function to count # of subarrays that has the unique number <= k
  function countSubArrayLessThanK(nums, k) {
    let numMap = new Map(); // <num, count>
    let start = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      numMap.set(nums[i], (numMap.get(nums[i]) ?? 0) + 1);
      while (numMap.size > k) {
        numMap.set(nums[start], numMap.get(nums[start]) - 1);
        if (numMap.get(nums[start]) === 0) {
          numMap.delete(nums[start]);
        }
        start++;
      }
      res += i - start + 1; // number of of subarray ending at i
    }
    return res;
  }
  return l;
};
