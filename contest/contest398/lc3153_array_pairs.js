/**
 * 3153. Sum of Digit Differences of All Pairs
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  const n = nums.length;
  const strs = nums.map((num) => num.toString());
  const len = strs[0].length;

  let ans = 0;
  for (let i = 0; i < len; i++) {
    const map = new Map(); // <num, count>
    for (let j = 0; j < strs.length; j++) {
      const ch = strs[j][i];
      map.set(ch, (map.get(ch) ?? 0) + 1);
    }
    let total = (n * (n - 1)) / 2;
    for (const [k, v] of map) {
      // diff = total pairs - dup pairs
      total -= (v * (v - 1)) / 2;
    }
    ans += total;
  }
  return ans;
};
