/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let ans = 0;
  let chair = 0;
  for (const ch of s) {
    if (ch === "E") {
      if (--chair < 0) {
        ans++;
        chair = 0;
      }
    } else if (ch === "L") {
      chair++;
    }
  }
  return ans;
};

// improve code
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let ans = 0;
  let chair = 0;
  for (const ch of s) {
    chair += ch === "E" ? 1 : -1;
    ans = Math.max(chair, ans);
  }
  return ans;
};
