// https://leetcode.com/problems/combination-sum-ii/submissions/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  if (!candidates || candidates.length === 0) {
    return res;
  }
  candidates.sort((a, b) => a - b);
  solve(candidates, 0, target, []);
  function solve(nums, index, sum, cur) {
    if (sum === 0) {
      res.push([...cur]);
      return;
    }
    for (let i = index; i < nums.length; i++) {
      if (nums[i] > sum) {
        break;
      }
      cur.push(nums[i]);
      solve(nums, i + 1, sum - nums[i], cur);
      cur.pop();
      while (i >= 0 && i < nums.length - 1 && nums[i] === nums[i + 1]) {
        i++;
      } // end while
    } // end for
  }
  return res;
};
