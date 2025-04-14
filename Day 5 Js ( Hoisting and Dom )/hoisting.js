// Definiton : Hoisting in Js is the default bheaviour under which all the variables and functions declarations are moved to the top of current scope
// var : Are only hoisted
// let, const : They are not hoisted ( TDZ )

console.log(a);
var a = 20;

// AFter hoisting
var a;
console.log(a);
a = 20;

temp();
function temp() {
  console.log("HI");
}

// after hoisting
function temp() {
  console.log("HI");
}
temp();

// Q1:
console.log(teddy);
var teddy = "bear";

// Q2:
var temp = "hi";
function display() {
  console.log(temp);
  var temp = "bye";
}
display();
// After hoisting

var temp;
temp = "hi";
function display() {
  var temp;
  console.log(temp);
  temp = "bye";
}

display();
