/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  const q = [];
  for (const s of schedule) {
    for (const interval of s) {
      q.push(interval);
    }
  }
  q.sort((a, b) => a.start - b.start);

  // merge intervals
  const res = [];
  let end = q[0].end;
  for (let i = 1; i < q.length; i++) {
    const cur = q[i];
    if (cur.start > end) {
      res.push(new Interval(end, cur.start));
      end = cur.end;
    } else {
      end = Math.max(end, cur.end);
    }
  }
  return res;
};

// scan lines

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function (schedule) {
  const start = [];
  const end = [];
  for (const s of schedule) {
    for (const interval of s) {
      start.push(interval.start);
      end.push(interval.end);
    }
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  // merge intervals
  const res = [];
  let endIdx = 0;
  for (let i = 1; i < start.length; i++) {
    if (start[i] > end[endIdx]) {
      res.push(new Interval(end[endIdx], start[i]));
    }
    endIdx++; //
  }
  return res;
};
