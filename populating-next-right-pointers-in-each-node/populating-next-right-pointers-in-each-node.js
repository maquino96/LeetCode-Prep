/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    const queue = [root];
    
    while(queue.length) {
        const size  = queue.length;
        const level = queue.slice();

        for(let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            currentNode.next  = level[i + 1];
            if(currentNode.left)  queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    
    return root
};
    