var treeToDoublyList = function (root) {
  if (root === null) {
    return;
  }
  let list = [];
  const head = new Node(-1, null, null); // dummy node
  let pre = head;
  function inorder(node) {
    if (node === null) {
      return;
    }
    inorder(node.left);
    pre.right = node;
    node.left = pre;
    pre = node;
    inorder(node.right);
  }
  inorder(root);
  head.right.left = pre; // pre is last node
  pre.right = head.right;
  return head.right;
};

/**
 * in order iterative
 */
var inorderTraversal = function (root) {
  var stack = [];
  var p = root;
  var arr = [];
  while (p || stack.length > 0) {
    if (p) {
      stack.push(p);
      p = p.left;
    } else {
      var cur = stack.pop();
      arr.push(cur.val);
      p = cur.right;
    }
  }
  return arr;
};
