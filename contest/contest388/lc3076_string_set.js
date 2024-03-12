/**
 * 3076. Shortest Uncommon Substring in an Array
 *
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function (arr) {
  const n = arr.length;
  // Note: cannot use ".fill(new Set())", then each index is referring to the same Set object.
  const subs = new Array(n);
  for (let i = 0; i < n; i++) {
    subs[i] = new Set();
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = j; k < arr[i].length; k++) {
        const sub = arr[i].slice(j, k + 1);
        subs[i].add(sub);
      }
    }
  }
  const ans = new Array(n).fill("");
  let flag;
  for (let i = 0; i < n; i++) {
    let res = "";
    for (const s of subs[i]) {
      flag = true;
      for (let j = 0; j < n; j++) {
        if (j === i) {
          continue;
        }
        if (subs[j].has(s)) {
          flag = false;
          break;
        }
      } // end all sets
      if (flag) {
        if (res == "") {
          res = s;
        } else if (res.length > s.length) {
          res = s;
        } else if (res.length == s.length) {
          res = res.localeCompare(s) > 0 ? s : res;
        }
      }
    } // end each sub string
    if (res) {
      ans[i] = res;
    }
  }
  return ans;
};
