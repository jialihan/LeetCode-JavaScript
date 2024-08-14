/**
 * 46. Permutations (distinct numbers)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  if (!nums || nums.length === 0) {
    return res;
  }
  const visited = new Set();
  function dfs(list) {
    if (list.length >= nums.length) {
      res.add(list.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited.has(i)) {
        continue;
      }
      visited.add(i);
      list.push(nums[i]);
      dfs(list);
      list.pop();
      visited.remove(i);
    }
  }
  dfs([]);
  return res;
};
