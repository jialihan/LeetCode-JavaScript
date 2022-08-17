var maxPathSum = function (root) {
  var max = -Infinity;
  function helper(node) {
    if (node === null) return 0;
    var left = Math.max(0, helper(node.left));
    var right = Math.max(0, helper(node.right));
    var cur = Math.max(left, right) + node.val;
    max = Math.max(max, left + right + node.val, cur);
    return cur;
  }
  helper(root);
  return max;
};
