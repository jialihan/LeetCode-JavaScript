// https://leetcode.com/contest/weekly-contest-344/problems/find-the-distinct-difference-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const n = nums.length;
    const suf = new Array(n).fill(0);
    const pre = new Array(n).fill(0);
    let set= new Set();
    for(let i = n-1; i>=0; i--) {
        suf[i] = set.size;
        set.add(nums[i]);
    }
    set = new Set();
    for(let i = 0; i<n; i++) {
        set.add(nums[i]);
        pre[i] = set.size;
    }
    const res = [];
    for(let i = 0; i<n; i++) {
        res[i] =  pre[i] -suf[i] ;
    }
    return res;
};