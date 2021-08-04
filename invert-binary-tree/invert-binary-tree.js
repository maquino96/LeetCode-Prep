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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    let temp;

    const dfs = (node) => {
        if (node === null) return 0
        
        dfs(node.left)
        dfs(node.right)
        
        temp = node.left
        node.left = node.right
        node.right = temp
    }
    
    dfs(root)
    
    return root
    
};