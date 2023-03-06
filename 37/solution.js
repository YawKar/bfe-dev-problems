"use strict";

/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target){
  let l = -1;
  let r = arr.length - 1;
  while (r - l > 1) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] >= target) {
      r = m;
    } else {
      l = m;
    }
  }
  return arr[r] === target ? r : -1;
}

