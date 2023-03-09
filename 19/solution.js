/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} target
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  const path = [];
  let curTarget = target;
  while (curTarget !== rootA) {
    path.push(Array.prototype.indexOf.call(curTarget.parentElement.children, curTarget));
    curTarget = curTarget.parentElement;
  }
  let curBNode = rootB;
  while (path.length > 0) {
    curBNode = curBNode.children[path.pop()];
  }
  return curBNode;
};
