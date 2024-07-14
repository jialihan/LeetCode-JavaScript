/**
 * 3211. Generate Binary Strings Without Adjacent Zeros
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  const ans = [];
  function dfs(str, index) {
    if (index >= n) {
      ans.push(str);
      return;
    }
    if (index === 0 || (index > 0 && str[index - 1] === "1")) {
      dfs(str + "0", index + 1);
    }
    dfs(str + "1", index + 1);
  }
  dfs("", 0);
  return ans;
};
