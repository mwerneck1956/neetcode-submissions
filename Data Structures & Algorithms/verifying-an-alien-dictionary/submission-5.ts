class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words: string[], order: string): boolean {
        const alphabetWeight = new Map();

        for (let i = 0; i < order.length; i++) {
            alphabetWeight.set(order[i], i + 1)
        }

        let prevWord = undefined

        for (const word of words) {
            if (!prevWord) {
                prevWord = word
                continue
            }

            const minLength = Math.min(prevWord.length, word.length)
            let isPrefix = true

            for (let i = 0; i < minLength; i++) {

                if (prevWord[i] !== word[i]) {
                    isPrefix = false

                    const prevCharWeight = alphabetWeight.get(prevWord[i])
                    const currentCharWeight = alphabetWeight.get(word[i])

                    if (prevCharWeight > currentCharWeight)
                        return false

                    break;
                }


            }

            if (isPrefix && prevWord.length > word.length)
                return false

            prevWord = word
        }

        return true
    }


}
