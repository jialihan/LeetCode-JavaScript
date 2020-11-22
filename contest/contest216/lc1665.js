// 1665. Minimum Initial Energy to Finish Tasks - not solved at contest
// https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/

/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function (tasks) {
    tasks.sort((a, b) => b[1] - b[0] - a[1] + a[0]);
    var energy = 0, res = 0;
    for (var task of tasks) {
        if (energy < task[1]) {
            res += task[1] - energy;
            energy = task[1];
        }
        energy -= task[0];
    }
    return res;
};