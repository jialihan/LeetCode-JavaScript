/**
 * 3008. Find Beautiful Indices in the Given Array II
 * // KMP: https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
 * // LC: https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/description/
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function (s, a, b, k) {
  // 1. build pattern LPS: longest prefrex suffix
  const indexA = findSubStringIndexes(s, a);
  const indexB = findSubStringIndexes(s, b);
  console.log(indexA, indexB);
  // 2. find valid indexes |i_a - j_b| <= k
  const res = [];
  for (const i of indexA) {
    const j = lowerBound(indexB, Math.max(0, i - k));
    // console.log("lower bound index B = ", j);
    if (Math.abs(i - j) <= k) {
      res.push(i);
    }
  }
  return res;
};
function findSubStringIndexes(s, p) {
  const m = s.length;
  const n = p.length;
  const lps = buildPattern(p);
  const res = [];
  let i = 0,
    j = 0;
  while (i < s.length) {
    if (s[i] === p[j]) {
      i++;
      j++;
      if (j === n) {
        res.push(i - p.length);
        j = lps[j - 1];
      }
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        j = 0;
        i++;
      }
    }
  }
  return res;
}
function buildPattern(s) {
  const lps = new Array(s.length).fill(0);
  let len = 0,
    i = 1;
  while (i < s.length) {
    if (s[i] === s[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        // cannot match, continue;
        // lps[i] = 0;
        len = 0;
        i++;
      }
    }
  }
  console.log("pattern arr: ", lps);
  return lps;
}

/**
 * Find the 1st element that is >= target
 */
function lowerBound(arr, target) {
  let l = 0;
  let r = arr.length - 1;
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
