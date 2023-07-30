// 2799. Count Complete Subarrays in an Array
// Solution: sliding window + couting array

/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const cnt = new Array(2002).fill(0);
  let set = new Set(nums);
  const total = set.size;
  const n = nums.length;
  let res = 0;
  let counter = 0;
  let end = -1; // set the initial value
  for (let i = 0; i < n; i++) {
    // remove prev num
    if (i > 0) {
      cnt[nums[i - 1]]--;
      if (cnt[nums[i - 1]] === 0) {
        counter--;
      }
    }
    // add current num
    if (i > end && cnt[nums[i]]++ === 0) {
      end = i; // reset the current end
      counter++;
    }
    // find the subarray
    if (counter === total) {
      res += n - end;
    } else {
      // not found subarray
      end++;
      while (end < n) {
        if (cnt[nums[end]]++ === 0) {
          counter++;
        }
        if (counter === total) {
          res += n - end;
          break;
        }
        end++;
      }
    }
  }
  return res;
};
