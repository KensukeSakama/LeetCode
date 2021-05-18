/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let storage = [];
    let current = head;
    
    while (current) {
        storage.push(current);
        current = current.next;
    }
    
    if (storage.length < n) return null;
    
    if (storage.length === 1 && n === 1) {
        head = null;
        return head;
    }
    else if (storage.length === n) {
        head = storage[1];
        return head;
    }
    else if (n === 1) {
        storage[storage.length-2].next = null;
        return head;
    }
    else {
        let previous = storage[storage.length-(n+1)];
        previous.next = storage[storage.length-(n-1)]
        return head;
    }
    
};