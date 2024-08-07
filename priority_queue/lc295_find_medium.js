/**
 * 295. Find Median from Data Stream
 * Followup: remove(), remove 1 element in PQ is O(logN), remove all elements in PQ is O(NlogN).
 */
var MedianFinder = function () {
  this.q1 = new MaxPriorityQueue();
  this.q2 = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.q1.enqueue(num);
  console.log(this.q1.front());
  if (this.q2.size() > 0 && this.q1.front().element > this.q2.front().element) {
    this.q2.enqueue(this.q1.dequeue().element);
  }
  // adjust the size
  if (this.q1.size() - this.q2.size() >= 2) {
    this.q2.enqueue(this.q1.dequeue().element);
  }
  if (this.q2.size() - this.q1.size() >= 2) {
    this.q1.enqueue(this.q2.dequeue().element);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.q1.size() > this.q2.size()) {
    return this.q1.front().element;
  } else if (this.q2.size() > this.q1.size()) {
    return this.q2.front().element;
  } else {
    return (this.q2.front().element + this.q1.front().element) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
