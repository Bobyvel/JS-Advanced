function getPerson() {

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

    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ];


}

console.log(getPerson());
getPerson().forEach(person => console.log(person.toString()));