function muOnline(string){
    let dungeon = string.split('|');
    let initialHealth = 100;
    let initialBitcoin = 0;
    let counter = 0;
    let notDead = true;
 
    for(let el of dungeon) {
        let command = el.split(' ');
 
        if(command[0] === 'potion'){
            let healing = Number(command[1]); 
            let newHp = (initialHealth + healing > 100) ? 100: initialHealth + healing; 
            console.log(`You healed for ${newHp-initialHealth} hp.`)
            initialHealth = newHp
            counter++;
 
            console.log(`Current health: ${initialHealth} hp.`)
        } else if (command[0] === 'chest'){
            counter++;
            let bitcoins = Number(command[1]);
            initialBitcoin += bitcoins;
            console.log(`You found ${bitcoins} bitcoins.`);
        }else {
            counter++
            let monster = command[0];
            let damage = Number(command[1]);
            initialHealth -= damage;
 
            if(initialHealth > 0){
                notDead = true;;
                console.log(`You slayed ${monster}.`);
 
            } else if(initialHealth <= 0){
                notDead = false;
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${counter}`);
                break;
            }
        }
    }
 
    if(notDead){
        console.log("You've made it!");
        console.log(`Bitcoins: ${initialBitcoin}`);
        console.log(`Health: ${initialHealth}`);
    } 
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")