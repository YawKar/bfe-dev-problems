/**
 * @param {HTMLElement} el - element to be wrapped
 */
const $ = (el) => ({
  el,
  /**
         * @param {String} propertyName
         * @param {any} value
         */
  css(propertyName, value) {
    this.el.style[propertyName] = value;
    return this;
  },
});
