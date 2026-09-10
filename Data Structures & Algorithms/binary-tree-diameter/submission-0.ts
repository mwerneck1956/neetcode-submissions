/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    maxHeight : number;

    constructor(){
        this.maxHeight = 0
    }

    diameterOfBinaryTree(root: TreeNode | null): number {
        this.dfs(root)

        return this.maxHeight
    }

    dfs(node: TreeNode | null) {
        if (!node)
            return 0

        const leftHeight = this.dfs(node.left)
        const rightHeight = this.dfs(node.right)

        const diameter = leftHeight + rightHeight
        
        this.maxHeight = Math.max(this.maxHeight, diameter)
        
        return 1 + Math.max(leftHeight, rightHeight)
    }
}
