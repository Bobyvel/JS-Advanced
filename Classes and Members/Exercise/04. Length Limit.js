class Stringer {
    constructor(string, lengh){
        this.innerString = string;
        this.innerLength = lengh;
}
     increase(length){
        this.innerLength += length;
    }

     decrease(length){
         this.innerLength = this.innerLength - length < 0 ? 0 : this.innerLength - length;

    }
    toString(){
       if (this.innerLength < this.innerString.length) {
            return this.innerString.slice(0, this.innerLength) + '...'
        }

        return this.innerString;


    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test
test.increase(0);
test.decrease(3);
console.log(test.toString()); //Te...

