
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

    x(x+1) exceeds:
    console.log(773160767 * 773160768)  // 597777572401189100: overflow
    console.log(773160767n * 773160768n)  // 597777572401189056n: bigInt SAFE
 */

/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var sum = function (x, n) {
    // How here divide operation in javascript is correct?
    // Wrong: exceed the max_safe_integer, should use BigInt
    var res = Math.floor((n * (n + 1)) / 2) - Math.floor((x * (x + 1)) / 2);
    return res;
}

var maxProfit_Wrong = function (inventory, orders) {
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
var maxProfit = function (inventory, orders) {
    function sum(x, y) {
        // sum from [x,y]
        x = BigInt(x);
        y = BigInt(y);
        return (x + y + 1n) * (y - x) / 2n;
    }
    inventory.sort((a, b) => b - a);
    let cur = inventory[0];
    let i = 0;
    let res = BigInt(0);
    let count = 1;
    const mod = BigInt(1000000007);
    while (orders > 0) {
        let next = i === (inventory.length - 1) ? 0 : inventory[i + 1];
        if ((cur - next) * count <= orders) {
            // add [next+1, cur] 
            res += BigInt(count) * sum(next, cur);
            res %= mod;
            orders -= (cur - next) * count;
        }
        else {
            // add [newNext+1, cur]
            let newNext = cur - Math.floor(orders / count);
            res += BigInt(count) * sum(newNext, cur);;
            res %= mod;
            // add remaining newNext 
            res += BigInt(newNext) * BigInt(orders % count);
            res %= mod;
            orders = 0;
        }
        cur = next;
        count++;
        i++;
    }
    return Number(res);
};