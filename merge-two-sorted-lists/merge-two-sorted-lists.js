/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let l3 = new ListNode();
    let result = l3;
    
    while (current1 && current2) {
        if (current1.val <= current2.val) {
            l3.next = new ListNode(current1.val);
            current1 = current1.next;
        } else {
            l3.next = new ListNode(current2.val);
            current2 = current2.next;
        }
        l3 = l3.next;
    }
    if (current1){
        l3.next = current1;
    }
    if (current2){
        l3.next = current2;
    }
    
    return result.next;
    
};