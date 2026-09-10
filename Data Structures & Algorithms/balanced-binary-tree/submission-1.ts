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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (!root)
            return true

        return this.dfs(root) !== -1

    }

    dfs(node: TreeNode | null) {
        if (!node)
            return 0

        const leftHeight = this.dfs(node.left)

        if (leftHeight === -1)
            return -1

        const rightHeight = this.dfs(node.right)

        if (rightHeight === -1)
            return -1

        if (Math.abs(rightHeight - leftHeight) > 1)
            return -1

        return 1 + Math.max(leftHeight, rightHeight)
    }



}
