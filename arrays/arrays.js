function addAndSubstract(arr){
let newArr = [];
let sumArr = 0;
let sumMyArr = 0;
for(let i=0; i < arr.length; i++){
    let currNum = arr[i];
    if(currNum %2 === 0){
        sumArr+=currNum
        currNum+=i
        newArr.push(currNum)
        sumMyArr+=currNum
    }else{
        sumArr+=currNum
        currNum-=i
        newArr.push(currNum)
        sumMyArr+=currNum
    }
}
console.log(newArr);
console.log(sumArr);
console.log(sumMyArr);
}
addAndSubstract([5, 15, 23, 56, 35])