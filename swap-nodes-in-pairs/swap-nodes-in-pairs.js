/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    if (head === null) return null;
    
    console.log(head)
    
    let i = 0;
    // let storage = {};
    let current = head;
    let prev, next, link
    
    while (current) {
        // console.log(current.val, i, link)
        if (i % 2 === 0) {
            prev = current;
            current = current.next;
            i++;
        } 
        else {
            if (i === 1) {
                head = current;    
            }
            if (link) link.next = current;
            next = current.next
            current.next = prev;
            link = prev;
            prev.next = next;
            current = current.next.next;
            i++;
        }
        

    }
    
    return head;
    
    
    
};