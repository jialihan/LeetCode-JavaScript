/**
 * 3020. Find the Maximum Number of Elements in Subset
 * https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4641781/use-map-to-count-linear-search-with-memo/
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const arr = Array.from(map.keys()).sort((a, b) => a - b);
  let res = 1;
  const visited = new Set();
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (visited.has(cur) || cur === 1) {
      continue;
    }
    visited.add(cur);
    if (map.get(cur) < 2) {
      continue;
    }
    let next = cur * cur;
    let j = 1;
    while (map.has(next)) {
      visited.add(next);
      j++;
      if (map.get(next) < 2) {
        break;
      }
      next = next * next;
    }
    res = Math.max(res, (j - 1) * 2 + 1);
  }

  const ones = map.get(1) ?? 0;
  const cnt = ones % 2 === 1 ? ones : ones - 1;
  return Math.max(res, cnt);
};
