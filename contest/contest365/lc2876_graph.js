/**
 * https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/description/
 * @param {number[]} edges
 * @return {number[]}
 */
var countVisitedNodes = function (edges) {
  const n = edges.length;
  const ans = new Array(n).fill(0);
  const visited = new Array(n).fill(false);
  function dfs(node, list) {
    list.push(node);
    visited[node] = true;
    const next = edges[node];
    if (visited[next]) {
      const j = list.indexOf(next);
      if (j >= 0) {
        // case 1: current path contains a cycle
        for (let k = j; k < list.length; k++) {
          if (ans[list[k]] === 0) {
            ans[list[k]] = list.length - j;
          }
        }
        for (let k = 0; k < j; k++) {
          if (ans[list[k]] === 0) {
            ans[list[k]] = list.length - k;
          }
        }
      } else {
        // case 2: single path point to a cycle
        for (let k = 0; k < list.length; k++) {
          if (ans[list[k]] === 0) {
            ans[list[k]] = list.length - k + ans[next];
          }
        }
      }
      return;
    }
    dfs(next, list);
  }
  for (let i = 0; i < n; i++) {
    if (ans[i] === 0) {
      dfs(i, []);
    }
  }
  return ans;
};
