class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const duplicatesMap = new Set()

        for (const num of nums){
            if(duplicatesMap.has(num))
                return true
            
            duplicatesMap.add(num)
        }

        return false
    }
}
