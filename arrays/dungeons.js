function dungeons(arr){
let dungeons = arr[0].split("|")
let startHP = 100;
let startGold = 0;
let rooms=0;
    for( let i =0; i < dungeons.length; i++){
        let dungeon = dungeons[i];
        dungeon = dungeon.split(' ');

        if (dungeon[0] === "potion") {
            if(startHP < 100){
                if(startHP+Number(dungeon[1]) > 100){
                    console.log(`You healed for ${100 - startHP} hp.`);
                }else{
                    console.log(`You healed for ${Number(dungeon[1])} hp.`);
                }
                startHP+=Number(dungeon[1]);             
                }
            if(startHP>100){
                startHP=100
            }
            rooms++
            console.log(`Current health: ${startHP} hp.`);
        }else if(dungeon[0]==="chest"){
            startGold+=Number(dungeon[1]);
            console.log(`You found ${Number(dungeon[1])} coins.`);
            rooms++
        }else{
            startHP-=Number(dungeon[1]);
            if (startHP>0) {
                console.log(`You slayed ${dungeon[0]}.`);
                rooms++
            } else {
                rooms++
                console.log(`You died! Killed by ${dungeon[0]}.`);
                console.log(`Best room: ${rooms}`);
                break;                
            }
        }
        
    }
    if(startHP>0){
            console.log("You've made it!");
            console.log( `Bitcoins: ${startGold}`);
            console.log(`Health: ${startHP}`);
        }
}
dungeons(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
/*
function darkDungeon(input) {
    let health = 100;
    let coins = 0;
    let rooms = input[0];
    rooms = rooms.split("|");
 
    for (let i = 0; i < rooms.length; i++) {
        let level = rooms[i];
        level = level.split(" ");
        if (level[0] === "potion") {
            if (health < 100) {
                if(health + Number(level[1]) > 100){
                    console.log(`You healed for ${100 - health} hp.`)
                } else {
                    console.log(`You healed for ${Number(level[1])} hp.`)
                }
                health += Number(level[1]);
                if (health > 100) {
                    health = 100;
                } 
                console.log(`Current health: ${health} hp.`)
            }
        } else if(level[0] === "chest"){
            coins += Number(level[1]);
            console.log(`You found ${Number(level[1])} coins.`)
        } else {
            health -= Number(level[1]);
            if(health <= 0){
               return console.log(`You died! Killed by ${level[0]}.\nBest room: ${i+1}`)
            } else {
                console.log(`You slayed ${level[0]}.`)
            }
        }
    }
    console.log(`You've made it!`)
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${health}`)
}
darkDungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
*/