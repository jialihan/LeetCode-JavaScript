/**
 * 3007. Maximum Number That Sum of the Prices Is Less Than or Equal to K
 * Referenced idea: https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4561932/binary-search-approach-easy-solution-video-available/
 * https://www.youtube.com/watch?v=KggU6NiWLos
 * @param {number} k
 * @param {number} x
 * @return {number}
 */
var findMaximumNumber = function (k, x) {
  // Binary Search
  let l = 1,
    r = Math.pow(10, 15);
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    const bitsArray = calcSumOfOneBitsForNumber(mid);
    let ans = 0;
    for (let i = 0; i < bitsArray.length; i++) {
      ans += (i + 1) % x === 0 ? bitsArray[i] : 0;
    }
    if (ans <= k) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l - 1;
};

// 1. increasing num -> increasing K = Sum(1, num),so num < K, so  the Right limit of BS is the "1 <= num <= k_max"

// 2. calc setBits in MSB: [1,x,x,x] = num % 2 ^ 3 + 1
// 0000
// 0001
// 0010
// 0011
// 0100
// 0101
// 0110
// 0111
// ----
// 1000 (8)
// 1001 (9)
// 1010 (10)  -> MSB: 10 % 8 + 1 = 3 bits
// ----------

// 3. calc remaining bits for LAST 2^3 numbers [MSB, 2^3/2, 2^3/2, 2^3/2]
// 0000
// 0001
// 0010 (2) -> recursion(num=2)
// ----------
// 0|011
// 0|100
// 0|101
// 0|110
// 0|111
// 1|000 (8)
// 1|001 (9)
// 1|010 (10)  -> MSB
// ----------

// 4. base case recursion(0)=0, recursion(1) = 1, recursion(2) = 2

function calcSumOfOneBitsForNumber(num) {
  // because: Math.log2(MAX_SAFE_INTEGER) =  53;
  const cnt = new Array(53).fill(0); // array of count of '1' bit in each bit
  function solve(num, arr) {
    if (num <= 0) {
      return;
    }
    if (num === 1) {
      arr[0]++;
      return;
    }
    if (num === 2) {
      arr[0]++;
      arr[1]++;
      return;
    }
    const MSB = Math.floor(Math.log2(num));
    const base = Math.pow(2, MSB);
    arr[MSB] += num - base + 1;
    // count bits in last "base(=2^MSB)" numbers
    for (let i = MSB - 1; i >= 0; i--) {
      arr[i] += base / 2;
    }
    solve(num - base, arr);
  }
  solve(num, cnt);
  return cnt;
}
