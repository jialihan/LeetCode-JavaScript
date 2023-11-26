/**
 * 2948. Make Lexicographically Smallest Array by Swapping Elements
 * https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/description/
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const n = nums.length;
  // 1. build pairs of [num, index], and sort
  const p = nums.map((el, i) => [el, i]).sort((a, b) => a[0] - b[0]);

  // 2. build group[i], and idx[i]
  const group = [];
  const idx = [];
  // 2.1 set initial value
  group[0] = [p[0][0]];
  idx[0] = [p[0][1]];
  // 2.2 build groups
  let cur = p[0][0];
  let j = 0; // group index
  for (let i = 1; i < n; i++) {
    if (p[i][0] - cur > limit) {
      // add the next group
      j++;
      group[j] = [];
      idx[j] = [];
    }
    // same group
    group[j].push(p[i][0]);
    idx[j].push(p[i][1]);
    cur = p[i][0];
  }

  // 3. sort the index in each group to build the smallest value by index
  for (let i = 0; i < idx.length; i++) {
    idx[i].sort((a, b) => a - b);
  }

  // 4. construct the result array in each group by increasing order
  const res = new Array(n).fill(0);
  for (let i = 0; i < group.length; i++) {
    for (let j = 0; j < idx[i].length; j++) {
      res[idx[i][j]] = group[i][j];
    }
  }
  return res;
};
