/**
 * Insert: O(1) store in Map, push into array
 * Remove: O(1) to get index in Map, Swap in array O(1)
 */
var RandomizedSet = function () {
  this.map = new Map(); // val, index
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  } else {
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  } else {
    const index = this.map.get(val);
    this.arr[index] = this.arr[this.arr.length - 1];
    this.map.set(this.arr[index], index);
    this.arr.pop();
    this.map.delete(val);
    return true;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const idx = Math.floor(Math.random() * this.arr.length);
  return this.arr[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
