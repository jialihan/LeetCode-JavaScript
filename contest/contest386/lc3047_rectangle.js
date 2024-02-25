// https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4778825/brute-force-compare-each-pair-of-intersection/
/**
 * 3047. Find the Largest Area of Square Inside Two Rectangles
 * There exist n rectangles in a 2D plane.
 * You are given two 0-indexed 2D integer arrays bottomLeft and topRight,
 * both of size n x 2, where bottomLeft[i] and topRight[i] represent
 * the bottom-left and top-right coordinates of the ith rectangle respectively.
 *
 * You can select a region formed from the intersection of two of the given rectangles.
 * You need to find the largest area of a square that can fit inside this region
 * if you select the region optimally.
 *
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function (bottomLeft, topRight) {
  let ans = 0;
  for (let i = 0; i < bottomLeft.length; i++) {
    let [lx, ly] = bottomLeft[i];
    let [rx, ry] = topRight[i];
    for (let j = i + 1; j < bottomLeft.length; j++) {
      let [lx2, ly2] = bottomLeft[j];
      let [rx2, ry2] = topRight[j];
      if (lx2 >= rx || ry2 <= ly || ly2 >= ry || rx2 <= lx) {
        // no intersection
        continue;
      }
      // else calc area of intersection
      let len1 = Math.abs(Math.max(lx2, lx) - Math.min(rx2, rx));
      let len2 = Math.abs(Math.min(ry, ry2) - Math.max(ly, ly2));
      const area = Math.pow(Math.min(len1, len2), 2);
      ans = Math.max(ans, area);
    }
  }
  return ans;
};
