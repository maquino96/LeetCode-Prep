/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    
    //make a copy of the head to return as a result
    
    let result = head;
    let stack = [head]
    
    // this problem requires a stack -- DFS based off the output examples. 
    
    while (stack.length !== 0){

        let temp = stack.pop()

        //I was tripped up about putting temp.child before temp.next
        //think about how queues work, what do you want to peek at / .top

        if (temp && temp.next) stack.push(temp.next)        
        if ( temp && temp.child) stack.push(temp.child)

        //after you're done inserting into the stack you can manipulate pointers
        //doubly linked lists require a .next and a .prev
        
        if (temp) temp.child = null
        if(stack.length > 0) {
            temp.next = stack[stack.length-1]
            temp.next.prev = temp;
        }
    }
    
    return result
    
};