/**
 * 1D array DP[sum]
 * 416. Partition Equal Subset Sum
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 === 1) {
    return false;
  }
  const dp = new Array(10002).fill(false); // dp[sum] does it exist in previous numbers
  dp[0] = true;
  for (const num of nums)
    for (let cur = total / 2; cur >= num; cur--) {
      // Note: if cur < num, the same result of previous d[cur]
      //       only if cur >= num, we can update the result including picking up the current: dp[cur] = num + dp[cur-num]
      dp[cur] = dp[cur - num] || dp[cur];
    }

  return dp[total / 2];
};

// 2D array - DP[i][j]
var canPartition = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 === 1) {
    return false;
  }
  const dp = new Array(nums.length + 1)
    .fill()
    .map(() => new Array(10002).fill(false)); // dp[index][sum]: wther previous index includes a sum
  for (let i = 0; i <= nums.length; i++) {
    dp[i][0] = true; // at each index, dp[index][sum=0] select none is true, as initial value
  }

  for (let i = 1; i <= nums.length; i++)
    for (let cur = 1; cur <= total / 2; cur++) {
      dp[i][cur] = dp[i - 1][cur];
      if (cur >= nums[i - 1]) {
        dp[i][cur] = dp[i - 1][cur] || dp[i - 1][cur - nums[i - 1]];
      }
    }

  return dp[nums.length][total / 2];
};

// 2D array memo - DFS
var canPartition = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 === 1) {
    return false;
  }
  // const dp = new Array(10002).fill(undefined);
  const dp = Array(nums.length)
    .fill(-1)
    .map(() => Array(total / 2 + 1).fill(undefined));
  function helper(i, sum) {
    // return whether the arr contains a subset of "sum"
    if (sum === 0) {
      // true = 1, false = 0;
      return true;
    }
    if (i >= nums.length || sum < 0) {
      return false;
    }
    // memo
    if (dp[i][sum] != undefined) {
      return dp[i][sum];
    }
    dp[i][sum] = helper(i + 1, sum - nums[i]) || helper(i + 1, sum);
    // console.log("dfs: " +"i="+i, sum)
    return dp[i][sum];
  }
  const res = helper(0, total / 2);
  return res;
};
