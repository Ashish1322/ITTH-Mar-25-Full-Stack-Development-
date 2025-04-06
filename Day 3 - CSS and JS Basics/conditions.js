var age = 0;

// if-else
if (age >= 18) {
  console.log("I can Drive");
  console.log("As age is more than 18");
} else {
  console.log("I cannot Drive");
}

var number = 2;
var number2 = 10;
// if-else-ladder
if (number == 1) {
  console.log("Number is One");
} else if (number == 2) {
  console.log("Number is Two");
} else if (number == 3) {
  console.log("Number is Three");
} else if (number2 == 10) {
  console.log("Number is Four");
} else {
  console.log("Number is greater then Four");
}

// swith Block
var temp = 20;
switch (temp) {
  case 10:
    console.log("number is 10");
    break;
  case 20:
    console.log("nubmer is 20");
    break;
  case 30:
    console.log("Number is 30");
    break;
  default:
    console.log(temp);
}

/*

ADMIN
SUB-ADMIN
USER

*/
var user_role = "USER";

// if (user_role == "ADMIN") {
//   console.log("Only for admin");
//   console.log("Only for sub-admin");
//   console.log("only for user");
// } else if (user_role == "SUB-ADMIN") {
//   console.log("Only for sub-admin");
//   console.log("only for user");
// } else {
//   console.log("Invalid Role");
// }

switch (user_role) {
  case "ADMIN":
    console.log("Only for admin");
  case "SUB-ADMIN":
    console.log("Only for sub-admin");
  default:
    console.log("only for user");
}
