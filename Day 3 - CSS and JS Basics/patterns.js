var rows = 5;
// 1
// 22
// 333
// 4444
// for (var i = 1; i <= rows; i += 1) {
//   var result = "";
//   for (var j = 1; j <= i; j += 1) {
//     result += i;
//   }
//   console.log(result);
// }

// 1;
// 12;
// 123;
// 1234;
// 12345;

// for (var i = 1; i <= rows; i += 1) {
//   var result = "";
//   for (var j = 1; j <= i; j += 1) {
//     result += j;
//   }
//   console.log(result);
// }

// var count = 1;
// for (var i = 1; i <= rows; i += 1) {
//   var result = "";
//   for (var j = 1; j <= i; j += 1) {
//     result += count;
//     count += 1;
//   }
//   console.log(result);
// }

// for (var i = 1; i <= rows; i += 1) {
//   var result = "";
//   for (var j = i; j >= 1; j -= 1) {
//     result += j;
//   }
//   console.log(result);
// }

for (var row = 1; row <= 5; row += 1) {
  let result = "";
  let count = 1;
  for (var col = 1; col <= 5; col += 1) {
    if (col <= 5 - row) {
      result += " ";
    } else {
      result += count;
      count += 1;
    }
  }
  console.log(result);
}
