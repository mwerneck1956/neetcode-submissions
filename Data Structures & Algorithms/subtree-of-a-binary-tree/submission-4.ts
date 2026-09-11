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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    subRoot: TreeNode | null = null


    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        this.subRoot = subRoot

        return this.search(root, subRoot)
    }

    isSameTree(node: TreeNode | null, subNode: TreeNode | null) {
        if (!node && !subNode)
            return true

        if (!node || !subNode)
            return false

        if (node.val === subNode.val)
            return this.isSameTree(node.left, subNode.left) && this.isSameTree(node.right, subNode.right)


        return false
    }

    search(node: TreeNode | null, subNode: TreeNode | null) {
        if(!node)
            return false

        if (this.isSameTree(node, subNode))
            return true

        return this.search(node.left, subNode) || this.search(node.right, subNode)
    }
}
