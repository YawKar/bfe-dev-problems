"use strict";

/**
 * @param {number} num
 */
function sum(num) {
    let func = num2 => {
        return sum(num + num2);
    }
    func[Symbol.toPrimitive] = type => num;
    return func;
}

