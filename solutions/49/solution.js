/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target) {
  let left = 0;
  let right = arr.length;
  while (right - left > 1) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] <= target) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return arr[left] === target ? left : -1;
}
