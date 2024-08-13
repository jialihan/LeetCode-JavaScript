/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const mod = 1000000007;
  const minq = new MinPriorityQueue({ priority: (a) => a[0] }); // [num, index]
  nums.forEach((el, index) => {
    // only push Math.max(N, right) of the sum
    minq.enqueue([el, index]);
  });
  let ans = 0;
  for (let i = 0; i < right; i++) {
    const [num, j] = minq.dequeue().element;
    if (i >= left - 1) {
      ans = (ans + num) % mod;
    }
    if (j < n - 1) {
      // continue to enqueue the Sum if valid index "j"
      minq.enqueue([num + nums[j + 1], j + 1]);
    }
  }
  return ans;
};
