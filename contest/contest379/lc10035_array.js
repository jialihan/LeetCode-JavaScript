/**
 * 10035. Maximum Area of Longest Diagonal Rectangle
 * https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
  let max = 0;
  let res = [];
  for (let i = 0; i < dimensions.length; i++) {
    const [a, b] = dimensions[i];
    const len = a * a + b * b;
    if (max < len) {
      max = len;
      res = [a * b];
    } else if (max === len) {
      res.push(a * b);
    }
  }
  res.sort((a, b) => b - a);
  return res[0];
};
