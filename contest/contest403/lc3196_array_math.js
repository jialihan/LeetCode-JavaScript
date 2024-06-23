// 3196. Maximize Total Cost of Alternating Subarrays
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTotalCost = function (nums) {
  let add = nums[0];
  let sub = nums[0];
  let ans = nums[0];
  nums.shift();
  for (const num of nums) {
    const tmpAdd = Math.max(add, sub) + num;
    sub = add - num;
    add = tmpAdd;
    ans = Math.max(sub, add);
  }
  return ans;
};
