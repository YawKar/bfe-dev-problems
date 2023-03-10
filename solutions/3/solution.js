// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  if (!Array.isArray(arr)) {
    return arr;
  } if (depth === 1) {
    const result = [];
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        val.forEach((v) => result.push(v));
      } else {
        result.push(val);
      }
    });
    return result;
  }
  const result = [];
  arr.forEach((val) => {
    if (Array.isArray(val)) {
      flat(val, depth - 1).forEach((v) => result.push(v));
    } else {
      result.push(val);
    }
  });
  return result;
}
