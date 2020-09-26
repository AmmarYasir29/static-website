const _ = {
  clamp: function (number, lower, upper) {
    let lowerClampedValue = Math.max(lower, number);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange: function (number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let swap = start;
      start = end;
      end = swap;
    }
    if (number >= start && number < end) return true;
    return false;
  },

  words: function (str) {
    return str.split(" ");
  },

  pad: function (str, num) {
    const length = str.length;
    if (length >= num) return str;
    else {
      const total = num - length;
      let startPad = Math.floor(total / 2);
      let endPad = total - startPad;
      let paddedString = " ";
      return paddedString.repeat(startPad) + str + paddedString.repeat(endPad);
    }
  },

  has: function (obj, path) {
    if (obj[path] === undefined) return false;
    return true;
  },

  invert: function (obj) {
    let inverted = {};
    let keyinverted;
    for (let key in obj) {
      keyinverted = obj[key];
      inverted[keyinverted] = key;
    }
    return inverted;
  },

  findKey: function (obj, fun) {
    for (let key in obj) {
      if (fun(obj[key])) return key;
    }
    return undefined;
  },

  drop: function (arr, num) {
    if (num === undefined) num = 1;
    return arr.slice(num);
  },

  dropWhile: function (arr, fun) {
    let dropNumber = arr.findIndex(function (ele, index) {
      return !fun(ele, index, arr);
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
  },

  chunk: function (arr, number) {
    if (number === undefined) number = 1;
    let newarr = [];
    for (let i = 0; i < arr.length; i += number) {
      let chunk = arr.slice(i, i + number);
      newarr.push(chunk);
    }
    return newarr;
  },
};
