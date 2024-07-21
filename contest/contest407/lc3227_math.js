/**
 * 3227. Vowels Game in a String
 * https://leetcode.com/problems/vowels-game-in-a-string/solutions/5509243/simple-math-count-the-vowels/
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
  let vCnt = 0;
  const vowels = "aeiou";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vCnt++;
    }
  }
  if (vCnt === 0) {
    return false;
  }
  return true;
};
