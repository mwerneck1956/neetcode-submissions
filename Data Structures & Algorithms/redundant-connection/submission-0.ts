
class UnionFind {
    private parents: Array<number>
    private sizes: Array<number>

    constructor(n: number) {
        this.parents = Array.from({ length: n }, (_, i) => i)
        this.sizes = Array(n).fill(1)
    }

    union(a: number, b: number) {
        const rootA = this.find(a)
        const rootB = this.find(b)

        if (rootA === rootB)
            return;

        if (this.sizes[rootA] > this.sizes[rootB]) {
            this.parents[rootB] = rootA
            this.sizes[rootA] += this.sizes[rootB]
        } else {
            this.parents[rootA] = rootB
            this.sizes[rootB] += this.sizes[rootA]
        }

    }

    find(node: number) {
        let current = this.parents[node]

        while (this.parents[current] !== current) {
            current = this.parents[current]
        }

        return current
    }
}



class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const unionFind = new UnionFind(edges.length)

        let lastEdge = [];

        for(const [vertexA, vertexB] of edges){
            const rootA = unionFind.find(vertexA)
            const rootB = unionFind.find(vertexB)

            if(rootA === rootB)
                lastEdge = [vertexA, vertexB]
            
            unionFind.union(vertexA, vertexB)
        }

        return lastEdge
    }
}

