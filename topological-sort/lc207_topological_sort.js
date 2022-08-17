/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const map = new Map();
  const n = numCourses;
  const indegree = new Array(n).fill(0);

  // build adj
  for (let [x, y] of prerequisites) {
    console.log(x, y);
    if (map.has(y)) {
      map.get(y).push(x);
    } else {
      map.set(y, [x]);
    }
    indegree[x]++;
  }

  const q = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  let cnt = 0;
  while (q.length > 0) {
    const cur = q.shift();
    cnt++;
    if (map.has(cur)) {
      for (const next of map.get(cur)) {
        indegree[next]--;
        if (indegree[next] === 0) {
          q.push(next);
        }
      }
    }
  }
  return cnt === n; // each node visited once if no circle
};
