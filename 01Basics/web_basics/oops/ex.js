
class Student{

    constructor(id = 1, name = "jai", age = 34, phone = 9090909, address = "mumbai") {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
    constructor() {

    }
    get name(){return this.name}

    get id() { return this.id }

    get age() { return this.age }

    get phone() { return this.phone }

    get address() { return this.address }

    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setAge(age) {
        this.age = age;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    setAddress(address) {
        this.address = address;
    }
    show() {
        return `
            id : ${this.id}
            name : ${this.name}
            age : ${this.age}
            phone : ${this.phone}
            address : ${this.address}
            `
    }

}

const jai = new Student()


console.log(jai);


console.log(jai.show());


jai.setAge(20)

console.log(jai.show());


console.log(jai.name);



