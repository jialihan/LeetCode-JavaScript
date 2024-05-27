/**
 * BruteForce - TLE
 * TODO: correct way is to use Segment tree.
 * https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function (nums, queries) {
  let res = 0;
  for (const [k, v] of queries) {
    nums[k] = v;
    res += helper(nums);
    res %= 1000000007;
  }
  function helper(arr) {
    let pre1 = 0;
    let pre2 = 0;
    let cur;
    for (let i = 0; i < arr.length; i++) {
      cur = Math.max(pre2, 0) + arr[i];
      const curMax = Math.max(pre1, cur);
      pre2 = pre1;
      pre1 = curMax;
    }
    return pre1;
  }
  return res;
};
