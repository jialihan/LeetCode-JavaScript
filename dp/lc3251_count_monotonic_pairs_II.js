/**
 * 3251. Find the Count of Monotonic Pairs II
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function (nums) {
  const n = nums.length;
  const mod = 1000000007;
  let dp = new Array(1001).fill(0);
  for (let num = 0; num <= nums[0]; num++) {
    dp[num] = 1;
  }
  for (let i = 1; i < nums.length; i++) {
    const tmp = new Array(1001).fill(0);
    // for(let sum = 0; sum<=nums[i]; sum++) {
    //     for(pre = 0; pre<=sum; pre++) {
    //         if(nums[i-1] - pre >= nums[i]-sum) {
    //             tmp[sum] = (tmp[sum] + dp[pre]) % mod;
    //         }
    //     }
    // }
    const diff = Math.max(0, nums[i] - nums[i - 1]);
    // nums[i-1] - pre >= nums[i]- cur
    // pre + d <= cur
    // tmp[cur-1] only to accumulate the previous pairs valid for (cur-1), which also valid for (cur)
    for (let cur = diff; cur <= nums[i]; cur++) {
      tmp[cur] = ((cur > 0 ? tmp[cur - 1] : 0) + dp[cur - diff]) % mod;
    }
    dp = tmp;
  }
  let ans = 0;
  for (const num of dp) {
    ans = (ans + num) % mod;
  }
  return ans;
};
