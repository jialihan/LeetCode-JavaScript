/**
 * 3226. Number of Bit Changes to Make Two Integers Equal
 * You are given two positive integers n and k.
 * You can choose any bit in the binary representation of n that is equal to 1 and change it to 0.
 * Return the number of changes needed to make n equal to k. If it is impossible, return -1.
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  if (n === k) {
    return 0;
  } else if (n < k) {
    return -1;
  }
  const s1 = n.toString(2);
  let s2 = k.toString(2);

  if (s1.length > s2.length) {
    let diff = s1.length - s2.length;
    while (diff > 0) {
      s2 = "0" + s2;
      diff--;
    }
  }
  let ans = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2[i] === "1" && s1[i] === "0") {
      return -1;
    }
    if (s2[i] !== s1[i]) {
      ans++;
    }
  }
  return ans;
};
