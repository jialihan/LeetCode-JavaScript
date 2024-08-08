// Delete a node at index i
function deleteHeap(arr, n, i) {
  // 1. replace the last value with the deleted index/node
  arr[i] = arr[n - 1];
  // 2. delete the last element, and reduce heap size
  const size = n - 1;
  // 3. heapify on the sub-tree rooted at index "i" (top-down)
  heapify_top_down(arr, size, i);
}

/**
 * heapify the root node at index "i" and top-down
 * @param {Array} arr
 * @param {number} n - size of the heap/array
 * @param {number} i - index of the node to perform heapify
 */
function heapify_top_down(arr, n, i) {
  let largest = i;
  const l = i * 2 + 1;
  const r = i * 2 + 2;
  if (l < len && arr[l] > arr[largest]) largest = l;
  if (r < len && arr[r] > arr[largest]) largest = r;
  if (largest != i) {
    // swap (largest, i)
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    heapify(arr, len, largest);
  }
}
