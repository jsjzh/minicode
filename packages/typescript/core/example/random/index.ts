const createRandomCount = (limit: number) => Math.round(Math.random() * limit);
const preNumber = (num: number) => (num < 10 ? `0${num}` : String(num));

const wrapMainFun = (len: number, count: number) => {
  const arr: number[] = [];
  while (arr.length < len) {
    const result = createRandomCount(count);
    if (!arr.includes(result)) arr.push(result);
  }
  return arr;
};

type IArr = [number, number];

export default (
  [arr1Len, arr1Count]: IArr = [5, 35],
  [arr2Len, arr2Count]: IArr = [2, 12],
) =>
  [...wrapMainFun(arr1Len, arr1Count), ...wrapMainFun(arr2Len, arr2Count)].map(
    preNumber,
  );
