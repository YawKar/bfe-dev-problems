class NodeStore {
  constructor() {
    this.mark = Symbol('NodeStore marker');
  }

  /**
    * @param {Node} node
    * @param {any} value
    */
  set(node, value) {
    node[this.mark] = value;
  }

  /**
    * @param {Node} node
    * @return {any}
    */
  get(node) {
    return node[this.mark];
  }

  /**
    * @param {Node} node
    * @return {Boolean}
    */
  has(node) {
    return this.mark in node;
  }
}
