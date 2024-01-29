/**
 * 3016. Minimum Number of Pushes to Type Word II
 * Intuition:
 * Arrange the most frequency letter to be at the 1st push,then continue.
 * each push has at max 8 available key to assign.
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const map = new Map(); //<char, count>
  for (let i = 0; i < word.length; i++) {
    map.set(word[i], (map.get(word[i]) ?? 0) + 1);
  }
  const q = [];
  for (const [k, v] of map.entries()) {
    q.push([k, v]);
  }
  q.sort((a, b) => b[1] - a[1]);
  let total = 0;
  for (let i = 0; i < q.length; i++) {
    const [ch, cnt] = q[i];
    total += cnt * Math.ceil((i + 1) / 8);
  }
  return total;
};
