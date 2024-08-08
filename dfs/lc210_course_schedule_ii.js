/**
 * 210. Course Schedule II
 * You are given an array prerequisites where prerequisites[i] = [ai, bi]
 * indicates that you must take course bi first if you want to take course ai.
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // 1. build adj
  const map = new Map();
  for (const [x, y] of prerequisites) {
    if (!map.has(y)) {
      map.set(y, []);
    }
    map.get(y).push(x);
  }
  // 2. dfs func
  const ans = [];
  // 0: unvisited,
  // 1: visiting,
  // 2: successfully visited (memo)
  const visited = new Array(numCourses).fill(0);
  function dfs(i) {
    if (visited[i] === 2) {
      // can dfs
      return true;
    }
    if (visited[i] === 1) {
      return false; // cycle, cannot dfs
    }
    visited[i] = 1;
    if (map.has(i)) {
      for (const next of map.get(i)) {
        if (!dfs(next)) {
          return false;
        }
      }
    }
    ans.push(i);
    visited[i] = 2;
    return true;
  }

  // 3. dfs for each node
  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) === -1) {
      return [];
    }
  }
  return ans.reverse();
};
