// /**
//  * * DFS wrong
//  * @param {number} n
//  * @param {number[][]} edges
//  * @param {number[][]} query
//  * @return {number[]}
//  */
// var minimumCost = function (n, edges, query) {
//   const memo = new Map(); // <key, minVal>
//   const adj = new Map();
//   for (const [s, e, w] of edges) {
//     if (!adj.has(s)) {
//       adj.set(s, []);
//     }
//     if (!adj.has(e)) {
//       adj.set(e, []);
//     }
//     adj.get(s).push([e, w]);
//     adj.get(e).push([s, w]);
//   }
//   const res = [];
//   let ans;
//   function dfs(start, end, cur, visited) {
//     // console.log("dfs: " + start + ", end =" + end );
//     if (memo.has(`${start}:${end}`)) {
//       return memo.get(`${start}:${end}`);
//     }
//     if (memo.has(`${end}:${start}`)) {
//       return memo.get(`${end}:${start}`);
//     }

//     if (start === end) {
//       ans = Math.min(ans, cur);
//       return;
//     }

//     visited.add(start);
//     if (!adj.get(start)) {
//       return;
//     }
//     let v = cur;
//     for (const [next, w] of adj.get(start)) {
//       if (visited.has(next)) {
//         v &= w;
//       }
//     }
//     for (const [next, w] of adj.get(start)) {
//       if (!visited.has(next)) {
//         const val = w & v;
//         dfs(next, end, val, visited);
//       }
//     }
//   }
//   for (const [s, e] of query) {
//     ans = Infinity;
//     dfs(s, e, 1, new Set());
//     const value = ans === Infinity ? -1 : ans;
//     memo.set(`${s}:${e}`, value);
//     memo.set(`${e}:${s}`, value);
//     res.push(value);
//   }

//   return res;
// };

/**
 * 3108. Minimum Cost Walk in Weighted Graph
 * https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/description/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
class DSU {
  constructor(n) {
    this.size = new Array(n).fill(1);
    this.p = [...Array(n)];
    for (let i = 0; i < n; i++) {
      this.p[i] = i;
    }
    this.value = new Array(n).fill(0).map((el) => new Set());
  }

  findParent(x) {
    if (this.p[x] !== x) {
      this.p[x] = this.findParent(this.p[x]);
    }
    return this.p[x];
  }

  union(x, y, w) {
    const px = this.findParent(x);
    const py = this.findParent(y);

    // !!!Important: update each weight into parent's set
    const set = new Set();
    for (const e of this.value[px]) {
      set.add(e);
    }
    for (const e of this.value[py]) {
      set.add(e);
    }
    set.add(w);
    this.value[px] = set;
    this.value[py] = set;

    // union if parent is not the same
    if (px !== py) {
      if (this.size[px] >= this.size[py]) {
        this.p[py] = px;
        this.size[px] += this.size[py];
      } else {
        this.p[px] = py;
        this.size[py] += this.size[px];
      }
    }
  }
  getSize(x) {
    return this.size[this.findParent(x)];
  }
  getValue(x) {
    const arr = Array.from(this.value[this.findParent(x)]);
    let v = arr[0];
    for (let i = 1; i < arr.length; i++) {
      v = v & arr[i];
    }
    return v;
  }
}
var minimumCost = function (n, edges, query) {
  const dsu = new DSU(n);
  for (const [s, e, w] of edges) {
    dsu.union(s, e, w);
  }
  const res = [];
  for (const [s, e] of query) {
    if (s === e) {
      res.push(0);
      continue;
    }
    const ps = dsu.findParent(s);
    const pe = dsu.findParent(e);
    if (ps !== pe) {
      res.push(-1);
    } else {
      res.push(dsu.getValue(ps));
    }
  }
  return res;
};
