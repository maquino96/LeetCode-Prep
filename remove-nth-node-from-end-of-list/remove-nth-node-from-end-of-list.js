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

/*

Keyword is 'from the END'

approach: 2 passes
-- figure ot the length on the first pass
-- remove the nth node


 p 
   1->2->3->4->5
   c  n
   
   

*/
var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode(0);
    dummy.next = head
    
    let length = 0
    let first = head
    
    while (first != null){
        length++
        first = first.next
    }
    length -= n
    
    first = dummy
    
    while ( length > 0 ) {
        length--;
        first = first.next; 
    }
    console.log( first )
    first.next = first.next.next
    
    return dummy.next
    
    
};