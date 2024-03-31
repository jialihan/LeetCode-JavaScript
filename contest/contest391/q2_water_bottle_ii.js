/**
 * 3100. Water Bottles II
 * https://leetcode.com/problems/water-bottles-ii/solutions/4950100/easy-direct-way/
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let full = 0;
  let empty = numBottles;
  let exchange = numExchange;
  let drink = numBottles;
  while (empty >= exchange) {
    // exchange
    empty -= exchange;
    exchange++;
    // drink
    drink++;
    empty++;
  }
  return drink;
};
