/**
 * 286. Walls and Gates
 * https://leetcode.com/problems/walls-and-gates/submissions/550527848/
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  var dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  var q = [];
  var m = rooms.length;
  var n = rooms[0].length;
  var visited = new Array(m).fill(0).map((el) => new Array(n).fill(false));
  for (var i = 0; i < m; i++)
    for (var j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        q.push([i, j]);
        visited[i][j] = true;
      }
    }
  // BFS
  var dist = 0;
  while (q.length > 0) {
    var size = q.length;
    dist++;
    for (var k = 0; k < size; k++) {
      var [x, y] = q.shift();
      for (var d of dir) {
        var xx = x + d[0];
        var yy = y + d[1];
        if (
          xx >= 0 &&
          yy >= 0 &&
          xx < m &&
          yy < n &&
          rooms[xx][yy] > 0 &&
          !visited[xx][yy]
        ) {
          q.push([xx, yy]);
          visited[xx][yy] = true;
          rooms[xx][yy] = Math.min(dist, rooms[xx][yy]);
        }
      }
    }
  }
  return rooms;
};
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  var dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  var q = [];
  var m = rooms.length;
  var n = rooms[0].length;
  var visited = new Array(m).fill(0).map((el) => new Array(n).fill(false));
  for (var i = 0; i < m; i++)
    for (var j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        q.push([i, j]);
        visited[i][j] = true;
      }
    }
  // BFS
  var dist = 0;
  while (q.length > 0) {
    var size = q.length;
    dist++;
    for (var k = 0; k < size; k++) {
      var [x, y] = q.shift();
      for (var d of dir) {
        var xx = x + d[0];
        var yy = y + d[1];
        if (
          xx >= 0 &&
          yy >= 0 &&
          xx < m &&
          yy < n &&
          rooms[xx][yy] > 0 &&
          !visited[xx][yy]
        ) {
          q.push([xx, yy]);
          visited[xx][yy] = true;
          rooms[xx][yy] = Math.min(dist, rooms[xx][yy]);
        }
      }
    }
  }
  return rooms;
};
