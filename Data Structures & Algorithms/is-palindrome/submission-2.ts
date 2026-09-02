class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let startPointer = 0;
        let endPointer = s.length - 1;

        while(startPointer < endPointer){
            while(startPointer < endPointer && !this.isAlphanumeric(s[startPointer]))
                startPointer++
            
            while(endPointer > startPointer && !this.isAlphanumeric(s[endPointer]))
                endPointer--

            if(s[startPointer].toLowerCase() != s[endPointer].toLowerCase())
                return false
            
            startPointer++
            endPointer--
        }

        return true
    }


    isAlphanumeric(char: string){
        char = char.toLowerCase()

        return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')
    }
}