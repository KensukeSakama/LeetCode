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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let result = false;
    
    const helper = (node, sum) => {
        if (!node || result) {
                return;
            }
        sum += node.val;
        if (!node.left && !node.right && sum === targetSum) {
            result = true;
        }
        helper(node.left, sum);    
        helper(node.right, sum);     
    }
    helper(root, 0)
    return result;
    
};