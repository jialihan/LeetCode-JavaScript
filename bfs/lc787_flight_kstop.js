/**
 * BFS: Time O(K * |E|)
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // 1. build adj graph
  const map = new Map(); // <a, [b, cost]>
  for (const f of flights) {
    if (!map.has(f[0])) {
      map.set(f[0], []);
    }
    map.get(f[0]).push(f.slice(1));
  }
  // console.log(map);

  // 2. bfs from scr
  const dist = new Array(n).fill(Infinity);
  const q = [[src, 0]];
  k++;
  while (q.length > 0 && k-- >= 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const [cur, cost] = q.shift();
      if (cost > dist[cur]) {
        continue;
      }
      dist[cur] = cost;
      if (map.has(cur)) {
        for (const next of map.get(cur)) {
          if (cost + next[1] <= dist[next[0]]) {
            q.push([next[0], cost + next[1]]);
          }
        }
      }
    }
  }

  return dist[dst] === Infinity ? -1 : dist[dst];
};
