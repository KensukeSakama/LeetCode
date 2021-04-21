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
    let output = new ListNode();
    let current = output;
    
    const helper = (l1, l2) => {
        if (!l1 && !l2) return;
        
        if (l1 && l2 === null) {
            current.next = l1;
            return;
        }
        if (l2 && l1 === null) {
            current.next = l2;
            return;
        }
        
        if (l1.val < l2.val) {
            current.next = new ListNode(l1.val);
            current = current.next;
            helper(l1.next, l2)
        } else {
            current.next = new ListNode(l2.val);
            current = current.next;
            helper(l1, l2.next)
        }
        
    }
    
    helper(l1, l2);
    return output.next;

    
    // run a helper function
    // and return output.next
    
    
    
    
    
    
    
};