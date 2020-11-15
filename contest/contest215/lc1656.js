/**
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.arr = new Array(n + 1);
    this.ptr = 1;
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */

OrderedStream.prototype.insert = function (id, value) {


    if (id !== (this.ptr)) {
        this.arr[id] = value;
        return [];
    }
    this.arr[this.ptr] = value;
    let end = this.ptr + 1;
    while (this.arr[end]) {
        end++;
    }
    let res = this.arr.slice(this.ptr, end);
    this.ptr = end;
    return res;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */