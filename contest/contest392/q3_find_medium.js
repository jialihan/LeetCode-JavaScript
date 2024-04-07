/**
 * BAD solution
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function (nums, k) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const n = nums.length;
  // const med = n % 2 === 1 ? nums[Math.floor(n/2)] : Math.ceil((nums[Math.floor(n/2)] + nums[Math.floor(n/2)-1])/2) ;
  // Medium is the right medium: [...lm, rm...] when array is even, [..., rm, ...] when array is odd.
  const med = nums[Math.floor(n / 2)];
  const rm = Math.floor(n / 2);
  const idx1 = binarySearch_lower(nums, k);
  let ans = 0;
  // case1: k is larger than whole array
  if (idx1 >= n) {
    let j = rm;
    while (j < n) {
      ans += k - nums[j];
      j++;
    }
    return ans;
  }
  // case2: k is larger than medium
  if (nums[idx1] > med) {
    let j = idx1 === rm ? idx1 : idx1 - 1;
    while (j >= rm) {
      ans += Math.abs(k - nums[j]);
      j--;
    }
  }
  // case3: k is smaller than medium
  else if (nums[idx1] < med) {
    let j = idx1;
    while (j <= rm) {
      ans += nums[j] - k;
      j++;
    }
  }
  // case4: k is equal to medium
  else {
    if (nums[idx1] > k) {
      ans += (rm - idx1 + 1) * (nums[idx1] - k);
    }
  }
  return ans;
};

/** find 1st element >= target */
function binarySearch_lower(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

// Clever solution
// https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4985548/java-c-python-sort/
// public long minOperationsToMakeMedianK(int[] A, int k) {
//     int n = A.length;
//     long res = 0;
//     Arrays.sort(A);
//     for (int i = 0; i <= n / 2; ++i)
//         res += Math.max(0, A[i] - k);
//     for (int i = n / 2; i < n; ++i)
//         res += Math.max(0, k - A[i]);
//     return res;
// }
