/**
 * 3071. Minimum Operations to Write the Letter Y on a Grid
 * my solution: https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4814285/js-brute-force-try-all-3-number-in-y/
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
  const n = grid.length;
  const center = Math.floor(n / 2);
  const y = [0, 0, 0];
  const ny = [0, 0, 0];
  function isY(x, y) {
    if (y === center) {
      if (x >= center) {
        return true;
      } else {
        return false;
      }
    }
    if (x < center) {
      if (y > center) {
        y = n - 1 - y;
      }
      if (x === y) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      if (isY(i, j)) {
        y[grid[i][j]]++;
      } else {
        ny[grid[i][j]]++;
      }
    }
  // console.log(y, ny);
  let ans = n * n; // max value
  const sumY = center + 1 + center * 2;
  // console.log("countY:", sumY, "center=", center);
  if (y[0] > 0) {
    // const other = Math.min(ny[1]===0 ? Infinity : ny[1], ny[2]===0 ? Infinity : ny[2]);
    if (ny[1] === 0 && ny[2] === 0) {
      ans = Math.min(ans, Math.min(sumY, n * n - sumY));
    } else if (ny[1] === 0 || ny[2] === 0) {
      ans = Math.min(ans, sumY - y[0] + ny[0]);
    } else {
      ans = Math.min(ans, sumY - y[0] + ny[0] + Math.min(ny[1], ny[2]));
    }
  }
  if (y[1] > 0) {
    if (ny[0] === 0 && ny[2] === 0) {
      ans = Math.min(ans, Math.min(sumY, n * n - sumY));
    } else if (ny[0] === 0 || ny[2] === 0) {
      ans = Math.min(ans, sumY - y[1] + ny[1]);
    } else {
      ans = Math.min(ans, sumY - y[1] + ny[1] + Math.min(ny[0], ny[2]));
    }
  }
  if (y[2] > 0) {
    if (ny[0] === 0 && ny[1] === 0) {
      ans = Math.min(ans, Math.min(sumY, n * n - sumY));
    } else if (ny[0] === 0 || ny[1] === 0) {
      ans = Math.min(ans, sumY - y[2] + ny[2]);
    } else {
      ans = Math.min(ans, sumY - y[2] + ny[2] + Math.min(ny[0], ny[1]));
    }
  }
  return ans;
};
