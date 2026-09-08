

class GraphNode {
    val: number
    neighbors: GraphNode[]

    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}


class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: GraphNode | null): GraphNode {
        if (!node)
            return null

        const nodesMap = new Map<number, GraphNode>()

        const copyHead = new GraphNode(node.val)
        nodesMap.set(copyHead.val, copyHead)

        const stack = [node]

        while (stack.length) {
            const current = stack.pop()

            const currentCopy = nodesMap.get(current.val)

            for (const neighbor of current.neighbors) {
                if (!nodesMap.has(neighbor.val)) {
                    nodesMap.set(neighbor.val, new GraphNode(neighbor.val))
                    stack.push(neighbor)
                }

                const neighborCopy = nodesMap.get(neighbor.val)
                currentCopy.neighbors.push(neighborCopy)
            }

            nodesMap.set(current.val, currentCopy)
        }

        return copyHead
    }
}
