Array.prototype.concatAll = function () {
  const results = [];
  this.forEach((subArray) => results.push.apply(results, subArray));
  return results;
};

Array.prototype.concatMap = function (mapCallbck) {
  return this.map((item) => mapCallbck(item)).concatAll();
};

Array.prototype._reduce = function (combiner, initialValue) {
  let counter, accumulatedValue;
  if (this.length === 0) {
    return this;
  } else {
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    } else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    } else {
      throw new Error('Invalid arguments.');
    }
    while (counter < this.length) {
      accumulatedValue = combiner(
        accumulatedValue,
        this[counter],
        counter,
        this,
      );
      counter++;
    }
    return [accumulatedValue];
  }
};
