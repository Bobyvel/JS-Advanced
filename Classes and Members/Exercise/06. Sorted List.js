class SortedList {
    constructor(){
        this.collection = [];
        this.size = 0;
    }
    add (element) {
        this.collection.push(element);
        this.size++;
        this.collection.sort((a, b) => a - b);
    }
    remove (index) {
        if (this._isValid(index)) {
            this.collection.splice(index, 1);
            this.size--;
        }
    }
    get (index) {
        if (this._isValid(index))
            return this.collection[index];
    }
    _isValid(index) {
        return index >= 0 && index < this.collection.length;
    }
}

let list = new SortedList();
list.add(3);
list.add(2);
list.add(1);
//console.log(list.collection);
console.log(list.size);
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
list.remove(0);
console.log(list.collection);
console.log(list.get(1));