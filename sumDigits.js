function sumDigits (digit){
let digitToString = String(digit);
let sum = 0;
for(let i = 0; i<digitToString.length; i++){
    let num = Number(digitToString[i]);
    sum+=num
}
console.log(sum);
}
sumDigits(245678)