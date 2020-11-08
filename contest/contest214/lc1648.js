
/**
 * Referenced solution:
 * But why javascript solution not passed! 
 * Wrong test case:
 * our input
    [773160767]
    252264991
    Output
    70267540
    Expected
    70267492
 */

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var sum = function (x, n) {
    // How here divide operation in javascript is correct?

    // var res = (x+y)*(y-x+1) / 2;
    //  // console.log(res);
    var res = Math.floor((n * (n + 1)) / 2) - Math.floor((x * (x + 1)) / 2);
    return res;
}

var maxProfit = function (inventory, orders) {
    inventory.sort((a, b) => b - a);
    var cur = inventory[0];
    var i = 0;
    var res = 0;
    var count = 1;
    while (orders > 0) {
        var next = i === (inventory.length - 1) ? 0 : inventory[i + 1];
        if ((cur - next) * count <= orders) {
            // add [next+1, cur] 
            res += count * Math.floor((cur + next + 1) * (cur - next) / 2);
            res %= 1000000007;
            orders -= (cur - next) * count;
        }
        else {
            // add [newNext+1, cur]
            var newNext = cur - Math.floor(orders / count);
            res += count * Math.floor((cur + newNext + 1) * (cur - newNext) / 2);
            res %= 1000000007;
            // add remaining newNext 
            res += newNext * (orders % count);
            res %= 1000000007;
            orders = 0;
        }
        cur = next;
        count++;
        i++;
    }
    return res;


};

/**
 * Todo: change to use BigInt in javascript
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */