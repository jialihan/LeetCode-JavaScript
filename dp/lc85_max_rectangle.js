/**
 * 85. Maximal Rectangle
 * PreSum + DP (2D array)
 * https://leetcode.com/problems/maximal-rectangle/solutions/1098613/javascript-dp-presum-in-row-solution-with-explanation/?envType=company&envId=google&favoriteSlug=google-thirty-days&role=all
 * @param {*} matrix
 * @returns
 */
var maximalRectangle = function (matrix) {
  if (matrix.length <= 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));
  // build preSum on each row: DP[][]
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      dp[i][j] = matrix[i][0] === "1" ? (j > 0 ? dp[i][j - 1] + 1 : 1) : 0;
    }

  let maxArea = 0;
  // scan from row "0 -> m", and column "n-1 -> 0"
  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] == "0") continue;
      var min = dp[i][j];
      for (var k = i; k < m; k++) {
        if (dp[k][j] === "0") break;
        min = Math.min(dp[k][j], min);
        maxArea = Math.max(maxArea, min * (k - i + 1));
      }
    }
  }
  return maxArea;
};
