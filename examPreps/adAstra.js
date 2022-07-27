function adAstra(input) {
    let regEx = /([#|])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm
    let sumCalories = 0;
    let text = input.shift()
    let valid = regEx.exec(text)
    let array = [];
    while (valid) {
        let name = valid.groups['name'];
        let date = valid.groups['date'];
        let calories = Number(valid.groups['calories']);
        array.push({ item: name, bestBefore: date, nutrition: calories });

        sumCalories += calories;
        valid = regEx.exec(text);
    }
    let daysNotHungry = sumCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(daysNotHungry)} days!`);
    for (let element of array) {
        console.log(`Item: ${element.item}, Best before: ${element.bestBefore}, Nutrition: ${element.nutrition}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)