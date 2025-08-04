import { ListNode } from './utils';

// necessary part of solution so this copy stays here
function getLast(node: ListNode): ListNode {
  let copyNode = node;
  while (copyNode.next) {
    copyNode = copyNode.next;
  }

  return copyNode;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode(); // dummy head. Will return head's next as result.
  let l1Node = l1;
  let l2Node = l2;
  let carry = 0;

  while (l1Node || l2Node) {
    if (l1Node && l2Node) {
      let addition = l1Node.val + l2Node.val + carry;
      carry = 0;

      if (addition > 9) {
        let lastNode = getLast(result);
        let splitAdd = addition.toString().split('');
        lastNode.next = new ListNode(parseInt(splitAdd[1]));
        carry = parseInt(splitAdd[0]);
      } else {
        let lastNode = getLast(result);
        lastNode.next = new ListNode(addition);
      }
    } else if (l1Node) {
      let addition = l1Node.val + carry;
      carry = 0;
      if (addition > 9) {
        let lastNode = getLast(result);
        let splitAdd = addition.toString().split('');
        lastNode.next = new ListNode(parseInt(splitAdd[1]));
        carry = parseInt(splitAdd[0]);
      } else {
        let lastNode = getLast(result);
        lastNode.next = new ListNode(addition);
        carry = 0;
      }
    } else if (l2Node) {
      let addition = l2Node.val + carry;
      carry = 0;
      if (addition > 9) {
        let lastNode = getLast(result);
        let splitAdd = addition.toString().split('');
        lastNode.next = new ListNode(parseInt(splitAdd[1]));
        carry = parseInt(splitAdd[0]);
      } else {
        let lastNode = getLast(result);
        lastNode.next = new ListNode(addition);
        carry = 0;
      }
    }
    l1Node = l1Node?.next as ListNode | null;
    l2Node = l2Node?.next as ListNode | null;
  }

  if (carry) {
    let lastNode = getLast(result);
    lastNode.next = new ListNode(carry);
  }

  return result.next;
}
