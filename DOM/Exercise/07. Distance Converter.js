function attachEventsListeners() {
    let unitsTable = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254
    };
    document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let distanceIn = Number(document.getElementById('inputDistance').value);
        let unitDistanceIn = document.getElementById('inputUnits').value;

        let toMeters = unitsTable[unitDistanceIn] * distanceIn;
        let unitDistanceOut = document.getElementById('outputUnits').value;

        let result = toMeters / unitsTable[unitDistanceOut];
        document.getElementById('outputDistance').value = result;

    }
}



