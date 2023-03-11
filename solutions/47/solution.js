/**
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = (list) => {
  let current = list;
  let { next } = list;
  current.next = undefined;
  while (next) {
    const tmp = next.next;
    next.next = current;
    current = next;
    next = tmp;
  }
  return current;
};
