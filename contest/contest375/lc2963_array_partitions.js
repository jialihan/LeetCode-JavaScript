/**
 * Referenced solution: https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4384415/java-c-python-two-passes/
 *
 * 2963. Count the Number of Good Partitions
 * You are given a 0-indexed array nums consisting of positive integers.
 * A partition of an array into one or more contiguous subarrays is called good if no two subarrays contain the same number.
 * Return the total number of good partitions of nums.
 * Since the answer may be large, return it modulo 109 + 7.

 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodPartitions = function (nums) {
  // [1,2,1 | 3]
  const mod = 1000000007;
  let res = 1;
  const n = nums.length;
  const lastIndex = new Map(); // <num, index>
  for (let i = 0; i < n; i++) {
    lastIndex.set(nums[i], i);
  }
  // scan
  for (let i = 0, j = -1; i < n; i++) {
    if (i > 0) {
      res = i > j ? (res * 2) % mod : res;
    }
    j = Math.max(j, lastIndex.get(nums[i]));
  }

  return res;
};
