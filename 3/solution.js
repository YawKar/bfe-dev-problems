
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) {
        return arr;
    } else if (depth === 1) {
        let result = [];
        arr.forEach(val => {
            if (Array.isArray(val)) {
                val.forEach(val => result.push(val));
            } else {
                result.push(val);
            }
        });
        return result;
    } else {
        let result = [];
        arr.forEach(val => {
            if (Array.isArray(val)) {
                flat(val, depth - 1).forEach(val => result.push(val));
            } else {
                result.push(val);
            }
        });
        return result;
    }
}
  