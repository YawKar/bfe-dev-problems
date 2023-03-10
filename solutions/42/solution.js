/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        arr.splice(i, arr.length - i, arr[j], ...arr.slice(i, j), ...arr.slice(j + 1));
      }
    }
  }
}
