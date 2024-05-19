/**
 * 3154. Find Number of Ways to Reach the K-th Stair
 * Referenced solution: https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5177138/recursion-memoization-3d/
 * @param {number} k
 * @return {number}
 */
var waysToReachStair = function (k) {
  // 2^30 > 10^ 9
  // status: [jump][back][up/down 0/1]
  const memo = new Array(33)
    .fill(0)
    .map((el) => new Array(33).fill(0).map((el) => new Array(2).fill(-1)));
  function helper(cur, jump, back, op) {
    if (cur > k + 1) {
      return 0; // there is no way
    }

    if (memo[jump][back][op] !== -1) {
      return memo[jump][back][op];
    }

    let res = 0;
    if (cur === k) {
      res++;
    }

    res += helper(cur + Math.pow(2, jump), jump + 1, back, 0);
    if (op === 0) {
      // can go down
      res += helper(cur - 1, jump, back + 1, 1);
    }
    memo[jump][back][op] = res;
    return res;
  }
  return helper(1, 0, 0, 0);
};
