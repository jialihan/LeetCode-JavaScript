// https://leetcode.com/problems/meeting-rooms-ii/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const starts = intervals.map((el) => el[0]).sort((a, b) => a - b);
  const ends = intervals.map((el) => el[1]).sort((a, b) => a - b);
  let room = 0;
  let endIdx = 0;
  for (i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endIdx]) {
      room++;
    } else {
      endIdx++;
    }
  }
  return room;
};
