
const student = {
    name:"John",
    age:23,
    isActive:true,
}

//convert this object into a string to be stored in local Storage.

const studentObjToString = JSON.stringify(student);

console.log(studentObjToString);

console.log(typeof studentObjToString);

localStorage.setItem('student1', studentObjToString);

const toJsonStudent = JSON.parse(studentObjToString);

console.log(typeof toJsonStudent);
console.log(toJsonStudent);

const lclJsonStud = JSON.parse(localStorage.getItem('student1'))

console.log(typeof lclJsonStud);

console.log(lclJsonStud.age);


