/**
 * 3186. Maximum Total Damage With Spell Casting
 * https://leetcode.com/problems/maximum-total-damage-with-spell-casting/description/
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function (power) {
  // dp[i+1]: means the best value when power[i] is casted.
  const dp = new Array(100001).fill(0);
  power.sort((a, b) => a - b);
  let preMax = 0;
  let j = 0;
  for (let i = 0; i < power.length; i++) {
    if (i === 0 || power[i] === power[i - 1]) {
      dp[i + 1] = dp[i] + power[i];
    } else {
      while (power[j] < power[i] - 2) {
        // find all the previous best value when j also is casted.
        preMax = Math.max(preMax, dp[++j]);
      }
      dp[i + 1] = power[i] + preMax;
    }
  }
  return Math.max(...dp);
};
