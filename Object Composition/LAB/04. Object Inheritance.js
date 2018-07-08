function solve(commands) {

    let procesor = (function () {
        let result = {};
        function create(arr) {
            if (arr.length > 2) {
                let childName = arr[0];
                let parentName = arr[2];
                result[childName] = Object.create(result[parentName]);
            } else {
                let objName = arr[0];
                result[objName] = {};
            }
        }

        function set(arr) {
            let objName = arr[0];
            let key = arr[1];
            let val = arr[2];
            result[objName][key] = val;
        }

        function print(arr) {
            let output = [];
            let objName = arr[0];
            for (let keyObj in result[objName]) {
                output.push(keyObj + ":" + result[objName][keyObj]);
            }
            console.log(output.join(', '));
        }


        return {create, set, print};
    }());

    for (let command of commands) {
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        procesor[action](commandParameters);

    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);