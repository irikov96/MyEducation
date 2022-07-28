function summerDressing(input) {
    let temperature = Number(input[0]);
    let time = input[1];

    if (time === "Morning") {

        if (10 <= temperature && temperature <= 18) {
            console.log(`It's ${temperature} degrees, get your Sweatshirt and Sneakers.`);
        } else if (18 < temperature && temperature < 24) {
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        } else {
            console.log(`It's ${temperature} degrees, get your Sweatshirt and Sneakers.`)
        }
    } else if (time === "Afternoon") {
        if (10 <= temperature && temperature <= 18) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        } else if (18 < temperature && temperature < 24) {
            console.log(`It's ${temperature} degrees, get your T-Shirt and Sandals.`);
        } else {
            console.log(`It's ${temperature} degrees, get your Swimsuit and Barefoot.`);
        }
    } else if (time === "Evening") {
        if (10 <= temperature && temperature <= 18) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        } else if (18 <= temperature && temperature <= 24) {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        } else {
            console.log(`It's ${temperature} degrees, get your Shirt and Moccasins.`);
        }
    }
}
summerDressing(["28", "Evening"])