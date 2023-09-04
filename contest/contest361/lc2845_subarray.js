// 2845. Count of Interesting Subarrays
// https://leetcode.com/problems/count-of-interesting-subarrays/description/

/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, m, k) {
  let res = 0;
  const n = nums.length;
  const arr = nums.map((e) => (e % m === k ? 1 : 0));
  const map = new Map(); // <sum, count>
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    const mod = sum % m;
    if (mod === k) {
      res++;
    }
    // [target, k] = mod
    let target = mod - k;
    if (target < 0) {
      target += m;
    }
    res += map.get(target) ?? 0;
    map.set(mod, (map.get(mod) ?? 0) + 1);
  }
  return res;
};
