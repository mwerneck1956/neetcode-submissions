class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const result = []
        const subset = []

        let sum = 0;

        function dfs(i: number, sum : number) {
             if (sum === target) {
                result.push([...subset]);
                return;
            }

            if(sum >= target || i === nums.length)
                return;

            subset.push(nums[i])
            dfs(i, sum + nums[i])

            subset.pop()
            dfs(i + 1, sum)
        }

        dfs(0, 0)

        return result
    }
}
