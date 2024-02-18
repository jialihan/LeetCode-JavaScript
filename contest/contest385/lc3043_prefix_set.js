// const memo = new Map();
// /**
//  * @param {number[]} arr1
//  * @param {number[]} arr2
//  * @return {number}
//  */
// var longestCommonPrefix = function (arr1, arr2) {
//   // const a1 = arr1.map(el=>el.toString()).sort((a,b)=>b.length - a.length);
//   // const a2 = arr2.map(el=>el.toString()).sort((a,b)=>b.length - a.length);
//   const a1 = processArray(arr1);
//   const a2 = processArray(arr2);
//   console.log(a1, a2);
//   let ans = 0;
//   for (let i = 0; i < a1.length; i++) {
//     const s1 = a1[i];
//     if (s1.length < ans) {
//       break;
//     }
//     for (let j = 0; j < a2.length; j++) {
//       const s2 = a2[j];
//       const prefix = getCommonPrefix(s1, s2);
//       // console.log("prefix len = " + prefix);
//       if (prefix === s1.length && prefix < ans) {
//         break;
//       }
//       ans = Math.max(ans, prefix);
//     }
//   }
//   return ans;
// };
// function processArray(arr) {
//   arr = Array.from(new Set(arr));
//   const a1 = arr.map((el) => el.toString()).sort((a, b) => b.length - a.length);
//   const remove = new Set();
//   for (let i = a1.length - 1; i > 0; i--) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (a1[j].indexOf(a1[i]) === 0) {
//         remove.add(i);
//       }
//     }
//   }
//   const res = [];
//   for (let i = 0; i < a1.length; i++) {
//     if (!remove.has(i)) {
//       res.push(a1[i]);
//     }
//   }
//   // console.log(remove);
//   return res;
// }
// function getCommonPrefix(a, b) {
//   const key = `${a}:${b}`;
//   if (memo.has(key)) {
//     return memo.get(key);
//   }
//   let res = 0;
//   let i = 0;
//   while (i < a.length && i < b.length) {
//     if (a[i] === b[i]) {
//       res++;
//       i++;
//     } else {
//       break;
//     }
//   }
//   memo.set(key, res);
//   return res;
// }

/**
 * https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  const pre1 = new Set();
  for (const num of arr1) {
    const s = num.toString();
    let cur = "";
    for (const c of [...s]) {
      cur += c;
      pre1.add(cur);
    }
  }
  let ans = 0;
  for (const num of arr2) {
    const s2 = num.toString();
    let cur = "";
    for (const c of [...s2]) {
      cur += c;
      if (pre1.has(cur)) {
        ans = Math.max(ans, cur.length);
      }
    }
  }
  return ans;
};
