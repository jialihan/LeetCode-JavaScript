/**
 * https://leetcode.com/problems/count-tested-devices-after-test-operations/
 * 2960. Count Tested Devices After Test Operations
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (arr) {
  const n = arr.length;
  let ans = arr[0] > 0 ? 1 : 0;
  for (let i = 1; i < n; i++) {
    arr[i] -= ans;
    arr[i] = Math.max(0, arr[i]);
    if (arr[i] > 0) {
      ans++;
    }
  }
  return ans;
};
