// 1664. Ways to Make a Fair Array
// https://leetcode.com/problems/ways-to-make-a-fair-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    var pre = [];
    var n = nums.length;
    var o = 0;
    var e = 0;
    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) {
            e += nums[i];
        }
        else {
            o += nums[i];
        }
        pre.unshift([e, o]);
    }
    pre.unshift([0, 0]);
    var cure = 0;
    var curo = 0;
    var cnt = 0;
    for (var i = 1; i < pre.length; i++) {
        if ((i - 1) % 2 === 0) {
            var tempo = curo + (e - cure - nums[i - 1]);
            var tempe = cure + (o - curo);
            if (tempo === tempe) {
                cnt++;
            }
            cure += nums[i - 1];

        }
        else {
            var tempe = cure + (o - curo - nums[i - 1]);
            var tempo = curo + (e - cure);
            if (tempo === tempe) {
                cnt++;
            }
            curo += nums[i - 1];
        }

    }
    return cnt;
};