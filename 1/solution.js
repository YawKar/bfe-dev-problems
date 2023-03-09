const curry = (func) => {
  function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  }
  return curried;
};

function fn(a, b, c) {
  return `${a}_${b}_${c}`;
}
