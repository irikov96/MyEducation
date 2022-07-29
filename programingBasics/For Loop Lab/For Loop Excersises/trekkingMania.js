function trekkingMania(input) {
    let groupsAmount = Number(input[0]);

    let peopleGoingToMusala = 0;
    let peopleGoingToMontBlanc = 0;
    let peopleGoingToKilimanjaro = 0;
    let peopleGoingToK2 = 0;
    let peopleGoingToEverest = 0;
    let group = 0;

    for (let i = 1; i < input.length; i++) {
        group = Number(input[i]);

        if (group <= 5) {
            peopleGoingToMusala += group;
        } else if (group >= 6 && group <= 12) {
            peopleGoingToMontBlanc += group;
        } else if (group >= 13 && group <= 25) {
            peopleGoingToKilimanjaro += group;
        } else if (group >= 26 && group <= 40) {
            peopleGoingToK2 += group;
        } else if (group >= 41) {
            peopleGoingToEverest += group;
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
