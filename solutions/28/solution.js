window[Symbol.for('native-set-timeout')] = window.setTimeout;
window.setTimeout = (func, delay, ...args) => {
  if (!(Symbol.for('all-timeout-ids') in window)) {
    window[Symbol.for('all-timeout-ids')] = new Set();
  }
  const timeoutID = window[Symbol.for('native-set-timeout')](func, delay, ...args);
  window[Symbol.for('all-timeout-ids')].add(timeoutID);
  return timeoutID;
};
window[Symbol.for('native-clear-timeout')] = window.clearTimeout;
window.clearTimeout = (timeoutID) => {
  window[Symbol.for('native-clear-timeout')](timeoutID);
  if (!(Symbol.for('all-timeout-ids') in window)) {
    window[Symbol.for('all-timeout-ids')] = new Set();
  }
  window[Symbol.for('all-timeout-ids')].delete(timeoutID);
};

/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  for (const timeoutID of window[Symbol.for('all-timeout-ids')].values()) {
    window.clearTimeout(timeoutID);
  }
}
