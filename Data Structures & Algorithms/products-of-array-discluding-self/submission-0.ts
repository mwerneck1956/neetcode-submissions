class Solution {
    productExceptSelf(nums: number[]): number[] {
        let product = 1;
        let zeros = 0;

        for (const num of nums) {
            if (num === 0) {
                zeros++;
            } else {
                product *= num;
            }
        }

        const result: number[] = [];

        for (const num of nums) {
            if (zeros > 1) {
                result.push(0);
            } else if (zeros === 1) {
                result.push(num === 0 ? product : 0);
            } else {
                result.push(product / num);
            }
        }

        return result;
    }
}