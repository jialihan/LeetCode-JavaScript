/**
 * 3121. Count the Number of Special Characters II
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const nums = word.split("").map((el) => el.charCodeAt(0));
  const set = new Set();
  const delSet = new Set();
  const res = new Set();
  for (const num of nums) {
    if (num < 97 && set.has(num + 32) && !delSet.has(num)) {
      res.add(num);
    }
    if (num >= 97 && set.has(num - 32)) {
      delSet.add(num - 32);
      res.delete(num - 32);
    }
    set.add(num);
  }
  return res.size;
};
