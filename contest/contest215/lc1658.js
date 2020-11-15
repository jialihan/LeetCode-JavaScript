/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

var minOperations = function (nums, x) {

    const map = new Map();
    map.set(0, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (!map.has(sum)) {
            map.set(sum, i + 1);
        }
    }
    // 1) check direct left sums
    let res = Infinity;
    if (map.has(x)) {
        res = map.get(x);
    }

    // 2) check right indexes from (n-1) to 0
    let sumr = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        sumr += nums[i];
        if (map.has(x - sumr) && map.get(x - sumr) <= i) {
            res = Math.min(res, map.get(x - sumr) + (nums.length - i));
        }
    }
    if (res === Infinity) {
        return -1;
    }
    return res;


};