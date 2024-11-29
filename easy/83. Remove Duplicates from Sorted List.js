//83. Remove Duplicates from Sorted List
//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

///////////////////////////////////////////////////////////////////////////////

//My solution:
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

//Best Runtime:
var deleteDuplicates = function (head) {
  if (head == null) {
    return head;
  }
  let present = head;
  while (present.next) {
    let seeker = present.next;
    if (present.val === seeker.val) {
      present.next = seeker.next;
    } else {
      present = seeker;
    }
  }
  return head;
};
