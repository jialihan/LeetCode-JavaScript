/**
 * 2867. Count Valid Paths in a Tree
 * Referenced solution: https://leetcode.com/problems/count-valid-paths-in-a-tree/solutions/4082791/python3-dsu/
 * https://leetcode.com/problems/count-valid-paths-in-a-tree/description/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPaths = function (n, edges) {
  // 1. build isPrime array: if(p[i] === i) -> prime = true
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i + i; j <= n; j += i) {
        isPrime[j] = false; // not a prime
      }
    }
  }
  // 2. build DSU
  const dsu = new DSU(n + 1);
  // 3. connect non-prime nodes
  for (const [u, v] of edges) {
    if (!isPrime[u] && !isPrime[v]) {
      dsu.union(u, v);
    }
  }
  // 4. calc prime paths, note: tree has no cycle!!!
  // so there is unique one path between 2 nodes
  const count = new Array(n + 1).fill(1); // base count is 1
  let ans = 0;
  for (let [u, v] of edges) {
    if ((isPrime[u] && !isPrime[v]) || (isPrime[v] && !isPrime[u])) {
      if (!isPrime[u]) {
        [u, v] = [v, u]; // set u always be the prime
      }
      // connect prime & non-prime path
      ans += count[u] * dsu.getSize(v);
      count[u] += dsu.getSize(v); // update the neighbor count for the prime number
    }
  }
  return ans;
};
class DSU {
  constructor(n) {
    this.size = new Array(n).fill(1);
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
}
