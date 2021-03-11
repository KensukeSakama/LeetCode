/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let arr = [];
    let current = head;
    while (current) {
        arr.push(current.val)
        current = current.next;
    }
    let binary = parseInt(arr.join(''), 2)
    return binary;
};