function godzillaVsKong(input){
    
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let extrasClothing = Number(input[2]);

    let decor = budget * 0.10;
    let priceForClothing = extrasCount * extrasClothing

    if(extrasCount > 150){
         priceForClothing = priceForClothing * 0.90;
    }

    let totalMoney = decor + priceForClothing
    let diff = Math.abs(totalMoney - budget)

    if(budget >= totalMoney){
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])

