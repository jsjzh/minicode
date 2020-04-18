"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fp_1 = tslib_1.__importDefault(require("lodash/fp"));
const data = [
    { name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
    {
        name: 'Spyker C12 Zagato',
        horsepower: 650,
        dollar_value: 648000,
        in_stock: false,
    },
    {
        name: 'Jaguar XKR-S',
        horsepower: 550,
        dollar_value: 132000,
        in_stock: false,
    },
    { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
    {
        name: 'Aston Martin One-77',
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: true,
    },
    {
        name: 'Pagani Huayra',
        horsepower: 700,
        dollar_value: 1300000,
        in_stock: false,
    },
];
const isLastInStock = fp_1.default.compose(fp_1.default.prop('in_stock'), fp_1.default.last);
console.log(isLastInStock(data));
const nameOfFirstCar = fp_1.default.compose(fp_1.default.prop('name'), fp_1.default.head);
console.log(nameOfFirstCar(data));
const _average = (xs) => fp_1.default.reduce(fp_1.default.add, 0, xs) / xs.length;
const averageDollarValue = fp_1.default.compose(_average, fp_1.default.map(fp_1.default.prop('dollar_value')));
console.log(averageDollarValue(data));
const _underscore = fp_1.default.replace(/\W+/g, '_');
const sanitizeNames = fp_1.default.compose(fp_1.default.map(fp_1.default.compose(_underscore, fp_1.default.toLower)), fp_1.default.map(fp_1.default.prop('name')));
console.log(sanitizeNames(data));
const fomartName = fp_1.default.compose(fp_1.default.toUpper, fp_1.default.prop('name'));
const availablePrices = fp_1.default.compose(fp_1.default.join(', '), fp_1.default.map(fomartName), fp_1.default.filter(fp_1.default.prop('in_stock')));
console.log(availablePrices(data));
const fastestCar = fp_1.default.compose(fp_1.default.join(''), fp_1.default.reverse, fp_1.default.concat(' is the fastest'), fp_1.default.prop('name'), fp_1.default.last, fp_1.default.sortBy('horsepower'));
console.log(fastestCar(data));
