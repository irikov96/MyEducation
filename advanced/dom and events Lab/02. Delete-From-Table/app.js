function deleteByEmail() {
    let emailFieldValue = document.querySelector('input[name="email"]').value;
    let emailTableData = document.querySelectorAll('tr td:nth-of-type(2)');
    

    let emaiElements = Array.from(emailTableData);
    let targetElement = emaiElements.find(y => y.textContent == emailFieldValue);

    let resultDiv = document.getElementById('result');

    if (emaiElements.includes(targetElement)){
        targetElement.parentNode.remove()
    }else{
        resultDiv.textContent = 'Not found.'
    }   
}