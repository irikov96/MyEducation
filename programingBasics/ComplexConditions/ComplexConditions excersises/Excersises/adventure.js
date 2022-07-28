function adventure(input) {
    let budget = Number(input[0]);
    let season = input[1];

    if (season === "Summer") {

        if (budget <= 100) {
            let destination = "Bulgaria";
            budget = budget * 0.30
            console.log(`Somewhere in ${destination}`)
            console.log(`Camp- ${budget.toFixed(2)}`);

        } else if (budget <= 1000) {
            let destination = "Balkans";
            budget = budget * 0.40;
            console.log(`Somewhere in ${destination}`)
            console.log(`Camp- ${budget.toFixed(2)}`);
        } else {
            let destination = "Europe";
            budget = budget * 0.90;
            console.log(`Somewhere in ${destination}`)
            console.log(`Hotel- ${budget.toFixed(2)}`);
        }
    } else if (season === "Winter") {
        if (budget <= 100) {
            let destination = "Bulgaria";
            budget = budget * 0.70
            console.log(`Somewhere in ${destination}`)
            console.log(`Hotel- ${budget.toFixed(2)}`);
        } else if (budget <= 1000) {
            let destination = "Balkans";
            budget = budget * 0.80;
            console.log(`Somewhere in ${destination}`)
            console.log(`Hotel- ${budget.toFixed(2)}`);
        } else {
            let destination = "Europe";
            budget = budget * 0.90;
            console.log(`Somewhere in ${destination}`)
            console.log(`Hotel- ${budget.toFixed(2)}`);
        }
    }
}
adventure(["75", "Winter"])