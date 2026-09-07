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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let current = head;
        let prev = null

        while(current){
            const aux = current.next
            current.next = prev

            prev = current
            current = aux
        }

        return prev
    }

}
