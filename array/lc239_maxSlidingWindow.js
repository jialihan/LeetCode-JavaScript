// https://leetcode.com/problems/sliding-window-maximum/discuss/1564609/JavaScript-O(n)-solution-with-monotonic-queue
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const q = []; // keep the current max index in array, desc
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    // remove smaller tail indexes in queue
    while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);

    // check current max is in range K
    if (q[0] <= i - k) {
      q.shift();
    }

    // calc result
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }

  return res;
};
