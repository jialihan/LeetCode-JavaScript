/**
 * JS is not TLE - preSum + Map
 * https://leetcode.com/problems/count-beautiful-substrings-ii/description/
 * 2949. Count Beautiful Substrings II
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function (s, k) {
  let v = 0,
    c = 0;
  const n = s.length;
  const diff = new Array(n).fill(0);
  const vowels = "aeiou";
  for (let i = 0; i < n; i++) {
    if (vowels.includes(s[i])) {
      v++;
    } else {
      c++;
    }
    diff[i] = v - c;
  }

  const map = new Map(); // <diff, [index, ...]>
  let res = 0;
  for (let i = 0; i < n; i++) {
    const cur = diff[i];
    if (cur === 0) {
      const half = Math.floor((i + 1) / 2);
      if ((half * half) % k === 0) {
        res++;
      }
    }
    if (!map.has(cur)) {
      map.set(cur, []);
    } else {
      for (let j of map.get(cur)) {
        const d = Math.floor((i - j) / 2);
        if ((d * d) % k === 0) {
          res++;
        }
      }
    }
    map.get(cur).push(i);
  }
  return res;
};
