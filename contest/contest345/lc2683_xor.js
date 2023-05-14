// https://leetcode.com/contest/weekly-contest-345/problems/neighboring-bitwise-xor/
// xor
var doesValidArrayExist = function(derived) {
    const n = derived.length;
    let arr = [0];
    for(let i = 0; i<n; i++) {
        let cur = derived[i];
        arr.push(cur ^ arr[i]);
    }
    if(arr[n] === arr[0]) {
        return true;
    }
    arr = [1];
    for(let i = 0; i<n; i++) {
        let cur = derived[i];
        arr.push(cur ^ arr[i]);
    }
    if(arr[n] === arr[0]) {
        return true;
    }
    return false;
};

// Smart Math solution
// a[0] ^ a[1] ^ a[1] .....^ a[n-1] ^ a[0] must === 0
var doesValidArrayExist = function(derived) {
   let xor = derived[0];
    for(let i = 1; i< derived.length; i++) {
        xor ^= derived[i];
    }
    return xor === 0;
};