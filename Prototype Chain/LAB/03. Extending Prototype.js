function classes() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }

    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }

    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }


    return {Person, Teacher, Student};
}

let result = classes();
let Person = result.Person;
let Teacher = result.Teacher;
let Student = result.Student;

let p = new Person("Maria", "maria@gmail.com");
let t = new Teacher("Ivan", "iv@yahoo.com", "PHP");
let s = new Student("Ana", "ana@mail.ru", 3);

// for judge
function extendPrototype(Class) {
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
extendPrototype(Person);
console.log(p.toSpeciesString());
console.log(t.toSpeciesString());
console.log(s.toSpeciesString());