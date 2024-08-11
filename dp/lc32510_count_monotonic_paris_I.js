/**
 * 3250. Find the Count of Monotonic Pairs I
 * https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function (nums) {
  const n = nums.length;
  const mod = 1000000007;
  let dp = new Array(51).fill(0);
  for (let num = 0; num <= nums[0]; num++) {
    dp[num] = 1;
  }
  for (let i = 1; i < nums.length; i++) {
    const tmp = new Array(51).fill(0);
    for (let sum = 0; sum <= nums[i]; sum++) {
      for (pre = 0; pre <= sum; pre++) {
        if (nums[i - 1] - pre >= nums[i] - sum) {
          tmp[sum] = (tmp[sum] + dp[pre]) % mod;
        }
      }
    }
    dp = tmp;
  }
  let ans = 0;
  for (const num of dp) {
    ans = (ans + num) % mod;
  }

  return ans;
};
