/**
 * 3132. Find the Integer Added to Array II
 * My solution: O(n^3) brute force to delete 2 numbers
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  nums2.sort((a, b) => a - b);
  nums1.sort((a, b) => a - b);
  if (n === 1) {
    return nums2[0] - nums1[m - 1];
  }
  console.log(nums1, nums2);
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      // delete i & j
      const first1 = i === 0 ? (j === 1 ? 2 : 1) : 0;
      const diff = nums2[0] - nums1[first1];
      // check
      let flag = true;
      let q = 0;
      for (let p = 0; p < m; p++) {
        if (p === j || p === i) {
          continue;
        }
        if (nums2[q] !== nums1[p] + diff) {
          flag = false;
          break;
        }
        q++;
      }
      if (flag) {
        return diff;
      }
    }
  }
};
// Optimized: O(N^2)
// try only 3 differences
/**
 * 3132. Find the Integer Added to Array II
 * referenced idea: https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5081927/python3-optimal-sorting-o-nlogn-clean-concise/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  nums2.sort((a, b) => a - b);
  nums1.sort((a, b) => a - b);
  if (n === 1) {
    return nums2[0] - nums1[m - 1];
  }
  // console.log(nums1, nums2);
  let ans = Infinity;
  const diff = [nums2[0] - nums1[0], nums2[0] - nums1[1], nums2[0] - nums1[2]];
  function validate(dif) {
    let j = 0; // pointer in nums1
    for (let i = 0; i < nums2.length; i++) {
      const num1 = nums2[i] - dif;
      const index = nums1.indexOf(num1, j);
      if (index >= nums1.length || index < 0) {
        return false;
      }
      j = index + 1;
    }
    return true;
  }
  for (const d of diff) {
    if (validate(d)) {
      ans = Math.min(ans, d);
    }
  }
  return ans;
};
