// https://leetcode.com/problems/minimum-window-substring/discuss/2460454/JavaScript-object-literal-and-counting-chars
// google interview questionslc
var minWindow = function (s, t) {
  const tmap = {};
  [...t].forEach((el) => {
    tmap[el] = (tmap[el] || 0) + 1;
  });

  let res = "";
  let matched = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (tmap[s[i]] > 0) {
      matched++;
    }
    tmap[s[i]]--;
    while (matched === t.length && start <= i) {
      // start === i is the limit
      if (res === "" || i - start + 1 < res.length) {
        res = s.slice(start, i + 1);
      }
      if (tmap[s[start]] !== undefined) {
        if (++tmap[s[start]] > 0) {
          matched--;
        }
      }
      start++;
    } // end while
  } // end for
  return res;
};
