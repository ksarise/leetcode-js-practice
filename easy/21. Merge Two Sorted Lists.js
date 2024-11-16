//21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let result = null;
  if (list1 === null) return list2;
  else if (list2 === null) return list1;

  if (list1.val <= list2.val) {
    result = list1;
    result.next = mergeTwoLists(list1.next, list2);
  } else {
    result = list2;
    result.next = mergeTwoLists(list1, list2.next);
  }
  return result;
};

//Best Runtime:
var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to start the merged list
  let dummy = new ListNode(0);
  let current = dummy;

  // Merge the lists by comparing nodes
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If any nodes remain in list1 or list2, append them
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Return the head of the merged list
  return dummy.next;
};

//Best Memory:
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  let mainPoint = list1;
  let tempPoint = list2;

  if (list1.val > list2.val) {
    mainPoint = list2;
    tempPoint = list1;
  }
  let returnHead = mainPoint;

  //Loop list1
  while (tempPoint !== null) {
    if (!mainPoint.next) {
      let temp = tempPoint;
      mainPoint.next = temp;
      tempPoint = tempPoint.next;
      temp.next = null;
      mainPoint = mainPoint.next;
    } else if (mainPoint.val === tempPoint.val) {
      let temp = tempPoint;
      tempPoint = tempPoint.next;
      temp.next = mainPoint.next;
      mainPoint.next = temp;
      mainPoint = mainPoint.next;
    } else if (
      mainPoint.val < tempPoint.val &&
      mainPoint.next.val > tempPoint.val
    ) {
      let temp = tempPoint;
      tempPoint = tempPoint.next;
      temp.next = mainPoint.next;
      mainPoint.next = temp;
      mainPoint = mainPoint.next;
    } else {
      mainPoint = mainPoint.next;
    }
  }

  //     let test = mainPoint;
  // while(test!==null){
  //     console.log(test.val);
  //     test = test.next;
  // }

  return returnHead;
};
