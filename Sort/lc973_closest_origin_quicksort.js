/**
 * Blog: quicksort:  https://jialihan.github.io/blog/#/leetcode/array/quicksort
 */

/**
 * 973. K Closest Points to Origin
 * https://leetcode.com/problems/k-closest-points-to-origin/description/
 * worst: O(n^2), avg/best: O(NlogN)
 */
var K = 0;
var kClosest = function (points, k) {
  K = k - 1;
  quicksort(points, 0, points.length - 1);
  return points.slice(0, k);
};

function quicksort(arr, left, right) {
  if (left >= right) {
    return;
  }
  var pivot = partition(arr, left, right);
  if (pivot === K) {
    return;
  } else if (pivot > K) {
    quicksort(arr, left, pivot - 1);
  } else {
    quicksort(arr, pivot + 1, right);
  }
}
function partition(arr, left, right) {
  // 1. middle partition
  var mid = Math.floor((left + right) / 2);
  // 2. swap mid & the right
  [arr[mid], arr[right]] = [arr[right], arr[mid]];
  var pivot = arr[right];
  var i = left;
  var j = right - 1;
  while (i <= j) {
    while (i < right && getDist(arr[i]) < getDist(pivot)) {
      i++;
    }
    while (j >= 0 && getDist(arr[j]) > getDist(pivot)) {
      j--;
    }
    // 3. find the i (larger) and the j(smaller), then swap
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  // 4. swap back the pivot: i <---> n-1
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}
function getDist(p) {
  return p[0] ** 2 + p[1] ** 2;
}
