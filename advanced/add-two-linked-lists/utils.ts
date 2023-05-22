// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getLast(node: ListNode): ListNode {
  let copyNode = node;
  while (copyNode.next) {
    copyNode = copyNode.next;
  }

  return copyNode;
}

/**
 * function to create singly linked list so you can test inputs
 * @param input - an arry of numbers to use as value for the Node
 * @returns ListNode | null
 */
function createSinglyLinkedList(input: number[]): ListNode | null {
  if (!input.length) {
    return null;
  }

  let head = new ListNode(); // dummy node, we'll return the node's next
  for (let i = 0; i < input.length; i++) {
    let tail = getLast(head);
    tail.next = new ListNode(input[i]);
  }
  return head.next;
}
