// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  const map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");
  const res = [];
  solve(digits, 0, []);
  function solve(s, index, cur) {
    if (index >= s.length) {
      res.push(cur.join(""));
      return;
    }
    console.log(index, s[index], map.get(s[index]));
    const ch = map.get(s[index]).split("");
    for (const c of ch) {
      cur.push(c);
      solve(s, index + 1, cur);
      cur.pop();
    }
  }
  return res;
};
