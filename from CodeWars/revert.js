// recieves array of numbers, returns reverted array //NO SORT CONDITION!
function revert(array){
    let filtered = array.map(n => n*-1);
return filtered;
}
let print = revert([1,2,3,-1,-5])
console.log(print);