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
    if(!head || head.next === null) return head
    
    let q1 = []
    let q2 = []
    
    while (head){
        q1.push(new ListNode(head.val))
        head = head.next
        if (head) q2.push(new ListNode(head.val))
        if (head) head = head.next
    }
    
    let result = q2.shift()
    let copy = result
    
    while(q2.length){
        result.next = q1.shift()
        result = result.next
        result.next = q2.shift()
        result = result.next
    }
    
    if (q1.length === 1){
        result.next = q1.shift()
    } else {
        result.next = q1.shift()
        result = result.next
        result.next = q1.shift()
    }
    
    return copy   
};



