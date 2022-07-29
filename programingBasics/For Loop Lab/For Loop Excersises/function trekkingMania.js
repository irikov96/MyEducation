function trekkingMania(input) {
    let groupsAmount = Number(input[0]);
 
    let peopleGoingToMusala = 0;
    let peopleGoingToMontBlanc = 0;
    let peopleGoingToKilimanjaro = 0;
    let peopleGoingToK2 = 0;
    let peopleGoingToEverest = 0;
    let currentAmount = 0;
 
    for (let i = 1; i < input.length; i++) {
        currentAmount = Number(input[i]);
 
        if (currentAmount <= 5) {
            peopleGoingToMusala += currentAmount;
        } else if (currentAmount >= 6 && currentAmount <= 12) {
            peopleGoingToMontBlanc += currentAmount;
        } else if (currentAmount >= 13 && currentAmount <= 25) {
            peopleGoingToKilimanjaro += currentAmount;
        } else if (currentAmount >= 26 && currentAmount <= 40) {
            peopleGoingToK2 += currentAmount;
        } else if (currentAmount >= 41) {
            peopleGoingToEverest += currentAmount;
        }
    }
    let total = peopleGoingToMusala + peopleGoingToMontBlanc +
     peopleGoingToKilimanjaro + peopleGoingToK2 + peopleGoingToEverest;
 
    console.log(`${(peopleGoingToMusala / total * 100).toFixed(2)}%`);
    console.log(`${(peopleGoingToMontBlanc / total * 100).toFixed(2)}%`);
    console.log(`${(peopleGoingToKilimanjaro / total * 100).toFixed(2)}%`);
    console.log(`${(peopleGoingToK2 / total * 100).toFixed(2)}%`);
    console.log(`${(peopleGoingToEverest / total * 100).toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
