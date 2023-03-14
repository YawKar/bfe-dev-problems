/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target) {
  let left = -1;
  let right = arr.length - 1;
  while (right - left > 1) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] >= target) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return right === 0 ? undefined : arr[right - 1];
}
