/**
 * https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/description/
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  const n = nums.length;
  // step1: sort the array [num, i]
  const arr = nums
    .map((el, i) => [el, i])
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
  const max = arr[n - 1][0];
  if (max - valueDifference < 0) {
    return [-1, -1];
  }
  // step2: search from max value i=n-1, try to find the answer
  for (let j = n - 1; j >= 0; j--) {
    // step3: binary search if we find a valid "value"
    const index = binarySearch(arr, arr[j][0] - valueDifference);
    if (index >= 0) {
      // step4: try to find the valid `indexDiff` from [0,...index]
      let p = index;
      while (p >= 0) {
        if (Math.abs(arr[[p]][1] - arr[j][1]) >= indexDifference) {
          return [arr[p][1], arr[j][1]];
        }
        p--;
      }
    }
  }
  return [-1, -1];
};
function binarySearch(array, target) {
  // find the first element strictly > target
  let i = 0,
    j = array.length;
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (array[mid][0] <= target) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  // return left -1, which mean the first element <= target
  return i - 1;
}
