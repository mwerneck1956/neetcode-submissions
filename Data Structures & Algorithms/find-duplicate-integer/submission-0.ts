class Solution {
    findDuplicate(nums: number[]): number {
        const duplicates = new Set<number>()

        for (const num of nums){
            if(duplicates.has(num))
                return num

            duplicates.add(num)   
        }
    }
}
