// 2966. Divide Array Into Arrays With Max Difference
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  const n = nums.length;
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    }
    res.push([nums[i], nums[i + 1], nums[i + 2]]);
    i += 2;
  }
  return res;
};
