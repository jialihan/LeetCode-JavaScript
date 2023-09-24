// Review LC84: 84. Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (h) {
  if (h.length === 1) {
    return h[0];
  }
  let ans = 0;
  const n = h.length;
  /**
   * function to get the Longest Increasing Sequence Sum array
   */
  function getLISSumArray(arr) {
    const len = arr.length;
    const res = new Array(len).fill(0);
    res[0] = arr[0];
    const stack = [[arr[0], 0]];
    for (let i = 1; i < len; i++) {
      while (stack.length > 0 && arr[i] < stack[stack.length - 1][0]) {
        stack.pop();
      }
      if (stack.length === 0) {
        res[i] = arr[i] * (i + 1);
      } else {
        const peek = stack[stack.length - 1];
        res[i] = res[peek[1]] + arr[i] * (i - peek[1]);
      }
      stack.push([arr[i], i]);
    }
    return res;
  }
  const left = getLISSumArray(h);
  const h2 = [...h].reverse();
  const right = getLISSumArray(h2).reverse();

  // search max sum
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, left[i] + right[i] - h[i]);
  }
  return ans;
};
