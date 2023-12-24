// **Time complexity:**
// during the contest, I scan 3 times:
//     - hfences: `O(n^2)`
//     - vfences: `O(n^2)`
//     - compare common largest length on 2 sets: `O(n^2)` - ❌ TLE

// **Fix: ** reduce to 2 times of scan:
// - hfences: `O(n^2)` - `hSet()`
// - vfences: `O(n^2)` - compare common largest length - ✅

// The time requement is too strict!!!!

/**
 * 2975. Maximum Square Area by Removing Fences From a Field
 * https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/solutions/4450845/js-set-to-store-each-length-o-n-2/
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function (m, n, hFences, vFences) {
  const mod = 1000000007n;

  const h = [1, ...hFences, m];
  const hSet = new Set();
  for (let i = 0; i < h.length; i++)
    for (let j = i + 1; j < h.length; j++) {
      const len = Math.abs(h[j] - h[i]);
      hSet.add(len);
    }

  const v = [1, ...vFences, n];
  const vSet = new Set();
  let ans = -1;
  for (let i = 0; i < v.length; i++)
    for (let j = i + 1; j < v.length; j++) {
      const len = Math.abs(v[j] - v[i]);
      if (hSet.has(len)) {
        ans = Math.max(ans, len);
      }
    }

  // console.log(hSet, vSet);
  // find max area
  return ans === -1 ? -1 : (BigInt(ans) * BigInt(ans)) % mod;
};
