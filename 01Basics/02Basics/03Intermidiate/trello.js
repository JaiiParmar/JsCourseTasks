// const days = ['mon', 'tue', 'wed', 'Thr', 'Fri', 'Sat']

// console.log(days)

// days.forEach(function (day, index) {
//     console.log(`start with ${index+1} -- ${day}`);
// })

// for (let index = 0; index < days.length; index++) {
//      console.log(days[index]);

// }

const myTodos = [];

myTodos.push("buy Bread");

myTodos.push("Record Videos");

myTodos.push("Go to Gym");

myTodos.forEach(function(todo, index) {
  console.log(`Your task No. ${index + 1} is : ${todo}`);
});

const my2do = [];
my2do.unshift("SE Assigment");
my2do.unshift("C++ Assignment");
my2do.unshift("Java Assignment");

for (index = 0; index < my2do.length; index++) {
  console.log(my2do[index]);
}
