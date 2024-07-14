/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 3217. Delete Nodes From Linked List Present in Array
 * linear time solution
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  let p = head;
  let dummy = new ListNode(-1);
  let pre = dummy;
  pre.next = head;
  const set = new Set(nums);
  while (p !== null) {
    if (set.has(p.val)) {
      pre.next = p.next;
      p.next = null;
    } else {
      pre = p;
    }
    p = pre.next;
  }
  return dummy.next;
};
