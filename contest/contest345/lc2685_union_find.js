// https://leetcode.com/problems/count-the-number-of-complete-components/solutions/?orderBy=hot
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
   class DSU {
    constructor(n) {
      this.rank = new Array(n).fill(1);
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
          if(this.rank[px] >= this.rank[py]) {
                this.p[py] = px;   
                this.rank[px] += this.rank[py];
          }
          else {
              this.p[px] = py;
              this.rank[py] += this.rank[px];
          }
      }
    }
    getRank(x) {
           return this.rank[x];
    }
  }
  const dsu = new DSU(n);
  const adj = new Map();
  // 1. build Adj and Union find
  for (const e of edges) {
      if(!adj.has(e[0])) {
          adj.set(e[0], []);
      }
      if(!adj.has(e[1])) {
          adj.set(e[1], []);
      }
      adj.get(e[1]).push(e[0]);
      adj.get(e[0]).push(e[1]);
      
      if (dsu.findParent(e[0]) !== dsu.findParent(e[1])) {
        dsu.union(e[0], e[1]);
      }
  }
    // 2. build each graph with all its nodes
    const map = new Map();
    for(let i = 0; i<n; i++) {
        const pa = dsu.findParent(i);
        if(!map.has(pa)) {
            map.set(pa, []);
        }
        map.get(pa).push(i);
     }
    // 3.check each graph whether a completed graph: each node should have an edge with all other nodes
    function isCompleteGraph(arr) {
        for(let i = 0; i< arr.length; i++) 
           for(let j = 0; j< arr.length; j++) {
                if(i!== j && !adj.get(arr[i]).includes(arr[j])){
                    return false;
                }
          }
       return true;
    }
    let cnt = 0;
    for(const nodes of map.values()){
        if(isCompleteGraph(nodes)){
            cnt++;
        }
    } 
  return cnt; 
};