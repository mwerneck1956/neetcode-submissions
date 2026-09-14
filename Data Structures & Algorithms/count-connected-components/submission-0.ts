class UnionFind {
    parents: number[]
    connectedComponents: number

    constructor(n: number) {
        this.parents = Array.from({ length: n }, (_, k) => k)
        this.connectedComponents = n
    }

    union(a: number, b: number) {
        const rootA = this.find(a)
        const rootB = this.find(b)

        if (rootA === rootB)
            return false

        this.parents[rootB] = rootA
        this.connectedComponents--

        return true
    }

    find(x: number): number {
        while (x !== this.parents[x]) {
            x = this.parents[x]
        }

        return x
    }
}


class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const unionFind = new UnionFind(n)

        for (const edge of edges) {
            unionFind.union(edge[0], edge[1])
        }  

        return unionFind.connectedComponents
    }
}
