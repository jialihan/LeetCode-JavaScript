/**
 * https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/description/
 * Note: more a math problem.....
 * @param {number[]} nums
 * @return {number}
 */
var minGroupsForValidAssignment = function (nums) {
  //     [10,10,10,3,1,1]
  //     [10, 10, 10]
  //     [1,1]
  //     [3]
  const n = nums.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, []);
    }
    map.get(num).push(i);
  }
  const groups = Array.from(map.values())
    .map((el) => el.length)
    .sort((a, b) => b - a);

  function partition(arr, minLen) {
    let res = arr.length;
    for (const len of arr) {
      if (len > minLen + 1) {
        if (len % minLen > Math.floor(len / minLen)) {
          // cur min len will break, reduce the minLen
          return partition(arr, minLen - 1);
        }
        // if can split, calc the min sub-groups to split in (minLen+1)
        res +=
          Math.floor(len / (minLen + 1)) + (len % (minLen + 1) > 0 ? 1 : 0) - 1;
      }
    }
    return res;
  }
  return partition(groups, groups[groups.length - 1]);
};
