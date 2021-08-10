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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    if (!root) return []
    
    let result = [root.val]
    let previousList = [root]
    let finished = false
    
    const previousLevel = (list) => {
        let temp = []
        let value = []
        
        list.forEach(el => {
            if (el.left) {
                temp.push(el.left);
                value.push(el.left.val)
            }
            if ( el.right) {
                temp.push(el.right)
                value.push(el.right.val)
            }
        })
        if (!temp.length) {
            finished = true;
            return;
        }
        result.push(value[value.length-1])
        previousList = temp   
    }
    
    while (!finished){
        previousLevel(previousList);
    }
    return result
};