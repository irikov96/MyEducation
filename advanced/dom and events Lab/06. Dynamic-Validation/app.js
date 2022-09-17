function validate() {
    let validatorRegExp = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    
    let inputField = document.getElementById('email');
    
    

    let testFucntion = function(e){
        if(validatorRegExp.test(e.target.value)){
            e.target.removeAttribute('class');
            return;
        }

        e.target.className = 'error';
    }
    inputField.addEventListener('change', testFucntion);
}