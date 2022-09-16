/*
Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
*/
function sameNum(number) {
    let isSame = true
    let numberAsString = number.toString();
    let firstDigit = numberAsString[0];
    let sum = Number(firstDigit);
    for (let i = 1; i < numberAsString.length; i++) {
        if (numberAsString[i] !== firstDigit) {
            isSame = false;
        }
        sum += Number(numberAsString[i]);
    }

    console.log(isSame);
    console.log(sum);

}
sameNum(2222)