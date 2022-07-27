function muOnline(dungeons){
let levels = dungeons.split('|')
let hp = 100;
let bitcoins = 0;
let counter = 0
for(let level of levels){
    let current = level.split(" ")
    if(current[0]==='potion'){
       let addHp = Number(current[1])
       let newHp = (hp+addHp > 100) ? 100 : hp+addHp; 
        console.log(`You healed for ${newHp-hp} hp.`)
        hp = newHp
        counter++
        console.log(`Current health: ${hp} hp.`);
    }else if (current[0] === 'chest'){
        bitcoins += Number(current[1])
        counter++
        console.log(`You found ${Number(current[1])} bitcoins.`);
    }else{
        hp-= Number(current[1])
        counter++
        if(hp > 0){
            console.log(`You slayed ${current[0]}.`);
        }else{
            console.log(`You died! Killed by ${current[0]}.`);
            console.log(`Best room: ${counter}`);
            break;
        }
    }
}
if ( hp > 0){
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${hp}`);
}
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")