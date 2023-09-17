/**
 * https://leetcode.com/problems/happy-students/description/
 *
 * If a student with nums[i] = x is selected,
 * all the students with nums[j] <= x must be selected.
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function (nums) {
  let res = 0,
    selected = 0;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) {
    res++;
  }
  for (let i = 0; i < nums.length; i++) {
    selected++;
    if (selected > nums[i]) {
      if (i < n - 1 && selected < nums[i + 1]) {
        res++;
      } else if (i === n - 1) {
        res++;
      }
    }
  }
  return res;
};
