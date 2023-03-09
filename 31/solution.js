/**
 * @typedef {(error: Error, data: any) => void} Callback
 */

/**
 * @typedef {(callback: Callback, data: any) => void} AsyncFunc
 */

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs) {
  let finished = false;
  return (callback) => {
    const wrapCallback = (cb) => (error, data) => {
      if (finished) return;
      finished = true;
      cb(error, data);
    };

    funcs.forEach((func) => {
      func(wrapCallback(callback));
    });
  };
}
