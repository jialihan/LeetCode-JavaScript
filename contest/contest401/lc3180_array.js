/**
 * 3180. Maximum Total Reward Using Operations I
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (r) {
  r.sort((a, b) => a - b);
  const n = r.length;
  const dp = new Array(50000).fill(0);
  const largest = r[n - 1];
  for (let i = 0; i < n; ++i)
    if (i == 0 || r[i - 1] != r[i])
      for (let j = 0; j < r[i] && j + r[i] < largest; ++j)
        dp[r[i] + dp[j]] = r[i] + dp[j];
  return largest + Math.max(...dp);
};

// My solution

/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (r) {
  const n = r.length;
  r.sort((a, b) => a - b);
  const map = new Map(); // <i, setSums>
  for (let i = 0; i < n; i++) {
    let set;
    if (i === 0) {
      set = new Set();
      set.add(r[0]);
      map.set(0, new Set(set));
    } else {
      set = new Set(map.get(i - 1));
      const arr = [...set];
      for (const num of arr) {
        if (num < r[i]) {
          set.add(num + r[i]);
        }
      }
      set.add(r[i]);
      map.set(i, new Set(set));
    }
  }
  const arr3 = [...map.get(n - 1)];
  return Math.max(...arr3);
};
function binarySearch(arr, target) {
  // find the 1st num that >= target, then return the (i-1)
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l - 1;
}
