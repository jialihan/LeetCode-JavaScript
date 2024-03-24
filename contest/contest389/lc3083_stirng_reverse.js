/**
 * 3083. Existence of a Substring in a String and Its Reverse
 * https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/
 * 
 * Given a string s, find any 
substring
 of length 2 which is also present in the reverse of s.

Return true if such a substring exists, and false otherwise.
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  const t = s.split("").reverse().join("");
  for (let i = 1; i < s.length; i++) {
    const sub = s[i - 1] + s[i];
    if (t.indexOf(sub) >= 0) {
      return true;
    }
  }
  return false;
};
