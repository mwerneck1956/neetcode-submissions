class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const n = matrix[0].length

        let left = 0;
        let right = this.toArrayIndex(matrix.length -1, n -1, n)

        while(left <= right){
            const mid = Math.floor((left + right) / 2) 
            const {row, col} = this.toMatrixIndex(mid, n)

            console.log('Comparando elemento ', matrix[row][col])
            if(matrix[row][col] === target) 
                return true

            else if(matrix[row][col] > target)
                right = mid - 1
            else
                left = mid + 1

        }


        return false
    }

    toArrayIndex(row : number, col : number, n : number){
        return (row * n) + col 
    }

    toMatrixIndex(index: number , n : number){
        const row = Math.floor(index / n)
        const col = index % n   

        return {row, col}
    }
}
