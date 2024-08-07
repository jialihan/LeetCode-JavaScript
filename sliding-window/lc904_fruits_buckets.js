/**
 * 904. Fruit Into Baskets
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  if (!fruits || fruits.length === 0) {
    return 0;
  }
  const n = fruits.length;
  const cnt = new Array(n + 1).fill(0); // cnt[i]: amount of type i
  let start = 0;
  let ans = 1;
  const set = new Set(); // the set of types
  for (let i = 0; i < n; i++) {
    set.add(fruits[i]);
    cnt[fruits[i]]++;
    while (set.size > 2 && start < i) {
      if (--cnt[fruits[start]] === 0) {
        set.delete(fruits[start]);
      }
      start++;
    }
    ans = Math.max(i - start + 1, ans);
  }
  return ans;
};
