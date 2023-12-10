// The inconvenient is that Math.pow(Number, Number) which is not compatible for BigInt arguments.
//  But "**" can accept BigInt, please see the MDN doc:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation

/**
 * Solution: 
https://leetcode.com/problems/double-modular-exponentiation/solutions/4385092/js-use-bigint-and-brute-force-solution/
 * 
 * 2961. Double Modular Exponentiation
 * https://leetcode.com/problems/double-modular-exponentiation/description/
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function (variables, target) {
  const res = [];
  for (let i = 0; i < variables.length; i++) {
    const [a, b, c, d] = variables[i];
    let r1 = BigInt(a) ** BigInt(b);
    r1 %= 10n;
    let r2 = r1 ** BigInt(c);
    r2 = r2 % BigInt(d);
    if (Number(r2) === target) {
      res.push(i);
    }
  }
  return res;
};
