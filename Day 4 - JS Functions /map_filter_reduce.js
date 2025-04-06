var a = [1, 2, 3, 4, 5, 566, 9, 3, 17];

// Q1: Filter the even elemtns from the array
// Normal Way
// var even = [];
// for (var i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     even.push(a[i]);
//   }
// }

// ************** FILTER ********** //
// callback
// function even(item, index) {
//   if (item % 2 == 0) {
//     return item;
//   }
// }
// var result = a.filter(even);
// console.log(result);

// ************** MAP ********** //
// function multiplyByTen(item, index) {
//   return item * 10;
// }

// var result = a.map(multiplyByTen);
// console.log(result);

// ************** Reduce ********** //
// function addSum(item, prev) {
//   return item + prev;
// }

// var result = a.reduce(addSum);
// console.log(result);

function printData() {
  console.log("Hey , code is running");
  console.log("Hey i am doing something");
}
// **************** Interval *************
var intervalId = setInterval(printData, 2000);

function remove() {
  clearInterval(intervalId);
}

setTimeout(remove, 10000);

// **************** Timeout *************
// setTimeout(printData, 5000);
