class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1

        let max = 0;

        while(left < right){
            const width = right - left
            const height = Math.min(heights[left] , heights[right])

            const area = width * height;

            if(heights[left] > heights[right])
                right--
            else
                left++
            
            max = Math.max(max,area)
        }

        return  max;
    }
}
