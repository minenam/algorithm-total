/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    const values: number[] = [];

    let currentNode: ListNode | null = head;

    while (currentNode !== null) {
        values.push(currentNode.val);

        currentNode = currentNode.next;
    }

    let left = 0;
    let right = values.length - 1;

    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};