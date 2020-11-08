// 1647. Minimum Deletions to Make Character Frequencies Unique

// A string s is called good if there are no two different characters in s that have the same frequency.
// Given a string s, return the minimum number of characters you need to delete to make s good.
// The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.


// Example 1:
// Input: s = "aab"
// Output: 0
// Explanation: s is already good.

/**
 * Method 1 -> find the unique descending array
 * 1) sort in desc
 * 2) dec 1, whenever a[i] === a[i-1]: [5,5,4,2,1] -> [5,4,4,2,1]
 * 3) check if finally valid at the ending index
 * 4) back to loop
 * 
 * Worst time: O(n * n * logn)
 */

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    var cnt = {};
    for (var c of [...s]) {
        if (Object.keys(cnt).includes(c)) {
            cnt[c] = cnt[c] + 1;
        }
        else
            cnt[c] = 1;
    }
    var nums = Object.values(cnt);
    var res = 0;
    while (1) {
        // sort 
        nums.sort((a, b) => b - a);
        // pop out zero
        while (nums[nums.length - 1] === 0) {
            nums.pop();
        }
        var i;
        for (i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                res++;
                nums[i]--;
                break;
            }
        }
        // check if it's already valid in whole array
        if (i === nums.length) {
            break;
        }
    }
    return res;
};

/**
 * Method 2: counting the length array
 * [5,5,4,2,1]
 * cnt[i] = each character's count -> [0,1,1,0,1,2]
 * arr[i] = all lengths's count -> [0,3,1]
 * Time: O(n + nlogn(sorting)) = O(NlogN) - better 
 */
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions2 = function (s) {
    var cnt = {};
    for (var c of [...s]) {
        if (Object.keys(cnt).includes(c)) {
            cnt[c] = cnt[c] + 1;
        }
        else
            cnt[c] = 1;
    }
    var nums = Object.values(cnt);
    nums.sort((a, b) => b - a);
    var arr = [...Array(nums[0] + 1)].fill(0);
    for (var num of nums) {
        arr[num]++;
    }
    var res = 0;
    for (var i = arr.length - 1; i >= 1; i--) {
        if (arr[i] > 1) {
            var extra = arr[i] - 1;
            arr[i - 1] += extra;
            res += extra; // delete one char on all same count strings
        }
    }
    return res;
};