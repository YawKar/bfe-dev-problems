"use strict";

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} target
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    let path = [];
    while (target !== rootA) {
        path.push(Array.prototype.indexOf.call(target.parentElement.children, target));
        target = target.parentElement;
    }
    while (path.length > 0) {
        rootB = rootB.children[path.pop()];
    }
    return rootB;
}
