/**
 * @param {HTMLElement} element
 * @param {string} eventName
 * @param {boolean} capture
 * @return {Observable}
 */
function fromEvent(element, eventName, capture = false) {
  return new Observable((subscriber) => { /* eslint no-undef: off */
    element.addEventListener(eventName, (e) => {
      subscriber.next(e);
    }, capture);
  });
}
