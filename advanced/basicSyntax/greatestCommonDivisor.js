//Write a function that takes two positive numbers as input and compute the greatest common divisor.
//The input comes as two positive integer numbers.

function greatestDivisor(num1, num2){
    let divisor = 0;
    if(num1 > num2){
        for(let i = 0; i<= num2; i++){
            if(num1 % i ===0 && num2 % i ===0){
                divisor = i
            }
        }
    }else{
        for(let i = 0; i<= num1; i++){
            if(num1 % i ===0 && num2 % i ===0){
                divisor = i
            }
        }
    }
console.log(divisor);
}
greatestDivisor(2154,458)