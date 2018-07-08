function reduce(arr, func) {
    let result = arr.shift();
    for (let nextElement of arr)
        result = func(result, nextElement);
    console.log(result);
}
reduce([5, 10, 20], (a,b) => a + b); // 35
reduce([5, 10, 20], (a,b) => a * b); // 1000
