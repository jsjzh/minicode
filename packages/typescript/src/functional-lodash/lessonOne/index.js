"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fp_1 = tslib_1.__importDefault(require("lodash/fp"));
const match = fp_1.default.curry((reg, str) => !!str.match(reg));
const hasSpaces = match(/\s+/g);
const findSpaces = fp_1.default.filter(hasSpaces);
const noVowels = fp_1.default.replace(/[aeiou]/g);
const censored = noVowels('*');
const allCensored = fp_1.default.map(censored);
console.log(hasSpaces('string string'));
console.log(hasSpaces('string_string'));
console.log(findSpaces(['string string', 'string_string']));
console.log(censored('string hello wrold'));
console.log(allCensored(['string string', 'string_string']));
// 练习题
const words = fp_1.default.split(' ');
console.log(words('Jingle bells Batman smells'));
const sentences = fp_1.default.map(words);
console.log(sentences(['Jingle bells Batman smells', 'Robin laid an egg']));
// 这里用了上面定义的 match
// 发现 _.math 的返回值有些问题，一定会返回 []
// 但是原生的 match 可能会返回 null，也就是 falsy
const filterQs = fp_1.default.filter(match(/q/i));
console.log(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']));
const _keepHighest = (x, y) => (x >= y ? x : y);
const max = fp_1.default.reduce(_keepHighest, -Infinity);
console.log(max([323, 523, 554, 123, 5234]));
const slice = fp_1.default.curry((start, len, x) => x.slice(start, len));
console.log(slice(1)(3)(['a', 'b', 'c']));
const take = slice(0);
console.log(take(2)(['a', 'b', 'c']));
