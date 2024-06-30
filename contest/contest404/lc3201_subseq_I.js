/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  if (nums.length === 2) {
    return 2;
  }
  const arr = nums.map((el) => el % 2);
  // console.log(arr);
  let ans = 0;
  let a = 0; // 0
  let b = 0; // 1
  let pre1,
    cnt1 = 0;
  let pre2,
    cnt2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      a++;
      if (pre1 == undefined) {
        pre1 = 0;
        cnt1++;
      }
    } else {
      b++;
      if (pre2 == undefined) {
        pre2 = 1;
        cnt2++;
      }
    }
    if (pre1 !== undefined && pre1 !== arr[i]) {
      cnt1++;
      pre1 = arr[i];
    }
    if (pre2 !== undefined && pre2 !== arr[i]) {
      cnt2++;
      pre2 = arr[i];
    }
  }
  // console.log("0 count: "+a, "1 count: "+b, "01 count: " + cnt1, "02 count: "+ cnt2);
  const max = Math.max(a, b, cnt1, cnt2);
  return max;
};
