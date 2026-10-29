class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = []
        const result = Array.from({length : temperatures.length} , () => 0)

        for(let i = 0 ; i < temperatures.length ; i++){
            // console.log(`Temp na pilha ${temperatures[stack.lenght - 1]}`)


            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                const top = stack.pop()!

                result[top] = i - top
            }

            stack.push(i)
        }

        return result
    }
}
