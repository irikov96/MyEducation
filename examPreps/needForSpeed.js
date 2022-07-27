function needForSpeed(input) {
    let carsCount = Number(input.shift());
    let storage = {};
    for (let i = 0; i < carsCount; i++) {
        let line = input.shift()
        let [car, milige, fuel] = line.split("|")
        if (!storage.hasOwnProperty(car)) {
            storage[car] = {}
        }
        storage[car][0] = Number( milige);
        storage[car][1] = Number(fuel);
    }
    let line = input.shift()
    while (line !== 'Stop') {
        let token = line.split(" : ");
        let command = token[0];
        let carModel = token[1];
        switch (command) {
            case 'Drive':
                let distance = Number(token[2]);
                let fuelToBurn = Number(token[3]);
                if (storage.hasOwnProperty(carModel)) {
                    if (storage[carModel][1] >= fuelToBurn) {
                        storage[carModel][0] += distance;
                        storage[carModel][1] -= fuelToBurn;
                        console.log(`${carModel} driven for ${distance} kilometers. ${fuelToBurn} liters of fuel consumed.`);
                    } else {
                        console.log("Not enough fuel to make that ride");
                    }
                    if (storage[carModel][0] >= 100000) {
                        delete (storage[carModel]);
                        console.log(`Time to sell the ${carModel}!`);
                    }
                }
                break;
            case 'Refuel':
                let refueling = Number(token[2]);
                if (storage[carModel][1] + refueling >= 75) {
                    console.log(`${carModel} refueled with ${75 - storage[carModel][1]} liters`);
                    storage[carModel][1] = 75;
                } else {
                    storage[carModel][1]+=refueling
                    console.log(`${carModel} refueled with ${refueling} liters`);
                }
                break;
            case 'Revert':
                let miligeToRevert = Number(token[2]);
                if (storage[carModel][0] - miligeToRevert < 10000) {
                    storage[carModel][0] = 10000
                } else {
                    storage[carModel][0] -= miligeToRevert;
                    console.log(`${carModel} mileage decreased by ${miligeToRevert} kilometers`);
                }
                break;
        }
        line = input.shift()
    }
    for(let [car, value] of Object.entries(storage)){
        console.log(`${car} -> Mileage: ${value[0]} kms, Fuel in the tank: ${value[1]} lt.`)
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])