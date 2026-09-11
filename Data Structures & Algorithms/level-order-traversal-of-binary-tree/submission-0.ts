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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root)
            return []

        const levels: number[][] = [[]]
        const queue = [{ node: root, level: 0 }]

        while (queue.length) {
            const { node, level } = queue.shift()

            if (!levels[level])
                levels[level] = []

            levels[level].push(node.val)

            if (node.left)
                queue.push({ node: node.left, level: level + 1 })
            if (node.right)
                queue.push({ node: node.right, level: level + 1 })
        }

        return levels
    }
}
