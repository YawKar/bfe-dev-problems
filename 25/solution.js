"use strict";

/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
    for (let i = 0; i < items.length; ++i) {
        while (newOrder[i] !== i) {
            let otherItem = items[newOrder[i]];
            let otherIdx = newOrder[newOrder[i]];
            items[newOrder[i]] = items[i];
            newOrder[newOrder[i]] = newOrder[i];
            items[i] = otherItem;
            newOrder[i] = otherIdx;
        }
    }       
}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]

sort(A, B);
