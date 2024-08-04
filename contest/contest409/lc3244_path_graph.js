/**
 * 3244. Shortest Distance After Road Addition Queries II
 * https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/
 *
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  // tip1: no overlapped query
  // tip2: keep only one best path in the whole solution
  const map = new Map();
  for (let i = 0; i < n - 1; i++) {
    map.set(i, i + 1);
  }
  // total paths is the map.size
  const ans = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [u, v] = queries[i];
    if (!map.has(u) || map.get(u) >= v) {
      ans[i] = map.size;
      continue;
    }
    // delete all middle useless nodes
    let j = map.get(u);
    while (j < v) {
      const next = map.get(j);
      map.delete(j);
      j = next;
    }
    // update new added path
    map.set(u, v);

    ans[i] = map.size;
  }
  return ans;
};
