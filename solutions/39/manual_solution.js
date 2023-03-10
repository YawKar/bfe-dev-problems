/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
  let fromCounter = from;
  return {
    [Symbol.iterator]: () => ({
      next: () => {
        const result = {
          value: fromCounter > to ? undefined : fromCounter,
          done: fromCounter > to,
        };
        fromCounter += 1;
        return result;
      },
    }),
  };
}
