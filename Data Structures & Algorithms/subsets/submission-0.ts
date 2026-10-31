class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const result : number[][] = []
        const subset : number[] = []

        function dfs(i : number){
            if(i >= nums.length){
                result.push([...subset])
                return
            }

            subset.push(nums[i])
            dfs(i + 1)

            subset.pop()
            dfs(i + 1)

        }

        dfs(0)

        return result
    }
   
}
