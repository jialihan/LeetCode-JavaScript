/**
 * 3185. Count Pairs That Form a Complete Day II
 * https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/
 * Tip: use remain of % 24.
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  const map = new Map();
  let ans = 0;
  for (let i = 0; i < hours.length; i++) {
    const r = hours[i] % 24;
    ans += r === 0 ? map.get(0) ?? 0 : map.get(24 - r) ?? 0;
    map.set(r, (map.get(r) ?? 0) + 1);
  }
  return ans;
};
