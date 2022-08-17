var restoreIpAddresses = function (s) {
  var res = [];
  var list = [];
  function dfs(s, index, list, k) {
    if (k === 0 || index >= s.length) {
      if (k === 0 && index === s.length) {
        res.push(list.join("."));
      }
      return;
    }
    for (var i = 1; i <= 3; i++) {
      var cur = s.slice(index, index + i);
      if (parseInt(cur) > 255 || (i > 1 && s[index] === "0")) {
        break;
      }
      list.push(cur);
      dfs(s, index + i, list, k - 1);
      list.pop();
    }
  }
  dfs(s, 0, list, 4);
  return res;
};
var restoreIpAddresses = function (s) {
  var res = [];
  var list = [];
  function dfs(s, index, list, k) {
    if (k === 0 || index >= s.length) {
      if (k === 0 && index === s.length) {
        res.push(list.join("."));
      }
      return;
    }
    for (var i = 1; i <= 3; i++) {
      var cur = s.slice(index, index + i);
      if (parseInt(cur) > 255 || (i > 1 && s[index] === "0")) {
        break;
      }
      list.push(cur);
      dfs(s, index + i, list, k - 1);
      list.pop();
    }
  }
  dfs(s, 0, list, 4);
  return res;
};
