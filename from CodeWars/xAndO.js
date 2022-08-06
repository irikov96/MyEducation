// function recieves string of X and O. Should be case insensitive. Returns true if X-amount = O - amount;
function xANdO(str){
let toLowerCase = str.toLowerCase()
let toArray = toLowerCase.split("");
let countX = 0;
let countO = 0;
for(let element of toArray){
    if(element === 'x'){
        countX++
    }else if(element === 'o'){
        countO ++
    }
}
if(countX === countO){
    return true;
}else{
    return false;
}
}xANdO("ooxXm")