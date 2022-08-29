// FUNCTION IMPLEMENTATION

const tail = arr => {
  let nwarr = [];
  for (let i = 1; i < arr.length; i++) {
    nwarr.push(arr[i]);
  }
  return nwarr;
};

module.exports = tail;
