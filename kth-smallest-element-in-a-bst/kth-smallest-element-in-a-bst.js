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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    let result = [];
    let queue = [root];
    
    
    while ( queue.length !== 0 ) {
        let current = queue.shift();
        result.push(current.val)
        console.log(result)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    
    result.sort((a, b) => a-b )
    console.log(result)
    return result[k-1]
};