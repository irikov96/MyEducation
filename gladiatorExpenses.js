function gladiatorExpenses(lCount, helmsPrice, sPrice, shPrice, armPrice){
let sum = 0;
for(let i = 1; i <= lCount; i++){
    if(i % 2 === 0){
        sum+= helmsPrice;
    }
    if(i % 3 ===0){
        sum+= sPrice
    }
    if(i % 2===0 && i % 3 === 0){
        sum+= shPrice
    }
    if(i%12===0){
        sum+=armPrice
    }
}
console.log(`Gladiator expenses: ${(sum).toFixed(2)} aureus`);
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    
    )