function houseParty(arr){
    let result = []
    for(let el of arr){
    let command = el.split(' ')
    let name = command[0];
        if (command.length === 3){
            if(result.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                result.push(name);
            }
        }else{
            if(result.includes(name)){
                let index = result.indexOf(name)
                result.splice(index,1)
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(result.join('\n'))
    }
    houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
    )