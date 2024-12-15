//234. Palindrome Linked List
//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let firstHalf = head,
    secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};

//Best Runtime:
const isPalindrome = (head) => {
  let fast = head;
  let slow = head;

  let prev = null;
  while (fast && fast.next) {
    fast = fast.next.next;

    let tmp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tmp;
  }

  let left = prev;
  let right = fast ? slow.next : slow;

  while (left && right) {
    if (left.val !== right.val) {
      return false;
    }
    right = right.next;
    left = left.next;
  }
  return true;
};

//Best Memory:
var isPalindrome = function (head) {
  // check the length of the linked list
  let n = 0;

  let curr = head;

  // while the current node exists
  while (curr) {
    // increase the count
    n++;
    // check next node
    curr = curr.next;
  }

  // check base case
  if (n == 1) return true;

  // reverse the first floor(n/2) nodes of the original linked list
  let half = Math.floor(n / 2);

  let reversed = null;
  let next;
  curr = head;
  while (half) {
    // save the next node of the current node
    next = curr.next;

    // point the current node to the head of the reversed list
    curr.next = reversed;

    // the head of the reversed list is the current node
    reversed = curr;

    // read the next node of the original list
    curr = next;

    half--;
  }

  // compare the reversed linked list gotten with the remaining original linked list
  // if the length of the original linked list has a middle item
  if (n % 2 == 1) curr = curr.next;

  // while the current node exists
  while (curr) {
    // compare the current node and the reversed node
    if (curr.val != reversed.val) return false;

    // advance in both lists
    reversed = reversed.next;
    curr = curr.next;
  }

  // we completed all checks
  return true;
};
