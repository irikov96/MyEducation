// Write a function that calculates how much money you need to buy fruit. 
//You will receive a string for the type of fruit you want to buy, a number for weight in grams, and another number for the price per kilogram.

function fruits(fruit, weight, pricePerKilo){
    let weightInKilo = (weight/1000);

    let finalPrice = (weightInKilo*pricePerKilo).toFixed(2);

    return `I need $${finalPrice} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`


}
fruits('orange', 2500, 1.80)