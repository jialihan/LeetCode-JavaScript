// https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/description/
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    if(queries.length === 1) {
        return [0];
    }
    const colors = new Array(n).fill(0);
    let total = 0;
    let pre, next;
    const res = [];
    for(let i =0; i< queries.length; i++) {
        const [j, curColor] = queries[i];
        const oldColor = colors[j];
        // remove prev color
        pre = j > 0 ? colors[j-1] : 0;
        if(oldColor != 0 && oldColor === pre) {
            total--;
        }
        next = j < n-1 ? colors[j+1] : 0;
        if(oldColor != 0 && oldColor === next) {
            total--;
        }
        // add current color
        colors[j] = curColor;
        if(curColor != 0 && curColor === pre) {
            total++;
        }
        if(curColor != 0 && curColor === next) {
            total++;
        }
        res.push(total);
    }
    return res; 
};