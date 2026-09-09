const INF = 2147483647
const TREASURE_MARKER = 0

class Solution {

    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const rows = grid.length
        const cols = grid[0].length

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === TREASURE_MARKER) {
                    this.bfs(i, j, rows, cols, grid)
                }
            }
        }
    }

    bfs(row: number, col: number, rows: number, cols: number, grid: number[][]) {
        const queue = [{ row, col, level: 1 }]

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        while (queue.length) {
            const { row, col, level } = queue.shift()
           

            for (const direction of directions) {
                const adjacentRow = row + direction[0]
                const adjacentCol = col + direction[1]

                if (this.isValidPosition(adjacentRow, adjacentCol, rows, cols)) {
                    const cell = grid[adjacentRow][adjacentCol]

                    if (level < cell) {
                        grid[adjacentRow][adjacentCol] = Math.min(cell, level)
                        queue.push({ row: adjacentRow, col: adjacentCol, level: level + 1 })
                    }
                }

            }
        }

    }

    isValidPosition(row: number, col: number, rows: number, cols: number) {
        return (row >= 0 && row < rows) && (col >= 0 && col < cols)
    }
}
