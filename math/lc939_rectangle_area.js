/**
 * 939. Minimum Area Rectangle
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  // Tip: the diagnal 2 points on the corner will decide a unique rectangle.
  // 1. store the points by x-axis
  const map = new Map();
  points.forEach((p) => {
    if (!map.has(p[0])) {
      map.set(p[0], new Set());
    }
    map.get(p[0]).add(p[1]);
  });
  // 2. scan each pair of points
  let ans = Infinity;
  for (let i = 0; i < points.length; i++)
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      if (x1 === x2 || y1 === y2) {
        continue;
      }
      if (map.get(x1).has(y2) && map.get(x2).has(y1)) {
        ans = Math.min(Math.abs(x1 - x2) * Math.abs(y1 - y2), ans);
      }
    }
  return ans === Infinity ? 0 : ans;
};
