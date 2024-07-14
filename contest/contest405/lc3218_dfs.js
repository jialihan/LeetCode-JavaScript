/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function (m, n, horizontalCut, verticalCut) {
  const memo = new Map();
  function dfs(r, c, x, y) {
    const key = `${x}:${y}:${r}:${c}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    if (x == r + 1 && y === c + 1) {
      return 0;
    }
    let ans = Infinity;
    // vertical cut
    for (let i = c; i < y - 1; i++) {
      const res = dfs(r, c, x, i + 1) + verticalCut[i] + dfs(r, i + 1, x, y);
      ans = Math.min(ans, res);
    }
    // horizontal cut
    for (let i = r; i < x - 1; i++) {
      const res = dfs(r, c, i + 1, y) + horizontalCut[i] + dfs(i + 1, c, x, y);
      ans = Math.min(ans, res);
    }
    memo.set(key, ans);
    return ans;
  }
  return dfs(0, 0, m, n);
};
