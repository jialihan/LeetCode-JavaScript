// 3195. Find the Minimum Area to Cover All Ones I
/**
 * https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355555/js-find-the-row-column-start-and-end-indexes/
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let rs = -1,
    re = -1,
    cs = -1,
    ce = -1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        re = Math.max(re, i);
        ce = Math.max(ce, j);
        if (rs < 0) {
          rs = i;
        } else {
          rs = Math.min(rs, i);
        }
        if (cs < 0) {
          cs = j;
        } else {
          cs = Math.min(j, cs);
        }
      }
    }
  }
  console.log(rs, re, cs, ce);
  return (ce - cs + 1) * (re - rs + 1);
};

// Improved soluton:
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let rs = Infinity,
    re = 0,
    cs = Infinity,
    ce = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        re = Math.max(re, i);
        ce = Math.max(ce, j);
        rs = Math.min(rs, i);
        cs = Math.min(j, cs);
      }
    }
  }
  return (ce - cs + 1) * (re - rs + 1);
};
