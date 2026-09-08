// s = "dddfzx"
// s="daqvdf"

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const sequenceChars = new Map()

        let maxSubstringLength = 0;
        let sequenceStart = 0;

        for (let i = 0; i < s.length; i++) {
            const letter = s[i]

            if (sequenceChars.has(letter)) {
                const repeatedLetterPosition = sequenceChars.get(letter)

                if (s[i - 1] !== letter) {
                    sequenceStart = Math.max(sequenceStart, repeatedLetterPosition + 1)
                } else {
                    sequenceStart = i
                }

            }

            sequenceChars.set(letter, i)
            const sequenceLength = (i + 1) - sequenceStart
            maxSubstringLength = Math.max(maxSubstringLength, sequenceLength)
        }





        return maxSubstringLength
    }
}
