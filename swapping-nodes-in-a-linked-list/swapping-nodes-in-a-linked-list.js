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
var swapNodes = function(head, k) {
//     let copy = new ListNode(0);
//     let clone = copy
    
//     let list = []
    
    
//     while (head){ 
//         list.push(new ListNode(head.val))
//         head = head.next
//     }
        
//     let val1 = list[k-1].val
//     let val2 = list[list.length - k].val
    
//     list[k-1].val = val2
//     list[list.length - k].val = val1
    
//     while(list.length){
//         let temp = list.shift()
//         copy.next = temp
//         copy = copy.next
//     }
    
    
//     return clone.next
    
    let clone = head, first = head, second = head
    
    for ( let i = 1; i < k; i++){
        clone = clone.next
        second = second.next
    }
    
    while(clone.next){
        clone = clone.next
        first = first.next
    }
    
    temp = first.val
    first.val = second.val
    second.val = temp
    
    return head
    
};