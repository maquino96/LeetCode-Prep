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
 * @return {number}
 */
var maxDepth = function(root) {
    return findMax(root);
};

var findMax = (node, depth = 0) => {
    if (!node) return 0;
    return 1 + Math.max(findMax(node.left, depth + 1), findMax(node.right, depth + 1));
}