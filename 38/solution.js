"use strict";

/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  let calls = [];
  let originalFunction = obj[methodName].bind(obj);
  obj[methodName] = (...args) => {
    calls.push(args);
    originalFunction(...args);
  };
  return {
    calls
  };
}
