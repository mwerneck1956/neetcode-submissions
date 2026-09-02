class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length)
            return false

        const frequency = new Map<string,number>()

        for (let i = 0 ; i < s.length ; i++){
            frequency.set(s[i], (frequency.get(s[i]) || 0) + 1)
            frequency.set(t[i], (frequency.get(t[i]) || 0) - 1)
        }

        for(const [symbol, times] of frequency){
            if(times != 0)
                return false
        }

        return true
    }
}
