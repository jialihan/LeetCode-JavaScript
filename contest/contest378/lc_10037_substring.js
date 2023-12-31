/**
 * 10033. Find Longest Special Substring That Occurs Thrice II
 * https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/4481060/js-use-two-maps-o-n/
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  // aaa len - 3 + 1 = 1
  // aaaa len -3 + 1 = 1
  // aaaaa:
  const n = s.length;
  const map = new Map(); // <string ,count>
  const lenMap = new Map(); //<char, length>
  let res = -1;
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let sub = s[i];
    while (j < n && s[j] === s[i]) {
      sub += s[j];
      j++;
    }
    i = j - 1;
    const len = sub.length;

    let max = lenMap.get(s[i]) ?? 0;
    // case1: update global max length when len >= 3
    if (len > 2) {
      max = Math.max(max, len - 2);
      res = Math.max(res, max);
    }

    // add remaining strings for count < 3
    if (len > 1) {
      const s2 = sub.slice(0, len - 1);
      map.set(s2, (map.get(s2) ?? 0) + 2);
      if (map.get(s2) >= 3) {
        //  case2: update remaining string for "len-1"
        max = Math.max(max, s2.length);
        res = Math.max(res, max);
      }
    }
    const s1 = sub.slice(0, len);
    map.set(s1, (map.get(s1) ?? 0) + 1);
    if (map.get(s1) >= 3) {
      // case3: update remaining string for "len-2"
      max = Math.max(max, s1.length);
      res = Math.max(res, max);
    }

    // update current max for the char "s[i]"
    lenMap.set(s[i], max);
  }
  return res;
};
