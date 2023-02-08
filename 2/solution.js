
const curry = (fn) => {
    function curried(...args) {
        let newArgs = args.slice(0, fn.length);
        if (newArgs.length === fn.length && !newArgs.some(val => val === curry.placeholder)) {
            return fn(...newArgs);
        } else {
            return (...args) => {
                let performedArgs = args.slice(0, fn.length);
                let result = [];
                newArgs.forEach(val => {
                    if (val === curry.placeholder) {
                        result.push(performedArgs.shift());
                    } else {
                        result.push(val);
                    }
                });
                result.push(...performedArgs);
                return curried(...result);
            }
        }
    }
    return curried;
};


curry.placeholder = Symbol();