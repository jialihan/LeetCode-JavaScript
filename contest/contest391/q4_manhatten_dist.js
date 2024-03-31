// /**
//  * My wrong solution at the contest
//  * @param {number[][]} points
//  * @return {number}
//  */
// var minimumDistance = function(points) {
//     const lenMap = new Map(); // <len, Set<string>>, key="i:j" or "j:i"
//     for(let i =0; i<points.length; i++) {
//         const p1 = points[i];
//         for(let j = i+1; j<points.length; j++) {
//             const p2 = points[j];
//             const key = `${i}:${j}`;
//             const len = Math.abs(p1[0]-p2[0]) + Math.abs(p1[1] - p2[1]);
//             if(!lenMap.has(len)) {
//                lenMap.set(len, new Set());
//             }
//             lenMap.get(len).add(key);
//         }
//     }
//     // sort the len
//     const maxQ = Array.from(lenMap.keys()).sort((a,b)=>b-a);
//     const curMax = maxQ[0];
//     // console.log("cur max len = " + curMax);

//     // get all possible nodes to delete
//     const deleteSet = new Set();
//     for(const s of Array.from(lenMap.get(curMax))) {
//         const idxArr = s.split(':').map(el=>parseInt(el)).forEach(el=>deleteSet.add(el));
//     }
//    // console.log(deleteSet);

//     let ans = Infinity;
//     // // try to remove each node
//     for(const i of Array.from(deleteSet)) {
//          // i is the index to delete
//         // memory issue, deep clone a map
//         const tempMap = new Map();
//         for(const [k, v] of lenMap) {
//             tempMap.set(k, new Set(v));
//         }
//         /////
//         // console.log(tempMap);
//         // console.log("trying to del index: " +i +" --------------");
//         for(let p = 0; p<maxQ.length; p++) {
//             const len = maxQ[p];
//             const pairSet = tempMap.get(len);
//             // console.log("pair:", pairSet);
//             for(const key of Array.from(pairSet)) {
//                 if(key.includes(i.toString())) {
//                     pairSet.delete(key);
//                 }
//             }
//             // empty len
//             if(pairSet.size !== 0) {
//                 ans = Math.min(len, ans);
//                 // console.log("current max len =  " + len, " ans="+ans);
//                 break;
//             }
//         }
//     }
//     return ans;
// };

/**
 * 3102. Minimize Manhattan Distances
 * Use Math
 * Reference: https://leetcode.com/problems/minimize-manhattan-distances/solutions/4949520/c-maximum-manhattan-distance-set-well-explained/
 * Time: O(nlogn) for sorting, Space: O(n) -> use array
 * @param {number[][]} points
 * @return {number}
 */
var minimumDistance = function (points) {
  const n = points.length;
  // sort asc
  const sum = points.map((el) => el[0] + el[1]).sort((a, b) => a - b);
  const diff = points.map((el) => el[0] - el[1]).sort((a, b) => a - b);

  let ans = Infinity;

  for (const [x, y] of points) {
    const curSum = x + y;
    const curDiff = x - y;
    let sl = curSum === sum[0] ? 1 : 0;
    let sr = curSum === sum[n - 1] ? n - 2 : n - 1;
    let dl = curDiff === diff[0] ? 1 : 0;
    let dr = curDiff === diff[n - 1] ? n - 2 : n - 1;

    // Tip: find the min of "max of (sum_i - sum_j, diff_i - diff_j)"
    const maxDist = Math.max(sum[sr] - sum[sl], diff[dr] - diff[dl]);
    ans = Math.min(maxDist, ans);
  }
  return ans;
};
