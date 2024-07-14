/**
 * 3216. Lexicographically Smallest String After a Swap
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  const arr = [...s].map((el) => parseInt(el));
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === arr[i + 1] % 2 && arr[i] > arr[i + 1]) {
      const tmp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = tmp;
      break;
    }
  }
  return arr.join("");
};
