/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var map = new Map();
  map.set(0, 1);
  var sum = 0;
  var cnt = 0;
  for (var num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      cnt += map.get(sum - k);
    }
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  }
  return cnt;
};
