/**
 * 1482. Minimum Number of Days to Make m Bouquets
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  const max = Math.max(...bloomDay);
  if (m * k > bloomDay.length) {
    return -1;
  }
  let l = 0;
  let r = max;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    // can make m of k at day "mid"
    let cnt = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      // if day < i, it already blooms
      if (bloomDay[i] <= mid) {
        let j = i + 1;
        while (j < bloomDay.length && bloomDay[j] <= mid) {
          j++;
        }
        cnt += Math.floor((j - i) / k);
        i = j - 1;
      }
    }
    if (cnt >= m) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
