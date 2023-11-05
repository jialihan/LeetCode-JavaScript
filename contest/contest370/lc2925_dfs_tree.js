/**
 * 2925. Maximum Score After Applying Operations on a Tree
 * https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/description/
 *
 * transform the goal of this problem to find min one node value in each root -> leaf route. So that means we need to select one min value on each route, then sum them up.
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function (edges, values) {
  var maximumScoreAfterOperations = function (edges, values) {
    const total = values.reduce((a, b) => a + b);
    const n = edges.length;
    // 1. build adj
    const adj = new Map();
    for (const [u, v] of edges) {
      if (!adj.has(u)) {
        adj.set(u, []);
      }
      if (!adj.has(v)) {
        adj.set(v, []);
      }
      adj.get(u).push(v);
      adj.get(v).push(u);
    }
    // 2. dfs
    let res = 0;
    function dfs(node, visited) {
      visited.add(node);
      if (isLeafNode(node, visited)) {
        return values[node];
      }
      let sum = 0;
      for (let next of adj.get(node)) {
        if (!visited.has(next)) {
          sum += dfs(next, visited);
        }
      }

      return Math.min(sum, values[node]);
    }

    // helper function to check whether a leaf node
    function isLeafNode(node, visited) {
      for (let child of adj.get(node)) {
        if (!visited.has(child)) {
          return false;
        }
      }
      return true;
    }
    // 3. Result = Total - (min of selected nodes value)
    return total - dfs(0, new Set());
  };
};
