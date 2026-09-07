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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let pointerA = list1
        let pointerB = list2

        let mergedHead = new ListNode(0)
        let current = mergedHead

        while (pointerA && pointerB) {
            if (pointerA.val > pointerB.val) {
                current.next = pointerB
                pointerB = pointerB.next

            } else {
                current.next = pointerA
                pointerA = pointerA.next
            }

            current = current.next
        }

        current.next = pointerA || pointerB


        return mergedHead.next
    }
}
