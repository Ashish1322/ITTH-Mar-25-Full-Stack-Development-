// Print Statements
console.log("Hello, This is a print statement in js");
console.log("I am testing this");
console.log("Let's learn more");

// Variables
var age = 18;
var weight = 30;
console.log("Age is ", age);
/* Rules to define a name of variable
1. Not start from a Number
2. A-Z, a-z, 0-9, _ , $ : These are the only allowd chars in the variable name
3. Keyword are not allowd as variable name */

// Datatypes ( numbers, strings, boolean)
var first = -98.3434;
var name = "Ashsih dsfdsf dsf";
var married = false;
console.log(first, name, married);
console.log(typeof name);

// Opetrators

// 1. Arithmatic operators
var a = 10;
var b = 20;
var c = 30;
console.log(a + b - c, a - b, a * b, a / b, a ** 2);

// 2. Comparison Operatrs
var num1 = 30;
var num2 = 40;
// <, >, <=, >=, !=, ==, ===
console.log(num1 < num2);
console.log(num1 != num2);
var first = 1;
var second = "1";
console.log(first == second);
console.log(first === second); // strict comparison

// 3. Logical Operators ( AND &&, OR || , NOT !)
var age = 18;
var gender = "male";
// DRIVE: If age is more than 18 and female then only drive
var canIDrive = age >= 18 || gender == "female";
console.log("Can i drive", canIDrive);
console.log(!true);
