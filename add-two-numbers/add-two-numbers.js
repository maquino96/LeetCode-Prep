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
    
    let carry = 0
    
    let result = new ListNode()
    let dupe = result
    
    let zero = new ListNode(0)
    
    while (l1 || l2) { 
        // have to find a way to fill in 0s and make the lengths of the 2 lists equivalent
        
        // if (!l1.next && !l2.next) break
        // console.log(l1,l2) 
        
        if (l1 && !l2){
            l2 = zero;
        } 
        
        if (!l1 && l2) {
            l1 = zero;
        }
        
        let total = l1.val + l2.val + carry
        
        carry = 0
        
        if (total >= 10 ) {
            carry = 1;
            result.next = new ListNode(total-10);
            result = result.next
        }
        if ( total < 10) {
            result.next = new ListNode(total);
            result = result.next
        }
        
        l1 = l1.next
        l2 = l2.next
           
    }
    
    if (l2 && !l1.next) {
        result.next = l2
    } 
    if (l1 && !l2.next) {
        result.next = l1
    }
    
    if (carry) {
        result.next = new ListNode(carry)
    }
    
    return dupe.next
    
};