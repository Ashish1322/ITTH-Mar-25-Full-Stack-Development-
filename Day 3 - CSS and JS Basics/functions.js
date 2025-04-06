// Function with No Arguments
// function printMultiplicationTable() {
//   var number = 5;
//   for (var i = 1; i <= 10; i += 1) {
//     console.log(number, "X", i, "=", number * i);
//   }
// }

// Function with arguments and default argument
// function printMultiplicationTable(number = 10) {
//   for (var i = 1; i <= 10; i += 1) {
//     console.log(number, "X", i, "=", number * i);
//   }
// }

// function printMultiplicationTable(number, start, end) {
//   for (var i = start; i <= end; i += 1) {
//     console.log(number, "X", i, "=", number * i);
//   }
//   return 10;
// }

// var result = printMultiplicationTable(5, 1, 5);
// console.log(result);

// Higher Order Functions : IMP 93%

// callback
function sayHi() {
  console.log("Hi");
}

// callback
function sayHello() {
  console.log("Hello");
}
// Higer Order Function : Which takes another funtions in their argument
function sayHiAndHello(first, second) {
  first();
  second();
}

sayHiAndHello(sayHi, sayHello);
