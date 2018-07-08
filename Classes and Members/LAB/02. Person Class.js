class Person {
    constructor(fName, lName, age, mail){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.email = mail;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(person.toString());
console.log(person);
