/**
 * https://leetcode.com/problems/heaters/description/
 * Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  // Note: default sort() will convert into "String" value then compare in asc order, so it cannot sort the number values.
  heaters.sort((a, b) => a - b);
  let radius = 0;
  console.log(heaters);
  const n = heaters.length;
  for (let cur of houses) {
    // bs lower bound: find the 1st number >= cur
    let l = 0;
    let r = n;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (heaters[mid] < cur) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    const dist1 = l == n ? cur - heaters[n - 1] : heaters[l] - cur; // upper part
    const dist2 = l === 0 ? heaters[0] - cur : cur - heaters[l - 1]; // lower part
    radius = Math.max(radius, Math.min(dist1, dist2));
  }
  return radius;
};
