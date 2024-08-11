/**
 * 3248. Snake in Matrix
 * Easy
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  const dir = new Map();
  dir.set("UP", [-1, 0]);
  dir.set("RIGHT", [0, 1]);
  dir.set("LEFT", [0, -1]);
  dir.set("DOWN", [1, 0]);
  let x = 0,
    y = 0;
  for (const cmd of commands) {
    const d = dir.get(cmd);
    x += d[0];
    y += d[1];
  }
  return x * n + y;
};
