class User{

    constructor(firstname, lastname, credit) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.credit = credit
    }

    getFullName() {
        return `${this.firstName}  ${this.lastName}.`
    }

    editName(newName) {
        const mName = newName.split(' ');
        this.firstName = mName[0];
        this.lastName = mName[1]
    }


}

const john = new User('John', 'Anderson', 34); // constructor called.
console.log(john);


console.log(john.getFullName())

john.editName('Jai Parmar')

console.log(john.getFullName()) ;

// const sammy = new User();
// console.log(sammy);


