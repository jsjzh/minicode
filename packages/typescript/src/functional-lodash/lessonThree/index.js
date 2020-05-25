"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fp_1 = tslib_1.__importDefault(require("lodash/fp"));
const foo = {
    name: 'Jerry',
    age: 18,
    job: {
        company: 'Branch8',
        title: 'RD',
    },
};
const setTitle = fp_1.default.set(['job', 'title'], 'hello world');
const memoizeSetTitle = fp_1.default.memoize(setTitle);
let data1 = setTitle(foo);
let data2 = setTitle(foo);
console.log(data1 === data2);
let data3 = memoizeSetTitle(foo);
let data4 = memoizeSetTitle(foo);
console.log(data3 === data4);
const data = [129561, 125433, 97919];
let task = fp_1.default.compose(fp_1.default.sum, fp_1.default.map(fp_1.default.compose(fp_1.default.subtract(fp_1.default.__, 2), fp_1.default.floor, fp_1.default.divide(fp_1.default.__, 3))));
console.log(task(data));
