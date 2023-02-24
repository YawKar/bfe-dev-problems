"use strict";

/**
 * @param {HTMLElement} el - element to be wrapped
 */
const $ = el => {
    return {
        el,
        /**
         * @param {String} propertyName 
         * @param {any} value 
         */
        css(propertyName, value) {
            this.el.style[propertyName] = value;
            return this;
        }
    };
}