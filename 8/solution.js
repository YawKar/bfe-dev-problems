/**
 * Fisher-Yates shuffle algorithm
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > -1; i -= 1) {
    const randIndx = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randIndx]] = [arr[randIndx], arr[i]];
  }
}
