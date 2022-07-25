function tresureHunt(arr){
let state = arr.shift().split("|")
let index = 0;
let command = arr[index];
index++
while(command !== "Yohoho!"){
    let tokens = command.split(' ');
    let operation = tokens.shift(' ');
    if(operation === "Loot"){
        for( let el of tokens){
            if(!state.includes(el)){
                state.unshift(el)
            }
        }
    }else if(operation==='Drop'){
        let i = Number(tokens[0])
        arr.push(arr.splice(i,1))

    }else if (operation === 'Steal'){

    }
    command = arr[index]
    index++
}
console.log(arr);
}
tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 3",

"Yohoho!"])