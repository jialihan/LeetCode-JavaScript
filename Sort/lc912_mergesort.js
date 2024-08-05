/**
 * Merge Sort an Array - O(NlogN) - stable alogrithm
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // Merge sort
  if (nums.length == 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));
  return merge(left, right);
};

function merge(a, b) {
  const res = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[i]) {
      res.push(a[i]);
      a.shift();
    } else {
      res.push(b[i]);
      b.shift();
    }
  }
  return [...res, ...a, ...b];
}
