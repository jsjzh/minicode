import _ from 'lodash/fp';

type DataItem = {
  name: string;
  horsepower: number;
  dollar_value: number;
  in_stock: boolean;
};

const data: DataItem[] = [
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

const isLastInStock = _.compose(_.prop('in_stock'), _.last);
console.log(isLastInStock(data));

const nameOfFirstCar = _.compose(_.prop('name'), _.head);
console.log(nameOfFirstCar(data));

const _average = (xs: any[]) => _.reduce(_.add, 0, xs) / xs.length;
const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));
console.log(averageDollarValue(data));

const _underscore = _.replace(/\W+/g, '_');
const sanitizeNames = _.compose(
  _.map(_.compose(_underscore, _.toLower)),
  _.map(_.prop('name')),
);
console.log(sanitizeNames(data));

const fomartName = _.compose(_.toUpper, _.prop('name'));
const availablePrices = _.compose(
  _.join(', '),
  _.map(fomartName),
  _.filter(_.prop('in_stock')),
);
console.log(availablePrices(data));

const fastestCar = _.compose(
  _.join(''),
  _.reverse,
  _.concat(' is the fastest'),
  _.prop('name'),
  _.last,
  _.sortBy('horsepower'),
);
console.log(fastestCar(data));
