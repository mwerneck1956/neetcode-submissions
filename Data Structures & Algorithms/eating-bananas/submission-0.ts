class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 0;
        let right = Math.max(...piles)

        let minTime = right;

        while (left <= right) {
            const mid = Math.ceil((left + right) / 2)

            const timeToEat = this.timeToEatWithRate(piles, mid)
            console.log(`Tempo para comer com taxa ${mid} : ${timeToEat}`)

            if (timeToEat > h) {
                left = mid + 1
            } else {
                minTime = Math.min(mid, minTime)
                right = mid - 1
            }


        }

        return minTime
    }

    timeToEatWithRate(piles: number[], rate: number) {
        let timeToEat = 0;

        for (const pile of piles) {
            timeToEat += Math.ceil(pile / rate)
        }

        return timeToEat
    }


}
