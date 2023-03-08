"use strict";

/**
 * @param {integer} from
 * @param {integer} to
 */
function* range(from, to) {
  for (let i = from; i <= to; ++i) {
    yield i;
  }
}
