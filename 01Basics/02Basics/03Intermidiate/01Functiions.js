// // let name = 'John'

// //     let sayHello = function () {
// //     console.log("Hello");
// // }

// // sayHello()

// // let fullNameMaker = function(fname, lname){
// //     return fname +' '+lname
// // }

// // let fname = 'jai'

// // let lname = 'parmar'

// // let fullName = fullNameMaker(fname, lname)
// // console.log(fullName)

// const numbers = ["one", "two", "three", "four", "five", "six"];

// numbers[1] = "something";

// console.log(numbers);

// //start
// //number shirt
// let x = numbers.shift();

// console.log(x);

// console.log(numbers);

// numbers.unshift("anything");

// console.log(numbers);

// //end

// console.log(numbers.pop());

// numbers.push("manish");

// console.log(numbers);

// //middle

// numbers.splice(2, 3 , "hahaha");

let myAdder = function(num1, num2) {
  let added = num1 + num2;
  return added;
};

let myMultiplier = function(num1, num2) {
  let added = num1 * num2;
  return added;
};

let guestUser = function(name, courseCount) {
  return "Hello " + name + " and your course count is " + courseCount;
};

console.log(guestUser(null, null));
