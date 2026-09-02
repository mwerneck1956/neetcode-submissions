class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numbersFrequency = new Map()

        for (const num of nums){
            const numberFrequency = numbersFrequency.get(num) ? numbersFrequency.get(num) + 1 : 1
            numbersFrequency.set(num, numberFrequency)
        }
        
        const sorted = [...numbersFrequency].sort((a,b) => b[1] - a[1]).map(a => a[0]) 

        return sorted.splice(0, k)
    }
}
