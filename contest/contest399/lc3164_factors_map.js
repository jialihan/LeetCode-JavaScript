/**
 * use sqrt(num) to find the factors and stored in the hashMap
 * https://leetcode.com/problems/find-the-number-of-good-pairs-ii/description/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  const map = new Map();
  for (const num of nums1) {
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        map.set(i, (map.get(i) ?? 0) + 1);
        const j = num / i;
        if (i !== j) {
          map.set(j, (map.get(j) ?? 0) + 1);
        }
      }
    }
  }
  let cnt = 0;
  for (const num of nums2) {
    const count = map.get(num * k) ?? 0;
    cnt += count;
  }
  return cnt;
};
