/**
 * referenced idea: https://leetcode.com/problems/minimum-array-end/solutions/5082038/js/
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function (n, x) {
  n--; // [x, ... (n-1)numbers], find the n-1th number after x
  let xbit = x.toString(2).split("").reverse();
  let nbit = n.toString(2).split("").reverse();
  let ans = new Array(52).fill("0");
  let j = 0;
  for (let i = 0; i < xbit.length; i++) {
    ans[i] = xbit[i];
  }
  for (let i = 0; i < nbit.length; i++) {
    while (ans[j] === "1") {
      j++;
    }
    // fill the n's bit to x's zero bit
    ans[j] = nbit[i];
    j++;
  }

  return parseInt(ans.reverse().join(""), 2);
};
