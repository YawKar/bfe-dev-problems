/**
 * @param {number} period
 * @return {Observable}
 */
function interval(period) {
  let cur = 0;
  return new Observable((sub) => { /* eslint no-undef: off */
    setInterval(() => {
      sub.next(cur);
      cur += 1;
    }, period);
  });
}
