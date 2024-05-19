/**
 * 3152. Special Array II
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const n = nums.length;
  const badIndex = [];
  let next;
  let cur;
  for (let i = 0; i < n - 1; i++) {
    cur = nums[i] % 2;
    next = nums[i + 1] % 2;
    if (cur === next) {
      badIndex.push(i);
    }
  }

  const res = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    if (start === end) {
      res[i] = true;
    } else {
      const idx = binarySearch_lower(badIndex, start);
      if (idx >= start && idx < end) {
        res[i] = false;
      } else {
        res[i] = true;
      }
    }
  }
  function binarySearch_lower(arr, target) {
    // find the 1st num that >= target
    let l = 0;
    let r = arr.length;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    return arr[l];
  }
  return res;
};
