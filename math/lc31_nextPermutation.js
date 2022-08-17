// 3, 2, 1 -> 1,2,3
// 1,2,4,3,2,1
// --> find the first decrease: 2-> 4
// --> find the first larger than 2 --> 3
// --> swap 2 & 3
// --> reverse from (decrease + 1 to n)
var nextPermutation = function (nums) {
  let decrease = -1;
  const n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      decrease = i;
      break;
    }
  }
  if (decrease === -1) {
    return reverse(nums, 0, n - 1);
  } else {
    for (let i = n - 1; i > decrease; i--) {
      if (nums[i] > nums[decrease]) {
        // swap i & decrease
        [nums[i], nums[decrease]] = [nums[decrease], nums[i]];
        reverse(nums, decrease + 1, n - 1);
        break;
      }
    }
  }
  return;
};
function reverse(arr, l, r) {
  let i = l,
    j = r;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}
