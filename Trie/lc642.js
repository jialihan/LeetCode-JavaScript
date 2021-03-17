// See this discussion article here:
// https://leetcode.com/problems/design-search-autocomplete-system/discuss/1113642/JavaScript-Trie-%2B-DFS-%2B-Array_sort
class TrieNode {
    constructor() {
        this.children = {};
        this.freq = 0;
    }
}

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
    this.root = new TrieNode();
    this.cur = this.root;
    this.str = '';
    sentences.forEach((s, i) => {
        this.insert(s, times[i]);
    });

};
/** 
 * @param {string} s
 * @param {number} time
 */
AutocompleteSystem.prototype.insert = function (s, time) {
    var node = this.root;
    for (var c of [...s]) {
        if (!node.children[c]) {
            node.children[c] = new TrieNode();
        }
        node = node.children[c];
    }
    node.freq += time;
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
    if (c === '#') {
        this.insert(this.str, 1);
        this.str = '';
        this.cur = this.root;
        return [];
    }
    this.str += c;
    if (!this.cur) {
        return [];
    }
    if (this.cur.children[c] === null) {
        this.cur.children[c] = new TrieNode();
    }
    this.cur = this.cur.children[c];
    var res = [];
    var tmp = this.cur;
    dfs(tmp, this.str.slice());
    function dfs(node, s) {
        if (!node) {
            return;
        }
        if (node.freq > 0) {
            res.push([s.slice(), node.freq]);
        }
        for (var next of Object.keys(node.children)) {
            dfs(node.children[next], s + next);
        }
    }
    res.sort((a, b) => { // use array to mock max_PQ
        if (a[1] === b[1])
            return a[0] < b[0] ? -1 : 1; // be careful about this alphabetic order 
        return b[1] - a[1];
    });
    var ans = res.slice(0, 3).map(el => el[0]);
    return ans;
};
