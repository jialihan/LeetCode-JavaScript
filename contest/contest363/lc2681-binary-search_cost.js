// Note: All alloys must be created with the same machine.
// https://leetcode.com/problems/maximum-number-of-alloys/description/
// Constraints:
// 1 <= n, k <= 100
// 0 <= budget <= 10^8
// composition.length == k
// composition[i].length == n
// 1 <= composition[i][j] <= 100
// stock.length == cost.length == n
// 0 <= stock[i] <= 10^8
// 1 <= cost[i] <= 100
/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function (n, k, budget, composition, stock, cost) {
  let ans = 0;
  let l = 0,
    // Note: max  = stockMax + budget / minCost = 10^8 + 10^8 / 1
    r = 3 * 1e8;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (canProduce(mid)) {
      ans = Math.max(ans, mid);
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  } // end while
  function canProduce(cnt) {
    let minCost = Infinity;
    for (let i = 0; i < k; i++) {
      // if let machine i to produce
      let curCost = 0;
      for (let j = 0; j < n; j++) {
        const quantity = cnt * composition[i][j];
        const used = Math.min(stock[j], quantity);
        curCost += (quantity - used) * cost[j];
      }
      minCost = Math.min(minCost, curCost);
    }
    return minCost <= budget;
  }
  return ans;
};
