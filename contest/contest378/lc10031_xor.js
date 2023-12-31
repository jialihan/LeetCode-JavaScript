/**
 * 10031. Check if Bitwise OR Has Trailing Zeros
 * https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/description/
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  //     1 xo 1 = 0
  //     0 xo 0 = 0
  //     0 ^ 1 ^ 1
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((nums[i] & 1) === 0 && (nums[j] & 1) === 0) {
        return true;
      }
    }
  }
  return false;
};
