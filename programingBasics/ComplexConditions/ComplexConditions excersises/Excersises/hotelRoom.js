function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceForStudio = 0;
    let priceForApartment = 0;

    if (month === "May" || month === "October") {
        priceForStudio = 50;
        priceForApartment = 65;

        if (nights > 14) {
            priceForStudio = priceForStudio * 0.70;
            priceForApartment = priceForApartment * 0.90;
        } else if (nights > 7) {
            priceForStudio = priceForStudio * 0.95;
        }
    } else if (month === "June" || month === "September") {
        priceForStudio = 75.20;
        priceForApartment = 68.70;

        if (nights > 14) {
            priceForStudio = priceForStudio * 0.80;
            priceForApartment = priceForStudio * 0.90;
        }
    } else if (month === "July" || month === "August") {
        priceForStudio = 76;
        priceForApartment = 77;

        if (nights > 14) {
            priceForApartment = priceForApartment * 0.90;
        }
    }

    console.log(`Apartment: ${(priceForApartment * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceForStudio * nights).toFixed(2)} lv.`);
}
hotelRoom(["August", "20"])
