// https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/?orderBy=hot
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    let max = 0;
    const m = grid.length;
    const n = grid[0].length;
    const memo = new Map();
    function dfs(i, j, pre, step) {
        if(i<0 || i>=m || j<0||j>=n || grid[i][j] <= pre) {
            return 0;
        }
        if(memo.has(`${i}:${j}`)){
            return memo.get(`${i}:${j}`);
        }
        const res1 = dfs(i, j+1, grid[i][j], 0);
        const res2 = dfs(i-1, j+1, grid[i][j], 0);
        const res3 = dfs(i+1, j+1, grid[i][j], 0);
        const curMax = Math.max(res1, res2, res3) + 1;
        memo.set(`${i}:${j}`, curMax);
        return curMax;
    }
    for(let i = 0; i<m; i++) {
       max = Math.max(max, dfs(i, 0, 0, 0));
    }
    return max-1;
};