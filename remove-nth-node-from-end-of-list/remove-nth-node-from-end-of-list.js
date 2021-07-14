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
        
//     if (!head.next || !head) {
//         return head = head.next
//     }
    
//     let count = 1
//     let result = head;
    
//     let curr = head;
//     let next = head.next;
//     let swap;
    
//     while (head.next) {
//         head = head.next
//         count++
//         console.log(count)
        
//     }
    
//     let newN = count - n;
    
//     while (newN >= 0) {
//         if ( newN === 0) {
//             return curr.next
//         }
//         if( newN === 1) {
//             swap = curr.next.next
//             curr.next = swap
//             break
//         }
        
//         curr = next
//         next = curr.next
//         newN--
//         console.log(newN)
//     }
    
//     return result
    
//     2n >> O(n) not the most efficient
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let first = dummy;
    let second = dummy;
    
    for ( let i = 1; i <= n+1; i++){
        first = first.next
    }
    
    while (first != null) {
        first = first.next
        second = second.next
    }
    
    second.next = second.next.next
    return dummy.next
    
};