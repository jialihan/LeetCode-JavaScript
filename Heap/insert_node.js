// Insert a node
function insertHeap(arr, n, val) {
  // 1. increase the heap size by 1
  const size = n + 1;
  // 2. insert the new element at the end of the heap
  arr[n] = val;
  // 3. heapify on the nth new node with a bottom-up appraoch
  heapify_bottom_up(arr, size, n);
}

/**
 * Heapify at the index i, and find the parent.
 * heap size is n.
 * @param {*} arr
 * @param {*} n
 * @param {*} i
 */
function heapify_bottom_up(arr, n, i) {
  let parent = Math.floor((i - 1) / 2);
  if (parent >= 0) {
    if (arr[i] > arr[parent]) {
      // swap(i, parent)
      [arr[i], arr[parent]] = [arr[parent], arr[i]];
      // heapify the parent
      heapify_bottom_up(parent);
    }
  }
}
