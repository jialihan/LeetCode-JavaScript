/**
 * https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5282014/o-1-math/
 * Similar to circular array
 * Note: starting from 0,  only pass (n-1) times in one direction.
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function (n, k) {
  const c = Math.floor(k / (n - 1));
  const mod = k % (n - 1);
  if (c % 2 === 0) {
    return mod === 0 ? 0 : mod;
  } else {
    return mod === 0 ? n - 1 : n - mod - 1;
  }
};
