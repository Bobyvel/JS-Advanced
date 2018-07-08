function maxElement(arr) {
   return Math.max.apply(null, arr);
    //return Math.max(...arr);
}

console.log(maxElement([1, 5, -1]));