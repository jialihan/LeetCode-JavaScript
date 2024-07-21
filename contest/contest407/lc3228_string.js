/**
 * 3228. Maximum Number of Operations to Move Ones to the End
 * https://leetcode.com/problems/maximum-number-of-operations-to-move-ones-to-the-end/solutions/5509181/move-1s-from-the-left-explained-linear-solution/
 * @param {string} s
 * @return {number}
 */
var maxOperations = function (s) {
  const str = s.toString(2);
  const n = str.length;
  let ans = 0;
  let oneCnt = 0;
  let hasZero = false;
  for (let i = 0; i < n; i++) {
    if (s[i] === "1") {
      if (hasZero) {
        // step1: add previous ones to the answer
        ans += oneCnt;
        // step2: starting a new scenario with coninous ones after move
        hasZero = false;
      }
      oneCnt++;
    } else {
      hasZero = true;
      if (i === n - 1) {
        // step3: edge case when the ending is zero, we need to move all previous ones.
        ans += oneCnt;
      }
    }
  }
  return ans;
};
