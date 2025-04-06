var numbers = [78, 90, "ashish", "web-dev", true, [7, 8]];
console.log(numbers);
// Array is : Collection of values, mutable
// console.log(numbers);
// numbers[1] = 70;
// console.log(numbers);

// push : insert element in the end of the array
// numbers.push(80);
// console.log(numbers);

// unshift : insert element in the end of the array
// numbers.unshift(false);
// console.log(numbers);

// pop : insert element in the end of the array
// numbers.pop();
// numbers.pop();
// console.log(numbers);

// shift: delete element from beginning of array
// numbers.shift();
// console.log(numbers);

// slice
// var myslice = numbers.slice(2, 5);
// console.log(myslice);

// splice
// var myslice = numbers.splice(2, 3, 67, 78, 23, 456, 45, 23, 78, 90);
// console.log(myslice);
// console.log(numbers);

var course = "weeb-development web web";
console.log(course);
console.log(course.replace("web", "web3"));
console.log(course.replaceAll("web", "web3"));
console.log(course.toUpperCase());
console.log(course.toLowerCase());
console.log(course.length);
console.log(course.startsWith("web"));
console.log(course.endsWith("eb"));
console.log(course.split(" "));

// String Methods Article: https://www.w3schools.com/js/js_string_methods.asp
// Array Methods : https://www.w3schools.com/js/js_array_methods.asp

// Objects
const users = {
  name: "Ashish",
  age: 27,
  address: {
    street: "temelf",
    country: "India",
  },
  married: false,
};
console.log(users["age"]);
console.log(users["name"]);

console.log(users.married);
console.log(users.address.country);

console.log(users.hasOwnProperty("addres"));
