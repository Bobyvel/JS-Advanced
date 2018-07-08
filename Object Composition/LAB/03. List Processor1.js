function processCommands(input) {
    let commandProcessor = (() => {
        let colection = [];

        function add(item) {
            colection.push(item)
        }

        function remove(item) {
            colection = colection.filter(x => x != item)
        }

        function print() {
            console.log(colection.join(','))
        }
        return {add, remove, print};
    })();

    for (let element of input) {
        let [command, value] = element.split(' ');
        commandProcessor[command](value);
    }

}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);