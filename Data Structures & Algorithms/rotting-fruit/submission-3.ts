class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    rows: number;
    cols: number;
    grid: number[][]
    max: number

    orangesRotting(grid: number[][]): number {
        this.rows = grid.length
        this.cols = grid[0].length

        this.grid = grid
        this.max = 0

        const queue = []

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (grid[i][j] === 2) {
                    queue.push({ row: i, col: j, days: 0 })
                }
            }
        }

        this.bfs(queue)

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (grid[i][j] === 1) {
                    return -1
                }
            }
        }

        return this.max
    }

    bfs(queue: Array<{ row: number, col: number, days: number }>) {

        while (queue.length) {
            const { row, col, days } = queue.shift()

            this.visitAdjacentNodes(row, col, days, queue)
        }

    }

    visitAdjacentNodes(row: number, col: number, days: number, queue: unknown[]) {
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        for (const direction of directions) {
            const adjacentRow = row + direction[0]
            const adjacentCol = col + direction[1]

            if ((adjacentRow >= 0 && adjacentRow < this.rows) && (adjacentCol >= 0 && adjacentCol < this.cols)) {
                if (this.grid[adjacentRow][adjacentCol] === 1) {
                    this.grid[adjacentRow][adjacentCol] = 2
                    queue.push({ row: adjacentRow, col: adjacentCol, days: days + 1 })

                    this.max = Math.max(this.max, days + 1)
                }
            }
        }
    }

}
