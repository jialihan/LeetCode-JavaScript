var splitArray = function (nums, m) {
  let max = 0;
  let sum = 0;
  for (const num of nums) {
    max = Math.max(max, num);
    sum += num;
  }
  if (m == 1) {
    return sum;
  }
  // binary search
  let r = sum,
    l = max;
  while (l < r) {
    const mid = Math.floor((r + l) / 2);

    // count how many subset needs
    let sub = 1;
    let cur = 0;
    for (const num of nums) {
      if (cur + num > mid) {
        cur = 0;
        sub++;
      }
      cur += num;
    }

    // continue binary search
    if (sub > m)
      // not valid
      l = mid + 1;
    //  is valid <= D
    else r = mid;
  }
  return l;
};
