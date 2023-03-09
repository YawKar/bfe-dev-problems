/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  for (let i = 0; i < items.length; i += 1) {
    while (newOrder[i] !== i) {
      const otherItem = items[newOrder[i]];
      const otherIdx = newOrder[newOrder[i]];
      items[newOrder[i]] = items[i];
      newOrder[newOrder[i]] = newOrder[i];
      items[i] = otherItem;
      newOrder[i] = otherIdx;
    }
  }
}

const A = ['A', 'B', 'C', 'D', 'E', 'F'];
const B = [1, 5, 4, 3, 2, 0];

sort(A, B);
