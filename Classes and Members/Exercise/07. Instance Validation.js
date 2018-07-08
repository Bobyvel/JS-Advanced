class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._clientId
    }

    set clientId(value) {
        let regex = /^\d{6}$/;
        if (!regex.test(value)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let regex = /[a-zA-Z0-9]@[a-zA-Z\.]+/;
        if (!regex.test(value)) {
            throw new TypeError('Invalid e-mail');
        }
        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let namePart = "First";
        this._checkName(value, namePart);
        this._firstName = value
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        let namePart = "Last";
        this._checkName(value, namePart);
        this._lastName = value;
    }

    _checkName(value, namePart) {
        let regex1 = /^[a-zA-Z]+$/g;
        let regex2 = /^.{3,20}$/g;
        if (!regex1.test(value)) {
            throw new TypeError(`${namePart} name must contain only Latin characters`);
        }
        if (!regex2.test(value)) {
            throw new TypeError(`${namePart} name must be between 3 and 20 characters long`);
        }
    }
}

// let acc = new CheckingAccount('131400', 'ivan@some.com', 'Ivan', 'Petrov');
// console.log(acc.clientId);
// let acc1 = new CheckingAccount('131455', 'ivan@dd', 'Ivan', 'Petrov');
// console.log(acc1.email);
// let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'Ivvvv', 'Petrov');
// console.log(acc2.firstName);
let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'an', 'P3trov');
console.log(acc3.lastName);