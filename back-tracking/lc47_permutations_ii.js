/**
 * 47. Permutations II (with duplicates)
 * https://leetcode.com/problems/permutations-ii/description/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const visited = new Set(); // store the index
  function dfs(list) {
    if (list.length >= nums.length) {
      res.push([...list]);
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
      visited.delete(i);
      let j = i;
      while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
        i++;
      }
    }
  }
  dfs([]);
  return res;
};
