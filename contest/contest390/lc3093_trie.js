class TrieNode {
  constructor() {
    this.children = {};
    this.index = -1;
  }
}

function insertWord(root, word, i, wordsContainer) {
  let node = root;
  for (const c of word.split("")) {
    if (!node.children[c]) {
      node.children[c] = new TrieNode();
    }
    node = node.children[c];
    if (node.index === -1 || word.length < wordsContainer[node.index].length) {
      node.index = i;
    }
  }
}
function findString(root, q) {
  let node = root;
  for (let i = 0; i < q.length; i++) {
    const c = q[i];
    if (node.children[c]) {
      node = node.children[c];
      if (i === q.length - 1) {
        return node.index;
      }
    } else {
      return node.index;
    }
  }
}

/**
 * 3093. Longest Common Suffix Queries
 * Use Trie Tree
 * https://leetcode.com/problems/longest-common-suffix-queries/solutions/4916933/js-using-trie-and-store-the-index-in-each-node/
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function (wordsContainer, wordsQuery) {
  let smallIndex = -1;
  let minLen = Infinity;
  const root = new TrieNode();
  // step1: insert the container string in reversed.
  for (let i = 0; i < wordsContainer.length; i++) {
    const s = wordsContainer[i].split("").reverse().join("");
    if (s.length < minLen) {
      minLen = s.length;
      smallIndex = i;
    }
    insertWord(root, s, i, wordsContainer);
  }
  // step2: update root.index if cannot match any suffix
  root.index = smallIndex;

  const ans = new Array(wordsQuery.length).fill(-1);
  // step3: query each string
  for (let i = 0; i < wordsQuery.length; i++) {
    const query = wordsQuery[i].split("").reverse().join("");
    ans[i] = findString(root, query);
  }
  return ans;
};
