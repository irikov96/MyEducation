function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanAmount = Number(input[2]);

    let rent = 0;

    if (season === "Spring") {
        rent = 3000;

        if (fishermanAmount <= 6) {
            rent = rent * 0.90;
        } else if (fishermanAmount >= 7 && fishermanAmount <= 11) {
            rent = rent * 0.85;
        } else {
            rent = rent * 0.75;
        }
    } else if (season === "Summer" || season === "Autumn") {
        rent = 4200;

        if (fishermanAmount <= 6) {
            rent = rent * 0.90;
        } else if (fishermanAmount >= 7 && fishermanAmount <= 11) {
            rent = rent * 0.85;
        } else {
            rent = rent * 0.75;
        }
    } else {
        rent = 2600;

        if (fishermanAmount <= 6) {
            rent = rent * 0.90;
        } else if (fishermanAmount >= 7 && fishermanAmount <= 11) {
            rent = rent * 0.85;
        } else {
            rent = rent * 0.75;
        }
    }

    if (fishermanAmount % 2 === 0 && season !== "Autumn") {
        rent = rent * 0.95;
    }

    let diff = Math.abs(budget - rent)

    if (budget >= rent) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"])