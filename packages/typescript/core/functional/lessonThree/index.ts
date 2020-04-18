import _ from 'lodash/fp';

const foo = {
  name: 'Jerry',
  age: 18,
  job: {
    company: 'Branch8',
    title: 'RD',
  },
};

const setTitle = _.set(['job', 'title'], 'hello world');
const memoizeSetTitle = _.memoize(setTitle);

let data1 = setTitle(foo);
let data2 = setTitle(foo);
console.log(data1 === data2);
let data3 = memoizeSetTitle(foo);
let data4 = memoizeSetTitle(foo);
console.log(data3 === data4);

const data = [129561, 125433, 97919];

let task = _.compose(
  _.sum,
  _.map(_.compose(_.subtract(_.__, 2), _.floor, _.divide(_.__, 3))),
);

console.log(task(data));
