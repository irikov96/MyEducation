function shopping(input){
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let priceOfGPU = GPU * 250;
    let priceOfCPU = priceOfGPU * 0.35;
    let p = CPU * priceOfCPU;
    let priceOfRAM = priceOfGPU * 0.10;
    let r = priceOfRAM * RAM;
    let price = priceOfGPU + p + r;

    if(GPU > CPU){
       price = price * 0.85;
    }

    if(budget >= price){
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`)
    }
}
        shopping(["920.45",
        "3",
        "1",
        "1"])
        

    