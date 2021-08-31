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
    
    if ( !l1 && !l2) return l1
    if (!l1) return l2
    if (!l2) return l1
    
    let dummy = new ListNode(0)
    let result = dummy; 
    while (l1 && l2){
        if (l1.val <= l2.val ) {
            dummy.next = l1
            l1 = l1.next
        } else {
            dummy.next = l2
            l2=l2.next
        }
        dummy = dummy.next
    }

    if (l1) {
        dummy.next = l1
        dummy = dummy.next
    } 
    if (l2) { 
        dummy.next = l2
        dummy = dummy.next    
    }
    return result.next
};