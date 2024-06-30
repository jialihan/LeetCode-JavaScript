/**
 * 3203. Find Minimum Diameter After Merging Two Trees
 * Rerenced to Leetcode】1245. Tree Diameter: https://blog.csdn.net/qq_46105170/article/details/108374199
 * My solution: https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5389870/find-the-diameter-in-2-graphs-similar-to-1245/
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
  const val1 = getUndirectedGraphDiameter(edges1);
  const val2 = getUndirectedGraphDiameter(edges2);
  // val3 should come from select a root that with min leaf path length
  const val3 = Math.ceil(val1 / 2) + Math.ceil(val2 / 2) + 1;
  return Math.max(val1, val2, val3);
};
function getUndirectedGraphDiameter(edges) {
  const adj = new Map(); // <node, children>
  for (const [s, e] of edges) {
    if (!adj.has(s)) {
      adj.set(s, []);
    }
    if (!adj.has(e)) {
      adj.set(e, []);
    }
    adj.get(s).push(e);
    adj.get(e).push(s);
  }
  let bestNode = -1;
  let maxDist = 0;
  function dfs(node, curDist, visited) {
    if (curDist >= maxDist) {
      bestNode = node;
      maxDist = curDist;
    }
    visited.add(node);
    if (adj.has(node)) {
      // in case of [] edges
      for (const next of adj.get(node)) {
        if (!visited.has(next)) {
          dfs(next, curDist + 1, visited);
        }
      }
    }
  }
  dfs(0, 0, new Set());
  //   console.log("bestNode:", bestNode);
  dfs(bestNode, 0, new Set());
  //   console.log("bestNode:", bestNode);
  //   console.log("maxDist:", maxDist);
  return maxDist;
}
