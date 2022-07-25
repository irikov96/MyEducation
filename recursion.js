function solve(){
let arr = [1,2,3,4,'asd', true,[5,6,7,[8,'asd']]];
let result = [];
function itterateArray(arr){
    for(let el of arr){
        if( typeof el === "number"){
         result.push(el)
     }else if(Array.isArray(el)){
         itterateArray(el)
     }
 }
}
itterateArray(arr)
console.log(result);
}
solve()