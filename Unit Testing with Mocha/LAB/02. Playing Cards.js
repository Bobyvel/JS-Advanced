function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };
     if (!validFaces.includes(face)){
        throw new Error("Invalid card face: " + face);
    }

    if (!validSuits.hasOwnProperty(suit)){
        throw new Error("Invalid card suit: " + suit);
    }

    return card = {
        toString: () => {
            return face + validSuits[suit]
        }
    };
    //return card;
}
console.log('' + makeCard('A', 'S'));  // A♠
console.log('' + makeCard('10', 'H')); // 10♥
console.log('' + makeCard('2', 'D'));  // 2♦
//console.log('' + makeCard('1', 'C')); // Error
//console.log('' + makeCard('4', 'W')); // Error
