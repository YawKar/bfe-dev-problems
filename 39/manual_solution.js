"use strict";

/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  return {
    [Symbol.iterator]: () => ({
      next: () => {
        let result = {
          value: from > to ? undefined : from,
          done: from > to
        };
        from++;
        return result;
      }
    })
  };
}
