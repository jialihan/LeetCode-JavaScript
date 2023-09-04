// 2844. Minimum Operations to Make a Special Number
// select last 2 digits that can divide 25
/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function (num) {
  // 0, 50, 00, 25,75,
  const nums = num
    .toString()
    .split("")
    .map((e) => parseInt(e));
  const n = nums.length;
  let min = n;
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      const suffix = nums[j] * 10 + nums[i];
      if (suffix % 25 === 0) {
        min = Math.min(n - j - 2, min);
      }
    }
    if (nums[i] === 0) {
      min = Math.min(n - 1, min);
    }
  }
  return min;
};
