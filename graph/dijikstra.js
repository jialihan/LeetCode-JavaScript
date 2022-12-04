// LC1514: https://leetcode.com/problems/path-with-maximum-probability/description/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  // 1. build adj
  const map = new Map();
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    if (!map.has(a)) {
      map.set(a, []);
    }
    if (!map.has(b)) {
      map.set(b, []);
    }
    map.get(a).push([b, succProb[i]]);
    map.get(b).push([a, succProb[i]]);
  }
  // 2. dijkstra
  // 2.1 create the distance array
  const dist = new Array(n).fill(-1);
  dist[start] = 0;

  const pq = new MaxPriorityQueue({ priority: (bid) => bid[1] });
  pq.enqueue([start, 1.0]);

  while (!pq.isEmpty()) {
    // 2.2 use priority queue to find the next smallest distance node
    const [node, po] = pq.dequeue().element;
    console.log(node, po);

    if (node === end) {
      return po;
    }

    // 2.3 update distance for adjacent nodes
    if (map.has(node)) {
      for (const [next, d] of map.get(node)) {
        const newDist = po * d;
        // 2.4 update distance array
        if (dist[next] < newDist) {
          dist[next] = newDist;
          pq.enqueue([next, newDist]);
        }
      }
    }
  }
  return 0.0;
};
