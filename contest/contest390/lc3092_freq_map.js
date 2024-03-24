/**
 * 3092. Most Frequent IDs
 * https://leetcode.com/problems/most-frequent-ids/solutions/4917052/js-use-two-maps-and-conditionally-sort/
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function (nums, freq) {
  const cntMap = new Map(); // <num, count>
  const freqMap = new Map(); // <freq, set<num>>
  const ans = new Array(nums.length).fill(0);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const oldCnt = cntMap.get(nums[i]) ?? 0;
    const newCnt = oldCnt + freq[i];
    cntMap.set(nums[i], newCnt);
    freqMap.get(oldCnt)?.delete(nums[i]);
    if (freqMap.get(oldCnt)?.size === 0) {
      freqMap.delete(oldCnt);
    }
    if (!freqMap.has(newCnt)) {
      freqMap.set(newCnt, new Set());
    }
    freqMap.get(newCnt).add(nums[i]);
    // Tip: avoid TLE to reduce the sorting if possible
    if (oldCnt >= max || newCnt > max) {
      const arr = Array.from(freqMap.keys()).sort((a, b) => b - a);
      if (arr.length === 0) {
        ans[i] = 0;
        max = 0;
      } else {
        ans[i] = arr[0];
        max = arr[0];
      }
    } else {
      ans[i] = max;
    }
  }
  return ans;
};
