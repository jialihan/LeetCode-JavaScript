/**
 * https://leetcode.com/problems/remove-comments/
 */

let isBlock;
let cur;
let res;
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  isBlock = false;
  cur = "";
  res = [];
  source.forEach((s) => {
    processOneLine(s);
  });
  return res;
};

const isBlockLine = (inlineIndex, blockIndex) => {
  return (
    (inlineIndex >= 0 && blockIndex >= 0 && blockIndex < inlineIndex) ||
    (inlineIndex < 0 && blockIndex >= 0)
  );
};

const isInline = (inlineIndex, blockIndex) => {
  return (
    (inlineIndex >= 0 && blockIndex >= 0 && blockIndex > inlineIndex) ||
    (blockIndex < 0 && inlineIndex >= 0)
  );
};

const processOneLine = (s) => {
  // handle line inside of a block comment
  if (isBlock) {
    const endIndex = s.indexOf("*/");
    if (endIndex >= 0) {
      isBlock = false;
      const curline = cur + s.slice(endIndex + 2);
      cur = "";
      if (curline) {
        processOneLine(curline);
      }
    }
  }
  // handle one new line
  else {
    const inlineIndex = s.indexOf("//");
    const blockIndex = s.indexOf("/*");
    // Important: how to calc ending index if exists a starting /*
    // It might have multiple /*abc*/ /*efg*/ comments in one line
    const endIndex =
      blockIndex >= 0 ? s.indexOf("*/", blockIndex + 2) : s.indexOf("*/");

    if (isBlockLine(inlineIndex, blockIndex)) {
      if (endIndex >= 0) {
        isBlock = false;
        const curline = s.slice(0, blockIndex) + s.slice(endIndex + 2);
        if (curline) {
          // when /*abc*/efg/*hij*/ , we need recursion
          processOneLine(curline);
        }
      } else {
        isBlock = true;
        cur = s.slice(0, blockIndex);
      }
    } else if (isInline(inlineIndex, blockIndex)) {
      if (inlineIndex > 0) {
        res.push(s.slice(0, inlineIndex));
      }
    } else {
      if (s) {
        res.push(s);
      }
    }
  } // end processing one line
};
