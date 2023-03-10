/**
 * @param {number[]} arr
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
}
