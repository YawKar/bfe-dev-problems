/**
 * @param {number} num
 */
function sum(num) {
  const func = (num2) => sum(num + num2);
  func[Symbol.toPrimitive] = (type) => num;
  return func;
}
