const curry = (fn) => {
    function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...moreArgs) => curried(...args, ...moreArgs);
        }
    }
    return curried;
};

function fn(a, b, c) {
    return `${a}_${b}_${c}`;
}

const curried = curry(fn);

console.log(curried(54, 2, 1));