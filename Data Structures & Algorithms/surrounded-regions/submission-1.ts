class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const m = board.length
        const n = board[0].length

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (this.isBorderElement(i, j, m, n) && board[i][j] === 'O') {
                    this.dfs(i, j, board, m, n)
                }
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === 'O') {
                    board[i][j] = 'X'
                }
                else if (board[i][j] === 'S') {
                    board[i][j] = 'O'
                }
            }
        }
    }

    dfs(i: number, j: number, board: string[][], m: number, n: number) {
        const stack: Array<{ row: number, col: number }> = [{ row: i, col: j }]

        while (stack.length) {
            const { row, col } = stack.pop()
            board[row][col] = 'S'

            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

            for (const [adjacentRow, adjacentCol] of directions) {
                const neighborRow = row + adjacentRow
                const neighborCol = col + adjacentCol

                if (
                    this.isValidPosition(neighborRow, neighborCol, m, n) &&
                    board[neighborRow][neighborCol] === 'O'
                ) {
                    board[neighborRow][neighborCol] = 'S'
                    stack.push({ row: neighborRow, col: neighborCol })
                }

            }

        }
    }


    isValidPosition(row: number, col: number, m: number, n: number) {
        return (row >= 0 && row < m) && (col >= 0 && col < n)
    }


    isBorderElement(row: number, col: number, m: number, n: number) {
        return (row === 0 || col === 0) || (row === m - 1 || col === n - 1)
    }



}
