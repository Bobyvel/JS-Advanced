function ballons() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = +gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbon = {color: ribbonColor, length: +ribbonLength};
        }

        get ribbon() {
            return this._ribbon;
        }
        set ribbon(value){
           this._ribbon = value;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text() {
            return this._text;
        }
        set text(value){
            this._text = value;
        }
    }

    return {Balloon, PartyBalloon, BirthdayBalloon};
}

let classes = ballons();
let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
console.log(test);