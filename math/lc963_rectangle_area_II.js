/**
 * 963. Minimum Area Rectangle II
 * O(n^2)
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function (points) {
  const n = points.length;
  let ans = Infinity;
  // 1. store the <key=center:diameter, <[point(x,y)]>
  const map = new Map(); //<key, [[x,y],....]>
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      const c1 = x1 + x2;
      const c2 = y1 + y2;
      const d = (x1 - x2) ** 2 + (y1 - y2) ** 2;
      const key = `${c1}:${c2}${d}`;

      // 2. check existing center lines
      if (map.has(key)) {
        for (const [x3, y3] of map.get(key)) {
          // 3. area = dist(p3, p1) * dist(p3, p2)
          const dist1 = Math.sqrt(
            Math.abs(x1 - x3) ** 2 + Math.abs(y1 - y3) ** 2,
          );
          const dist2 = Math.sqrt(
            Math.abs(x2 - x3) ** 2 + Math.abs(y2 - y3) ** 2,
          );
          ans = Math.min(ans, dist1 * dist2);
        }
      } else {
        map.set(key, []);
      }
      // 4. store current 2 point and center
      map.get(key).push([x1, y1]);
    }
  return ans === Infinity ? 0 : ans;
};
