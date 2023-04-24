// Math / String
// 2645. Minimum Additions to Make Valid String
/**
 * Given a string word to which you can insert letters "a", "b" or "c" anywhere and any number of times,
 *  return the minimum number of letters that must be inserted so that word becomes valid.
 *
 * A string is called valid if it can be formed by concatenating the string "abc" several times.
 */

/**
 * Example 2
 * Input: word = "aaa"
 *  Output: 6
 * Explanation: Insert letters "b" and "c" next to each "a" to obtain the valid string "abcabcabc".
 */

/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  const n = word.length;
  let pre = "z";
  // count how many sets/groups of 'abc'
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    count += word[i].charCodeAt(0) <= pre.charCodeAt(0) ? 1 : 0;
    pre = word[i];
  }
  return count * 3 - n;
};
