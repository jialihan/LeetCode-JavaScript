/**
 * 3210. Find the Encrypted String
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
  const n = s.length;
  const arr = [...s];
  for (let i = 0; i < n; i++) {
    arr[i] = s[(i + k) % n];
  }
  return arr.join("");
};
