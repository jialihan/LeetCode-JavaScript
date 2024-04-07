/**
 * 3106. Lexicographically Smallest String After Operations With Constraint
 * https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/description/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (s, k) {
  if (k === 0) {
    return s;
  }
  const nums = s.split("").map((el) => el.charCodeAt(0) - 97);
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    const diff = Math.min(nums[i] - 0, 25 - nums[i] + 1);
    if (diff > k) {
      nums[i] -= k;
      k = -1;
      break;
    } else {
      k -= diff;
      nums[i] = 0;
    }
  }
  const res = nums.map((el) => el + 97);
  return String.fromCharCode(...res);
};
