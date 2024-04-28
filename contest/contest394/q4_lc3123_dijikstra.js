/**
 * 3123. Find Edges in Shortest Paths
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean[]}
 */
var findAnswer = function (n, edges) {
  const adj = new Map(); //<e, []>
  for (let i = 0; i < edges.length; i++) {
    const [e1, e2, w] = edges[i];
    if (!adj.has(e1)) {
      adj.set(e1, []);
    }
    if (!adj.has(e2)) {
      adj.set(e2, []);
    }
    adj.get(e1).push([e2, w, i]);
    adj.get(e2).push([e1, w, i]);
  }
  const dist = new Array(n).fill(Infinity);
  dist[0] = 0;
  let pq = new MinPriorityQueue({ priority: (bid) => bid[1] });
  pq.enqueue([0, 0]); // [idx, weight]
  // let min;
  while (!pq.isEmpty()) {
    const [node, w] = pq.dequeue().element;
    // console.log("pull the node at: ", node, "weight="+w);
    if (node === n - 1) {
      break;
    }
    if (w > dist[node]) {
      continue;
    }
    if (adj.has(node)) {
      for (const [next, weight] of adj.get(node)) {
        if (dist[node] + weight < dist[next]) {
          dist[next] = dist[node] + weight;
          pq.enqueue([next, dist[node] + weight]);
        }
      }
    }
  }

  const ans = new Array(edges.length).fill(false);
  const min = dist[n - 1];
  console.log("min=" + min);
  if (min === Infinity) {
    return ans;
  }

  // backtrack
  pq = [[n - 1, dist[n - 1]]];
  while (pq.length > 0) {
    const [node, val] = pq.shift();
    for (const [next, w, j] of adj.get(node)) {
      if (dist[node] === w + dist[next]) {
        ans[j] = true;
        pq.push([next, val - w]);
      }
    } //end for
  } // end while
  return ans;
};
