/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
const pipe = (funcs) => (arg) => funcs.reduce((val, fn) => fn(val), arg);
