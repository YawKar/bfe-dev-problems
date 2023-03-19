/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  if (tree.childElementCount === 0) {
    return [tree.tagName.toLowerCase()];
  }
  const nonUniqueTags = Array.from(tree.children)
    .map((child) => getTags(child))
    .reduce((res, val) => [...res, ...val]);
  nonUniqueTags.push(tree.tagName.toLowerCase());
  return [...new Set(nonUniqueTags)];
}
