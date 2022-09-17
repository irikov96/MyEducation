// this func focuses the div section on clicking the input field of a div

function focused() {
    let inputFields = document.querySelectorAll('div input[type="text"]');
    for (let field of inputFields){
        let mouseOverDiv = function(e){
            field.parentNode.classList.add('focused');
        };
        let mouseOutOfDiv = function(e){
            field.parentNode.classList.remove('focused');
        } ;
    field.addEventListener('focus', mouseOverDiv);
    field.addEventListener('blur', mouseOutOfDiv);

    }
}