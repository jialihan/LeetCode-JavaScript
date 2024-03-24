/**
 * 3085. Minimum Deletions to Make String K-Special
 * reference: https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4886187/simple-hashing-consider-all-possibilities/
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  const map = new Map();
  for (let i = 0; i < word.length; i++) {
    map.set(word[i], (map.get(word[i]) ?? 0) + 1);
  }
  const cnt = Array.from(map.values()).sort((a, b) => a - b);
  console.log(cnt);
  let ans = word.length;
  // try all frequencies from min - max
  for (let i = cnt[0]; i <= cnt[cnt.length - 1]; i++) {
    let cur = 0;
    for (let j = 0; j < cnt.length; j++) {
      if (cnt[j] > i + k) {
        cur += cnt[j] - i - k;
      } else if (cnt[j] < i) {
        // delete char if it didn't fall into window [i, i+k]
        cur += cnt[j];
      }
    }
    ans = Math.min(cur, ans);
  }
  return ans;
};

/**
 * Improved solution
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  const map = new Map();
  for (let i = 0; i < word.length; i++) {
    map.set(word[i], (map.get(word[i]) ?? 0) + 1);
  }
  const cnt = Array.from(map.values()).sort((a, b) => a - b);
  console.log(cnt);
  let ans = word.length;
  let deleteCnt = 0;
  // try all frequencies from min - max
  for (let i = 0; i < cnt.length; i++) {
    let cur = 0;
    for (let j = cnt.length - 1; j > i; j--) {
      if (cnt[j] <= cnt[i] + k) {
        // tip2: save some time traverse from the end
        break;
      }
      cur += cnt[j] - cnt[i] - k;
    }
    cur += deleteCnt;
    ans = Math.min(cur, ans);
    // ti1: sum up previous smaller deleted cnt
    deleteCnt += cnt[i];
  }
  return ans;
};
