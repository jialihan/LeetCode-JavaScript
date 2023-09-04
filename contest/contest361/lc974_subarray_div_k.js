// https://leetcode.com/problems/subarray-sums-divisible-by-k/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const map = new Map();
  let cnt = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem = sum % k;
    if (rem < 0) {
      rem += k;
    }
    if (rem === 0) {
      cnt++;
    }
    cnt += map.get(rem) ?? 0;
    map.set(rem, (map.get(rem) ?? 0) + 1);
  }
  return cnt;
};
