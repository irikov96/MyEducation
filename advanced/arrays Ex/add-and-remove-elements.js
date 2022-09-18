// Write a JS function that adds and removes numbers to/from an array. You will receive a command which can either be "add" or "remove".
//The initial number is 1. Each input command should increase that number, regardless of what it is. 
//Upon receiving an "add" command you should add the current number to your array. Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.

function addAndRemove (array){
let resultArr = [];
let initialNumber = 0;
for(let i = 0; i < array.length; i++){
    let command = array[i];
    initialNumber++
    if(command === 'add'){
        resultArr.push(initialNumber)
    }else{
        resultArr.pop(initialNumber)
    }
}

if(resultArr.length>0){
    console.log(resultArr.join('\n'));
}else{
    console.log('Empty');
}
}
addAndRemove(['add','add','remove','add','add'])