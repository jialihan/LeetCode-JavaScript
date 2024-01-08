/**
 * 10037. Maximum Size of a Set After Removals

 * https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520990/c-java-python-set-difference/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumSetSize = function (nums1, nums2) {
  const n = nums1.length;
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const shared = [];
  for (const el of set2) {
    if (set1.has(el)) {
      shared.push(el);
    }
  }
  const c = shared.length;
  const n1 = set1.size;
  const n2 = set2.size;
  return Math.min(n, Math.min(n / 2, n1 - c) + Math.min(n / 2, n2 - c) + c);
};
