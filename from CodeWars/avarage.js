// recieves array of numbers, should calculate the average sum;
function average(array){
if(array.length !== 0){
    let sum = 0
    for(let element of array){
        sum+=element
    }
    return sum/array.length
}else{
    return 0;
}
}

let print = average([1,2,3,4,5,6]);
console.log(print);