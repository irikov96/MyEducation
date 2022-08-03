//recieves number, have to make it negative (the function can also recieve a negative number)
function negativeNumber(num){
    if(num < 0){
        return num*1
    }else{
        return num * (-1);
    }
}negativeNumber(-1)
//test
let thisFunc = negativeNumber(1);
console.log(thisFunc);