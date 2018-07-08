function processCommands(input) {
    let commandProcessor = (() => {
        let colection = [];

        return {
            add: (item) => colection.push(item),
            remove: (item) => colection = colection.filter(x => x != item),
            print: () => console.log(colection.join(','))
        };
    })();

    for (let command of input) {
        let [cmdName, arg] = command.split(' ');
        commandProcessor[cmdName](arg);
    }

}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);