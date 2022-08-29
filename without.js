// without function
const without = (arr, del) => arr.filter(element => !del.includes(element));

module.exports = without;

//  const newarr = [];
//  const finallArr = [];
//  arr.forEach((element ) => {
//    del.forEach((e) => {
//     if(element !== e && element !== newarr[0]){
//       newarr.push(element)
//     }
//    });
//  });
//  for( let i = 0; i < newarr.length; i++){
//     if(newarr[i] !== newarr[i - 1]){
//       finallArr.push(newarr[i])
//     }

//  }
//  console.log( finallArr)

// array.prototyper.filter // .includes

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
