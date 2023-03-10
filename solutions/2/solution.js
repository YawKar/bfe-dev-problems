const curry = (fn) => {
  function curried(...args) {
    const newArgs = args.slice(0, fn.length);
    if (newArgs.length === fn.length && !newArgs.some((val) => val === curry.placeholder)) {
      return fn(...newArgs);
    }
    return (...funcArgs) => {
      const performedArgs = funcArgs.slice(0, fn.length);
      const result = [];
      newArgs.forEach((val) => {
        if (val === curry.placeholder) {
          result.push(performedArgs.shift());
        } else {
          result.push(val);
        }
      });
      result.push(...performedArgs);
      return curried(...result);
    };
  }
  return curried;
};

curry.placeholder = Symbol('Placeholder _');
