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
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode();
    let newList = l3;
    
    console.log(l1, l2)
    let carryOver = 0;
    
    while (l1 || l2 || carryOver) {
        let num1 = (l1 ? l1.val : 0);
        let num2 = (l2 ? l2.val : 0);
        let sum = num1 + num2 + carryOver;
        carryOver = 0;
        
        if (sum >= 10) {
            carryOver = 1;
            sum = sum % 10;
        }
        if (l1 ) {
            l1 = l1.next;
        }    
        if (l2) {
            l2 = l2.next;  
        } 
        console.log(sum);
        l3.next = new ListNode(sum)
        l3 = l3.next;
        
    }
    
    return newList.next;
};