/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementAfter(arr, target) {
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
  return arr[left] === target && left < arr.length - 1 ? arr[left + 1] : undefined;
}
