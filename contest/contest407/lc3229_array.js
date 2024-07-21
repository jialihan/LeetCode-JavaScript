/**
 * 3229. Minimum Operations to Make Array Equal to Target
 * Referenced solution: https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5509031/java-c-python-just-sum-up-increments/
 * Tip: the num "+/-" value doesn't matter, we only compare the diff of `arr[i] - arr[i-1]`, simialr to LC1526.
 *
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumOperations = function (nums, target) {
  const n = nums.length;
  const arr = nums.map((el, index) => el - target[index]);
  // goal: min op to build the array from [0,0,...,0] to arr
  let ans = Math.max(arr[0], 0);
  for (let i = 1; i < arr.length; i++) {
    ans += Math.max(arr[i] - arr[i - 1], 0); // ignore the negative diff
  }

  // edge case: the last element is "negative"
  return ans + Math.max(-arr[n - 1], 0);
};
