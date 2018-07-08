function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = this.constructor.name.replace("melon", "");
            //this.constructor.name.slice(0, -"melon".length);
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);

        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
        }

        morph() {
            this.element = this.elements.shift();
            this.elements.push(this.element);
        }

    }

    return {Melon, Watermelon, Firemelon, Airmelon, Earthmelon, Melolemonmelon};
}
let Watermelon = solve().Watermelon;
let wm = new Watermelon(5, 'test');
console.log(wm.toString());

let Melolemonmelon = solve().Melolemonmelon;
let test = new Melolemonmelon(150, "Melo");
test.morph();
test.morph();

console.log(test.toString());