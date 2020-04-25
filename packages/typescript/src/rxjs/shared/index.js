"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatAll = (arr) => {
    let result = [];
    arr.forEach((array) => result.push.apply(result, array));
    return result;
};
