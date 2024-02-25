/**
 * 3046. Split the Array
 * https://leetcode.com/problems/split-the-array/solutions/4779133/simple-check-count-of-num-cannot-2/
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
    if (map.get(num) > 2) {
      return false;
    }
  }
  return true;
};
