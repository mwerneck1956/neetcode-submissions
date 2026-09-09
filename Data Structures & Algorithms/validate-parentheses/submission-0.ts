const opening_to_close_symbol = {
    '{': '}',
    '[': ']',
    '(': ')'
}

"((]))"

// ideia é boto o simbolo de fechamento na pilha 
// Se simbolo atual for de fechamento, comparo com o da pilha
//se for difrente é invalido
// se igual continou
// Se simbolo atual não for de fechamento eu so boto na pilha

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []

        for (const symbol of s) {

            if (this.isClosingSymbol(symbol)) {
                const expected_symbol = stack.pop()

                if (symbol != expected_symbol)
                    return false

                continue
            }

            stack.push(opening_to_close_symbol[symbol])
        }

        return stack.length === 0
    }

    isClosingSymbol(symbol: string) {
        const closingSymbols = new Set([')', ']', '}'])

        return closingSymbols.has(symbol)
    }
}
