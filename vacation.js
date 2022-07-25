function vacation(peopleCount, type, day) {
    let price = 0;
    switch (type) {
        case 'Students':
            if (day === "Friday") {
                price = 8.45;
            } else if (day === "Saturday") {
                price = 9.80;
            } else if (day === "Sunday") {
                price = 10.46;
            }
            break;
        case 'Business':
            if (day === "Friday") {
                price = 10.90;
            } else if (day === "Saturday") {
                price = 15.60;
            } else if (day === "Sunday") {
                price = 16;
            }
            break;
        case 'Regular':
            if (day === "Friday") {
                price = 15;
            } else if (day === "Saturday") {
                price = 20;
            } else if (day === "Sunday") {
                price = 22.50;
            }
            break;
    }

    let totalPrice = peopleCount * price;
    if (type === 'Students' && peopleCount >= 30) {
        totalPrice = totalPrice * 0.85;
    }
    if (type === 'Business' && peopleCount >= 100) {
        peopleCount -= 10;
        totalPrice = peopleCount * price;
    }
    if (type === 'Regular' && peopleCount > 10 && peopleCount <= 20) {
        totalPrice = totalPrice * 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,

    "Regular",

    "Saturday")