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
}

// Solution 2: Binary Search - O(nlogn)
var lengthOfLIS2 = function (nums) {
    var n = nums.length;
    var arr = [nums[0]];
    for (let i = 1; i < n; i++) {
        // find the first index >= current number
        var index = lower_bound(arr, nums[i]);
        if (index >= arr.length) {
            arr.push(nums[i]);
        }
        else {
            arr[index] = nums[i];
        }
    }
    return arr.length;
};
function lower_bound(arr, target) {
    // find upper bound number to replace
    var l = 0;
    var r = arr.length;
    while (l < r) {
        var mid = Math.floor((r + l) / 2);
        if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return l;
}