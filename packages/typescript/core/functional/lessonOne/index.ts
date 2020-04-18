import _ from 'lodash/fp';

const match = _.curry((reg: RegExp, str: string) => !!str.match(reg));

const hasSpaces = match(/\s+/g);
const findSpaces = _.filter(hasSpaces);
const noVowels = _.replace(/[aeiou]/g);
const censored = noVowels('*');
const allCensored = _.map(censored);

console.log(hasSpaces('string string'));
console.log(hasSpaces('string_string'));
console.log(findSpaces(['string string', 'string_string']));
console.log(censored('string hello wrold'));
console.log(allCensored(['string string', 'string_string']));

// 练习题

const words = _.split(' ');
console.log(words('Jingle bells Batman smells'));

const sentences = _.map(words);
console.log(sentences(['Jingle bells Batman smells', 'Robin laid an egg']));

// 这里用了上面定义的 match
// 发现 _.math 的返回值有些问题，一定会返回 []
// 但是原生的 match 可能会返回 null，也就是 falsy
const filterQs = _.filter(match(/q/i));
console.log(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']));

const _keepHighest = (x: number, y: number) => (x >= y ? x : y);
const max = _.reduce(_keepHighest, -Infinity);
console.log(max([323, 523, 554, 123, 5234]));

const slice = _.curry((start: number, len: number, x: any[]) =>
  x.slice(start, len),
);
console.log(slice(1)(3)(['a', 'b', 'c']));

const take = slice(0);
console.log(take(2)(['a', 'b', 'c']));
