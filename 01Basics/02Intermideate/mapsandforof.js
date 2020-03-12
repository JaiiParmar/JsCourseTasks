var john = {
  name: `i am john`,
  age: 22,
  isActive: true
};

var marry = {
  name: `i am marry`,
  age: 44,
  isActive: true
};

var sam = {
  name: `i am sam`,
  age: 29,
  isActive: false
};

let users = new Map();

users.set("john", john);
users.set("marry", marry);
users.set("sam", sam);

// console.log(users.get("john"));
//iterable

// console.log(`size of the users is : ${users.size}`);

// const keys = users.keys();

// console.log(keys);

// const values = users.values();

// console.log(values);

// console.log(users);

// console.log(typeof users);

// for (const key of users.keys()) {
//   console.log(key);
// }

// for (const value of users.values()) {
//   console.log(value.age);
// }

// for (const [kye, value] of users.entries()) {
//   console.log(kye + " =====" + value.name);
// }

//convert the above line to literals.

users.forEach(user => {
  console.log(user.name);
});

//Always use for of loop.
users.forEach((value, key) => {
  console.log(key + " ---> " + value.name);
});

var arrOfArr = [
  ["one", "1"],
  ["two", "2"],
  ["three", "3"]
];

var mMap = new Map(arrOfArr);

console.log(mMap);

for (const val of mMap) {
  console.log(val);
}
