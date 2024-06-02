/**
 * 3169. Count Days Without Meetings
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  let d = days;
  let pre = 1;
  let ans = 0;
  for (let i = 0; i < meetings.length; i++) {
    const [s, e] = meetings[i];
    if (pre < s) {
      ans += s - pre;
      pre = e + 1;
    } else {
      pre = Math.max(pre, e + 1);
    }
  }
  if (days >= pre) {
    ans += days - pre + 1;
  }
  return ans;
};
