/**
 * 3072. Distribute Elements Into Two Arrays II
 * my solution: https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4814110/js-use-binary-search-to-build-the-lis-longest-increasing-sequence/
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
  const arr1 = [nums[0]];
  const arr2 = [nums[1]];
  let lis1 = [nums[0]];
  let lis2 = [nums[1]];
  for (let i = 2; i < nums.length; i++) {
    const idx1 = getInsertIndex(lis1, nums[i]);
    const idx2 = getInsertIndex(lis2, nums[i]);
    // compare the greater counts than nums[i]
    const l1 = lis1.length - idx1;
    const l2 = lis2.length - idx2;
    if (l1 > l2 || (l1 === l2 && arr1.length <= arr2.length)) {
      lis1.splice(idx1, 0, nums[i]);
      arr1.push(nums[i]);
    } else if (l1 < l2 || (l1 === l2 && arr1.length > arr2.length)) {
      lis2.splice(idx2, 0, nums[i]);
      arr2.push(nums[i]);
    }
  }
  return [...arr1, ...arr2];
};

/**
 * find the 1st index strictly larger than num,
 * if it's the largest then l = arr.length. but Array.splcie() will directly
 * add elments if the index  > than arr.length.
 */
function getInsertIndex(arr, num) {
  const len = arr.length;
  let l = 0,
    r = len;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] <= num) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
