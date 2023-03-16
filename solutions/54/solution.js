/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  function wrapped(cb) {
    thunk(function check(err, data) {
      if (err) {
        cb(err);
      } else if (typeof data !== 'function') {
        cb(undefined, data);
      } else {
        data(check);
      }
    });
  }
  return wrapped;
}
