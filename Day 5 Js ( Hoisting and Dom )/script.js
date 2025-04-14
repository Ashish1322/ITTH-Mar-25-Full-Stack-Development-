// 1. Var, Let, Const

var a = 9;
var b = 20;
console.log(a + b);

// var name = "Ashish";
// var name = "Kumar;";

/* Scope
var : global, function
let, const: block scope
*/

// function temp() {
//   let age = 30;
//   if (age > 20) {
//     let age = 40;
//     console.log(age);
//   }
//   console.log(age);
// }

// temp();

var age = 30;
if (age > 10) {
  let drive = "yes";
}

console.log(drive);
