// Tip
// length=1: count
// length=2: select 2 different index to construct a substring, n*(n-1)/2

/**
 * 3084. Count Substrings Starting and Ending with Given Character
 * You are given a string s and a character c. Return the total number of
 * substrings of s that start and end with c.
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function (s, c) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      count++;
    }
  }
  return count + (count * (count - 1)) / 2;
};
