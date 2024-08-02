/**
 * 1161. Maximum Level Sum of a Binary Tree
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
 * Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let max = -Infinity;
  let ans = -1;
  let level = 0;
  const q = [root];
  while (q.length > 0) {
    const size = q.length;
    let sum = 0;
    level++;
    for (let i = 0; i < size; i++) {
      const cur = q.shift(); // 1. pop node on same level
      sum += cur.val;
      // 2. add child to next level
      if (cur.left) {
        q.push(cur.left);
      }
      if (cur.right) {
        q.push(cur.right);
      }
    }
    if (sum > max) {
      max = sum;
      ans = level;
    }
  }
  return ans;
};
