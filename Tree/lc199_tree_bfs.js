// https://leetcode.com/submissions/detail/546443041/

var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  var res = [];
  var q = [root];
  while (q.length > 0) {
    var size = q.length;
    res.push(q[size - 1].val);
    for (var i = 0; i < size; i++) {
      var cur = q.shift();
      if (cur.left) {
        q.push(cur.left);
      }
      if (cur.right) {
        q.push(cur.right);
      }
    }
  }
  return res;
};
