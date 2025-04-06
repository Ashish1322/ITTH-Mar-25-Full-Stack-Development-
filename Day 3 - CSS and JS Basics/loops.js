// for loop

// for (var i = 1; i <= 5; i = i + 1) {
//   console.log("Hi");
// }

// var number = 5;
// for (var index = 1; index <= 10; index += 1) {
//   if (index == 5) {
//     continue;
//   }
//   console.log(number, "X", index, "=", number * index);
// }

// var index = 1;
// while (index <= 10) {
//   console.log(number, "X", index, "=", number * index);
//   index += 1;
// }

// var start = 5;
// while (start >= 0) {
//   if (start == 3) {
//     start -= 1;
//     continue;
//   }
//   start -= 1;
// }

// for of Only for Array : Traverse over array
// var a = [5, 3, "hello", "dsflsfd"];
// for (var item of a) {
//   console.log(item);
// }

// for in Loop: Only Meant for object
var marks = {
  maths: 34,
  sciene: 80,
  phsyics: 90,
  computer: 23,
};
for (var item in marks) {
  console.log(item, marks[item]);
}
