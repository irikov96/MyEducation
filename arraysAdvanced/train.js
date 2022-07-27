function train(arr){
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = arr.shift( )
    for(let i = 0; i < arr.length; i++){
        let command = arr[i].split(' ');
        let currentValues = Number(command[1])
        let newValues = Number(command[0])
        if(command[0] === 'Add'){
            wagons.push(currentValues);
        }else{
            for(let j = 0; j < wagons.length; j++){
                if(newValues + wagons[j]<= maxCapacity){
                    wagons[j]+=newValues;
                    break;
                }
                
            }
        }
    }
    console.log(wagons.join(" "));
    }
    train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
    )