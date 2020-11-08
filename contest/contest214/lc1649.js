/**
 * @param {number[]} instructions
 * @return {number}
 */
var createSortedArray = function (instructions) {
    // total numbers based on 1 to MAX_VALUE
    var arr = [...Array(100001)].fill(0);

    // Binary Index Tree
    function insert(x) {
        while (x < 100001) {
            arr[x]++
            x += x & -x;
        }
    }
    function getSum(x) {
        var res = 0;
        while (x > 0) {
            res += arr[x]
            x -= x & -x
        }
        return res;
    }

    var ans = 0
    instructions.forEach((x, i) => {
        // compute before insert
        ans += Math.min(getSum(x - 1), i - getSum(x));
        ans %= 1000000007;
        // insert current x
        insert(x);
    });


    return ans;
};