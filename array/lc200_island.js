// https://leetcode.com/problems/number-of-islands/discuss/1162336/JavaScript-DFS-%2B-calc-Area-and-Diameter-for-each-island

var m = 0, n = 0;
var dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
var numIslands = function (grid) {
    m = grid.length;
    n = grid[0].length;
    var visited = new Array(m).fill(null).map(el => new Array(n).fill(false));
    var cnt = 0;
    for (var i = 0; i < m; i++)
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                area = 0;
                dfs(grid, visited, i, j);
                cnt++;
                calcDiameter(grid);
            }
        }
    return cnt;
};
function dfs(grid, visited, i, j) {
    grid[i][j] = '2'; //visited
    visited[i][j] = true;
    for (var d of dir) {
        var x = i + d[0];
        var y = j + d[1];
        if (x < 0 || y < 0 || x >= m || y >= n || visited[x][y] || grid[x][y] !== '1') {
            continue;
        }
        dfs(grid, visited, x, y);
    }
}
function calcDiameter(grid) {
    var area = 0;
    var overlap = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === '2') {
                area++;
                if (i > 0 && grid[i - 1][j] === '2') overlap++; // top
                if (i < m - 1 && grid[i + 1][j] === '2') overlap++; // bottom
                if (j > 0 && grid[i][j - 1] === '2') overlap++; // left
                if (j < n - 1 && grid[i][j + 1] === '2') overlap++; // right
            }
        }
    }
    // clean up for next island
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === '2') {
                grid[i][j] = '0';
            }
        }
    }
    var diameter = area * 4 - overlap;
    // console.log("area:"+area + ", diameter:"+diameter);
    return diameter;
}