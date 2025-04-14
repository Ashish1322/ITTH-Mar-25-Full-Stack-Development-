/*
1. Short way to create a functions
2. Mainly used to define callback functions
*/

var addiotnFunction = (a, b) => {
  // all logic
  console.log(a + b);
};

// Variable is holding a arrow function
addiotnFunction(4, 5);

// IIFE ( Immediately Invoked Funtion Expressions)
((age) => {
  if (age > 18) {
    console.log("Dirve");
  } else {
    console.log("Cannot Drive");
  }
})(20);
