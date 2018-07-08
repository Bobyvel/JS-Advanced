function createRect(arr) {
    for (let i = 0; i < arr.length; i++) {
            arr[i] = {
            width : arr[i][0],
            height : arr[i][1],
                //area: () => arr[i].width * arr[i].height, //not working with this
                area : function() {return this.width * this.height},
                compareTo: function(other) {
                    let result = other.area() - this.area();
                    return result || (other.width - this.width);
                }
        }

    }

   return arr.sort((a, b) => a.compareTo(b))

}

console.log(createRect([[10, 5], [5, 12]]));