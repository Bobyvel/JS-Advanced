function getFibonator() {
    let firstNum = 0, secondNum = 1;
    return function() {
        let nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
        return firstNum;
    };
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
