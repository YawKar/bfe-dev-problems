"use strict";

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
function race(funcs){
  let finished = false;
  return (callback) => {
    const wrapCallback = callback => (error, data) => {
      if (finished) return;
      finished = true;
      callback(error, data);
    }
    
    funcs.forEach(func => {
      func(wrapCallback(callback));
    })
  }
}

