(function () {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();

    };
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();

    };
    String.prototype.isEmpty = function () {
        return this.localeCompare("") == 0;
    };
    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex != -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    };

    String.format = function (str, ...params) {

        for (let i = 1; i < arguments.length; i++)
            str = str.replace('{' + (i - 1) + '}', arguments[i]);
        return str;
    }


})();

let str = 'my string';
//let str = '';
console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.ensureEnd('string'));
console.log(str = str.ensureEnd(' my'));
//console.log(str = str.isEmpty());
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
    'dog'));
