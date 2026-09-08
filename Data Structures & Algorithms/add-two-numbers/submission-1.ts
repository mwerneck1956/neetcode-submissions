/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let mergedHead = new ListNode(0)
        let current = mergedHead
        let remainder = 0;

        while (l1 || l2) {
            const sum = (l1?.val || 0) + (l2?.val || 0) + remainder

            if (sum >= 10) {
                current.next = new ListNode(sum % 10)
                remainder = Math.floor(sum / 10)
            } else {
                current.next = new ListNode(sum)
                remainder = 0
            }

            current = current.next
            l1 = l1?.next
            l2 = l2?.next
        }

        if(remainder)
            current.next = new ListNode(remainder)


        return mergedHead.next

    }
}
