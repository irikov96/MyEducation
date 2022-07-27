function experienceGaining(array){
    let experienceNeeded = array.shift()
    let battlesAmount = array.shift()
    let currentExp = 0;
    let counter = 0;
    let isReady = false;
    for (let i = 0; i<array.length; i++){
        currentExp = array[i];
        counter ++
        if(counter % 3 === 0){
            currentExp += currentExp*0.15
        }
        if (counter % 5 === 0){
            currentExp-= currentExp*0.10
        }
        if (counter % 15 === 0){
            currentExp+= currentExp*0.5
        }
        experienceNeeded-=currentExp
        if(experienceNeeded <=0){
           isReady = true;
            break;
        }
    }
    if(isReady){
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    }else{
        console.log(`Player was not able to collect the needed experience, ${(experienceNeeded.toFixed(2))} more needed.`);
    }
}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30])
