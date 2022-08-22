/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function (nums, sequences) {
  const n = nums.length;
  const indegree = new Array(n + 1).fill(0);
  const map = new Map();
  for (const seq of sequences) {
    for (let i = 0; i < seq.length - 1; i++) {
      const a = seq[i];
      const b = seq[i + 1];
      if (a < 1 || a > n || b < 1 || b > n) {
        return false;
      }
      if (!map.has(a)) {
        map.set(a, []);
      }
      map.get(a).push(b);
      indegree[b]++;
    }
  }

  const q = [];
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }
  if (q.length > 1) {
    return false;
  }
  let count = 0;
  while (q.length > 0) {
    const size = q.length;
    if (size > 1) {
      return false;
    }
    count++;
    for (let i = 0; i < size; i++) {
      const cur = q.shift();
      if (map.has(cur)) {
        for (const next of map.get(cur)) {
          if (--indegree[next] === 0) {
            q.push(next);
          }
        }
      }
    } // end for
  } // end while
  return count === n;
};
