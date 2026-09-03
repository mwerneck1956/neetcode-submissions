class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    rows: number
    cols: number

    constructor(){
        this.rows = 0
        this.cols = 0
    }

    maxAreaOfIsland(grid: number[][]): number {
        this.rows = grid.length
        this.cols = grid[0].length

        let maxArea = 0

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] != 1) continue
               
                const islandArea = this.dfs(i, j, grid)
                maxArea = Math.max(maxArea,islandArea)
            }
        }

        return maxArea
    }

    dfs(elementRow: number, elementCol: number, grid: number[][]) {
        grid[elementRow][elementCol] = 0

        const stack: Array<{ row: number, col: number }> = [{ row: elementRow, col: elementCol }]
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        let islandArea = 0;

        while (stack.length) {
            islandArea+= 1
            const neighborElement = stack.pop()

            for (const [row, col] of directions) {
                const adjacentRow = neighborElement.row + row
                const adjacentCol = neighborElement.col + col

                if (this.isValidPosition(adjacentRow, adjacentCol) && grid[adjacentRow][adjacentCol] === 1) {
                    grid[adjacentRow][adjacentCol] = 0
       
                    stack.push({ row: adjacentRow, col: adjacentCol })
                }
            }
        }

        return islandArea
    }

    isValidPosition(row: number, col: number) {
        const { rows, cols } = this

        return (row >= 0 && row < rows && col >= 0 && col < cols)
    }
}

