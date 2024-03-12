/**
 * 3075. Maximize Happiness of Selected Children
 * https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/4863102/js-priority-queue-of-k-elements/
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  const pq = new MinPriorityQueue();
  for (const h of happiness) {
    if (pq.size() < k) {
      pq.enqueue(h);
    } else {
      if (pq.front().element < h) {
        pq.dequeue();
        pq.enqueue(h);
      }
    }
  }

  let total = 0;
  let time = 0;
  while (!pq.isEmpty()) {
    let val = pq.dequeue().element;
    val -= k - 1 - time;
    time++;
    total += Math.max(0, val);
  }
  return total;
};
