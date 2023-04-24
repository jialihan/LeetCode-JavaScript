// DP + DFS
// 2646. Minimize the Total Price of the Trips
// reference idea: https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3422052/dfs-dp-easiest-approach-similiar-to-house-robber/?orderBy=hot

/**
 * Steps:
 * 1. build adj
 * 2. build total[] array to store each node's price that appeared in trips.
 * 3. DFS with half price to calc minimum price in all nodes.
 */
var minimumTotalPrice = function (n, edges, price, trips) {
  // 1. build adj
  const adj = new Map();
  for (const e of edges) {
    if (!adj.has(e[0])) {
      adj.set(e[0], []);
    }
    adj.get(e[0]).push(e[1]);
    if (!adj.has(e[1])) {
      adj.set(e[1], []);
    }
    adj.get(e[1]).push(e[0]);
  }
  const total = new Array(n).fill(0);
  // count the price in node for all trips
  function dfs1(s, e, parent) {
    if (s === e) {
      total[e] += price[e];
      return true;
    }
    for (const next of adj.get(s)) {
      if (parent !== next) {
        if (dfs1(next, e, s)) {
          total[s] += price[s];
          return true;
        }
      }
    }
    return false;
  }
  const dp = new Array(n).fill(-1); // store the already computed node value
  const visited = new Array(n).fill(false);
  function dfs2(s) {
    if (dp[s] !== -1) {
      // already computed
      return dp[s];
    }
    visited[s] = true;
    // 1) take half on current node: s
    let val1 = Math.floor(total[s] / 2);
    if (adj.get(s)) {
      for (const next of adj.get(s)) {
        if (!visited[next]) {
          // cannot take half on all childrens
          val1 += total[next];
          visited[next] = true;
          for (const node of adj.get(next)) {
            if (!visited[node]) {
              val1 += dfs2(node);
            }
          }
          visited[next] = false;
        }
      }
    }
    // 2) not take half on current node: s
    let val2 = total[s];
    if (adj.get(s)) {
      for (const next of adj.get(s)) {
        if (!visited[next]) {
          val2 += dfs2(next);
        }
      }
    }
    visited[s] = false;

    return (dp[s] = Math.min(val1, val2));
  }

  // 2. compute all trips nodes price
  for (const t of trips) {
    dfs1(t[0], t[1], -1);
  }
  // 3. half price in each nodes
  return dfs2(0);
};
