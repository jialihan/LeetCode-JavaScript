/**
 * 3200. Maximum Height of a Triangle
 * https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5389479/recursion-function-to-try-red-blue-or-blue-red/
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function (red, blue) {
  const ans1 = getHeight([red, blue]);
  const ans2 = getHeight([blue, red]);
  function getHeight(arr) {
    let tmp = [...arr];
    let cur = 1;
    let ans = 0;
    while (true) {
      if (tmp[0] >= cur) {
        tmp[0] -= cur;
        ans++;
      } else {
        break;
      }
      tmp = tmp.reverse();
      cur++;
    }
    return ans;
  }
  return Math.max(ans1, ans2);
};
