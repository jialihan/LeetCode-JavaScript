/**
 * https://leetcode.com/problems/minimum-processing-time/description/
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
  let res = 0;
  processorTime.sort((a, b) => a - b);
  tasks.sort((a, b) => b - a);
  for (let i = 0; i < processorTime.length; i++) {
    for (let j = 0; j < 4; j++) {
      const t = tasks.shift();
      res = Math.max(res, processorTime[i] + t);
    }
  }
  return res;
};
