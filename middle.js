const middle = arr => {
  let newarr = [];
  let mid = (arr.length - 1) / 2;
  if (Number.isInteger(mid)) {
    newarr.push(arr[mid]);
    return newarr;
  } else {
    mid = Math.floor(mid);
    newarr.push(arr[mid], arr[mid + 1]);
    return newarr;
  }
};

module.exports = middle;
