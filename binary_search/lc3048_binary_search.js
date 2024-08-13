/**
 * referenced solution: https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778573/c-binary-search-easy-understand/
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function (nums, changeIndices) {
  const n = nums.length;
  const m = changeIndices.length;

  function canMark(nums, ci, seconds) {
    let cnt = 0;
    const last = new Array(n + 1).fill(-1);
    // delay mark as much as possible
    for (let i = 0; i < seconds; i++) {
      last[ci[i]] = i;
    }
    if (last.indexOf(-1, 1) > 0) {
      // cannot mark all of n
      return false;
    }
    for (let i = 0; i < seconds; i++) {
      if (last[ci[i]] === i) {
        if (cnt < nums[ci[i] - 1]) {
          return false;
        } else {
          // can mark
          cnt -= nums[ci[i] - 1];
        }
      } else {
        cnt++;
      }
    }
    return true;
  }
  let l = 0,
    r = m + 1; // m+1 is for the largest invalid condition
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (canMark(nums, changeIndices, mid)) {
      console.log("true at " + mid);
      r = mid;
    } else {
      console.log("false at " + mid);
      l = mid + 1;
    }
  }
  return r === m + 1 ? -1 : r;
};
