var countAlternatingSubarrays = function (nums) {
  let ans = 0;
  let start = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i - 1] === nums[i]) {
      // only calc if an valid starting index
      if (start !== i - 1) {
        // calc [start+1, i]
        const len = i - start;
        ans += ((len + 1) * len) / 2;
        // minus the single array for now
        ans -= len;
      }
      start = i;
    }
  }
  // add up single array as whole length
  ans += nums.length;
  return ans;
};
