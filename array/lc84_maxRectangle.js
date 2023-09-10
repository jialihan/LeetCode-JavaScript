/**
 * @param {number[]} heights
 * @return {number}
 */
// stack: [1,2,pre,cur,...], i
// rec width = (i-pre-1): [pre+1, ..., cur,...i-1]
// or stack is empty, then: [0, 1, ....i-1]
var largestRectangleArea = function (heights) {
  const stack = [];
  let start = 0;
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      while (heights[i] < heights[stack[stack.length - 1]]) {
        const prev = stack.pop();
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(max, heights[prev] * width);
      }
      stack.push(i);
    }
  }
  console.log(stack, "max=" + max);
  while (stack.length !== 0) {
    const cur = stack.pop();
    const width =
      stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1] - 1;
    max = Math.max(max, heights[cur] * width);
  }
  return max;
};
