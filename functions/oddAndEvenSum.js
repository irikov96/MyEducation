function oddAndEvenSum(numer){
 let numerToString = numer.toString()
 let even = 0;
 let odd = 0;
 for(let el of numerToString){
     let current = Number(el);
     if(current%2===0){
         even+=current
     }else{
         odd+=current
     }
 }
 console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435)