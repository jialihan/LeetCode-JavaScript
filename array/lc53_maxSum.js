var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (const num of nums) {
    sum = Math.max(sum + num, num);
    max = Math.max(max, sum);
  }
  return max;
};
