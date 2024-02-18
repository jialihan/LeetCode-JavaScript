// Referenced idea:
// https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744441/2-tries/

/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
  let ans = 0;
  const wmap = new Map();
  const pre = new TrieNode();
  const suf = new TrieNode();
  const insert = (root, w, isReversed = false, foundStrings = undefined) => {
    let node = root;
    const res = new Set();
    for (const c of w.split("")) {
      if (!node.children[c]) {
        node.children[c] = new TrieNode();
      }
      node = node.children[c];
      if (node.end) {
        Array.from(node.end).forEach((el) => {
          if (foundStrings) {
            if (foundStrings.has(el)) {
              res.add(el);
              // console.log("found str: ", el);
              ans += wmap.get(el);
            }
          } else {
            res.add(el);
          }
        });
      }
    }
    if (!node.end) {
      node.end = new Set();
    }
    const str = isReversed ? w.split("").reverse().join("") : w;
    node.end.add(str);
    return res;
  };

  for (const w of words) {
    const foundStrings = insert(pre, w, false);
    const rw = w.split("").reverse().join("");
    insert(suf, rw, true, foundStrings);
    wmap.set(w, (wmap.get(w) ?? 0) + 1);
  }
  return ans;
};

class TrieNode {
  constructor() {
    this.children = {};
  }
}
