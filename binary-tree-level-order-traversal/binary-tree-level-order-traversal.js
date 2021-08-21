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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if(!root) return []
    
    
    let previousLevel = [root]
    let result = [[root.val]]
    
    while (previousLevel.length !== 0){
        let temp = []
        previousLevel.forEach( node => {            
            if (node.left) temp.push(node.left)
            if (node.right) temp.push(node.right)
        })
        if (temp.length === 0) break
        result.push(temp.map(node => node.val))
        previousLevel = temp
    }
    
    return result    
    
};