// Algorithm:

// For every visited vertex v, if there is an adjacent u such that u is already visited and u is not parent of v, then there is a cycle in graph.
// If we don’t find such an adjacent for any vertex, we say that there is no cycle.

// Time Complexity: O(N + Edges)
// Space Complexity: O(N)

// undirected graph	
function isCycle(n, edges) {
  // 1. build adj
  const map = new Map();
  for (const [x, y] of edges) {
  const map = new Map();
  for (const [x, y] of prerequisites) {
    if (!map.has(y)) {
      map.set(y, []);
    }
    if (!map.has(x)) {
        map.set(x, []);
      }
    map.get(y).push(x);
    map.get(x).push(y);
  }
 
  // 2. dfs on each node, return true if can finish, false means a cycle
  function canFinishDfs(i, visited) {
    if(visited.has(i)) {
        return false;
    }
    visited.add(i);
    for(const next of map.get(i)) {
        if(next === i) {
            continue;
        }
        if(!visited.has(next)) {
            if(!dfs(visited, next)) {
                // can not finish, cycle found
                return false;
            }
        }
    }// end for
    return true;
  }

  // 3. check cycle
  const set = new Set(); // visited
  for(let i =0;i<n;i++) {
    if(!set.has(i)) {
        if(!dfs(i, set)) {
            // cannot finish ,cycle detect
            return true;
        }
    }
  }
  return false;
}