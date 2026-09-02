class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length)
            return false

        const sLettersMap = new Map()
        const tLettersMap = new Map()

        for (let i = 0 ; i < s.length ; i++){
            sLettersMap.set(s[i], (sLettersMap.get(s[i]) || 0) + 1)
            tLettersMap.set(t[i], (tLettersMap.get(t[i]) || 0) + 1)
        }

        for(const letter of s){
            if(sLettersMap.get(letter) != tLettersMap.get(letter))
                return false
        }

        return true
    }
}
