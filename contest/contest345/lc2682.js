// https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/?orderBy=hot
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const set = new Set()
    let cur = 0, step = 1;
    while(!set.has(cur)) {
        set.add(cur);
        cur = (cur + k * step) % n;
        step++;
    }
    const res = [];
    for(let i = 1; i<=n; i++) {
        if( !set.has(i-1)) {
            res.push(i);
        }
    }
    return res;
};