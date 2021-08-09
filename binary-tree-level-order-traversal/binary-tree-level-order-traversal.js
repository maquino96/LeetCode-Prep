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
    
    if (root === null) return []
    
    let result = [[root.val]]
    let finished = false;
    
    let previousLevel = [root]
    
    let getNextLevel = (list) => {
        let temp = []
        let value = []
        list.forEach( el => {
            if (el.left) {
                temp.push(el.left);
                value.push(el.left.val)
            }
            if (el.right) {
                temp.push(el.right);
                value.push(el.right.val)
            }
        })
        if (!temp.length) {
            finished = true;
            return;
        }
        result.push(value);
        previousLevel = temp;

    }
    
    let checkList = (list) => {
        for (let node of list ){
            if( node.val !== null) return true
        }
        return false
    }
    
    while ( !finished) {
        getNextLevel(previousLevel)
    }
    
    return result;
};