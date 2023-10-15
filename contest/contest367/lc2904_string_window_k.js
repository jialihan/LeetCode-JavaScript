/**
 * https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/description/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  const ones = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      ones.push(i);
    }
  }
  if (ones.length < k) {
    return "";
  }
  let res;
  // find each window of string of exactly k of "1"s
  for (let i = 0; i < ones.length; i++) {
    let j = i + k - 1;
    if (j < ones.length) {
      const str = s.slice(ones[i], ones[j] + 1);
      if (!res) {
        res = str;
      } else {
        // compare which string is smaller
        if (isSmallerString(res, str) > 0) {
          res = str;
        }
      }
    } else {
      break;
    }
  }
  return res;
};
/**
 * return true if s2 is smaller than s1
 */
function isSmallerString(s1, s2) {
  if (s1.length > s2.length) {
    return true;
  } else if (s1.length < s2.length) {
    return false;
  } else {
    return s1.localeCompare(s2) > 0 ? true : false;
  }
}
