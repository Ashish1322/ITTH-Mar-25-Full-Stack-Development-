// this keyword which refers to the current object
// Article : https://www.w3schools.com/js/js_this.asp

var student = {
  name: "Ashsih",
  age: 30,
  fullName: function () {
    return this.name + "Kumar";
  },
};

// student.fullName()

// var temp = student.fullName;
// console.log(temp());

// this -> Inside a regular funciton this keyword always points to the object who is calling it
// in the global scope or in an arrow function this always points to global scope

// CALL BIND And APLLY : THese are 3 method which are used to modify the behaviour of this keyword
var obj1 = {
  name: "Ashish",
  age: 21,
  giveName: function () {
    return this.name + " " + this.age;
  },
};

var obj2 = {
  name: "Mahesh",
  age: 24,
};

// console.log(obj1.giveName.call(obj2));
var a = obj1.giveName.bind(obj2);
console.log(a());

// Call will directly call your funtion
// Bind will retrun you a fucntion to call later
