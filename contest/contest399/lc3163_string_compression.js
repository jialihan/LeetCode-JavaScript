/**
 * https://leetcode.com/problems/string-compression-iii/description/
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let str = "";
  const n = word.length;
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (i < n - 1 && word[i] === word[i + 1]) {
      continue;
    }
    const num = i - start + 1;
    let k = Math.floor(num / 9);
    const r = num % 9;
    while (k > 0) {
      str += "9" + word[i];
      k--;
    }
    if (r > 0) {
      str += `${r}${word[i]}`;
    }
    start = i + 1;
  }
  return str;
};
