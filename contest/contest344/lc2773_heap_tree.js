// https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/?orderBy=hot

// 1. Bottom up
/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
    let ans = 0;
    const leafIndex = Math.floor(n / 2);
    const lastParentNode = leafIndex - 1;
    
    for(let i = lastParentNode; i>=0; i--) {
        const l = 2 * i + 1, r = 2*i + 2;
        ans += Math.abs(cost[l] - cost[r]);
        cost[i] += Math.max(cost[l], cost[r]);
    }
    return ans;
};

// 2. Top down - DFS
var minIncrements = function(n, cost) {
    let ans = 0;
    function dfs(index) {
        if(index >= n) {
            return 0;
        }
        const res1 = dfs(2 * index + 1);
        const res2 = dfs(2 * index + 2);
        ans += Math.abs(res1 - res2);
        return cost[index] + Math.max(res1, res2);
    }
    dfs(0);
    return ans;
};