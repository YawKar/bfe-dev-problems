/**
 * @param {integer} from
 * @param {integer} to
 */
function* range(from, to) {
  for (let i = from; i <= to; i += 1) {
    yield i;
  }
}
