// 300. Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/
// https://leetcode.com/problems/longest-increasing-subsequence/discuss/1233428/JavaScript-Binary-Search-O(nlogn)-and-DP-O(n2)

// Solution 1: DP - O(n^2)
var lengthOfLIS = function (nums) {
  var n = nums.length;
  var dp = new Array(n).fill(1);
  for (var i = 1; i < n; i++) {
    var max = 0;
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = Math.max(dp[i], max + 1);
  }
  return Math.max(...dp);
};

// Solution 2: Binary Search - O(nlogn)
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    // find the 1st index j that >= target(nums[i])
    const j = binarySearch_lower(arr, nums[i]);
    if (j >= arr.length) {
      arr.push(nums[i]);
    } else {
      arr[j] = nums[i];
    }
  }
  function binarySearch_lower(a, target) {
    let l = 0;
    let r = a.length; // if not found, the largest index is the a.length.
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (a[mid] < target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return l;
  }
  return arr.length;
};
