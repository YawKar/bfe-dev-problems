/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  const calls = [];
  const originalFunction = obj[methodName].bind(obj);
  obj[methodName] = (...args) => {
    calls.push(args);
    originalFunction(...args);
  };
  return {
    calls,
  };
}
