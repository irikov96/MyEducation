function spaceTravel(array){
    let command = array.shift().split("||")
    let staringFuel = Number(array.shift());
    let startingAmmo = Number(array.shift());
    let token = command.shift().split(" ")
    while(token[0] !== 'Titan'){
        switch(token[0]){
            case 'Travel':
                staringFuel -= Number(token[1])
                if(staringFuel >= 0){
                    console.log(`The spaceship travelled ${Number(token[1])} light-years.`);
                }else if (staringFuel <= 0){
                    console.log(`Mission failed.`);
                   return;
                }
                break;
            case 'Enemy':
                if(startingAmmo >= Number(token[1])){
                    startingAmmo -= Number(token[1])
                    console.log(`An enemy with ${Number(token[1])} armour is defeated.`);
                }else if (startingAmmo < Number(token[1])) {
                    staringFuel -= Number(token[1]) * 2;
                    if (staringFuel < 0) {
                      console.log(`Mission failed.`);
                      return;
                    }
                    console.log(`An enemy with ${Number(token[1])} armour is outmaneuvered.`);
                }
                break;
            case 'Repair':
                staringFuel += Number(token[1]);
                startingAmmo += (Number(token[1])*2)
                console.log(`Ammunitions added: ${(Number(token[1])*2)}.`);
                console.log(`Fuel added: ${Number(token[1])}.`);
                break;  
        }
        token = command.shift().split(" ")
    
    }
    if(staringFuel >= 0){
        console.log(`You have reached Titan, all passengers are safe.`);
    }
}
spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan',
    50,
    80])
