/**
 * 975. Odd Even Jump
 * Hard
 * refer: https://leetcode.com/problems/odd-even-jump/solutions/217981/java-c-python-dp-using-map-or-stack/
 * TLE when submitt in JS
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function (arr) {
  // dp from n-1 to 0
  let ans = 1;
  const n = arr.length;
  const high = new Array(n).fill(false); // whether at index i can reach to end in higher jump
  const low = new Array(n).fill(false); // whether at index i can reach to end in lower jump
  high[n - 1] = true;
  low[n - 1] = true;
  let q = [[arr[n - 1], n - 1]]; // <val, index>
  for (let i = n - 2; i >= 0; i--) {
    // q = mergeSortArray(q);
    const [hi, lo, insertIdx] = findBound(q, arr[i], i);
    // if(i===n-2) {
    //  // console.log("h jump to "+hi, "l jump to "+ lo);
    // }
    if (hi !== undefined) {
      high[i] = low[hi];
      // insert element at index hi
      // console.log("insert at: ", insertIdx, hi);
      if (insertIdx === 0) {
        q.unshift([arr[i], i]);
      } else {
        const q1 = q.slice(0, insertIdx);
        q1.push([arr[i], i]);
        const q2 = q.slice(insertIdx);
        q = [...q1, ...q2];
      }
    } else {
      q.push([arr[i], i]);
    }
    // console.log("updated queue: ", q);
    if (lo) {
      low[i] = high[lo];
    }
    // console.log("hi jump:", hi, "lo jump:", lo);
    if (high[i]) {
      // console.log("find good at :" + arr[i]);
      ans++;
    }
  }

  return ans;
};
function findBound(queue, num, i) {
  let hi;
  let lo;
  let j = binarySearch_lower(queue, num);
  let k;
  if (j >= queue.length) {
    hi = undefined;
    k = queue.length - 1;
  } else {
    hi = queue[j][1];
    if (j === 0) {
      if (queue[j][0] === num) {
        k = 0;
      } else {
        k = -1;
      }
    } else {
      if (queue[j][0] > num) {
        k = j - 1;
      } else {
        k = j;
      }
    }
  }
  if (k < 0) {
    lo = undefined;
  } else {
    while (k > 0 && queue[k][0] === queue[k - 1][0]) {
      k--;
    }
    lo = queue[k][1];
  }
  return [hi, lo, j];
}
function binarySearch_lower(arr, target) {
  // find the 1st num that >= target
  let l = 0;
  let r = arr.length;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid][0] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
