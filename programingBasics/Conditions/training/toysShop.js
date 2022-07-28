function toysShop(input) {
    let priceOfTheTrip = Number(input[0]);
    let amountOfPuzzles = Number(input[1]);
    let amountOfSpeakingDolls = Number(input[2]);
    let amountOfTeddyBears = Number(input[3]);
    let amountOfMinions = Number(input[4]);
    let amountOfTrucks = Number(input[5]);

    let sum = amountOfPuzzles * 2.60 + amountOfSpeakingDolls * 3 + amountOfTeddyBears * 4.10 + amountOfMinions * 8.20 + amountOfTrucks * 2;
    let amountOfToys = amountOfPuzzles + amountOfSpeakingDolls + amountOfTeddyBears + amountOfMinions + amountOfTrucks;


    if (amountOfToys >= 50) {
        sum = sum * 0.75;
    }     

    let moneyAfterRent = sum * 0.90;

    if (moneyAfterRent >= priceOfTheTrip) {
        console.log(`Yes! ${(moneyAfterRent - priceOfTheTrip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceOfTheTrip - moneyAfterRent).toFixed(2)} lv needed.`);
    }

}
toysShop(["320",
"8",
"2",
"5",
"5",
"1"])

