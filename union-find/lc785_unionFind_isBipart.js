/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  class DSU {
    constructor(n) {
      this.p = [...Array(n)];
      for (let i = 0; i < n; i++) {
        this.p[i] = i;
      }
    }

    findParent(x) {
      if (this.p[x] !== x) {
        this.p[x] = this.findParent(this.p[x]);
      }
      return this.p[x];
    }

    union(x, y) {
      const px = this.findParent(x);
      const py = this.findParent(y);
      if (px !== py) {
        this.p[px] = py;
      }
    }
  }
  const n = graph.length;
  const dsu = new DSU(n);
  for (let i = 0; i < n; i++) {
    for (const j of graph[i]) {
      if (dsu.findParent(i) === dsu.findParent(j)) {
        return false;
      } else {
        dsu.union(graph[i][0], j);
      }
    }
  }
  return true;
};
