class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minBuyPrice = prices[0];
        let maxProfit = 0

        
        for(let i = 1 ; i < prices.length ; i++){
           const profit = prices[i] - minBuyPrice

           maxProfit = Math.max(profit, maxProfit)

           if(prices[i] < minBuyPrice)
                minBuyPrice = prices[i]


        }

        return maxProfit
    }
}
