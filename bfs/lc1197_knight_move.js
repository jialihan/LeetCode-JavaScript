/**
 * 1197. Minimum Knight Moves
 * BFS solution with Math tricks
 * referenced explaination: https://leetcode.com/problems/minimum-knight-moves/solutions/760686/clear-explanation-of-bfs-optimizations/
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  const dir = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];
  let move = 0;
  let q = [[0, 0]]; // queue for BFS
  // Tip1： the 4 field are the same because movement is symmetric.
  x = Math.abs(x);
  y = Math.abs(y);
  // Tip2: a speciall case in positive value cell [1,1]
  if (x === 1 && y === 1) {
    return 2;
  }
  const visited = new Set();
  while (q.length > 0) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const [dx, dy] = q.shift();
      if (dx === x && dy === y) {
        return move;
      }
      for (const d of dir) {
        const nextX = dx + d[0];
        const nextY = dy + d[1];
        //Tip2: except edge case: [1,1], you will need to go negative cells then go back.
        if (!visited.has(`${nextX}:${nextY}`) && nextX >= 0 && nextY >= 0) {
          q.push([nextX, nextY]);
          visited.add(`${nextX}:${nextY}`);
        }
      }
    } // end for current step
    move++;
  }
  return -1;
};
