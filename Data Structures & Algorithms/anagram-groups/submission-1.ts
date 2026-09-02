class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */


    groupAnagrams(strs: string[]): string[][] {
        const wordFrequency = new Map<string,string[]>()

        for(const word of strs){
            const sortedWord = this.sortWord(word)

            if(wordFrequency.has(sortedWord)){
                wordFrequency.get(sortedWord).push(word)
            }else{
                wordFrequency.set(sortedWord, [word])
            }
        }

        const result = []

        for (const [_,anagrams] of wordFrequency){
            result.push(anagrams)
        }

        return result
    }

    sortWord(word: string) {
        return word.split("").sort().join("")
    }
}
