function subtract() {
    //render the result
    
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');

    let firstAsNum = Number(firstNumber.value);
    let secondAsNum = Number(secondNumber.value);

    let result = firstAsNum - secondAsNum;

    let resultDiv = document.getElementById('result');

    resultDiv.textContent = result;


}