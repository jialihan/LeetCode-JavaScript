/**
 * https://leetcode.com/problems/minimum-moves-to-capture-the-queen/solutions/4520688/simple-math-easy-to-read-result-either-2-or-1/
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} e
 * @param {number} f
 * @return {number}
 */
var minMovesToCaptureTheQueen = function (a, b, c, d, e, f) {
  let ans1 = 2;
  let ans2 = Infinity;
  if ((a === e && b === f) || (c === e && d === f)) {
    return 0;
  }
  // same row: move Rooks
  if (a === e) {
    const y1 = Math.max(b, f);
    const y2 = Math.min(b, f);
    if (c === a && d < y1 && d > y2) {
      // if there is a block
      ans1 = 2;
    } else {
      ans1 = 1;
    }
    console.log("ans1: ", ans1);
  }
  // same column: move Rooks
  if (b === f) {
    const x1 = Math.max(a, e);
    const x2 = Math.min(a, e);
    if (d === b && c < x1 && c > x2) {
      // if there is a block
      ans1 = 2;
    } else {
      ans1 = 1;
    }
  }
  // if can reach by Bishops
  if (Math.abs(c - e) % 2 ^ (Math.abs(d - f) % 2 === 0)) {
    // if in one move: same diagonal
    if (Math.abs(c - e) === Math.abs(d - f)) {
      console.log("one move");
      // if there is a block
      const k1 = Math.abs(a - e) / Math.abs(b - f);
      const k2 = Math.abs(c - e) / Math.abs(d - f);
      const x1 = Math.max(c, e);
      const x2 = Math.min(c, e);
      if (Math.abs(k1 - k2) < Number.EPSILON && a < x1 && a > x2) {
        ans2 = 3;
      } else {
        ans2 = 1;
      }
    } else {
      //  if needs multiple move
      ans2 = 2;
    }
  }
  return Math.min(ans1, ans2);
};

// public int minMovesToCaptureTheQueen(int a, int b, int c, int d, int e, int f) {
//     if(a == e || b == f) {
//         if(a == e && a == c && ((d-b) * (d-f) < 0)) return 2;
//         if(b == f && b == d && ((c-a) * (c-e) < 0)) return 2;
//         return 1;
//     }
//     if(Math.abs(c - e) == Math.abs(d - f)) {
//         if(Math.abs(c - a) == Math.abs(d - b) && Math.abs(e - a) == Math.abs(f - b) && ((b-f) * (b-d) < 0))  return 2;
//         return 1;
//     }
//     return 2;
// }
