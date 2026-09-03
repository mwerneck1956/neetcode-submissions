class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numOfIslands: number
    rows: number
    cols: number

    constructor(){
        this.numOfIslands = 0
        this.rows = 0
        this.cols = 0
    }

    numIslands(grid: string[][]): number {
        this.rows = grid.length
        this.cols = grid[0].length

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    this.numOfIslands += 1
                    this.dfs(i, j, grid)
                }
            }
        }

        console.log(grid)

        return this.numOfIslands
    }

    dfs(elementRow: number, elementCol: number, grid: string[][]) {
        grid[elementRow][elementCol] = 'X'
        const stack: Array<{ row: number, col: number }> = [{ row: elementRow, col: elementCol }]

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        while (stack.length) {
            const neighborElement = stack.pop()

            for (const [row, col] of directions) {
                const adjacentRow = neighborElement.row + row
                const adjacentCol = neighborElement.col + col

                if (this.isValidPosition(adjacentRow, adjacentCol) && grid[adjacentRow][adjacentCol] === "1") {
                    grid[adjacentRow][adjacentCol] = 'X'
                    stack.push({ row: adjacentRow, col: adjacentCol })
                }
            }
        }
    }

    isValidPosition(row: number, col: number) {
        const { rows, cols } = this

        return (row >= 0 && row < rows && col >= 0 && col < cols)
    }
}

