"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRandomCount = (limit) => Math.round(Math.random() * limit);
const wrapMainFun = (len, count) => {
    const arr = [];
    while (arr.length < len) {
        const result = createRandomCount(count);
        if (!arr.includes(result))
            arr.push(result);
    }
    return arr;
};
const fixCount = (num) => (num < 10 ? `0${num}` : String(num));
exports.default = ([arr1Len, arr1Count] = [5, 35], [arr2Len, arr2Count] = [2, 12]) => {
    return [
        ...wrapMainFun(arr1Len, arr1Count),
        ...wrapMainFun(arr2Len, arr2Count),
    ].map(fixCount);
};
