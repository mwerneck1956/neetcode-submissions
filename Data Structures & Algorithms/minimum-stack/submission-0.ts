class MinStack {
    private stack: Array<number>
    private sortedValues: Array<number>


    constructor() {
        this.stack = []
        this.sortedValues = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)

        if (!this.sortedValues.length)
            this.sortedValues.push(val)
        else {
            if (val <= this.sortedValues[this.sortedValues.length - 1])
                this.sortedValues.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const removed = this.stack.pop()

        if(removed === this.getMin()){
            this.sortedValues.pop()
        }
    }


    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.sortedValues[this.sortedValues.length - 1]
    }
}
