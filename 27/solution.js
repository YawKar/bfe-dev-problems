"use strict";

function completeAssign(target, ...sources) {
    let o = Object.assign(target, ...sources);
    for (let source of sources) {
        if (source === null || source === undefined) continue;
        let descriptors = Object.getOwnPropertyDescriptors(source);
        for (let prop in descriptors) {
            Object.defineProperty(o, prop, descriptors[prop]);
        }
        let symbols = Object.getOwnPropertySymbols(source);
        for (let sym of symbols) {
            Object.defineProperty(o, sym, Object.getOwnPropertyDescriptor(source, sym));
        }
    }
    return o;
}

