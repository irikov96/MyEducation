function theLift(arr){
    let turists = Number(arr.shift())
    let spaces = arr.toString().split(' ')
    let busyPlaces = 0;
    let wagons = [];
    for(let i = 0; i < spaces.length ; i++){
        busyPlaces = Number(spaces[i]);
        let busyPlaces2 = Number(spaces[i]);
        busyPlaces += turists
        
        if(busyPlaces > 4){
          busyPlaces = 4 - busyPlaces2 ;
        }
        turists-=busyPlaces
        if(busyPlaces < 4 && turists > 4){
            busyPlaces = 4
        };
        wagons.push(busyPlaces);   
        if(turists === 0){
            break
        }
    }
    if(busyPlaces === 4 & turists === 0){
        console.log(wagons.join(' '));
    }else if(busyPlaces !== 4 & turists === 0 ){
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(' '));
    }else{
        console.log(`There isn't enough space! ${turists} people in a queue!`);
        console.log(wagons.join(' '));
    }
    }
    theLift(["15","0 0 0 0 0"])