function equalSums(arr){    
let index = 'no';
let arrL = arr.length
for (let i = 0; i < arrL; i++) {
    
    let leftSum=0;
    let rightSum =0;
    for(let l = 0; l < i; l++){
        leftSum+=arr[l];
    }
    for(let r = i+1; r < arrL; r++){
        rightSum+=arr[r];
    }
    if(leftSum===rightSum){
        index = i;
    }
       
}
console.log(index);
}
equalSums([1, 2, 3, 3])