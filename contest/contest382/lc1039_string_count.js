// 3019. Number of Changing Keys
/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  s = s.toLowerCase();
  let res = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      res++;
    }
  }
  return res;
};
