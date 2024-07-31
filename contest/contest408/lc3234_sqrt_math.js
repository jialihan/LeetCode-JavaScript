// referenced solution: https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5546415/easiest-solution-and-simple-understanding-of-the-question/
/**
 * 3234. Count the Number of Substrings With Dominant Ones
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const n = s.length;
  const z = new Array(n).fill(0);
  const o = new Array(n).fill(0);
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") {
      p0++;
    } else {
      p1++;
    }
    z[i] = p0;
    o[i] = p1;
  }
  if (p0 === 0) {
    return ((1 + n) * n) / 2;
  }
  if (p1 === 0) {
    return 0;
  }
  let ans = 0;
  for (let i = 0; i < n; i++)
    for (let j = i; j < n; j++) {
      if (i === j) {
        if (s[i] === "1") {
          ans++;
          //  console.log(i, j);
        }
      } else {
        const zeroCnt = z[j] - (i > 0 ? z[i - 1] : 0);
        const oneCnt = o[j] - (i > 0 ? o[i - 1] : 0);
        if (oneCnt >= zeroCnt * zeroCnt) {
          // console.log(i, j);
          ans++;
          // Move to the next possible valid index;
          const mid = Math.floor(Math.sqrt(oneCnt));
          if (mid > zeroCnt) {
            ans += j + mid - zeroCnt >= n ? n - 1 - j : mid - zeroCnt;
            j += mid - zeroCnt;
          }
        } else {
          // move to the next possible valid index
          j += zeroCnt * zeroCnt - oneCnt - 1;
        }
      }
    }
  return ans;
};
