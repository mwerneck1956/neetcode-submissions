class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const complementMap = new Map();
        let index = 0;

        for(const num of nums){
            const complement = target - num;
            
            if(complementMap.has(complement))
                return [complementMap.get(complement) , index]

            complementMap.set(num,index)
            index++
        }
    }
}
