// 1646. Get Maximum in Generated Array
// You are given an integer n. An array nums of length n + 1 is generated in the following way:
// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.

/**
 * @param {number} n
 * @return {number}
 */

var getMaximumGenerated = function (n) {
    if (n === 0)
        return 0;
    var arr = [...Array(n + 1)].fill(0);
    arr[1] = 1;
    var res = 1;
    for (let i = 2; i <= n; i++) {
        var j = Math.floor(i / 2); // important!!!!
        if (i % 2 === 0) {
            arr[i] = arr[j];
        }
        else {
            arr[i] = arr[j] + arr[j + 1];
        }
        res = Math.max(res, arr[i]);
    }
    return res;

};