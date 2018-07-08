function factory(orderCar) {

    let engines = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    };

    let carriages = {hatchback: { type: 'hatchback', color: '' },
    coupe: { type: 'coupe', color: '' }
};

    let car = {};
    car.model = orderCar.model;

//search inner object value
    for (let engine in engines) {
        let curentEngin = engines[engine].power;
        let needPowerEngine = orderCar.power;
        if (curentEngin >= needPowerEngine){
            car.engine = engines[engine];
            break;
        }
    }
//search inner object name == value
    for (let carriage in carriages) {
        let needetCarriage = orderCar.carriage;
        if (carriage === needetCarriage){
            carriages[carriage].color = orderCar.color;
            car.carriage = carriages[carriage];
            break;
        }
    }

    let wheels = [];
    let size = orderCar.wheelsize;
        size = size % 2 === 0 ? size-1 : size;
    for (let i = 0; i < 4; i++) {
        wheels.push(size);
    }
    car.wheels = wheels;


    return car;
}

console.log(factory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(factory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));