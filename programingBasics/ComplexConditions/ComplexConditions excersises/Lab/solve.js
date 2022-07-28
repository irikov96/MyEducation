function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;

    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
        switch (fruit) {
            case "banana": totalPrice = 2.50 * quantity; break;
            case "apple": totalPrice = 1.20 * quantity; break;
            case "orange": totalPrice = 0.85 * quantity; break;
            case "grapefruit": totalPrice = 1.45 * quantity; break;
            case "kiwi": totalPrice = 2.70 * quantity; break;
            case "pineapple": totalPrice = 5.50 * quantity; break;
            case "grapes": totalPrice = 3.85 * quantity; break;
            default: console.log("error"); break;
        }
    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        switch (fruit) {
            case "banana": totalPrice = 2.70 * quantity; break;
            case "apple": totalPrice = 1.25 * quantity; break;
            case "orange": totalPrice = 0.90 * quantity; break;
            case "grapefruit": totalPrice = 1.60 * quantity; break;
            case "kiwi": totalPrice = 3.00 * quantity; break;
            case "pineapple": totalPrice = 5.60 * quantity; break;
            case "grapes": totalPrice = 4.20 * quantity; break;
            default: console.log("error"); break;
        }
    } 
    console.log(totalPrice.toFixed(2))
}
fruitShop(["tomato", "Tuesday", "2"])