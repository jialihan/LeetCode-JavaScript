/**
 * Title: split a string into words by white space, except words within quotes.
 * Attention: also split by quotes, even if there is no extra space before.
 * Example:
 * a b c -> a, b,c
 * a "b c"-> a, "b c"
 * a"bc" -> a, "bc"
 * assume valid quote at first, not including: a""b c""" -> a,b,c
 */
var splitWords = function (s) {
  var res = [];
  var start = 0;
  var isQuoted = false;
  for (var i = 0; i <= s.length; i++) {
    if (s[i] === '"') {
      if (!isQuoted) {
        if (i > 0 && s[i - 1] !== " ") {
          var sub = s.slice(start, i);
          if (sub) res.push(sub);
        }
        isQuoted = true;
        start = i;
      } else {
        var sub = s.slice(start + 1, i);
        if (sub) res.push(sub);
        start = i + 1;
        isQuoted = false;
      }
    } else if (!isQuoted && (s[i] === " " || i === s.length)) {
      if (i > 0 && s[i - 1] !== " ") {
        var sub = s.slice(start, i);
        if (sub) res.push(sub);
        start = i + 1;
      }
    }
  }
  console.log(res);
  return res;
};

splitWords("a b c"); // -> ["a", "b", "c"]
splitWords("a bc"); // -> ["a", "bc"]
splitWords('a "b c"');
splitWords('a "b c " '); //  -> ["a", "b c "]
splitWords('abc" d e " '); // -> ["abc", " d e "]

// Follow up:
// what if this string is so long?
// how to process it in distribution system?
var splitWords2 = function (s) {
  const n = s.length;
  let res = "";
  for (let i = 0; i < n; i++) {
    if (isQuoted) {
      continue;
    } else {
      if (s[i] === " ") {
        continue;
      } else if (s[i] === '"') {
        let j = i + 1;
        while (j < n && j !== '"') {
          j++;
        }
        if (j === n) {
          throw "invalid double quotes";
        }
        res += s.slice(i + 1, j);
        i = j;
      } else {
        res += s[i];
      }
    }
  }
  return res;
};
