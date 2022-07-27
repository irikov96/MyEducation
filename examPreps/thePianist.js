function thePianist(input){
    let piecesCount = Number(input.shift())
    let myObj ={};
    for(let i = 0; i < piecesCount; i++){
        let [piece, composer, key] = input[i].split("|");
        if(!myObj.hasOwnProperty(piece)){
            myObj[piece]={}
        }
        myObj[piece][0] = composer;
        myObj[piece][1] = key;
    }
    while(true){
        let command = input.shift().split("|")
        if(command[0] === 'Stop'){
            break;
        }
        switch (command[0]) {
            case 'Add':
                if(myObj.hasOwnProperty(command[1])){
                    console.log(`${command[1]} is already in the collection!`)
                    continue;
                }else{
                    myObj[command[1]] = {}
                    myObj[command[1]][0] = command[2]
                    myObj[command[1]][1] = command[3]
                    console.log(`${command[1]} by ${command[2]} in ${command[3]} added to the collection!`)
                }
                break;
        
            case 'Remove':
                if(myObj.hasOwnProperty(command[1])){
                    delete(myObj[command[1]]);
                    console.log(`Successfully removed ${command[1]}!`)
                }else{
                    console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
                    continue;
                }
                break;
            case 'ChangeKey':
                if(myObj.hasOwnProperty(command[1])){
                    myObj[command[1]][1] = command[2];
                    console.log(`Changed the key of ${command[1]} to ${command[2]}!`);
                }else{
                    console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
                }
                break;
        }
        
    }
    let toArray = Object.entries(myObj)
    for(let [piece, element] of toArray){
        console.log(`${piece} -> Composer: ${element[0]}, Key: ${element[1]}`);
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )