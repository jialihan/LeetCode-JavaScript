/**
 * 3091. Apply Operations to Make Sum of Array Greater Than or Equal to k
 * https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4917173/try-to-find-best-value-from-2-ceil-k-2/
 * finally I know the best answer is when i = Math.ceil(Math.sqrt(k));
 * @param {number} k
 * @return {number}
 */
var minOperations = function (k) {
  if (k < 4) {
    return k - 1;
  }
  let ans = k - 1;
  for (let i = 1; i <= Math.ceil(k / 2); i++) {
    const cnt = Math.ceil(k / i);
    const res = cnt - 1 + i - 1;
    ans = Math.min(ans, res);
  }
  return ans;
};

// Best solution
var minOperations = function (k) {
  const i = Math.ceil(Math.sqrt(k));
  const res = i - 1 + Math.ceil(k / i) - 1;
  return res;
};
