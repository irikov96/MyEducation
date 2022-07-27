function invertory(input){
let jurnal = input.shift().split(', ')
let command = input.shift().split(' - ');
while(command[0] !== 'Craft!'){
    switch(command[0]){
        case 'Collect':
            if(!jurnal.includes(command[1])){
                jurnal.push(command[1])
            } else{
                command = input.shift().split(' - ')
                continue;
            }
             break;
        case 'Drop':
            if(!jurnal.includes(command[1])){
                command = input.shift().split(' - ')
                continue;
            }else{
                let indexOfDroppedItem = jurnal.indexOf(command[1])
                jurnal.splice(indexOfDroppedItem,1)
            }
        break;
        case 'Combine Items':
            let items = command[1].split(':')
            let indexOf1 = jurnal.indexOf(items[0])
            if(!jurnal.includes(items[0])){
                command = input.shift().split(' - ')
                continue;
            }else{
                jurnal.splice(indexOf1+1,0,items[1])
            }
        break;
        case 'Renew':
            let indexOfRenewItem = jurnal.indexOf(command[1])
            if(!jurnal.includes(command[1])){
                command = input.shift().split(' - ')
                continue;
            }else{
                let spliced =  jurnal.splice(indexOfRenewItem,1)
                jurnal.push(spliced)
            }

        break;  
    }
    command = input.shift().split(' - ')
}
console.log(jurnal.join(", "));
}
//invertory([
   // 'Iron, Wood, Sword', 
    //'Collect - Gold', 
    //'Drop - Wood', 
   // 'Craft!'
  
 //     ]
      
 // )
  console.log('----------------------------')

invertory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )