/**
 * 3219. Minimum Cost for Cutting Cake II
 * https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5473460/priorityqueue-with-storing-each-cut-index/
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function (m, n, horizontalCut, verticalCut) {
  const maxq = new MaxPriorityQueue({ priority: (bid) => bid.val });
  for (let i = 0; i < horizontalCut.length; i++) {
    maxq.enqueue({ val: horizontalCut[i], index: i, isRow: true });
  }
  for (let i = 0; i < verticalCut.length; i++) {
    maxq.enqueue({ val: verticalCut[i], index: i, isRow: false });
  }
  let rowCnt = 1,
    colCnt = 1;
  let ans = 0;
  while (!maxq.isEmpty()) {
    const cur = maxq.dequeue().element;
    if (cur.isRow) {
      ans += colCnt * horizontalCut[cur.index];
      rowCnt++;
    } else {
      ans += rowCnt * verticalCut[cur.index];
      colCnt++;
    }
  }
  return ans;
};
