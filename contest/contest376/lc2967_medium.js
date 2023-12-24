/**
 * 2967. Minimum Cost to Make Array Equalindromic
Medium
52
 * https://leetcode.com/problems/minimum-cost-to-make-array-equalindromic/description/
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  function isPalindrome(num) {
    const s = num.toString();
    let i = 0,
      j = s.length - 1;
    while (i < j) {
      if (s[i] === s[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }
    return true;
  }
  function findPanlindromeBefore(num) {
    for (let i = num; i > 0; i--) {
      if (isPalindrome(i)) {
        return i;
      }
    }
    return -1;
  }
  function findPanlindromeAfter(num) {
    for (let i = num; i <= 1000000000; i++) {
      if (isPalindrome(i)) {
        return i;
      }
    }
    return -1;
  }
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const mid = nums[Math.floor(n / 2)];

  const a = findPanlindromeBefore(mid);
  const b = findPanlindromeAfter(mid);
  console.log("a=" + a, "b=" + b);

  let res1 = 0;
  let res2 = 0;
  for (let i = 0; i < n; i++) {
    res1 += Math.abs(nums[i] - a);
    res2 += Math.abs(nums[i] - b);
  }
  return Math.min(res1, res2);
};
