// https://leetcode.com/problems/frequency-tracker/description/
// Counter Map: <number, count>
// Frequency Map: <freq, counter>


var FrequencyTracker = function() {
    // this.map = new Map(); // <num, freq>
    this.nums = new Array(100002).fill(0);
    this.freqMap = new Map(); //<freq, counter>
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    const oldCount = this.nums[number];
    const curCount = oldCount + 1;
    this.nums[number]++;
    // update freqMap
    if(oldCount > 0) {
        this.freqMap.set(oldCount, this.freqMap.get(oldCount)  - 1);
        if(this.freqMap.get(oldCount) <= 0) {
            this.freqMap.delete(oldCount);
        }
    }
    this.freqMap.set(curCount, (this.freqMap.get(curCount) ?? 0 ) + 1);
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    if(this.nums[number] > 0) {
        const oldCount = this.nums[number];
        const curCount = oldCount - 1;
        this.nums[number]--;
        // update freqMap
        this.freqMap.set(oldCount, this.freqMap.get(oldCount)  - 1);
        if(this.freqMap.get(oldCount) <= 0) {
            this.freqMap.delete(oldCount);
        }
        this.freqMap.set(curCount, (this.freqMap.get(curCount) ?? 0 ) + 1);
    }
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    return this.freqMap.has(frequency);
};

/** 
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */