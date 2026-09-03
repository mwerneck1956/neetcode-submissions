class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (!p && !q)
            return true

        const areNodeEquals = !!(p && q) && p.val === q.val

        return areNodeEquals && this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
    }
}
