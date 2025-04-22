// Task : To have a private variable which belongs to a funciton but accessible globally

// 1. Sol
//var counter = 0;
// function increaseCounter() {
//   counter = counter + 1;
// }
// increaseCounter();
// increaseCounter();
// increaseCounter();
// counter += 1;
// console.log(counter);

// 2. Sol
// function increaseCounter() {
//   let counter = 0;
//   counter = counter + 1;
//   return counter;
// }

// increaseCounter();
// increaseCounter();
// let result = increaseCounter();
// console.log(result);

// 3 . Sol
function increaseCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

var add = increaseCounter();
console.log(add());
