/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  
  if (!head || k === 0) return head;
  
  let storage = [],
      start = head;
  
  while (start) {
    storage.push(start);
    start = start.next;
  } 
  
  let offset = storage.length > k ? k : k % storage.length;
  if (offset === 0) return head;
  
  let newHead = storage[storage.length - offset],
      newTail = storage[storage.length - offset -1] === undefined ? 
        storage[storage.length -1] : 
        storage[storage.length - offset -1];
  
  newTail.next = null;
  storage[storage.length-1].next = storage[0];
  return newHead;
  
  
  
  
  
};