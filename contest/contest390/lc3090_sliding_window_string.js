/**
 * 3090. Maximum Length Substring With Two Occurrences
 * https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/
 *
 * Given a string s, return the maximum length of a substring
 * such that it contains at most two occurrences of each character.
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  //  [Sliding window - solution]
  const map = new Map();
  let ans = 0;
  let start = 0;
  let i;
  for (i = 0; i < s.length; i++) {
    const ch = s[i];
    map.set(ch, (map.get(ch) ?? 0) + 1);
    if (map.get(ch) > 2) {
      ans = Math.max(ans, i - start);
      while (map.get(ch) > 2) {
        const c = s[start];
        map.set(c, map.get(c) - 1);
        start++;
      }
    }
  }
  if (start < s.length) {
    const str = s;
    ans = Math.max(ans, s.length - start);
  }
  return ans;
};
