/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    // determine if it's a BFS or DFS
    // decide on DFS (make use of a stack)
    let stack = [root]
    
    if (!root) return root
     
    while (stack.length !== 0){
        let temp = stack.pop()
        
        // Order matters when inserting into the queue right then left
        // we want the left to be at the top / peek so that we can assign temp.right to that value
       
        if (temp.right ) stack.push(temp.right)
        if ( temp.left ) stack.push(temp.left)
       
        temp.left = null;
        // this check is necessary toward the end
        if ( stack.length > 0) temp.right = stack[stack.length-1]
    }
};



/*

temp = pop off queue
queue.push(temp.left)


*/