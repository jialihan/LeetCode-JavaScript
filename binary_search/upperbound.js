function binarysearch_upper(arr, target) {
  // find the first index that > target
  var l = 0;
  var r = arr.length; // if not found, the largest index is the arr.length
  while (l < r) {
    var mid = Math.floor((l + r) / 2);
    if (arr[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  console.log("find l=" + l, arr[l], target);
  return l;
}
