// function recieves int, should return true or false if number can be sqRt
function checkIf(number){
if(number < 0){
    return false;
}
let resultNumber = Math.sqrt(number);
if(Number.isInteger(resultNumber)){
    return true;
}else{
    return false;
}
}checkIf(21)