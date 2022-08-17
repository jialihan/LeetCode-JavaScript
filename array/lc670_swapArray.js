var maximumSwap = function (num) {
  const arr = num.toString().split("");
  const n = arr.length;
  const dp = new Array(n).fill(-1); // store max index from right to left

  // build the dp array
  dp[n - 1] = n - 1;
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = arr[i] > arr[dp[i + 1]] ? i : dp[i + 1];
  }

  // find and swap from left
  for (let i = 0; i < n - 1; i++) {
    const max = arr[dp[i]];
    if (i !== dp[i] && arr[i] < max) {
      [arr[i], arr[dp[i]]] = [arr[dp[i]], arr[i]];
      break;
    }
  }
  return +arr.join("");
};
