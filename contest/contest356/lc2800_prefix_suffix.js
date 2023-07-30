// 2800. Shortest String That Contains Three Strings
// Solution: merge strings wiht prefix and suffix

/**
 * Brute force: bad solution
 */
var minimumString_v1 = function (a, b, c) {
  // sort the array due to the length desc, but lexicographically small
  const strs = [a, b, c].sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return b.length - a.length;
  });

  //already found the min as the first string in the sorted array
  const [t1, t2, t3] = strs;
  if (t1.includes(t2) && t1.includes(t3)) {
    return t1;
  }

  let res;
  for (let i = 0; i < 3; i++) {
    const str1 = buildString(strs[i], strs[(i + 1) % 3], strs[(i + 2) % 3]);
    const str2 = buildString(strs[i], strs[(i + 2) % 3], strs[(i + 1) % 3]);
    const min = getMinStr(str1, str2);
    if (!res) {
      res = min;
    } else {
      res = getMinStr(res, min);
    }
  }
  return res;
};

/**
 * Build the shortest string due to the order s1, s2, s3
 */
function buildString(s1, s2, s3) {
  let ans = s1.slice();
  const index1 = getLongestPrefix(s2, s1);
  const index2 = getLongestPrefix(s3, s2);
  if (ans.includes(s2)) {
    // if s2 already fully included
    const index3 = getLongestPrefix(s3, ans);
    ans += s3.slice(index3);
  } else {
    // append s2
    ans += s2.slice(index1);
    // only if s3 is not fully included
    if (!ans.includes(s3)) {
      ans += s3.slice(index2);
    }
  }
  return ans;
}

/**
 * Get the starting index of s, which has the longest prefix that same as the suffix of t.
 */
function getLongestPrefix(s, t) {
  let ans;
  let pre;
  let suffix;
  let i;
  for (i = 0; i < Math.min(s.length, t.length); i++) {
    pre = s.slice(0, i + 1);
    suffix = t.slice(t.length - i - 1);
    if (pre === suffix) {
      ans = pre;
    }
  }
  return ans ? ans.length : 0;
}
function getMinStr(s, t) {
  if (s.length < t.length) {
    return s;
  } else if (s.length > t.length) {
    return t;
  } else if (s.localeCompare(t) < 0) {
    return s;
  } else {
    return t;
  }
}

/**
 * Clean code
 */

/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function (a, b, c) {
  let res;
  const strs = [a, b, c];
  for (let i = 0; i < 3; i++) {
    const str1 = mergeString(
      mergeString(strs[i], strs[(i + 1) % 3]),
      strs[(i + 2) % 3]
    );
    const str2 = mergeString(
      mergeString(strs[i], strs[(i + 2) % 3]),
      strs[(i + 1) % 3]
    );
    const min = getMinStr(str1, str2);
    if (!res) {
      res = min;
    } else {
      res = getMinStr(res, min);
    }
  }
  return res;
};

/**
 * Merge two string if have same suffix and prefix.
 * Return s1 if already fully included s2.
 */
function mergeString(s1, s2) {
  if (s1.includes(s2)) {
    return s1;
  }
  let ans;
  let pre;
  let suffix;
  let i;
  for (i = 0; i < Math.min(s1.length, s2.length); i++) {
    pre = s2.slice(0, i + 1);
    suffix = s1.slice(s1.length - i - 1);
    if (pre === suffix) {
      ans = pre;
    }
  }
  const startIndex = ans ? ans.length : 0;
  return s1 + s2.slice(startIndex);
}

/**
 * Return the longest but in smallest alphabetical order
 */
function getMinStr(s, t) {
  if (s.length < t.length) {
    return s;
  } else if (s.length > t.length) {
    return t;
  } else if (s.localeCompare(t) < 0) {
    return s;
  } else {
    return t;
  }
}
