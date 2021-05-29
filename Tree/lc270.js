// https://leetcode.com/problems/closest-binary-search-tree-value/
// Given the root of a binary search tree and a target value, 
// return the value in the BST that is closest to the target.

var closestValue = function (root, target) {
    if (root === null) {
        return -1;
    }
    var next = target < root.val ? root.left : root.right;
    var diff1 = Math.abs(root.val - target);
    var closest = closestValue(next, target);
    if (closest === -1 || diff1 < Math.abs(closest - target)) {
        return root.val;
    }
    return closest;
};

var closestValue2 = function (root, target) {
    var closest;
    var diff = Infinity;
    while (root) {
        var curDiff = Math.abs(root.val - target);
        if (curDiff < diff) {
            closest = root.val;
            diff = curDiff;
        }
        if (target < root.val) {
            root = root.left;
        }
        else {
            root = root.right;
        }
    }
    return closest;
};