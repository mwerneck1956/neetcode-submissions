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
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        return this.dfs(root, 1)
    }

    dfs(node: TreeNode, level : number){
        if(!node)
            return 0
        
        const leftDepth = level + this.dfs(node.left, level)
        const rightDepth = level + this.dfs(node.right, level)


        return Math.max(leftDepth, rightDepth)
    }
}
