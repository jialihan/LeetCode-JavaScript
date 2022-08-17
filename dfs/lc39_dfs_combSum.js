var combinationSum = function (candidates, target) {
  var res = [];
  var list = [];
  function dfs(arr, index, target, list) {
    if (target < 0 || index >= arr.length) {
      return;
    }
    if (target === 0) {
      res.push(list.slice());
      return;
    }
    for (var i = index; i < arr.length; i++) {
      if (target >= arr[i]) {
        list.push(arr[i]);
        dfs(arr, i, target - arr[i], list);
        list.pop();
      }
    }
  }
  dfs(candidates, 0, target, list);
  return res;
};
