"use strict";

class NodeStore {

    constructor() {
        this.map = {};
    }

    /**
    * @param {Node} node
    * @param {any} value
    */
   set(node, value) {
    const pathRepr = this.makePath(node);
    this.map[pathRepr] = value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    const pathRepr = this.makePath(node);
    return this.map[pathRepr];
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
    const pathRepr = this.makePath(node); 
    return pathRepr in this.map;
   }

   /**
    * Returns something like XPath for the given node
    * @param {Node} node
    */
   makePath(node) {
    let path = "";
    while (node) {
        path = node.nodeName + (node.parentNode ? Array.from(node.parentNode.childNodes).indexOf(node) : '') + path;
        node = node.parentNode;
    }
    return path;
   }
 }