

// class TreeNode {
//     val: number;
//     left: TreeNode | null
//     right: TreeNode | null

//     constructor(val = 0, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }


class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        return this._invertTree(root)
    }

    _invertTree(node: TreeNode | null): TreeNode | null {
        if (!node)
            return null

        const aux = node.right

        node.right = this._invertTree(node.left)
        node.left = this._invertTree(aux)

        return node
    }
}
