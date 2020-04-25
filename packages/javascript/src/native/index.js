const map = (arr, fn) =>
  arr.reduce((pre, curr, index, _arr) => [...pre, fn(curr, index, _arr)], []);

const filter = (arr, fn) =>
  arr.reduce(
    (pre, curr, index, _arr) => (fn(curr, index, _arr) ? [...pre, curr] : pre),
    [],
  );

const forEach = (arr, fn) =>
  arr.reduce(
    (pre, curr, index, _arr) => (fn(curr, index, _arr), undefined),
    [],
  );

const find = (arr, fn) => {
  let isFind = false;
  return arr.reduce((pre, curr, index, _arr) => {
    if (isFind) return pre;
    else {
      flag = fn(curr, index, _arr);
      if (flag) {
        isFind = flag;
        return curr;
      } else {
        return pre;
      }
    }
  }, []);
};

const findIndex = (arr, fn) => {
  let isFind = false;
  return arr.reduce((pre, curr, index, _arr) => {
    if (isFind) return pre;
    else {
      flag = fn(curr, index, _arr);
      if (flag) {
        isFind = flag;
        return index;
      } else {
        return pre;
      }
    }
  }, []);
};

console.log(map([1, 2, 3, 4, 5], (x) => x * 2));
console.log(filter([1, 2, 3, 4, 5], (x) => true));
// console.log(forEach([1, 2, 3, 4, 5], console.log));
console.log(find([1, 2, 3, 4, 5], (x) => x === 3));
console.log(findIndex([1, 2, 3, 4, 5], (x) => x === 3));

// every
// filter
// find
// findIndex
// forEach
// map
// reduce
// reduceRight
// some
// sort

// concat
// copyWithin
// entries
// fill
// flat
// flatMap
// includes
// indexOf
// join
// keys
// lastIndexOf
// pop
// push
// reverse
// shift
// slice
// splice
// toLocaleString
// toSource
// toString
// unshift
// values
