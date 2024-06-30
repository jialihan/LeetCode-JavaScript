/**
 * 3202. Find the Maximum Length of Valid Subsequence II
 * You are given an integer array nums and a positive integer k.
 * A  subsequence sub of nums with length x is called valid if it satisfies:
 * (sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] + sub[x - 1]) % k.
 * Return the length of the longest valid subsequence of nums.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  const n = nums.length;
  if (n <= 2) {
    return n;
  }
  const dp = new Array(n).fill(0).map((el) => new Array(k).fill(1)); // the number itself has length = 1
  let ans = 1;
  for (let i = 1; i < n; i++)
    for (let j = 0; j < i; j++) {
      const mod = (nums[i] + nums[j]) % k;
      // choose the previous index j, compare with same mod
      dp[i][mod] = Math.max(dp[i][mod], 1 + dp[j][mod]);
    }

  for (let i = 0; i < n; i++)
    for (let p = 0; p < k; p++) {
      ans = Math.max(ans, dp[i][p]);
    }
  return ans;
};
