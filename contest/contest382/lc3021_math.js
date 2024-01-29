/**
 * 3021. Alice and Bob Playing Flower Game
 * https://leetcode.com/problems/alice-and-bob-playing-flower-game/description/
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function (n, m) {
  // [odd1, even1] = n 2,1
  // [odd2, even2] = m 1,1
  const odd1 = Math.ceil(n / 2);
  const even1 = Math.floor(n / 2);
  const odd2 = Math.ceil(m / 2);
  const even2 = Math.floor(m / 2);
  const cnt = odd1 * even2 + odd2 * even1;
  return cnt;
};
