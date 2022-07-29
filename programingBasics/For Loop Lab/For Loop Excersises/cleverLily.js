function cleverLily(input) {
    let age = Number(input[0]);
    let washmachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let lostMoney = 0;
    let savedMoney = 0;
    let toysCounter = 0;
    let total = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += total
            lostMoney++;
            total += 10

        } else {
            toysCounter++
        }
    }
    let totalPriceFromToys = toysCounter * singleToyPrice;
    let totalMoneyLost = lostMoney * 1;
    let totalMoney = (totalPriceFromToys + savedMoney) - totalMoneyLost;
    let diff = Math.abs(totalMoney - washmachinePrice);
    if (totalMoney >= washmachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLily(["21",
"1570.98",
"3"])

