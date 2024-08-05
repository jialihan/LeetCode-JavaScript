// Max Heap & Min Heap
// a binary tree: parent > children or parent < children
// max(i) | left(i*2+1) | right(i*2+2)

/**
 * 912. Sort an Array
 * referenced solution: https://www.youtube.com/watch?v=RYJ6n_qcLHA
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // Heap sort
  const n = nums.length;
  if (n == 1) {
    return nums;
  }

  // 1. build the heap: Heapify on non-leaf nodes: [0, n/2-1]
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(nums, n, i);
  }
  // 2. take the root(largest element) & heapify
  for (let i = n - 1; i > 0; i--) {
    // 2.1 swap(0, i): move the largest to the end
    [nums[0], nums[i]] = [nums[i], nums[0]];
    // 2.2 heapify on the 1st element to find the cur largest number
    heapify(nums, i, 0);
  }
  return nums;
};

/**
 * find the largest number as the parent index
 * @param {Array} arr
 * @param {number} len - size of the heap/array
 * @param {number} i - index of the node to perform heapify
 */
function heapify(arr, len, i) {
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
