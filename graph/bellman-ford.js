// LC743: https://leetcode.com/problems/network-delay-time/description/
/**
 * Bellman-Ford Algorithm (N-1 times relaxation)
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // Step 1: create distance array
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;

  // Step 2: We will relax all the edges of the graph by loop N-1 times.
  for (let i = 1; i < n; i++) {
    for (const [src, dest, w] of times) {
      // traverse Edge
      if (dist[src] !== Infinity && dist[src] + w < dist[dest]) {
        dist[dest] = dist[src] + w;
      }
    }
  }

  // Step 3: We will perform the Nth loop to check if the graph has any negative cycle.
  // if there is something still updates in the Nth loop, negative exist!!!!

  // compute result for n nodes, return the max time
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res = Math.max(res, dist[i]);
  }

  return res == Infinity ? -1 : res;
};
