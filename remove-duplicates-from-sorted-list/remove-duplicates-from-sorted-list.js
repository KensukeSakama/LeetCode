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
var deleteDuplicates = function(head) {
  
  if (head === null || head.next === null) return head;
  
  let storage = {};
  let current = head.next;
  let prev = head;
  storage[head.val] = true;

  const remover = (prevNode, currNode) => {
    let temp = currNode;
    prevNode.next = currNode.next;
    currNode.next = null;
    return prevNode.next;
  }
  
  while (current) {
    // console.log(current.val)
    if (storage[current.val] === undefined) {
      storage[current.val] = true;
      prev = current;
      current = current.next;
    } 
    else {
      current = remover(prev, current)
    }
  }
  
  return head;
  
};