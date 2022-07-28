function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    let amountOfDays = days - 1;
    let totalPrice = 0;

    if (type === 'room for one person') {

        totalPrice = amountOfDays * 18;

        if (grade === 'positive') {
            totalPrice = totalPrice * 1.25;
        } else if (grade === 'negative') {
            totalPrice = totalPrice * 0.90;
        }

    } else if (type === 'apartment') {
        totalPrice = amountOfDays * 25;

        if (days < 10) {
            totalPrice = totalPrice * 0.70;
        } else if (days >= 10 && days <= 15) {
            totalPrice = totalPrice * 0.65;
        } else if (days > 15) {
            totalPrice = totalPrice * 0.50;
        }

        if (grade === 'positive') {
            totalPrice = totalPrice * 1.25;
        } else if (grade === 'negative') {
            totalPrice = totalPrice * 0.90;
        }

    } else if (type === 'president apartment') {
        totalPrice = amountOfDays * 35;

        if (days < 10) {
            totalPrice = totalPrice * 0.90;
        } else if (days >= 10 && days <= 15) {
            totalPrice = totalPrice * 0.85;
        } else if (days > 15) {
            totalPrice = totalPrice * 0.80;
        }

        if (grade === 'positive') {
            totalPrice = totalPrice * 1.25;
        } else if (grade === 'negative') {
            totalPrice = totalPrice * 0.90;
        }
    }
    console.log(totalPrice.toFixed(2))
}
skiTrip(["2",
    "apartment",
    "positive"])
