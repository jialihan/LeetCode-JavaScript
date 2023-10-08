/**
 * Referenced solution: https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4143971/java-c-python-count-bits/
 *
 * Note: The MAX_SAFE_INTEGER constant has a value of 2^53 - 1  (9007199254740991) > 10^15
 * num^2 = 10^18 > MAX_SAFE_INTEGER, must use BigInt
 * @param {number[]} nums - nums[i] <= 10^9
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, k) {
  // (1, 1) -> (1 & 1, 1 | 1) -> (1, 1)
  // (0, 0) -> (0 & 0, 0 | 0) -> (0, 0)
  // (0, 1) -> (0 & 1, 0 | 1) -> (0, 1)
  // (1, 0) -> (1 & 0, 1 | 0) -> (0, 1)
  // the last case will move the bit from A[i] to A[j].
  // it will sort the array on each bit,
  // from random array [1,0,1,0,1,0,0],
  // to a sorted array [0,0,0,0,1,1,1].
  const mod = 1000000007n;
  const count = new Array(32).fill(0); // count the ones bit array
  for (const num of nums) {
    for (let i = 0; i < 32; i++) {
      if (num & (1 << i)) {
        // if bit = 1
        count[i]++;
      }
    }
  }
  let res = 0n;
  for (let j = 0; j < k; j++) {
    let cur = 0n;
    for (let i = 0; i < 32; i++) {
      if (count[i] > 0) {
        count[i]--;
        cur += BigInt(1 << i);
      }
    }
    res = (res + ((cur * cur) % mod)) % mod;
  }
  return Number(res);
};
